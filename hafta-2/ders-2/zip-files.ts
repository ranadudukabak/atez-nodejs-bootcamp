import * as fs from 'fs';
import * as archiver from 'archiver';

function zipFiles(sourcePath: string, destinationPath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const output = fs.createWriteStream(destinationPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve());
    output.on('end', () => resolve());
    archive.on('warning', (err) => console.warn(err));
    archive.on('error', (err) => reject(err));

    archive.pipe(output);
    archive.glob(`${sourcePath}/**/*`, { nodir: true });
    archive.finalize();
  });
}

zipFiles('./myFolder', './myZipFile.zip')
  .then(() => console.log('Zip dosyası başarıyla oluşturuldu.'))
  .catch((err) => console.error('Zip hatası:', err));

