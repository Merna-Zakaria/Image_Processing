import {promises as fsPromises} from 'fs';   // or import {promises as fs} from fs;
import { Buffer } from 'buffer';

// File System Flags
// File System Flags are used for identifying read/write operations available when opening a file.

// r - allows for the reading of a file
// r+ - allows for the reading and writing of a file, will overwrite content in the file
// w+ - allows for the reading and writing of a file, will create a file if it does not yet exist
// a - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
// a+ - allows for reading and writing of a file, will create a file if it does not yet exist, and will append new content to the end of the file, not overwriting current content

// Writing to a File
// .open() - Used to open a file. Takes a filename and flag as arguments.
const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', 'a+');
}
// .write() - Used to write to a file that is already open. Takes data, and options as arguments.
const writeData1 = async () => {
  const myFile = await fsPromises.open('myfile.txt', 'a+');
  await myFile.write('add text');
}
// .writeFile() - Used to write to a file, overwriting any content that may already exist in the file. Takes a filename, data, and options as arguments.
const writeData2 = async () => {
  const myFile = await fsPromises.writeFile('myfile.txt', 'add text');
}
//read file
// .read() - Used to read a file. The file must be opened first. Allows for reading only a portion of a file, but requires the creation of a buffer to do so. Takes a buffer and options as arguments.
const readData = async () => {
  const buff =  Buffer.alloc(26);
  const myFile = await fsPromises.open('myfile.txt', 'a+');
  await myFile.read(buff, 0, 26);
  console.log(myFile);
}
// .readFile() - Used to read the entire contents of a file. Takes a path and options as arguments. Is the preferred method for reading files when the entire content needs to be read.
const readData1 = async () => {
  const myFile = await fsPromises.readFile('myfile.txt', 'utf-8');
  console.log(myFile);
}
// .rename() - Used to rename or move a file. Takes the old file path and new file path as arguments.
const moveData2 = async () => {
  await fsPromises.rename('old-name.txt', 'new-name.txt');
}
// .mkdir() - Used to make new directories. Takes a directory path as an argument.
const makeDir3 = async () => {
  await fsPromises.mkdir('src');
}
// .unlink() - Used to remove a file. Takes a file path as an argument.
const removeFile = async () => {
  await fsPromises.unlink('myFile.txt');
}
// .rmdir() - Used to remove an empty directory. Takes a directory path as an argument.
const removeFile1 = async () => {
  await fsPromises.rmdir('src');
}