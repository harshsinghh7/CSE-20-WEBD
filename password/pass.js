document.body.innerHTML = `
<h1>Password Generator</h1>

<button onclick="generatePassword()">
Generate Password
</button>

<h2 id="password"></h2>
`;

window.generatePassword = function(){

    let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

    let password = "";

    for(let i=0;i<10;i++){
        password += chars[Math.floor(Math.random()*chars.length)];
    }

    document.getElementById("passwords").innerText = password;
}