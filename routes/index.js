var express = require('express');
var router = express.Router();

const data = {
  title: 'Phuc Bui (Johnny)',
  logoText: 'Johnny Phuc Bui',
  useYoutubeVideo: false,
  youtubeVideoUrl: 'https://www.youtube.com/embed/A9abHX_NSK4?rel=0&controls=0&showinfo=0&autoplay=1&loop=1&mute=1&playlist=A9abHX_NSK4',
  videoUrl: 'https://res.cloudinary.com/wincorp/video/upload/background_ahbv4k.mp4',
  githubUrl: 'https://github.com/JohnnyBui',
  websiteUrl: 'https://winme.vn',
  facebookUrl: 'https://www.facebook.com/phuc.m.bui',
  instagramUrl: 'https://www.instagram.com/johnny_phucbui/',
  twitterUrl: 'https://twitter.com/PhucJohnny',
  youtubeUrl: 'https://www.youtube.com/channel/UCBipBB66I-kbAbIpO0B25fQ',
  year: new Date().getFullYear()
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
