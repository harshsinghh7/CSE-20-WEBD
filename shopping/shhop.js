document.body.innerHTML = `
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{
    background:#f4f4f4;
}

header{
    background:#222;
    color:white;
    text-align:center;
    padding:20px;
}

.products{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;
    padding:30px;
}

.card{
    background:white;
    width:250px;
    border-radius:10px;
    overflow:hidden;
    
}

.card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.card-content{
    padding:15px;
}

.price{
    color:green;
    font-size:20px;
    margin:10px 0;
}

button{
    width:100%;
    padding:10px;
    background:#007bff;
    color:white;
    border:none;
    cursor:pointer;
    border-radius:5px;
}

button:hover{
    background:#0056b3;
}

.cart{
    position:fixed;
    top:20px;
    right:20px;
    background:white;
    padding:10px 15px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(124, 52, 52, 0.2);
}
</style>

<header>
    <h1>My Shopping Store</h1>
</header>

<div class="cart">
    🛒 Cart: <span id="cartCount">0</span>
</div>

<div class="products" id="products"></div>
`;

const products = [
    {
        name: "Laptop",
        price: 50000,
        image: "https://picsum.photos/300/200?1"
    },
    {
        name: "Smartphone",
        price: 20000,
        image: "https://picsum.photos/300/200?2"
    },
    {
        name: "Headphones",
        price: 3000,
        image: "https://picsum.photos/300/200?3"
    },
    {
        name: "Smart Watch",
        price: 5000,
        image: "https://picsum.photos/300/200?4"
    }
];

let cart = 0;

const container = document.getElementById("products");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}">
        <div class="card-content">
            <h3>${product.name}</h3>
            <div class="price">₹${product.price}</div>
            <button>Add to Cart</button>
        </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
        cart++;
        document.getElementById("cartCount").textContent = cart;
        alert(product.name + " added to cart!");
    });

    container.appendChild(card);
});