function checkLogin() {
    const defaultUsername = "admin";
    const defaultPassword = "12345";
    
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    
    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
        sessionStorage.setItem('loggedIn', 'true');
        alert("Login successful!");
        window.location.href = "portfolio.html";
    } else {
        alert("Incorrect username or password!");
    }
}

function logOut(){
    if(confirm("Are you sure you want to log out?")){
        
        sessionStorage.removeItem('loggedIn');
        alert("Logged out successfully");
        window.location.href = "logIn.html";
    }
}

