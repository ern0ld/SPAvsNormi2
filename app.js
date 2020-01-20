function myFunction() {
    let x = document.getElementById("spaBtn");
  let y = document.getElementById("normiBtn");
  let z = document.getElementById("content");
  document.querySelector('#spaBtn').innerText = 'Vaihdettu';
  //location.replace("https://www.google.com")
    x.disabled = true;
  z.innerHTML = 'Tämä on toinen sivu';
  y.hidden = true;
  x.hidden = true;
  console.log(document.location); 
  }