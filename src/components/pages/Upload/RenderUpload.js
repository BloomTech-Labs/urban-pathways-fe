import React from 'react';

function upload(e) {
  e.preventDefault();
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
