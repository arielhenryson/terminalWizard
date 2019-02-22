const { ipcMain } = require('electron')
const spawn = require('child_process').spawn


export function server(win) {
  ipcMain.on('cmd', (event, command) => {
    const { commandName, args } = parseCommand(command)


    const childProcess = spawn(commandName, args, {
      shell: this.shell
    })

    childProcess.stdout.on('data', data => event.sender.send('cmd-reply', data.toString()))
    childProcess.stderr.on('data', data => event.sender.send('cmd-reply', data.toString()))
    // childProcess.on('close', exitCode => this.emit('end', exitCode.toString()));
  })
}


function parseCommand(command) {
  const commandParts = command.split(' ')
  const commandName = commandParts[0]
  const args = commandParts.slice(1, commandParts.length)

  return { commandName, args }
}
