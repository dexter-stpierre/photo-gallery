console.log('js sourced');

var myApp = angular.module('myApp', []);

//object constructor for the pictures
function Picture(link, description){
  this.link = link,
  this.likes = 0,
  this.comments = [],
  this.description = description,
  this.descVisible = false,
  this.showComments = false,
  this.timesViewed = 0
}

//creating 6 pictures using picture constructor
var tayDex = new Picture('taydex.jpeg', "Me and my girlfriend Taylor!");
var family = new Picture('family.jpg', "I love my crazy family!");
var david = new Picture('david.jpg', "David is one of my childhood best friends!");
var elSalvador = new Picture('elsalvador.jpg', "My missions trip to El Salvador is one of my favorite memories!");
var graduation = new Picture('graduation.jpg', "My graduation day is one of my proudest moments!");
var swing = new Picture('swing.jpg', "Swing dancing is one of my favorite things to do and I love all of my friends I have made there!");

//create controller
myApp.controller('GalleryController', function(){
  //create shorthand variable for controller
  var gallery = this;
  //add pictures to an array in gallery controller
  gallery.photos = [tayDex, family, david, elSalvador, graduation, swing];
  //increase like count on photo when like button is clicked
  gallery.likeButton = function(photo){
    photo.likes +=1;
  };
  //toggle description of photo when the photo or description is clicked
  gallery.toggleDesc = function(photo){
    photo.descVisible = !photo.descVisible
    //add 1 to times viewed whenever the photo is clicked and not the description
    if(photo.descVisible){
      photo.timesViewed +=1;
    }
  };
  //add comment to array of comments on picture
  gallery.addComment = function(comment, photo){
    photo.comments.push(comment);
  };
  //toggle the display of comment son specific picture
  gallery.toggleComments = function(photo){
    photo.showComments = !photo.showComments;
  };
  //delete comment
  gallery.deleteComment = function(index, photo){
    console.log(index);
    console.log(photo);
    console.log(photo.comments);
    photo.comments.splice(index, 1);
  };
  //log the contoller
  console.log(gallery);
})
