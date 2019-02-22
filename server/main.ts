const { ipcMain } = require('electron')


export function server(win) {
  ipcMain.on('cmd', (event, cmd) => {
    event.sender.send('cmd-reply', 'Not connect to terminal yet')
  })
}
