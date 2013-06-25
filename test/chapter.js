var assert = require('assert')
  , tests
  , Chapter = geddy.model.Chapter;
    
var resetFixture = function(done){
  Chapter.TESTAPI_resetFixture(function(){
      done();
  });
};

describe('Chapter', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var chapter = new Chapter('Asbury');
      chapter.save(function(err){            
        if(err) 
          console.log(err);
          throw err;
        done();   
    });
     });
  });
});
