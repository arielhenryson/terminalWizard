const { ipcMain } = require('electron')
const { exec } = require('child_process')


export function server(win) {
  ipcMain.on('cmd', (event, cmd) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return
      }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)

      // event.sender.send('cmd-reply', 'Not connect to terminal yet')
      event.sender.send('cmd-reply', stdout)
    })
  })
}
