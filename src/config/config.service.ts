import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

@Injectable()
export class ConfigService {
  private executeCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  public createConfig(user: string): Promise<any> {
    const privateKeyPath = `${process.env.PRIVATE_KEY_PATH}\\${user}.key`;
    const issuedPath = `${process.env.ISSUED_PATH}\\${user}.crt`;
    const currentPath = process.cwd();

    return this.executeCommand(
      `powershell ${currentPath}/script/create-user.ps1 ${user}`,
    )
      .then(() => {
        return readFileAsync(privateKeyPath, 'utf8');
      })
      .then((privateKey) => {
        return readFileAsync(issuedPath, 'utf8').then((issued) => {
          return {
            privateKey: privateKey,
            issued: issued,
          };
        });
      })
      .then((result) => {
        return {
          status: 'success',
          ...result,
        };
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
