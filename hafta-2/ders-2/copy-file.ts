import * as fs from 'fs';

function copyFile(sourceFilePath: string, destFilePath: string): void {
  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destFilePath);

  readStream.on('error', (err) => console.error('Okuma hatası:', err));
  writeStream.on('error', (err) => console.error('Yazma hatası:', err));

  readStream.pipe(writeStream);
}

copyFile('./myFile.txt', './myFileCopy.txt');
