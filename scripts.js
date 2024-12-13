document.addEventListener("DOMContentLoaded", () => {
  const pageContent = document.getElementById("page-content");

  pageContent.classList.add("fade-in");

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {

      if (link.hostname === window.location.hostname) {
        e.preventDefault(); // Prevent default navigation

        pageContent.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Match CSS transition duration
      }
    });
  });
});



<script>
  document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.title;
    const h1 = document.querySelector("h1");
    if (h1) {
      h1.textContent = pageTitle;
    }
  });
</script>