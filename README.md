# Programming task in recruitment process 

The task was to create a web application that can be used as a file archive. The requirements were:

• it should be possible to upload a file with added metadata (such as description and name of the uploader). Allowed filetypes should be xml, pdf and jpeg.

• It should be possible to list files and their connected data in columns. This information should be persisted and fetched from some data store (database,
text file etc.). In the list there should be an icon illustrating what filetype a certain file is. It should be possible to click the filename to open or download the file.

• It should be possible to remove an uploaded file.

# Solution

I used React Starter on frontend side, and Express with express-fileupload with Mongo DB as backend side. 

To run the project it's necessary to start with `npm install`. 
Next, to start the server, write `node server.js` in the terminal.
Finally, to start the react app go to `src folder` in the terminal and write `npm start` also in the terminal.
