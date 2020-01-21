function myFunction() {
  //Moi
    let x = document.getElementById("spaBtn");
  let y = document.getElementById("normiBtn");
  let headerElement = document.createElement("h1");
  headerElement.innerText = "Tämä on toinen sivu";
  
  document.querySelector('#spaBtn').innerText = 'Vaihdettu';
  //location.replace("https://www.google.com")
    x.disabled = true;
  y.hidden = true;
  x.hidden = true;
  document.body.appendChild(headerElement);
  console.log(document.location); 
  }