'use client';

import React, { useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Sending file to the backend
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadMessage('File uploaded successfully.');

      // Assuming the backend analyzes the data and returns results
      const analysisResponse = await axios.get('/api/analyze', {
        params: { filename: file.name }, // Send filename or other identifiers if necessary
      });

      setAnalysisResult(analysisResponse.data); // Set the result for rendering
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadMessage('Failed to upload file.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-blue-50 bg-no-repeat bg-cover">
      <div className="flex flex-grow">
        <div className="flex-1 p-10">
          <div className="mx-auto flex flex-col justify-center px-5 pt-0 sm:max-w-lg w-full bg-white rounded-xl shadow-2xl">
            <h2 className="mt-5 text-3xl font-bold text-gray-900 text-center">File Upload!</h2>
            <p className="mt-2 text-sm text-gray-400 text-center">Upload your ESG data file.</p>
            <form className="mt-8 space-y-3" onSubmit={handleUpload}>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                        <img
                          className="has-mask h-36 object-center"
                          src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                          alt="upload illustration"
                        />
                      </div>
                      <p className="pointer-none text-gray-500">
                        <span className="text-sm">Drag and drop</span> files here <br />
                        or <a href="#" className="text-blue-600 hover:underline">select a file</a> from your computer
                      </p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-300"><span>File type: doc, pdf, types of images</span></p>
              <div>
                <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Upload
                </button>
              </div>
              {uploadMessage && <p className="text-center text-gray-600">{uploadMessage}</p>}
            </form>
            {analysisResult && (
              <div className="mt-5">
                <h3 className="text-lg font-bold">Analysis Result:</h3>
                <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(analysisResult, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
