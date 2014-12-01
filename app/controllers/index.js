import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    saveFile: function(file){ // we're passing the record from the file-picker component
      console.log('file bubbled up to controller!');
    },
    uploadError: function (msg) {
      this.get('errors').pushObject(msg);
    },
    clearErrors: function () {
     this.get('errors').clear();
    },
  }
});
