
const projects = [
    {
        link: "projects/agenda/index.html",
        imgSrc: "images/assets/css.png",
        imgAlt: "Agenda Project Icon",
        name: "WebApp de Agendamiento (En Pausa)",
        target: "_blank",
        spinner: true
    },

    {
        link: "https://github.com/zstral/CRUDitems",
        imgSrc: "images/assets/net.png",
        imgAlt: "CRUD Items Project Icon",
        name: "CRUD Items (ASP.NET Core + SQLite)",
        target: "_blank",
        spinner: false
    },

    {
        link: "projects/SafePass/index.html",
        imgSrc: "images/assets/js.png",
        imgAlt: "SafePass Project Icon",
        name: "SafePass (Generador de Contraseñas)",
        target: "_blank",
        spinner: false
    }
];

const projectContainer = document.getElementById("projectContainer");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectLink = document.createElement("a");
          projectLink.href = project.link;
          projectLink.target = project.target;

    const projectImg = document.createElement("img");
          projectImg.src = project.imgSrc;
          projectImg.width = 28;
          projectImg.height = 28;
          projectImg.alt = project.imgAlt;

    const projectName = document.createElement("span");
          projectName.className = "nameproj";
          projectName.textContent = project.name;
          projectLink.appendChild(projectImg);
          projectLink.appendChild(projectName);
          projectDiv.appendChild(projectLink);

    if (project.spinner) {
        const spinnerDiv = document.createElement("div");
              spinnerDiv.classList.add("spinner");
              for (let i = 0; i < 6; i++) {
                    const spinnerChild = document.createElement("div");
                    spinnerDiv.appendChild(spinnerChild);
                    }
        projectDiv.appendChild(spinnerDiv);
        }
        projectContainer.appendChild(projectDiv);
    });