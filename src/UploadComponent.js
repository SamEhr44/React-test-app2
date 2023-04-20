import React, { useState } from 'react';
import Dropzone from 'react-dropzone';



function FileUploader()  {
    const [files, setFiles] = useState([]);
  
    function onDrop(acceptedFiles) {
      const formData = new FormData();
      acceptedFiles.forEach(file => {
        formData.append('file', file, file.name);
      });
      fetch('https://apim-arkra-test.azure-api.net/api/v1/users/identity/verify', {
      method: 'POST',
      headers: {
        'X-Version': '1.0'
      },
      body: formData
        })
        .then(response => {
          // handle response
          console.log(response)
        })
        .catch(error => {
          // handle error
        });
      setFiles([...files, ...acceptedFiles]);
    }
  
    return (
      <div>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <ul>
          {files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default FileUploader;
