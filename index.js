const express = require('express');
const api = require('./api'); // Import API controller functions

const app = express();
const port = 3000;

app.use(express.json());

// Define routes for all endpoints
app.get('/ndown', api.ndown);
app.get('/instagram', api.instagram);
app.get('/tikdown', api.tikdown);
app.get('/ytdown', api.ytdown);
app.get('/threads', api.threads);
app.get('/twitterdown', api.twitterdown);
app.get('/fbdown2', api.fbdown2);
app.get('/GDLink', api.GDLink);
app.get('/pintarest', api.pintarest);
app.get('/capcut', api.capcut);
app.get('/likee', api.likee);
app.get('/alldl', api.alldl); // `alldl` will map to `alldown`

// Default route for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ status: false, msg: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
