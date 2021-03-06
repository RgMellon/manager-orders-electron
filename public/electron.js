const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const appFolder = path.dirname(process.execPath);

const exeName = path.basename(process.execPath);

function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.resolve(__dirname, 'src', 'assets', 'icon.png'),
    // frame: false,
  });

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // win.setMenu(null);
  // win.removeMenu();
  // Menu.setApplicationMenu(null);
  win.setMenuBarVisibility(false);

  // Open the DevTools.
  // win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.setLoginItemSettings({
  openAtLogin: true,
  path: process.execPath,
  // eslint-disable-next-line no-template-curly-in-string
  args: ['--processStart', `${exeName}`, '--process-start-args', '--hidden'],
});

Menu.setApplicationMenu(false);
// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
