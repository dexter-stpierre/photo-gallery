console.log('js sourced');

var myApp = angular.module('myApp', []);

var photos = []

function Picture(link, description){
  this.link = link,
  this.likes = 0,
  this.comments = [],
  this.description = description,
  this.descVisible = false,
  this.showComments = false,
  this.timesViewed = 0
}

var tayDex = new Picture('taydex.jpeg', "Me and my girlfriend Taylor!");
var family = new Picture('family.jpg', "I love my crazy family!");
var david = new Picture('david.jpg', "David is one of my childhood best friends!");
var elSalvador = new Picture('elsalvador.jpg', "My missions trip to El Salvador is one of my favorite memories!");
var graduation = new Picture('graduation.jpg', "My graduation day is one of my proudest moments!");
var swing = new Picture('swing.jpg', "Swing dancing is one of my favorite things to do and I love all of my friends I have made there!");

myApp.controller('GalleryController', function(){
  var gallery = this;
  gallery.photos = photos;
  gallery.photos.push(tayDex, family, david, elSalvador, graduation, swing);
  gallery.likeButton = function(photo){
    photo.likes +=1;
  };
  gallery.toggle = function(photo){
    console.log(photo.descVisible);
    photo.descVisible = !photo.descVisible
    if(photo.descVisible){
      photo.timesViewed +=1;
    }
    console.log(photo.descVisible);
  }
  gallery.addComment = function(comment, photo){
    photo.comments.push(comment);
    console.log(photo.comments);
  }
  gallery.toggleComments = function(photo){
    console.log(photo.showComments);
    photo.showComments = !photo.showComments;
    console.log(photo.showComments);
  }
  console.log(gallery);
})
