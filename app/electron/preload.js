const { contextBridge } = require('electron');
const { execFile } = require('child_process');
const path = require('path');

contextBridge.exposeInMainWorld('electronAPI', {
  runSync: () =>
    new Promise((resolve, reject) => {
      const syncScript = path.join(process.env.HOME, 'Documents/Dev/git-auto-sync.command');
      execFile(syncScript, (error, stdout) => {
        if (error) {
          reject('SYNC FAILED');
        } else {
          // Clean up output: remove color codes, newlines, extra spaces
          const cleanOutput = stdout.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '').trim();
          if (cleanOutput.includes('SAFE TO WORK')) {
            resolve('SAFE TO WORK');
          } else {
            resolve('SYNC FAILED');
          }
        }
      });
    })
});
