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



// Add event listeners to all 'Roles and Responsibilities' buttons
document.querySelectorAll('.read-more-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const targetElement = document.querySelector(targetId);

    // Toggle the active class on the button
    this.classList.toggle('active');

    // Toggle visibility of the corresponding roles content
    if (targetElement.style.display === "none" || targetElement.style.display === "") {
      targetElement.style.display = "block";
    } else {
      targetElement.style.display = "none";
    }
  });
});



