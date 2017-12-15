# RESTful DocStoreAPI Documentation

## Overview

This repo consists of a standalone Node.js RestfulAPI to store your documents on your own remote server. The APIs can serve documents such as PDF, PNG, SVG, JPG & JPEG to your application. 

Please email meet@daveinside.com if you find any bugs

## URI & Versioning 

I hope to improve API over time by adding more file versions, securing the API endpoints, Adding HTTPS & maintaining the code overlooking the ease of requirements & usage. 

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
/uploads/:filename | GET | Provide the required filename in the URL access the document. Example `http://localhost:3004/uploads/youtube.svg` will server the SVG file

## Further Notes 

Feel free to clone, reuse, edit and put up a pull request. 

