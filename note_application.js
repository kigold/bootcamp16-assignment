function NotesApplication(author){
	this.author = author;
	this.notes = [];
	//methods
	//create
	this.create = function(note){
		this.notes.push(note);
		//console.log(this.notes);

	};
	//listNotes
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
			result = "Note ID: "+ i + "\n" + this.notes[i] + "\n\n By Author " + this.author;
			console.log(result);
		};
	};
	//get
	this.get = function(note_id){
		if (this.notes.length >= note_id){
		result = this.notes[note_id];
		return result
		}
	}
}

//testing
var n = new NotesApplication("kingsley");
n.create("This is my 1st Note Content");
n.create("This is my 2nd Note Content");
n.listNotes();
n.get(0);
n.get(1);