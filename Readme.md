 - Right now the notice board sorts by chronological order only
 - Let’s make it sort by alphabetical order while also making good use of strategy pattern.
 - Let’s extract query parameter ‘sort’ in the `controllers/notice_controller`
 - Then add a `sort` parameter to ‘list’ function in `models/notice_model.js` 
 - Then add the two strategy classes for sorting in ‘utils.js’
 - Refactor `list` function to take the sort parameter and use the strategy classes to sort.

Answer is in the branch ‘6_strategy’

