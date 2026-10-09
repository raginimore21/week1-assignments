const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        document.getElementById("result").innerText =
            "Thank you " + name + "! Message submitted.";

        form.reset();

    });

}
