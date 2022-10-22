import React from 'react';
import ReactS3, { uploadFile } from 'react-s3';
import theKeys from '../../../.keys';

const config = {
  bucketName: 'bucketeer-0fcbcf8b-2b04-4ddb-ac9d-29c05b9d4990',
  region: 'us-east-1',
  accessKeyId: theKeys.accessKeyId,
  secretAccessKey: theKeys.secretAccessKey,
};

function upload(e) {
  console.log(e.target.files[0]);
  uploadFile(e.target.files[0], config)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      alert(err);
    });
}

function RenderUpload(props) {
  return (
    <div>
      <h1>Upload Files Here</h1>
      <div>
        <input type="file" onChange={upload} />
      </div>
    </div>
  );
}
export default RenderUpload;
