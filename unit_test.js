'use strict';

describe("After Initialisation of Note Application ", function (){
	var note_application;


	beforeEach(function() {
	   note_application = new NotesApplication("kingsley") ;
	});

		it("it should Have an author's name", function() {
		    expect(note_application.author).toEqual('kingsley');
	  	});

	  	it("it should have an empty list of notes", function() {
		    expect(note_application.notes.length).toEqual(0);

	  	});

	  	it("authors name should be defined", function () {
		    expect(note_application.author).toBeDefined();
		});

});