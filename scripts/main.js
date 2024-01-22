const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/headshot.jpg") {
    myImage.setAttribute("src", "images/side.jpg");
  } else {
    myImage.setAttribute("src", "images/headshot.jpg");
  }
};


const NortheasternImage = document.querySelector("#nulogo")
NortheasternImage.onclick = () => {
    const currWidth = NortheasternImage.getAttribute("width");
    if (currWidth === "150") {
      NortheasternImage.setAttribute("width", "600");
      NortheasternImage.setAttribute("height", "600");
    } else {
      NortheasternImage.setAttribute("width", "150");
      NortheasternImage.setAttribute("height", "150");
    }
  };