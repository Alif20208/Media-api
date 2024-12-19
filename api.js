const axios = require('axios');

// Base API URL
const apiBaseUrl = 'https://nayan-video-downloader.vercel.app/';

// Helper function to handle API calls
const createRequest = (endpoint, formatData) => async (url, key) => {
  try {
    const params = formatData ? formatData(url, key) : { url };
    const response = await axios.get(`${apiBaseUrl}${endpoint}`, { params });

    // Modify response to include your info
    const modifiedResponse = {
      developer: "YOUR_NAME", // আপনার নাম দিন
      devfb: "https://your-facebook-link", // আপনার Facebook প্রোফাইল লিংক
      devwp: "https://your-whatsapp-link", // আপনার WhatsApp লিংক
      status: response.data.status,
      data: response.data.data, // API থেকে ডেটা সংযুক্ত করুন
    };

    return modifiedResponse;
  } catch (error) {
    return {
      developer: "YOUR_NAME", // আপনার নাম দিন
      status: false,
      msg: `${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)} API error`,
    };
  }
};

// Controller functions for each route
const ndown = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('ndown')(url);
  res.json(result);
};

const instagram = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('instagram')(url);
  res.json(result);
};

const tikdown = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('tikdown')(url);
  res.json(result);
};

const ytdown = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('ytdown')(url);
  res.json(result);
};

const threads = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('threads')(url);
  res.json(result);
};

const twitterdown = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('twitterdown')(url);
  res.json(result);
};

const fbdown2 = async (req, res) => {
  const { url, key } = req.query;
  if (!url || !key) return res.status(400).json({ status: false, msg: 'URL and key are required' });
  const result = await createRequest('fbdown2', (url, key) => ({ url, key }))(url, key);
  res.json(result);
};

const GDLink = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('GDLink')(url);
  res.json(result);
};

const pintarest = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('pintarest')(url);
  res.json(result);
};

const capcut = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('capcut')(url);
  res.json(result);
};

const likee = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });
  const result = await createRequest('likee')(url);
  res.json(result);
};

// Add `alldl` route and map it to `alldown` endpoint
const alldl = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, msg: 'URL is required' });

  // Make the API request to 'alldown'
  const result = await createRequest('alldown')(url); // Using 'alldown' internally for 'alldl'
  res.json(result);
};

// Export all controller functions
module.exports = {
  ndown,
  instagram,
  tikdown,
  ytdown,
  threads,
  twitterdown,
  fbdown2,
  GDLink,
  pintarest,
  capcut,
  likee,
  alldl, // Updated to `alldl`
};
