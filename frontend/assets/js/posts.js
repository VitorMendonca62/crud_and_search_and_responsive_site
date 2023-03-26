const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function fetchAPI() {
  const response = await fetch(URL_POSTS + `/${id}`);
  const data = await response.json();
  return data;
}

async function showPost() {
  const post = await fetchAPI();
  document.querySelector(".title").innerText = post.title;
  document.querySelector(".category").innerText = post.category;
  document.querySelector(".slug").innerText = post.slug;
}

async function deletePost() {
  const response = await fetch(URL_POSTS + `/${id}`, {
    method: "DEELTE",
  });
  console.log(response);
}

document.querySelector(".delete").addEventListener("click", deletePost);
showPost();
