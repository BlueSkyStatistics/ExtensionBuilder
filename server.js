const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

var receivedData;

var layoutKey;

var savedRadioBtn  = {
    title: 'Radio Button',
    button1: 'false',
    button2: 'false',
    button3: 'false',
    textbox1: 'GOT',
    textbox2: 'SERVER',
    textbox3: 'DATA!!',
};

var checkbox = {
  title: 'Checkbox',
  textbox1: 'GOT',
  textbox2: 'Checkbox Server',
  textbox3: 'Data',
}

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Handle POST request to get /data
app.post('/setData', (req, res) => { // TEST INFO
  receivedData = req.body; // Get the data sent by the client
  //console.log('Received data:', receivedData); // VS console

  // Respond with a message
  //res.send({ message: 'Data set successfully', receivedData });
});

app.get('/getData', (req, res) => { // TEST INFO
  //itemType = req.body; // get data from client to see what layout was clicked
  //console.log(itemType);
  res.send(receivedData);

});

app.post('/setLayoutKey', (req, res) => { // IMPORTANT: sends layoutKey to server
  layoutKey = req.body; // Get the data sent by the client
  //console.log('Received LayoutKey data:', layoutKey); // VS console
});

app.get('/getData1', (req, res) => { // IMPORTANT: gets data from server
    if (layoutKey.title == 'Radio Button') {
      res.send(savedRadioBtn);
    } if (layoutKey.title == 'Checkbox') {
      res.send(checkbox);
    }
    
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
