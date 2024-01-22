const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://i.postimg.cc/JDkr8Jkv/headshot.jpg") {
    myImage.setAttribute("src", "https://i.postimg.cc/5HG4Dp68/side.jpg.jpg");
  } else {
    myImage.setAttribute("src", "https://i.postimg.cc/JDkr8Jkv/headshot.jpg");
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