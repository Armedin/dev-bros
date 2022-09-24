document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded");
        document.querySelector("form").addEventListener("submit", function(e) {
            e.preventDefault();
            const dataOne = document.querySelector("#projectInput").data;
            console.log(dataOne);
    });
});
