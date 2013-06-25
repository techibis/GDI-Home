var Chapter = function () {

  this.defineProperties({
    name: {type: 'string', required: true},
    meetupUrl: {type: 'string'},
    meetupId: {type: 'string'},
    leaders: {type: 'string'},
    instructors: {type: 'string'},
    volunteers: {type: 'string'},
    sponsors: {type: 'string'},
    announcements: {type: 'string'},
    twitter: {type: 'string'},
    facebook: {type: 'string'},
    email: {type: 'string'},
  });



};


Chapter = geddy.model.register('Chapter', Chapter);

