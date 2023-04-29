const password = document.querySelector("#Password");
const toggle_password = document.querySelector("#togglePassword");

toggle_password.addEventListener("click", () => {
    let type = password.getAttribute("type");
    if (type == "password") {
        type = "text";
    }
    else {
        type = "password";
    }
    password.setAttribute("type", type);
    toggle_password.classList.toggle("bi-eye");

    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Submitted Sucessful");
    });

})