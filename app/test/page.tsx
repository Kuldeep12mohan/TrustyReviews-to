"use client";
import React, { useState, ChangeEvent } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8pOVeWOZ4yWnM4tqLAgjWKR0oWOl3ejA',
  authDomain: 'basic-pdf-app.firebaseapp.com',
  projectId: 'basic-pdf-app',
  storageBucket: 'basic-pdf-app.appspot.com',
  messagingSenderId: '315032280601',
  appId: '1:315032280601:web:08d6d042fd182cf9b5d488',
  measurementId: 'G-9Q03DNZ731'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    setUploading(true);

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Update progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Error uploading file:', error);
        alert('Error uploading file');
        setUploading(false);
      },
      () => {
        // Handle successful uploads
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setUploadedUrl(downloadURL);
          alert('File uploaded successfully');
          setUploading(false);
        });
      }
    );
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={uploading}>
          {uploading ? `Uploading... ${progress.toFixed(2)}%` : 'Upload File'}
        </button>
      </form>
      {uploadedUrl && (
        <div>
          <h2>Uploaded File:</h2>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            View File
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
