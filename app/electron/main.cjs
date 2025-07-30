const { app, BrowserWindow } = require('electron');
const path = require('path');
const { execFile } = require('child_process');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Run sync script first
  const syncScript = path.join(process.env.HOME, 'Documents/Dev/git-auto-sync.command');

  execFile(syncScript, (error, stdout) => {
    if (error || !stdout.includes('SAFE TO WORK')) {
      win.loadFile(path.join(__dirname, 'sync-error.html'));
      return;
    }
    win.loadURL('http://localhost:5173');
  });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
