var cognomi= ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

var mioCognome= prompt("inserisci il tuo cognome");

if (isNaN(mioCognome) && mioCognome!="" && String(mioCognome.length)>=2) {
  cognomi.push(mioCognome);

  for (var i = 0; i < cognomi.length; i++) {
    cognomi[i]= cognomi[i].toLowerCase();
  }

  cognomi.sort(); // ordino avendo tutto in lowercase

  var position = parseInt(cognomi.indexOf(mioCognome))+1;

  for (var i = 0; i < cognomi.length; i++) {
    cognomi[i]=cognomi[i].charAt(0).toUpperCase() + cognomi[i].slice(1); // 1a lettera maiuscola
    document.getElementById("stamp").innerHTML+= "<li>" + cognomi[i] + "</li>";
  }

  document.getElementById("pos").innerHTML="Il cognome è in posizione 'umana' " + position; //pos. umana
  }
else {
  document.getElementById("pos").innerHTML="Inserisci cognome valido";
}
