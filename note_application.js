function NotesApplication(author){
	//Properties
	this.author = author;
	this.notes = [];


	//Methods
	//This function takes the note content as the parameter and adds it to the notes list of the object
	this.create = function(note){
		this.notes.push(note);
	};

	//This function lists out each of the notes in the notes list 
	this.listNotes = function(){
		for (var i=0; i<this.notes.length; i++){
			result = "Note ID: "+ i + "\n" + this.notes[i] + "\n\n By Author " + this.author;
			console.log(result);
		};
		return result;
	};

	//This function takes a note_id which refers to the index of the note in the notes list and returns the content of that note as a string
	this.get = function(note_id){
		if (this.notes.length >= note_id && note_id > -1 ){
		result = this.notes[note_id];
		}
		else 
			if (note_id < 0) { result = "Invalid input";}

		else {result = "Specified note does not exist";}
		return result;
	}

	//This function take a search string, search_text and returns all the notes with that text
	this.search = function(search_text){
		result = [];
		for (var i=0; i<this.notes.length; i++){
			if (this.notes[i].indexOf(search_text) > -1){
				result.push(this.notes[i]);
			};
		}
		return result;
	}

	//This function deletes the note at the index note_id of the notes list.
	this.delete = function(note_id){
		if (this.notes.length >= note_id){
		this.notes.pop(note_id);
		}
	}

	//This function replaces the content in the note at note_id with new_content
	this.edit = function(note_id, new_content){
		if (this.notes.length >= note_id){
			this.notes[note_id] = new_content;
		}
	}
}
