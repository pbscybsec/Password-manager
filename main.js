document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("passwordForm");
    const passwordList = document.getElementById("passwordList");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const website = document.getElementById("websiteInput").value;
        const username = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;

        const passwordItem = document.createElement("div");
        passwordItem.innerHTML = `
            <strong>Website:</strong> ${website}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Password:</strong> ${password}<br><br>
        `;

        passwordList.appendChild(passwordItem);

        // Clear form inputs after saving
        passwordForm.reset();
    });
});
