const btn = document.querySelector("#btn-browse-collection");

const product1 = document.getElementById("product-1");

btn.addEventListener("click", () => {
  product1.scrollIntoView({
    behavior: "smooth",
  });
});
