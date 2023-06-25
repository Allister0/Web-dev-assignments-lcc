/* Function to toggle mobile menu */
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

/* Function to display a popup when a project is clicked */
function displayPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

/* Function to close the popup */
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

/* Function to run Python code in the browser */
function runPython() {
    var code = document.getElementById("main.py").value;
    var output = document.getElementById("python-output");
    try {
        var result = Python.evaluate(code);
        output.innerHTML = result.toString();
    } catch (error) {
        output.innerHTML = error.toString();
    }
    const form = document.querySelector('form');
    function submitForm() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        const emailBody = `
             Name: ${name}
             Email: ${email}
             Message: ${message}`;

        window.location.href = `mailto:bella41@mail.lcc.edu?subject=Contact Form Submission&body=${emailBody}`;
    }

};

