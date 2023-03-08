import * as fs from 'fs';

function writeSentenceToFile(sentence: string, filePath: string): void {
  const lineBreak = '\n';
  const contentToWrite = `${sentence}${lineBreak}`;

  fs.appendFileSync(filePath, contentToWrite);
}

writeSentenceToFile('Merhaba Dünya!', './myFile.txt');

