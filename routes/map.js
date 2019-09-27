const router = require('express').Router();
const fetch = require('node-fetch');

const accessToken = process.env.ACCESS_TOKEN


router.get('/', async (req, res) => {
   const img = router.get(`https://api.tiles.mapbox.com/v4/mapbox.streets/1/0/0.png?access_token=${accessToken}`)
   res.writeHead(200, {'Content-Type': 'image/png' });
   res.end(img, 'binary');
});

module.exports = router;