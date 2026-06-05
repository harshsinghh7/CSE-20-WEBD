const secret = Math.floor(Math.random()*10)+1;

document.body.innerHTML = `
<h1>Guess Number (1-10)</h1>

<input id="guess" type="number">

<button onclick="checkGuess()">
Check
</button>

<h2 id="result"></h2>
`;

window.checkGuess = function(){

    let num = Number(
        document.getElementById("guess").value
    );

    if(num === secret){
        document.getElementById("result").innerText =
        "🎉 Correct!";
    }
    else{
        document.getElementById("result").innerText =
        "❌ Wrong!";
    }
}