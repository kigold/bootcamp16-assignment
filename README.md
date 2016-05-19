#Note Application

###An application which creates notes, it is a javascript file that can be used with no dependencies

##Functions

###create 
#####parameters - note[string]
#####output - None
#####function - adds the string parameter to the note[array]

###listNotes
#####parameters - None
#####output - None
#####function - lists all the notes in the app in a formated manner

###get 
#####parameters - note_id[integer]
#####output - [string]
#####function - returns the note in the app with index of the parameter[integer]

###search
#####parameters - search_text[string]
#####output - array[string]
#####function - gets all the notes in the app that contains the search_text parameter

###delete
#####parameters - note_id[integer]
#####output - None
#####function - deletes the note with the index of note_id

###edit
#####parameters - note_id[integer], new_content[]
#####output - None
#####function - deletes the note with the index of note_id

