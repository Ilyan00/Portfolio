"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // NavBar
  const observer = new IntersectionObserver(
    (entries) => {
      const headerItems = document.querySelectorAll("header a");
      headerItems.forEach((item) => item.classList.remove("active"));

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetLink = document.querySelector(
            `header a[href="#${entry.target.id}"]`
          );
          if (targetLink) {
            targetLink.classList.add("active");
          }
        }
      });
      headerItems.forEach((item, index) => {
        if (item.classList.contains("active")) {
          document.getElementById("progress_bar").style.width = `${
            index * 50
          }%`;
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // bar de recherche
  const reseaux = {
    LinkedIn: "https://www.linkedin.com/in/ilyan-jude-bain-trimbach-1687a9291/",
    GitHub: "https://github.com/ilyan00",
    Email: "mailto:ilyanjudecour@gmail.com",
  };

  const apparition_text = (container, text) => {
    let currentText = "";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        currentText += text[i];
        container.innerHTML = currentText;
      }, 100 * i);
    }

    setTimeout(() => {
      disparition_text(container, text);
    }, 100 * text.length + 2020);
  };

  const disparition_text = (container, text) => {
    let currentText = text;

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        currentText = currentText.slice(0, -1);
        container.innerHTML = currentText;
      }, 100 * (i + 1));
    }
  };

  let i = 0;
  const bar = document.getElementById("bar_recherche");

  let text = Object.keys(reseaux)[0];
  apparition_text(bar, text);

  const interval = setInterval(function () {
    if (i >= Object.keys(reseaux).length - 1) {
      i = 0;
    } else {
      i++;
    }

    let text = Object.keys(reseaux)[i];
    apparition_text(bar, text);

    bar.href = Object.values(reseaux)[i];
  }, 4000);

  // hasard projects

  let color = ["DarkBlue", "Blue", "Red", "Peach"];
  color = [...color].sort(() => Math.random() - 0.5);

  const projects = [
    {
      name: "Project1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel velit pulvinar dignissim.",
      class: "rowS-1 rowE-4 colS-1 colE-4",
    },
    {
      name: "Are you conviced ?",
      description: "Don't hesitate to click on the link bellow to contact me.",
      class: "rowS-1 rowE-4 colS-4 colE-7",
    },
    {
      name: "Project3",
      description: "Maecenas euismod, turpis a efficitur pharetra.",
      class: "rowS-1 rowE-3 colS-7 colE-11",
    },
    {
      name: "Project4",
      description:
        "Nullam consequat, purus at faucibus tincidunt, turpis lacus posuere sapien, ut bibendum neque nisi in justo.",
      class: "rowS-4 rowE-6 colS-1 colE-7",
    },
    {
      name: "Project5",
      description:
        "Proin euismod neque vel nunc bibendum, et dictum arcu scelerisque. Donec at urna ac erat ullamcorper consectetur.",
      class: "rowS-3 rowE-6 colS-7 colE-11",
    },
  ];

  let container = document.getElementById("projects");
  let template = document.getElementById("project");

  container.innerHTML = "";
  container.appendChild(template);
  let id = 0;
  projects.forEach((project) => {
    const project_template = template.cloneNode(true);
    project_template.style.display = "flex";

    project_template.querySelector(".name").innerHTML = project.name;
    project_template.querySelector(".description").innerHTML =
      project.description;
    project_template.className += " " + project.class;
    if (project.name != "Are you conviced ?") {
      project_template.className += " " + color[id];
    } else {
      project_template.className += " " + "Cta";
      project_template.querySelector("a p").innerHTML = "Contact me";
      id--;
    }
    id++;
    container.appendChild(project_template);
  });
  container.innerHTML += `            
  <swiper-container
    style="display: none;"
    class="mySwiper"
    direction="vertical"
    space-between="30"
    mousewheel="true"
    slides-per-view="3"
    loop=4
  >
    <swiper-slide>Sl</swiper-slide>
    <swiper-slide>Sl</swiper-slide>
    <swiper-slide>S</swiper-slide>
    <swiper-slide>S</swiper-slide>
  </swiper-container>`;

  const ctaElements = document.getElementsByClassName("Cta");
  const degree = Math.floor(Math.random() * 360);
  Array.from(ctaElements).forEach((element) => {
    element.style.background = `linear-gradient(${degree}deg, rgba(1, 64, 141, 1) 10%, rgba(71, 108, 175, 1) 100%)`;
  });

  // Swiper Project
  let cards = document.querySelectorAll("#project");

  function addCardClickEvent(card) {
    card.querySelector("a").addEventListener("click", () => {
      document.getElementsByClassName("title-section-container")[0].innerHTML =
        card.querySelector("h2").innerHTML;
      document.querySelector(".mySwiper").style.display = "block";
      document.querySelector(".container").style.overflow = "hidden";
      let slides = document.querySelectorAll("swiper-slide");
      card.classList.add("clicked-swiper");
      slides.forEach((slide, index) => {
        slide.innerHTML = `<img src="./src/image/slider/${
          card.querySelector("h2").innerHTML
        }-${index}.jpg" alt="">`;
      });

      cards.forEach((otherCard) => {
        if (!otherCard.classList.contains("clicked-swiper")) {
          otherCard.style.display = "none";
        } else {
          otherCard.querySelector("a p").innerHTML = "Back";
          otherCard.querySelector("a i").classList =
            "fa-solid fa-arrow-rotate-left";
          otherCard.querySelector("a").addEventListener("click", () => {
            document.querySelector(".container").style.overflowY = "scroll";
            document.querySelector(".mySwiper").style.display = "none";
            document.getElementsByClassName(
              "title-section-container"
            )[0].innerHTML = "My Projects";
            cards.forEach((resetCard, index) => {
              if (index != 0) {
                resetCard.style.display = "flex";
              }
              resetCard.classList.remove("clicked-swiper");
              resetCard.querySelector("a p").innerHTML = "Discover";
              resetCard.querySelector("a i").classList =
                "fa-solid fa-arrow-right";
            });
            addCardClickEvent(otherCard);
          });
        }
      });
    });
  }

  cards.forEach((card) => {
    addCardClickEvent(card);
  });

  const styleSheet = document.styleSheets[0];
  const repeatedText = "- Click here to send me an email ".repeat(10).trim();
  styleSheet.insertRule(
    `.point-sec::after { content: "${repeatedText}"; }`,
    styleSheet.cssRules.length
  );

  document
    .querySelector(".point-sec")
    .addEventListener("click", function (event) {
      if (
        event.target === this ||
        event.target === this.querySelector("::before") ||
        event.target === this.querySelector("::after")
      ) {
        const mailtoLink = "mailto:ilyanjudecour@gmail.com";
        window.location.href = mailtoLink;
      }
    });
});
