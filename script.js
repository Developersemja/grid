document.getElementById("toggle-button").addEventListener("click", function() {
    const content = document.getElementById("blog-content");
    const button = document.getElementById("toggle-button");

    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        button.textContent = "Hide Content";
    } else {
        content.classList.add("hidden");
        button.textContent = "Show Content";
    }
});
