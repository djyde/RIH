const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600, titleBarStyle: 'hidden', webSecurity: false })

  // win.loadURL(process.env.NODE_ENV === 'prod' ? `file://${__dirname}/index.html` : 'http://localhost:8080/')

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
