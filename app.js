const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
  //sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// classlist - show/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (e) {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";

  applyTheme(savedTheme);

  /*for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  document.querySelector("#selTheme").addEventListener("change", function () {
    localStorage.setItem("theme", this.value);
    applyTheme(this.value);
  }); */
});

// ********** Set Date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** End Of Set Date ************

// ********** Cursor ************
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});
// ********** End Of Cursor ************

// ********** Quotes ************

let quotes = [
  {
    quote: "Science will reveal the truth.",
    author: "Moira",
  },
  {
    quote: "I must reflect upon this.",
    author: "Moira",
  },
  {
    quote: "Perhaps a new methodology is required.",
    author: "Moira",
  },
  {
    quote: "When faced with a setback, we must challenge our assumptions.",
    author: "Moira",
  },
  {
    quote: "Surrender to my will!",
    author: "Moira",
  },
  {
    quote: "What is that melody?",
    author: "Sigma",
  },
  {
    quote: "There is no obligation for the universe to make sense to you.",
    author: "Sigma",
  },
  {
    quote: "There is no obligation for the universe to make sense to you.",
    author: "Sigma",
  },
  {
    quote: "What is that melody?",
    author: "Sigma",
  },
  {
    quote: "There is no obligation for the universe to make sense to you.",
    author: "Sigma",
  },
  {
    quote: "Double... triple... quadruple check your math!",
    author: "Sigma",
  },
  {
    quote: "An unexpected but not unwelcome development.	",
    author: "Sigma",
  },
  {
    quote: "The equations were correct... The problem must lie elsewhere.	",
    author: "Sigma",
  },
  {
    quote: "Situational awareness could save your life-- I recommend it.",
    author: "Moira",
  },
  {
    quote: "I'm on fire! All evidence supports this claim.",
    author: "Moira",
  },
  {
    quote: "What an interesting hypothesis.",
    author: "Moira",
  },
  {
    quote: "True self is without form.",
    author: "Zenyatta",
  },
  {
    quote: "Adversity is an opportunity for change.",
    author: "Zenyatta",
  },
  {
    quote: "Repetition is the path to mastery.",
    author: "Zenyatta",
  },
  {
    quote: "Overconfidence is a flimsy shield.",
    author: "Zenyatta",
  },
  {
    quote: "Pain is an excellent teacher.",
    author: "Zenyatta",
  },
  {
    quote: "You are your own worst enemy.",
    author: "Zenyatta",
  },
  {
    quote: "A closed mind is already defeated.",
    author: "Zenyatta",
  },
  {
    quote: "In anger, you defeat only yourself.",
    author: "Zenyatta",
  },
  {
    quote: "Your setback is only temporary.",
    author: "Zenyatta",
  },
  {
    quote: "You must learn from your mistakes.",
    author: "Zenyatta",
  },
  {
    quote: "Move too quickly, and you overlook much.",
    author: "Zenyatta",
  },
  {
    quote: "Knock me down, and I'll keep getting back up.",
    author: "Soldier 76",
  },
  {
    quote: "I'm a man on a mission; stay out of my way.",
    author: "Soldier 76",
  },
  {
    quote: "",
    author: "",
  },
  {
    quote: "",
    author: "",
  },
];

const quotebtn = document.getElementById("quote-btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

quotebtn.addEventListener("click", getQuote);

function getQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
  author.innerHTML = "<span>-</span>" + quotes[number].author;
}
// ********** End Of Quotes ************

// ********** Tooltips ************

const tooltips = document.querySelectorAll(".all-tooltip .tooltip");
const fullDiv = document.querySelector("section");
const container = document.querySelector(".container");
let timeoutId;
window.addEventListener("resize", contentPosition);
window.addEventListener("DOMContentLoaded", contentPosition);

function contentPosition() {
  tooltips.forEach((tooltip) => {
    const pin = tooltip.querySelector(".pin");
    const content = tooltip.querySelector(".tooltip-content");
    const arrow = tooltip.querySelector(".arrow");
    const pinLeft = pin.offsetLeft;
    if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
      const extraLeft =
        fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2);
      // console.log('right-conflict', tooltip)
      content.style.left =
        pinLeft - content.offsetWidth / 2 + extraLeft - 30 + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    } else if (
      pin.offsetLeft + container.offsetLeft <
      content.offsetWidth / 2
    ) {
      // console.log('left conflict', pin.offsetLeft)
      content.style.left = -container.offsetLeft + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    } else {
      content.style.left = pinLeft - content.offsetWidth / 2 + "px";
      content.style.top = pin.offsetTop + 30 + "px";
    }
    arrow.style.left =
      pinLeft - content.offsetLeft + pin.offsetWidth / 2 + "px";
  });
}
tooltips.forEach((tooltip) => {
  const pin = tooltip.querySelector(".pin");
  const content = tooltip.querySelector(".tooltip-content");
  pin.addEventListener("mousemove", () => {
    tooltip.classList.add("active");
  });
  pin.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
    }, 1000);
  });
  content.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    tooltip.classList.add("active");
  });
  content.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      tooltip.classList.remove("active");
    }, 1000);
  });
});

// ********** End Of Tooltips ************
