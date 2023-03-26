document.querySelector(".hamburguer").addEventListener("click", (event) => {
  document.querySelector(".menu").classList.toggle("menu-active");
});

document
  .querySelector("[name='search']")
  .addEventListener("keyup", async (e) => {
    const URL_BASE = "http://localhost:4004/";
    const URL_POSTS = URL_BASE + "posts";

    const value = { text: e.target.value };

    const response = await fetch(URL_POSTS + "/search", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const data = await response.json();

    document.querySelector(".posts").innerHTML = "";
    data.forEach((post) => {
      document.querySelector(".posts").innerHTML += `
      <div class="card">
        <h2>${post.title}</h2>
        <p class="category">${post.category}</p>
        <p class="slug">${post.slug}</p>
        <a href="posts.html?id=${post.id}" class="button align-center">
          <button>Acessar</button>
        </a>
      </div>
      `;
    });
  });
