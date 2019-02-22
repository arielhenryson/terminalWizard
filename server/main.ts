const { ipcMain } = require('electron')
import * as os from 'os'
import * as pty from 'node-pty'


const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL']

const ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.cwd(),
  env: process.env
})


ptyProcess.on('data', data => {
  process.stdout.write(data)
  ipcMain.emit('cmd-reply', data)
})

export function server(win) {
  ipcMain.on('cmd', (event, command) => {
    const { commandName, args } = parseCommand(command)


    ptyProcess.write(`${commandName} ${args}`)
  })
}


function parseCommand(command) {
  const commandParts = command.split(' ')
  const commandName = commandParts[0]
  const args = commandParts.slice(1, commandParts.length)

  return { commandName, args }
}
