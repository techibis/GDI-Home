var Facilitators = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Facilitator.all(function(err, facilitators) {
      self.respond({params: params, facilitators: facilitators});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    params.id = params.id || geddy.string.uuid(10);

    var self = this
      , facilitator = geddy.model.Facilitator.create(params);

    facilitator.save(function(err, data) {
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

    geddy.model.Facilitator.first(params.id, function(err, facilitator) {
      self.respond({params: params, facilitator: facilitator.toObj()});
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Facilitator.first(params.id, function(err, facilitator) {
      self.respond({params: params, facilitator: facilitator});
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Facilitator.first(params.id, function(err, facilitator) {
      facilitator.updateProperties(params);

      facilitator.save(function(err, data) {
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

    geddy.model.Facilitator.remove(params.id, function(err) {
      if (err) {
        params.errors = err;
        self.transfer('edit');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Facilitators = Facilitators;
