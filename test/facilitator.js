var assert = require('assert')
  , tests
  , Facilitator = geddy.model.Facilitator;
    
var resetFixture = function(done){
  Facilitator.TESTAPI_resetFixture(function(){
      done();
  });
};

describe('Facilitator', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var facilitator = new Facilitator('Sara Chipps');
      facilitator.save(function(err){            
        if(err) 
          console.log(err);
          throw err;
        done();   
    });
     });
  });
});
