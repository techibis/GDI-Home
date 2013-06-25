
var t = new jake.TestTask('girl-develop-it', function () {
  this.testFiles.include('test/*.js');
  this.testFiles.include('test/**/*.js');
});

var Mocha = require('mocha');
var mocha = new Mocha({reporter: 'spec', ui: 'bdd'});

function run_tests(cb) {
      mocha.addFile('./test/chapter.js');
      mocha.addFile('./test/facilitator.js');
          mocha.run(function(failures) {
          cb(failures);
  });
}

desc('mocha unit test-run example');
task('test-run', {async: true}, function(args) {
    run_tests(function(err) {
    if (err) {
      fail(err);                                  
    } else {
       complete();
    }    
    });
});
