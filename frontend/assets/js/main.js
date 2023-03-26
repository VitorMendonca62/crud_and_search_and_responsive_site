const URL_BASE = "http://localhost:4004/";
const URL_POSTS = URL_BASE + "posts";

async function fetchAPI() {
  const response = await fetch(URL_POSTS);
  const data = await response.json();
  return data;
}

async function showPosts() {
  const posts = await fetchAPI();

  if (posts.length == 0) {
    document.querySelector(".posts").innerHTML =
      "<p>Não existem posts, tente cadastrar um <a href='/cadastro.html'>Cadastre</a> </p>";
  }
  posts.forEach((post) => {
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
}

showPosts();
