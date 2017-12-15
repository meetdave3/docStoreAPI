# RESTful DocStoreAPI Documentation

## Overview

This repo consists of a standalone Node.js RestfulAPI to store your documents on your own remote server. The APIs can serve documents such as PDF, PNG, SVG, JPG & JPEG to your application. 

Please email meet@daveinside.com for feature requests or if you find any bugs or just to say hi.

## URI & Versioning 

I hope to improve API over time by adding more file versions, securing the API endpoints, Adding HTTPS, Limiting upload document size, downloading docs from other servers, scalability & maintaining the code overlooking the ease of requirements & usage. 

## Usage 

Make sure to have Node.js running on the system.

Run `npm install`

Once the process is complete,

Run `node server`

You will have the API Running. 

To test, navigate to `http://localhost:3004/` on your browser.

## Current API Enpoints

Base URL: `http://localhost:3004`

URL | Method | Description
------|-----|------------
/ | GET | Serves a HTML File to Upload Image using form. (To test out the API)
/upload | POST | Requires a document to be uploaded (Supported: PDF, PNG, SVG, JPEG & JPG)
/uploads/:filename | GET | Provide the required filename in the URL access the document. Example `http://localhost:3004/uploads/youtube.svg` will serve the SVG file

## Server Response

The responses are mostly self explanatory. 

URL | Method | Response | Description
------|-----|--------|------------------------
/upload | POST | `empty` | No file was uploaded 
/upload | POST | `filenameexists` | A file of similar name already exists on server.
/upload | POST | `http://urlname.com/uploads/:filename.extension` | Upload is successful, The response is the URL at which the uploaded document will be served 
/upload | POST | `notsupported` | Uploaded file type is not supported
/uploads/:filename | GET | `noext` | File Extension type is not valid
/uploads/:filename | GET | `notfound` | Document does not exists on the server

## Further Notes 

Feel free to clone, reuse, edit and put up a pull request. 

