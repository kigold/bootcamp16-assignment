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
	//search
	this.search = function(search_text){
		result = [];
		for (var i=0; i<this.notes.length; i++){
			if (this.notes[i].indexOf(search_text) > -1){
				result.push(this.notes[i]);
			};
		}
		return result;
	}
	//delete
	this.delete = function(note_id){
		if (this.notes.length >= note_id){
		this.notes.pop(note_id);
		}
	}
	//edit
	this.edit = function(note_id, new_content){
		if (this.notes.length >= note_id){
			this.notes[note_id] = new_content;
		}
	}
}
