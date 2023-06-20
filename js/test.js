const image = document.getElementById("hero-img1");
const title = document.getElementById("title");
const titleText = document.getElementById("title-text");
const languages = document.getElementById("languages");
const github = document.getElementById("git-logo");
const headContainer = document.getElementById("head-content");

window.onscroll = () => {
  if (window.pageYOffset > 400) {
    headContainer.className = "cont-head-modified";
    titleText.className = "title-text-modified";
    image.className = "head-img-visibile";
    title.className = "title-modified";
    languages.className = "lang-modified";
    github.className = "github-modified";
  } else {
    headContainer.className = "cont-head";
    titleText.className = "title-text-class";
    image.className = "head-img";
    title.className = "title-class";
    languages.className = "lang-class";
    github.className = "github-class";
  }
};

const hiddenDivs = Array.from(document.querySelectorAll("li"));

function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;

  hiddenDivs.forEach((hiddenDiv) => {
    if (scrollPosition >= 1200 && scrollPosition <= 2200) {
      hiddenDiv.classList.add("visible-div");
      hiddenDiv.classList.remove("hidden-div");
    } else {
      hiddenDiv.classList.add("hidden-div");
      hiddenDiv.classList.remove("visible-div");
    }
  });
}

window.addEventListener("scroll", handleScroll);


function downScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const hiddenFrameDivs = document.getElementById('frameworks')


  if (scrollPosition >= 2000 && scrollPosition <= 2600) {
    hiddenFrameDivs.classList.add("first-line-modified");
  } else {
    hiddenFrameDivs.classList.remove("first-line-modified")
  };
}

window.addEventListener('scroll', downScroll);