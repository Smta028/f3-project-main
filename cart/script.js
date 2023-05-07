
let cartItem = document.querySelector(".items");
let leftContent = document.querySelector(".leftContent");
let price = document.querySelector(".price");
let checkOutBtn = document.querySelector(".checkoutBtn");




let allCartProducts = JSON.parse(localStorage.getItem("cartArray"));
console.log(allCartProducts);
var sum = 0;
function displayCart(allCartProducts) {
    cartItem.innerHTML = "";
    leftContent.innerHTML = "";
    price.innerHTML = "";

    allCartProducts.map((item, index) => {

        sum = sum + item.price;
        cartItem.innerHTML += `
    <div class="item" >
    <img src=${item.image} alt="Item" />
    <div class="title">${item.title}</div>
    <div class="info">
        <div class="row">
            <div class="price">$${item.price}</div>
            <div class="sized">${item.size}</div>
        </div>
        <div class="colors">
            Colors:
            <div class="row">
                <div class="circle" style="background-color: ${item.color}"></div>
            </div>
        </div>
        <div class="row">Rating:${item.rating.rate}</div>
    </div>
    <button id="addBtn" onclick="removeFromCart(this,${index})">Remove From Cart</button>
    </div>
    `
        // let word=item.title.split(" ");


        leftContent.innerHTML += `
    
    <div class="left">
    <li>1.${item.title.slice(0, 12)}....</li>
    <li>₹${item.price}</li>
</div>

`
        price.innerHTML = `
<hr>
                <div class="total">
                    <li>Total</li>
                    <li>₹${sum}</li>
                    </div>
                <button class="checkoutBtn" onclick="removeItem()">click to checkout</button>
`


    })
}
window.onload = displayCart(allCartProducts);

function removeFromCart(e, index) {
    allCartProducts.splice(index, 1);
    localStorage.setItem("cartArray", JSON.stringify(allCartProducts));

    displayCart(allCartProducts);
}
function removeItem() {
    var options = {
        key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
        amount: sum * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "MyShop Checkout",
        description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        theme: {
            color: "#000",
        },
        image:
            "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };

    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage

    // localStorage.clear(allCartProducts)
    localStorage.removeItem("cartArray");
    allCartProducts = [];
    displayCart(allCartProducts);

};


