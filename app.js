function myFunction() {
  //Luodaan index.html-sivulla olevista näppäimistä muuttujat
    let x = document.getElementById("spaBtn");
  let y = document.getElementById("normiBtn");

  //Luodaan uusi otsikkoelementti
  let headerElement = document.createElement("h1");
  //Asetetaan otsikkoelementin teksti
  headerElement.innerText = "Tämä on toinen sivu";
  
  //Piilotetaan index.html näppäimet
    y.hidden = true;
  x.hidden = true;
  //Lisätään luotu otsikkoelementti sivustolle
  document.body.appendChild(headerElement);
 
  }