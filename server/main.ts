const { ipcMain } = require('electron')
import * as os from 'os'
import * as pty from 'node-pty'


const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

const ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
})


export function server(win) {
  ptyProcess.on('data', data => {
    // process.stdout.write(data)
    // ipcMain.emit('cmd-reply', data)
    win.send('cmd-reply', data)
  })


  ipcMain.on('cmd', (event, command) => {
    ptyProcess.write(command)
  })
}


function parseCommand(command) {
  const commandParts = command.split(' ')
  const commandName = commandParts[0]
  const args = commandParts.slice(1, commandParts.length)

  return { commandName, args }
}
