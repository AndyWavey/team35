let search_terms = ['Forside', 'Farver', 'Typografi', 'Knapper', 'Ikoner', 'Logoer', 'Menu'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }

  else {
      ('Beklager, intet matchede det du søgte på')
  }
  let reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = 'result';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}