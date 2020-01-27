function myFunction() {
  //Luodaan index.html-sivulla olevista näppäimistä muuttujat
  //testikommentti
    let x = document.getElementById("spaBtn");
  let y = document.getElementById("normiBtn");

  //Luodaan uusi otsikkoelementti
  let headerElement = document.createElement("h1");
  let spanElement = document.createElement("span");
  //Asetetaan otsikkoelementin teksti
  spanElement.innerText = "Tämä on toinen sivu";
  
  headerElement.appendChild(spanElement);
  
  //Piilotetaan index.html näppäimet
    y.hidden = true;
  x.hidden = true;
  //Lisätään luotu otsikkoelementti sivustolle
  document.body.appendChild(headerElement);

  }
  console.log("moi");

