import React from 'react';
import { getSignedURL } from '../../../api/index';

function upload(e) {
  e.preventDefault();
  getSignedURL()
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  console.log(e.target.files[0]);
  console.log(Date.now());
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
