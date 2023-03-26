document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const elemTitle = document.querySelector("[name='title']");
  const elemCategory = document.querySelector("[name='category']");
  const elemSlug = document.querySelector("[name='slug']");

  const body = {
    title: elemTitle.value,
    category: elemCategory.value,
    slug: elemSlug.value,
  };

  const response = await fetch("http://localhost:4004/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    document.querySelector("textarea").innerText = "";
    document.querySelector(".alert").classList.add("sucess");
    document.querySelector(".alert").innerText = "Post cadastrado com sucesso";

    setTimeout(() => {
      document.querySelector(".alert").classList.remove("sucess");
      document.querySelector(".alert").innerText = "";
    }, 4000);
  }
});
