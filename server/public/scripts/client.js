console.log('js sourced');

var myApp = angular.module('myApp', []);

var photos = []

function Picture(link, description){
  this.link = link,
  this.likes = 0,
  this.comments = [],
  this.description = description,
  this.descVisible = false
}

var tayDex = new Picture('taydex.jpeg', "Me and my girlfriend Taylor!");
var family = new Picture('family.jpg', "I love my crazy family!");
// var tayDex = {
//   link: 'taydex.jpeg',
//   likes: 0,
//   comments: [],
//   description: "Me and my girlfriend Taylor!",
//   descVisible: false,
// }
// var family = {
//   link: 'family.jpg',
//   likes: 0,
//   comments: [],
//   description: "I love my crazy family",
//   descVisible: false,
// }

myApp.controller('GalleryController', function(){
  var gallery = this;
  gallery.photos = photos;
  gallery.photos.push(tayDex, family);
  gallery.likeButton = function(photo){
    console.log('like button clicked');
    console.log('photo', photo);
    photo.likes +=1;
    console.log(photo.likes);
    console.log(gallery);
  };
  gallery.toggle = function(photo){
    console.log(photo.descVisible);
    photo.descVisible = !photo.descVisible
    console.log(photo.descVisible);
  }
  gallery.addComment = function(comment, photo){
    photo.comments.push(comment);
    console.log(photo.comments);
  }
  console.log(gallery);
})
