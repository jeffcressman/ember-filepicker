import Ember from 'ember';

export default Ember.ArrayController.extend({

  // One issue with the component is that its good for doing one thing. We want
  // to be able re-pick if necessary and not save the image until we do a save
  // in the Controller for the current Route.
  //
  // For example, in the case of a Registration form we will have a Registration
  // model we are building up that we could add files to.
  //
  // For an individual file choice clicking the pick button should either create
  // and re-create a record without saving it, until the parent record is saved,
  // or create and save the record and update it if a new pick is made. The process
  // I've used before is a mix of both: populate controller fields and then create
  // and save all records and then save the relationships. So, we could pass a
  // record from this controller to the component to

  // Or, what we can do in the picker component is create the record and then
  // send it back to the controller by bubbling the action, e.g.
  // onSaveButtonClick : function(){
  //   this.sendAction('saveImage'); // send to controller with 'saveImage' action
  // }

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
