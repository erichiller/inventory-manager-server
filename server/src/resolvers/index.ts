import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as shortid from 'shortid';
import uint8_resolver from '../schema/type_uint8'
import {uint8} from '../schema/type_uint8'
import {print as printLabel} from '../lib/epson';

export default {
  uint8: uint8_resolver,
  Mutation: {
    async uploadFiles(obj: any, { files }: any) {
      try {
        // load files to fs
        const uploadedFiles = await Promise.all(
          files.map(async (uploadPromise: any) => saveFile(await uploadPromise, 'public'))
        );
        // return filename and path to file
        return uploadedFiles;
      } catch (e) {
        console.log('error', e);
        throw new Error('upload:fileNotLoaded');
      }
    },
    putLabelMonochromeBuffer(obj: any, { imageBuffer }: {
      // __typename: "LabelMonochromeBuffer",
      imageBuffer: uint8[][][]
    }){
      console.log("received imageBuffer", imageBuffer, "\n received ", new Date().toISOString() );
      printLabel( imageBuffer );
      return {
        // __typename: "LabelMonochromeBuffer",
        imageBuffer: imageBuffer,
      };
    }
  }
};


const saveFile = (uploadFileStream: any, location: string): Promise<any> => {
  const { createReadStream, filename, mimetype } = uploadFileStream;
  const stream = createReadStream();
  const id = `${shortid.generate()}-`;
  const sanitizedFilename = filename.replace(/[^a-z0-9_.\-]/gi, '_').toLowerCase();
  const path = `${location}/${id}${sanitizedFilename}`;

  // Check if UPLOAD_DIR exists, create one if not
  if (!fs.existsSync(location)) {
    mkdirp.sync(location);
  }

  return new Promise((resolve, reject) =>
    stream
      .on('error', async (error: Error) => {
        if (stream.truncated) {
          // Delete the truncated file
          await stream.delete(path);
        }

        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on('error', (error: Error) => reject(error))
      .on('finish', async () => {
        resolve({ path, name: filename, type: mimetype });
      })
  );
}
