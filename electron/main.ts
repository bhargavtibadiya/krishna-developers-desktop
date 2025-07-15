import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const isDev = !app.isPackaged;

// ✅ Auto-reload for ESM-compatible setup
if (isDev) {
  const electronReload = require('electron-reload');
  electronReload(__dirname, {
    electron: join(__dirname, '..', 'node_modules', '.bin', 'electron'),
    forceHardReset: true,
    hardResetMethod: 'exit'
  });
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:5173'
      : `file://${join(__dirname, '../dist/index.html')}`
  );

  if (isDev) win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
