let currentSlide = 0;

function moveSlide(direction) {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

const express = require('express')
const app = express() 

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })
  
  app.use(express.static(__dirname + "/public"))
  
  app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
  })
  app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/public/about.html")
  })
  app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/public/contact.html")
  })
  
  app.listen(3000, (req, res) => {
    console.log("hey")
    })