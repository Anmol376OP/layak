const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

const btn = document.querySelector(".dark-light");
var nav=document.querySelector("nav");
btn.onclick = () => {
  if (i001.classList.contains("fa-sun")) {
    i001.classList.remove('fa-sun');
    i001.classList.add('fa-moon');
    document.getElementsByTagName('nav')[0].style.backgroundColor = "white";
    document.getElementById("i001").style.color="black";
    document.getElementById("i002").style.color="black";
    document.getElementById("i003").style.color="black";
    document.getElementById("i004").style.color="black";
    document.getElementById("i005").style.color="black";
    document.getElementById("i006").style.color="black";
    document.getElementById("i1").src="images/img1.jpg";
    document.getElementById("form").style.background="#1e232b";
    // i003.classList.add('blacktheme'
  }
  else
    {
    i001.classList.remove('fa-moon');
    i001.classList.add('fa-sun');
    document.getElementsByTagName('nav')[0].style.backgroundColor = "#171c24";
    document.getElementById("i001").style.color="white";
    document.getElementById("i002").style.color="white";
    document.getElementById("i003").style.color="white";
    document.getElementById("i004").style.color="white";
    document.getElementById("i005").style.color="white";
    document.getElementById("i006").style.color="white";
    document.getElementById("i1").src="images/img2.jpg";
    document.getElementById("form").style.background="white";
  }
}

// 585858