document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded");
        document.querySelector("form").addEventListener("submit", function(e) {
            e.preventDefault();
            const a = document.getElementById("progressInput").value;
            document.querySelector("form").reset();
    });
});
