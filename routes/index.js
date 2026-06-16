var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/100-quality-guarantee', function(req, res, next) {
  res.render('100-quality-guarantee');
});
router.get('/about-us', function(req, res, next) {
  res.render('about-us');
});
router.get('/aprons', function(req, res, next) {
  res.render('aprons');
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});
router.get('/custom-face-mask', function(req, res, next) {
  res.render('custom-face-mask');
});

router.get('/custom-hoodies', function(req, res, next) {
  res.render('custom-hoodies');
});
router.get('/custom-tote-bag', function(req, res, next) {
  res.render('custom-tote-bag');
});
router.get('/cut-and-sew', function(req, res, next) {
  res.render('cut-and-sew');
});
router.get('/dyeing-processes', function(req, res, next) {
  res.render('dyeing-processes');
});
router.get('/embroidery', function(req, res, next) {
  res.render('embroidery');
});
router.get('/fabric-processing', function(req, res, next) {
  res.render('fabric-processing');
});
router.get('/fabric-selections', function(req, res, next) {
  res.render('fabric-selections');
});
router.get('/faqs', function(req, res, next) {
  res.render('faqs');
});
router.get('/garments-care-policy', function(req, res, next) {
  res.render('garments-care-policy');
});
router.get('/get-started', function(req, res, next) {
  res.render('get-started');
});
router.get('/hats', function(req, res, next) {
  res.render('hats');
});
router.get('/hoodies', function(req, res, next) {
  res.render('hoodies');
});
router.get('/jackets', function(req, res, next) {
  res.render('jackets');
});
router.get('/jeans', function(req, res, next) {
  res.render('jeans');
});
router.get('/leggings', function(req, res, next) {
  res.render('leggings');
});
router.get('/mens-undergarments', function(req, res, next) {
  res.render('mens-undergarments');
});
router.get('/mockups', function(req, res, next) {
  res.render('mockups');
});
router.get('/onesies-jumpers', function(req, res, next) {
  res.render('onesies-jumpers');
});
router.get('/packaging', function(req, res, next) {
  res.render('packaging');
});
router.get('/pants', function(req, res, next) {
  res.render('pants');
});
router.get('/polos', function(req, res, next) {
  res.render('polos');
});
router.get('/printing-methods', function(req, res, next) {
  res.render('printing-methods');
});
router.get('/private-labels', function(req, res, next) {
  res.render('private-labels');
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews');
});
router.get('/skirts', function(req, res, next) {
  res.render('skirts');
});
router.get('/shorts', function(req, res, next) {
  res.render('shorts');
});
router.get('/socks', function(req, res, next) {
  res.render('socks');
});
router.get('/sweat-shirts', function(req, res, next) {
  res.render('sweat-shirts');
});
router.get('/swimwear-manufacturer', function(req, res, next) {
  res.render('swimwear-manufacturer');
});
router.get('/tank-tops', function(req, res, next) {
  res.render('tank-tops');
});
router.get('/tshirts', function(req, res, next) {
  res.render('tshirts');
});
router.get('/why-us-main', function(req, res, next) {
  res.render('why-us-main');
});
router.get('/whyus-orderstatus', function(req, res, next) {
  res.render('whyus-orderstatus');
});
router.get('/whyus', function(req, res, next) {
  res.render('whyus');
});
router.get('/order-status-reporting', function(req, res, next) {
  res.render('order-status-reporting');
});
router.get('/terms-and-condition', function(req, res, next) {
  res.render('terms-and-condition');
});
router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy');
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

module.exports = router;
