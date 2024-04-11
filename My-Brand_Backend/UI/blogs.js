document.addEventListener("DOMContentLoaded", function () {
  const blogsDiv = document.querySelector(".blogs");

  const articles = JSON.parse(localStorage.getItem("blog")) || [];

  articles.forEach((articleData) => {
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("row");

    const holderDiv = document.createElement("div");
    holderDiv.classList.add("holder");

    const picDiv = document.createElement("div");
    picDiv.classList.add("picz");

    const img = document.createElement("img");
    img.src = articleData.image;

    const h3 = document.createElement("h3");
    h3.textContent = articleData.title;

    const p = document.createElement("p");
    p.textContent = articleData.content;

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const reactionsDiv = document.createElement("div");
    reactionsDiv.classList.add("reactions");

    const likeLabel = document.createElement("label");
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    const likeCheckbox = document.createElement("input");
    likeCheckbox.type = "checkbox";
    likeCheckbox.id = "like";
    likeLabel.appendChild(likeIcon);
    likeLabel.appendChild(likeCheckbox);

    const commentLabel = document.createElement("label");
    const commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular", "fa-comment");
    const commentCheckbox = document.createElement("input");
    commentCheckbox.type = "checkbox";
    commentCheckbox.id = "comment";
    commentLabel.appendChild(commentIcon);
    commentLabel.appendChild(commentCheckbox);

    const readPostLink = document.createElement("a");
    const url = `article.html?title=${encodeURIComponent(articleData.title)}`
    readPostLink.href = url 
    readPostLink.textContent = "Read post";

    picDiv.appendChild(img);
    holderDiv.appendChild(picDiv);
    holderDiv.appendChild(h3);
    holderDiv.appendChild(p);
    reactionsDiv.appendChild(likeLabel);
    reactionsDiv.appendChild(commentLabel);
    actionDiv.appendChild(reactionsDiv);
    actionDiv.appendChild(readPostLink);
    holderDiv.appendChild(actionDiv);
    articleContainer.appendChild(holderDiv);
    blogsDiv.appendChild(articleContainer);
  });
});