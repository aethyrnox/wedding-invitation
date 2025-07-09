window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.opacity = "0";
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
});