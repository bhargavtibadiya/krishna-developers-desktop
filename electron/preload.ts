import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // define secure APIs
});
