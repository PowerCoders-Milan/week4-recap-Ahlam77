// Rewrite the instructions in your own words
/* we need to creat a program that given a phrase generates their acronym
//
// Write the objectives and the tests

// Write the pseudocode
we need to creat 3 var one to put the phrase and prom
the second var for a list .
the 3 var for the acronym.
and we need to do acronym print with upper case


// paste your JS generated by blockly below here 
*/


var input, list, ancronyms, i;


input = window.prompt('Insert A phrase');
list = input.split(' ');
ancronyms = '';
for (var i_index in list) {
  i = list[i_index];
  ancronyms += String(i.charAt(0));
}
ancronyms = ancronyms.toUpperCase();
window.alert(ancronyms); 

