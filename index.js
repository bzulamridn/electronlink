const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL('http://pkmsambas.sambas.go.id/app_pendaftaran/')
}
//app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow)