Router.map(function() {
  this.route('a', {
    data: {route: 'a'}
  });
  
  this.route('b', {
    data: {route: 'b'}
  });
});

if (Meteor.isClient) {
  Template.logger.helpers({
    log: function() {
      console.log(this.templateName + ' rendered with ' + this.route);
    }
  });
  
  Template.a.helpers({
    options: function() {
      console.log('a options called with ' + this.route);
      return {route: this.route, templateName:'a'};
    }
  })

  Template.b.helpers({
    options: function() {
      console.log('b options called with ' + this.route);
      return {route: this.route, templateName:'b'};
    }
  })
}