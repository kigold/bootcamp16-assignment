'use strict';

describe("After Initialisation of Note Application ", function (){
	var note_application;


	beforeEach(function() {
	   note_application = new NotesApplication("kingsley") ;
	});

	it("it should Have an author's name", function() {
	    expect(note_application.author).toEqual('kingsley');

  	});
  	

});