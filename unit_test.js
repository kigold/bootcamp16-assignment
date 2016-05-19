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

		it("get method should be called", function () {
			spyOn(note_application,"get");
			note_application.get(1);
			expect(note_application.get).toHaveBeenCalled();
		});	

		it("get(1) returns This is my Second note ", function () {
		    expect(note_application.get(1)).toEqual("This is my Second note");
		});

		it("get(10) returns Specified note does not exist ", function () {
		    expect(note_application.get(10)).toEqual("Specified note does not exist");
		});

		it("get(-4) returns Invalid input ", function () {
		    expect(note_application.get(-4)).toEqual("Invalid input");
		});

		it("get(ABC) returns Specified note does not exist", function () {
		    expect(note_application.get("ABC")).toEqual("Specified note does not exist");
		});

		it("search method should be called", function () {
			spyOn(note_application,"search");
			note_application.search("blah");
			expect(note_application.search).toHaveBeenCalled();
		});

		it("search(Third) returns 'This is my Third note'", function () {
		    expect(note_application.search('Third')[0]).toEqual("This is my Third note");
		});

		it("delete method should be called", function () {
			spyOn(note_application,"delete");
			note_application.delete("blah");
			expect(note_application.delete).toHaveBeenCalled();
		});

		it("Number of notes should be 4", function () {
			note_application.delete(2);
		    expect(note_application.notes.length).toEqual(4);
		});

		it("search(Third) returns 'This is my Third note'", function () {
		    expect(note_application.search('Third')[0]).toEqual("This is my Third note");
		});

		/*it("should not contain 'This is my Third note'", function () {
		    expect(note_application.notes).toContain("This is my Third note");
		});*/

		it("edit method should be called", function () {
			spyOn(note_application,"edit");
			note_application.edit();
			expect(note_application.edit).toHaveBeenCalled();
		});

		it("note[3] should be 'This is my EDITED note'", function () {
			note_application.edit(3, "This is my EDITED note");
		    expect(note_application.notes[3]).toEqual('This is my EDITED note');
		});







});