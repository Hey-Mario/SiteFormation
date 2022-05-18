var a, b, c, d, e, ColorA, ColorB, ColorC, ColorD, ColorE;
// fonction de offre 
function myOffre() {
    a = document.getElementById("myOffre");
    ColorA = document.getElementById("Offre");
    a.style.display = 'flex';
    ColorA.style.backgroundColor = 'dodgerblue';
    b.style.display = 'none';
    ColorB.style.backgroundColor = '#e2e1df';
    c.style.display = 'none';
    ColorC.style.backgroundColor = '#e2e1df';
    d.style.display = 'none';
    ColorD.style.backgroundColor = '#e2e1df';
    e.style.display = 'none';
    ColorE.style.backgroundColor = '#e2e1df';
}
// fonction de Objectif 
function myObjectif() {
    b = document.getElementById("myObjectif");
    ColorB = document.getElementById("Objectif");
    a.style.display = 'none';
    ColorA.style.backgroundColor = '#e2e1df';
    b.style.display = 'flex';
    ColorB.style.backgroundColor = 'dodgerblue';
    c.style.display = 'none';
    ColorC.style.backgroundColor = '#e2e1df';
    d.style.display = 'none';
    ColorD.style.backgroundColor = '#e2e1df';
    e.style.display = 'none';
    ColorE.style.backgroundColor = '#e2e1df';
}
// fonction de Prérequise
function myPrerequise() {
    c = document.getElementById("myPrerequise");
    ColorC = document.getElementById("Prerequise");
    a.style.display = 'none';
    ColorA.style.backgroundColor = '#e2e1df';
    b.style.display = 'none';
    ColorB.style.backgroundColor = '#e2e1df';
    c.style.display = 'block';
    ColorC.style.backgroundColor = 'dodgerblue';
    d.style.display = 'none';
    ColorD.style.backgroundColor = '#e2e1df';
    e.style.display = 'none';
    ColorE.style.backgroundColor = '#e2e1df';
}
// fonction de Instructeur
function myInstructeur() {
    d = document.getElementById("myInstructeur");
    ColorD = document.getElementById("Instructeur");
    a.style.display = 'none';
    ColorA.style.backgroundColor = '#e2e1df';
    b.style.display = 'none';
    ColorB.style.backgroundColor = '#e2e1df';
    c.style.display = 'none';
    ColorC.style.backgroundColor = '#e2e1df';
    d.style.display = 'flex';
    ColorD.style.backgroundColor = 'dodgerblue';
    e.style.display = 'none';
    ColorE.style.backgroundColor = '#e2e1df';
}
// fonction de Autre
function myAutre() {
    e = document.getElementById("myAutre");
    ColorE = document.getElementById("Autre");
    a.style.display = 'none';
    ColorA.style.backgroundColor = '#e2e1df';
    b.style.display = 'none';
    ColorB.style.backgroundColor = '#e2e1df';
    c.style.display = 'none';
    ColorC.style.backgroundColor = '#e2e1df';
    d.style.display = 'none';
    ColorD.style.backgroundColor = '#e2e1df';
    e.style.display = 'flex';
    ColorE.style.backgroundColor = 'dodgerblue';
}
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

var images = ['BACKGROUND/galaxy.jpg', 'BACKGROUND/star.jpg', 'SLIDE/pc.jpg'];
var i = 0;
var time = 3000;

function slideImg() {
    document.mySlide.src = images[i];
    if (i < images.length - 1) i++;
    else i = 0;
    setTimeout(slideImg, time);
}
window.onload = slideImg;