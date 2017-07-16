console.log('js sourced');

var myApp = angular.module('myApp', []);

var photos = []
var tayDex = {
  link: 'taydex.jpeg',
  likes: 0,
  comments: [],
  description: "Me and my girlfriend Taylor!",
  photoVisible: true
}
var family = {
  link: 'family.jpg',
  likes: 0,
  comments: [],
  description: "I love my crazy family",
  photoVisible: true
}

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
    console.log(photo.photoVisible);
    photo.photoVisible = !photo.photoVisible
    console.log(photo.photoVisible);
  }
  console.log(gallery);
})
