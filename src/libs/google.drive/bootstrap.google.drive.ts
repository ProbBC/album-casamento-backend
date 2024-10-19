import { drive_v3, google } from 'googleapis';

export let driveService: drive_v3.Drive;

export const bootstrapGoogleDrive = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: './album-casamento.json',
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  driveService = await google.drive({
    version: 'v3',
    auth,
  });

  console.log(`Google Drive successfully connected`);
};
