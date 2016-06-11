 - To better understand the concept of an interface we will now add a new data model to our app
 - This model will use the file system as the data store instead of the JS array our current model uses
 - First copy the ‘models/notice_model.js’ to a new file in the model directory called ‘models/notice_file_model.js’.
 - Then add a ‘notices.json’ file with array of notices to the root of project
 - Rewrite the `list` and `getById` functions to load from json file
 - Then add a function called ‘saveToFile(message, noticesJson)’
 - Save to json file when `create` is called

Answer is in the branch ‘7_add_new_data_model’

