// Image corasaul section

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 3000);
}

//Navigation bar mobile view toggle code section

function showNavbar() {
  const mobileNav = document.querySelector(".mobile-nav-content");
  mobileNav.style.display = "flex";
  // mobileNav.classList.add("transition")
  const mobileNavI = document.querySelector(".mobileNavI");
  mobileNavI.style.display = "none";
  const heroSection = document.querySelector(".hero-section");
  heroSection.style.opacity = "0.6";
}
function hideNavbar() {
  const mobileNav = document.querySelector(".mobile-nav-content");
  mobileNav.style.display = "none";
  const mobileNavI = document.querySelector(".mobileNavI");
  mobileNavI.style.display = "block";
  const heroSection = document.querySelector(".hero-section");
  heroSection.style.opacity = "1";
}

// Filter code section menu

const filterButtons = document.querySelectorAll(".filter button");
const menuContent = document.querySelectorAll(".menu-content .menu-item");
console.log(filterButtons, menuContent);

const filterCards = (e) => {
  // accessing button holding active class
  let active = document.querySelector(".active");

  // removing active class from currently holding button
  active.classList.remove("active");

  // console.log(active.innerHTML);
  // console.log(e.target);

  // adding active class to currently selected button
  e.target.classList.add("active");
  menuContent.forEach((item) => {
    item.classList.add("hide");
    if (
      item.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "All"
    ) {
      item.classList.remove("hide");
    }
  });
};
// adding event listener on filterable buttons

filterButtons.forEach((button) => {
  button.addEventListener("click", filterCards);
  console.log(button);
});

let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % 6; // Adjust the number based on the number of cards
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 6) % 6; // Adjust the number based on the number of cards
  updateSlider();
}

function updateSlider() {
  const sliderContent = document.querySelector(".slider-content");
  const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
  sliderContent.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

// ALERT MECHANISM CODE
const orderBtn = document.querySelectorAll(".menu-content-info button");
// const buttons = document.querySelectorAll(".btn");
orderBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    // do something when the button is clicked
    // console.log("You clicked a button");
    alert("Thanks for Purchasing!");
  });
});
