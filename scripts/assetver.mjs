// Content-hash version query for /assets/ URLs. vercel.json caches /assets/*
// immutably for a year, so every local css/js reference must carry ?v=<hash>
// or returning visitors keep stale assets with fresh HTML.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const cache=new Map();
export function ver(rel){
  if(!cache.has(rel)){
    let h='dev';
    try{h=crypto.createHash('md5').update(fs.readFileSync(path.join(root,rel))).digest('hex').slice(0,10)}catch{}
    cache.set(rel,'?v='+h);
  }
  return cache.get(rel);
}
