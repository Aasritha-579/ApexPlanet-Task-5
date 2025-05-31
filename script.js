document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");

  const projects = [
    {
      title: "To-Do List App",
      description: "A simple task manager using local storage.",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Weather App",
      description: "Fetches live weather data using an API.",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Blog Template",
      description: "A clean and responsive blog layout.",
      image: "https://via.placeholder.com/300x150",
    }
  ];

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" loading="lazy" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectList.appendChild(card);
  });

  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your message!");
    e.target.reset();
  });
});
