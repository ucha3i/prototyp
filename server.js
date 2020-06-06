const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/prototyp'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.Promise = Promise

// setup mangoose models
const File = mongoose.model('File',
  { filename: String,
    description: String,
    uploader: String,
    date: Date })

const port = process.env.PORT || 8080
const app = express()

app.use(fileUpload())
app.use(cors())
app.use(bodyParser.json())

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const { sampleFile } = req.files

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(`uploads/${sampleFile.name}`, async (err) => {
    if (err) return res.status(500).send(err)

    const file = new File({ filename: sampleFile.name, description: '', uploader: '', date: Date.now() })
    await file.save()

    res.send('File uploaded!')
  })
})

app.get('/', (_, res) => {
  res.send('TEST')
})

app.get('/files', async (_, res) => {
  res.json(await File.find())
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
