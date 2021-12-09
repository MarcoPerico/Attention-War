var netflix;
var primevideo;
var youtube;
var twitch;

function preload() {
  netflix = loadImage('assets/netflix.png');
  primevideo = loadImage('assets/primevideo.png');
  youtube = loadImage('assets/youtube.png');
  twitch = loadImage('assets/twitch.png');
}

function setup() {
  createCanvas(windowWidth, 10000);
}

function draw() {
  image(netflix, 0, 0, 1920/4, 12103/4);
  image(primevideo, windowWidth/4, 0, 1920/4, 25567/4);
  image(youtube, windowWidth/2, 0, 192*2.5, 7312*2.5);
  image(twitch, windowWidth*3/4, 0, 1920/4, 7360/4);
}
