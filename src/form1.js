document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded");
        document.querySelector("form#responseForm").addEventListener("submit", function(e) {
            e.preventDefault();
            for (i = 0; i<100; i++) {
                console.log(i);
            };
        });
    // document.getElementById("responseForm").addEventListener('submit', function(e) {
    //     console.log("form submitted");
    //     e.preventDefault();
    //     let x = document.querySelector('form.responseForm').elements;
    //     console.log("Username");
    // });
});
