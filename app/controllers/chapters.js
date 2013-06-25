var Chapters = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Chapter.all(function(err, chapters) {
      self.respond({params: params, chapters: chapters});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    params.id = params.id || geddy.string.uuid(10);

    var self = this
      , chapter = geddy.model.Chapter.create(params);

    chapter.save(function(err, data) {
      if (err) {
        params.errors = err;
        self.transfer('add');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Chapter.first(params.id, function(err, chapter) {
      self.respond({params: params, chapter: chapter.toObj()});
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Chapter.first(params.id, function(err, chapter) {
      self.respond({params: params, chapter: chapter});
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Chapter.first(params.id, function(err, chapter) {
      chapter.updateProperties(params);

      chapter.save(function(err, data) {
        if (err) {
          params.errors = err;
          self.transfer('edit');
        } else {
          self.redirect({controller: self.name});
        }
      });
    });
  };

  this.destroy = function (req, resp, params) {
    var self = this;

    geddy.model.Chapter.remove(params.id, function(err) {
      if (err) {
        params.errors = err;
        self.transfer('edit');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Chapters = Chapters;
