const { contextBridge, execFile } = require('electron');
const { execFile: runFile } = require('child_process');
const path = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  runSync: () =>
    new Promise((resolve, reject) => {
      const syncScript = path.join(process.env.HOME, 'Documents/Dev/git-auto-sync.command');
      runFile(syncScript, (error, stdout) => {
        if (error) reject(error);
        else resolve(stdout);
      });
    })
});
