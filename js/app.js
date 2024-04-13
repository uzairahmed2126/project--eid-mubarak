document.addEventListener("DOMContentLoaded", (event) => {
  let allText = document.getElementsByClassName("text");
  const mainContainer = document.getElementById("main-container");
  const palestineFlag = document.getElementById("palestine-flag");
  const domFragment = document.createDocumentFragment();
  mainContainer.append(domFragment);
  let eid = ["e", "i", "d", "m", "u", "b", "a", "r", "a", "k"];
  let palestine = [
    "f",
    "r",
    "e",
    "e",
    "p",
    "a",
    "l",
    "e",
    "s",
    "t",
    "i",
    "n",
    "e",
  ];
  for (let i = 0; i < eid.length; i++) {
    let pEl = createEl("p", `text${i}`, eid[i], null);
    pEl.style.animation = `anim 2.${i}s ease-in-out alternate`;
    if (i > 2) {
      eid.slice(i, eid.length);
      pEl.style.color = "#aaaaee";
    }
    mainContainer.append(pEl);
  }

  for (let i = 0; i < palestine.length; i++) {
    let h1El = createEl("h1", `ptext${i}`, palestine[i], null);
    h1El.style.animation = `anim 2.${i}s ease-in-out alternate`;
    if (i > 3) {
      palestine.slice(i, eid.length);
      h1El.style.color = "#eeae10";
    }
    palestineFlag.append(h1El);
  }
  function handleMouseEvent(event) {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const spanEl = createEl("span", "bom", null, null);
    spanEl.style.background = "#" + random();
    spanEl.style.borderRadius = Math.random() * 400 + "%";
    spanEl.style.zIndex = 1;
    spanEl.style.boxShadow = `${Math.random() * 50 + "px"} ${
      Math.random() * 50 + "px"
    } ${Math.random() * 50 + "px"} #090932`;
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    document.body.style.background = "#" + random();
    document.body.style.transition = ".9s ease-in-out";
    document.body.appendChild(spanEl);
    mainContainer.append(spanEl);
  }
  function random() {
    const char = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
      const randomNum = Math.floor(Math.random() * char.length);
      colorCode += char.substring(randomNum, randomNum + 1);
    }
    return colorCode;
  }

  function createEl(elementName, elClass, txt, fragment) {
    const el = document.createElement(elementName);
    el.className = elClass;
    el.innerText = txt;
    domFragment.append(fragment);
    return el;
  }
  document.addEventListener("mouseover", handleMouseEvent);
});
