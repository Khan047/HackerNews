var mongoose = require('mongoose');


var PostSchema = mongoose.Schema({
  Post:{
    type:String,
    index:true
  },
  username: {
    ref:username
  },
  upvote:{
    type:number
  },
  comments:{
    type:String
  }
});

var Post=module.exports = mongoose.model('Post', UserSchema);

module.exports.createPost = function(newPost, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newPost.password, salt, function(err, hash){
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback){
  var query = {username:username};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}
