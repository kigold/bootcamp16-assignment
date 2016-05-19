'use strict';

describe("After Initialisation of Note Application ", function (){
	var note_application;

	beforeEach(function() {
	   note_application = new NotesApplication("kingsley");
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

describe("Notes Application's ", function (){
	var note_application;

	beforeEach(function() {
	   note_application = new NotesApplication("kingsley");
	   note_application.create('This is my first note');
	   note_application.create('This is my Second note');
	   note_application.create('This is my Third note');
	   note_application.create('This is my Fourth note');
	   note_application.create('This is my Fifth note');
	});

		it("Number of Notes should be greater than 1 after creating notes", function() {
		    expect(note_application.notes.length).toBeGreaterThan(1);
	  	});

	  	it("should contain 'This is my first note'", function () {
		    expect(note_application.notes).toContain("This is my first note");
		});

		it("should contain 'This is my Fourth note'", function () {
		    expect(note_application.notes).toContain("This is my Fourth note");
		})

		it("listNotes should be called", function () {
			spyOn(note_application,"listNotes");
			note_application.listNotes();
			expect(note_application.listNotes).toHaveBeenCalled();
		});	

		it("listNotes returns something", function () {
			var note = new NotesApplication('kc');
			note.create("testing Note Application");
		    expect(note.listNotes()).toEqual("Note ID: 0\ntesting Note Application\n\n By Author kc");
		});



});