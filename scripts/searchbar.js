let search_terms = ['Forside', 'Farver', 'Pentia Invisible: #f6f4f4', 'Pentia Dusk: #666565', 'Pentia Neon: #ff5b4c','Pentia Octane: #6c9299', 'Pentia Octane 25%: #dce4e5', 'Pentia Octane 50%: #b8c7cb', 'Pentia Grey: #f6f6f7', 'Typografi', 'Knapper', 'Ikoner', 'Logoer', 'Menu'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }

  else {
      ('Beklager, intet matchede det du søgte på');
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