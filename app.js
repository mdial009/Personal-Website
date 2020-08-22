// ********** Nav Toggle ************
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (e) {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
// ********** Dark Mode ************
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
    quote: "Never stop fighting for what you believe in.",
    author: "Ana",
  },
  {
    quote: "It's just a scratch. You'll be fine.",
    author: "Ana",
  },
  {
    quote: "Ever get that feeling of déjà vu?",
    author: "Tracer",
  },
  {
    quote: "With every death, comes honor. With honor, redemption.",
    author: "Hanzo",
  },
  {
    quote: "Simple geometry",
    author: "Hanzo",
  },
  {
    quote: "From one thing, know ten thousand things.",
    author: "Hanzo",
  },
  {
    quote: "Defeat... is the first step to a better result.",
    author: "Hanzo",
  },
  {
    quote: "Master your fears as they master you.",
    author: "Hanzo",
  },
  {
    quote: "There is beauty in simplicity.",
    author: "Hanzo",
  },
  {
    quote: "Strength flows through me!",
    author: "Genji",
  },
  {
    quote: "A steady blade balances the soul.",
    author: "Genji",
  },
  {
    quote: "To know yourself, is to be at peace.",
    author: "Genji",
  },
  {
    quote: "我が心明鏡止水",
    author: "Genji",
  },
  {
    quote: "Together, we are strong.",
    author: "Zarya",
  },
  {
    quote: "Just like in training: visualize, then execute.",
    author: "Zarya",
  },
  {
    quote: "Don’t just stand around; do something.",
    author: "Zarya",
  },
  {
    quote: "True strength is hard work and determination, not augmentation!",
    author: "Zarya",
  },
  {
    quote: "Only through conflict do we evolve.",
    author: "Doomfist",
  },
  {
    quote: "Lose the battle, win the war.",
    author: "Doomfist",
  },
  {
    quote: "Defeat makes me stronger.",
    author: "Doomfist",
  },
  {
    quote: "I take it on the chin.",
    author: "Doomfist",
  },
  {
    quote: "Once the mission starts, no more messing around.",
    author: "Doomfist",
  },
  {
    quote: "Justice ain't gonna dispense itself.",
    author: "McCree",
  },
  {
    quote: "I feel like a man possessed!",
    author: "McCree",
  },
  {
    quote: "I'm not good, not bad, but I sure as hell ain't ugly.",
    author: "McCree",
  },
  {
    quote: "Reach for the sky.",
    author: "McCree",
  },
  {
    quote: "Buckle up, this gunslinger's loaded!",
    author: "McCree",
  },
  {
    quote: "Well, it's high noon somewhere in the world.",
    author: "McCree",
  },
  {
    quote: "I'm not much for standin' around.",
    author: "McCree",
  },
  {
    quote: "Quit lollygagging, get on the point!",
    author: "McCree",
  },
  {
    quote: "Everything can be hacked, and everyone.",
    author: "Sombra",
  },
  {
    quote: "We all make mistakes.",
    author: "Sombra",
  },
  {
    quote: "The true enemy of humanity is disorder.",
    author: "Symmetra",
  },
  {
    quote: "I will correct my mistakes",
    author: "Symmetra",
  },
  {
    quote: "Hard work and dedication pays off.",
    author: "Symmetra",
  },
  {
    quote: "I’ve taken your opinion under advisement.",
    author: "Symmetra",
  },
  {
    quote: "If everyone performs their function, victory is assured.",
    author: "Symmetra",
  },
  {
    quote: "Do not deviate from the plan and victory will soon be ours.",
    author: "Symmetra",
  },
  {
    quote: "You have to watch out for the one percent.",
    author: "Ashe",
  },
  {
    quote: "I stick up for my crew.",
    author: "Ashe",
  },
  {
    quote: "We have an understanding.",
    author: "Ashe",
  },
  {
    quote: "Smoke 'em outta there.",
    author: "Ashe",
  },
  {
    quote: "You're gettin' me riled up.	",
    author: "Ashe",
  },
  {
    quote: "Time to change things up.	",
    author: "Ashe",
  },
  {
    quote: "Nothing wrong with a little self improvement.	",
    author: "Ashe",
  },
  {
    quote: "Get too close to the sun, you're gonna burn!	",
    author: "Ashe",
  },
  {
    quote: "There's no stoppin' me once I get into a rhythm!	",
    author: "Ashe",
  },
  {
    quote: "I get the idea.	",
    author: "Ashe",
  },
  {
    quote: "There’s still fight in me yet!",
    author: "Reinhardt",
  },
  {
    quote: "Don't worry, my friends! I will be your shield!",
    author: "Reinhardt",
  },
  {
    quote: "Do I have your attention yet?",
    author: "Reinhardt",
  },
  {
    quote: "Bring me another!",
    author: "Reinhardt",
  },
  {
    quote: "To see justice done, is it’s own reward!",
    author: "Reinhardt",
  },
  {
    quote: "Respect your elders.",
    author: "Reinhardt",
  },
  {
    quote: "Fortune favors the bold.",
    author: "Reinhardt",
  },
  {
    quote: "That which doesn't kill you... makes you stronger.",
    author: "Reaper",
  },
  {
    quote: "Actions have Consequences.",
    author: "Reaper",
  },
  {
    quote: "No shortcuts, just hard work.",
    author: "Brigitte",
  },
  {
    quote: "There’s no prize for coming in second!",
    author: "Torbjörn",
  },
  {
    quote: "I'm giving it all I've got!",
    author: "Torbjörn",
  },
  {
    quote: "You're making a chicken out of a feather.",
    author: "Torbjörn",
  },
  {
    quote: "Our world is worth fighting for.",
    author: "Mei",
  },
  {
    quote: "A-Mei-zing!",
    author: "Mei",
  },
  {
    quote: "Overcome all obstacles.",
    author: "Mei",
  },
  {
    quote: "Look at this team; we’re gonna do great!",
    author: "Lucio",
  },
  {
    quote: "Come on, keep your head up.",
    author: "Lucio",
  },
  {
    quote:
      "Statistically speaking, I usually get most of my team back alive, but who's counting?",
    author: "Baptiste",
  },
  {
    quote: "Imagine the worst possible outcome. Now… avoid that.	",
    author: "Baptiste",
  },
  {
    quote: "Buckle down! Get it done!	",
    author: "Baptiste",
  },
  {
    quote: "Ann kòmanse bagay yo.",
    author: "Baptiste",
  },
  {
    quote: "That could have gone better.",
    author: "Baptiste",
  },
  {
    quote: "Ann kenbe atitid pozitif lan.",
    author: "Baptiste",
  },
  {
    quote: "Pick yourself up, dust yourself off.",
    author: "Baptiste",
  },
  {
    quote: "Imagination is the essence of discovery.",
    author: "Winston",
  },
  {
    quote: "Can't Stop Won't Stop",
    author: "Lucio",
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
