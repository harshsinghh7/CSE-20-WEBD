document.body.innerHTML = `
<h2>What is the capital of India?</h2>

<button onclick="check('Delhi')">Delhi</button>
<button onclick="check('Mumbai')">Mumbai</button>
<button onclick="check('Lucknow')">Lucknow</button>

<h3 id="result"></h3>
`;

window.check = function(ans){
    if(ans==="Delhi"){
        document.getElementById("result").innerText="Correct";
    }else{
        document.getElementById("result").innerText="Wrong";
    }
}