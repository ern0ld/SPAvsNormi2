let pageBtn = document.getElementById('vaihdaSivuSPA');
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
  //headerElement.appendChild(spanElement);
 

  }
pageBtn.onclick = function(){createObjectPage()};

//pageBtn.addEventListener("click", createObjectPage());
function createObjectPage(){
  let objectPage = document.createElement("object");
  objectPage.widht = screen.width;
  objectPage.height = screen.height;
  objectPage.type = "text/html";
  objectPage.data = "secondpage.html";
  document.body.appendChild(objectPage);
                                         
}

  console.log("moi");

