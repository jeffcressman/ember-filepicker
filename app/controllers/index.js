import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    save: function(file){ // we're passing the record up from the file-picker component
      this.set('uploadedImage', file);
    },
    error: function (msg) {
      this.get('errors').pushObject(msg);
    },
    clearErrors: function () {
     this.get('errors').clear();
    },
  }
});
