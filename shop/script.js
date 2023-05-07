const produtc = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
};

var allProducts = [];

if (localStorage.getItem("allProducts")) {
    allProducts = JSON.parse(localStorage.getItem("allProducts"));
}

let menClothing = document.getElementById("menClothing");
let womenClothing = document.getElementById("womenClothing");
let jewellery = document.getElementById("jewellery");
let electronics = document.getElementById("electronics");
let filterBtns = document.querySelectorAll(".filter");
let menContainer = document.getElementById("menContainer");
let womenContainer = document.getElementById("womenContainer");
let jeweleryContainer = document.getElementById("jeweleryContainer");
let electronicsContainer = document.getElementById("electronicsContainer");
let searchBtn = document.getElementById("search");
let colorsBtn = document.querySelectorAll(".colorBtn");
let sizeBtn = document.querySelectorAll(".sizeBtn");
let rangeBtn = document.querySelector("#range");

let priceBtn = document.querySelectorAll(".priceBtn");








// console.log(filterBtns);

fetch("https://fakestoreapi.com/products")
    .then((resp) => {
        return resp.json()
    })

    .then((data) => {


        // console.log(data);
        allProducts = data.map((item) => {
            let color = ["red", "blue", "green", "black", "white"]
            let randomColor = Math.floor(Math.random() * color.length);
            item.color = color[randomColor];
            // console.log(item.color);
            let size = ["S", "M", "L", "XL"];
            let randomSize = Math.floor(Math.random() * size.length);
            item.size = size[randomSize];
            // console.log(item.size);
            //  console.log(item)
            return item;


        })
        showProducts(allProducts);
        // console.log(allProducts);
        localStorage.setItem("allProducts", JSON.stringify(allProducts));

    })

function showProducts(allProducts) {

    menClothing.innerHTML = ""
    womenClothing.innerHTML = ""
    electronics.innerHTML = ""
    jewellery.innerHTML = ""

    allProducts.map((item) => {

        if (item.category === "men's clothing") {

            menClothing.innerHTML += `
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
      <button id="addBtn" onclick="addToCart(this,${item.id})">Add to Cart</button>
   </div>
      `
        }
        else if (item.category === "women's clothing") {

            womenClothing.innerHTML += `
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
      <button id="addBtn" onclick="addToCart(this,${item.id})">Add to Cart</button>
   </div>
      `
        }
        else if (item.category === "jewelery") {

            jewellery.innerHTML += `
      <div class="item" >
      <img src=${item.image} alt="Item" />
      <div class="title">${item.title}</div>
      <div class="info">
          <div class="row">
              <div class="price">$${item.price}</div>
            
          <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn" onclick="addToCart(this,${item.id})">Add to Cart</button>
   </div>
      `
        }
        else if (item.category === "electronics") {

            electronics.innerHTML += `
      <div class="item" >
      <img src=${item.image} alt="Item" />
      <div class="title">${item.title}</div>
      <div class="info">
          <div class="row">
              <div class="price">$${item.price}</div>
              
          </div>
          
          <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn" onclick="addToCart(this,${item.id})">Add to Cart</button>
   </div>
      `
        }
    });
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((btn) => {
            btn.classList.remove("active")
        })
        btn.classList.add("active");

        if (btn.innerHTML === "Mens") {
            womenContainer.style.display = "none";
            jeweleryContainer.style.display = "none";
            electronicsContainer.style.display = "none"
        }
        else if (btn.innerHTML === "Womens") {
            womenContainer.style.display = "block"
            menContainer.style.display = "none"
            jeweleryContainer.style.display = "none";
            electronicsContainer.style.display = "none"
        }
        else if (btn.innerHTML === "Jewellery") {
            jeweleryContainer.style.display = "block"
            menContainer.style.display = "none"
            womenContainer.style.display = "none"
            electronicsContainer.style.display = "none"
        }
        else if (btn.innerHTML === "Electronics") {
            electronicsContainer.style.display = "block"
            menContainer.style.display = "none"
            womenContainer.style.display = "none"
            jeweleryContainer.style.display = "none"
        }

    })

})


searchBtn.addEventListener("input", () => {

    // console.log("search");
    let filterProducts = allProducts.filter((item) => {
        if (item.title.toLowerCase().includes(search.value.trim().toLowerCase())) {
            return item;
        }
    })
    // console.log(filterProducts);
    showProducts(filterProducts);
})

// console.log(colorsBtn);

colorsBtn.forEach((btn) => {

    // console.log("a");
    btn.addEventListener("change", (e) => {
        // console.log(e.target.value);
        if(e.target.checked){

            let colorValue = e.target.value;
            let filterColors = allProducts.filter((item) => {
                // console.log(item.color)
                if (item.color.includes(colorValue)) {
                    return item;
                }
            })
            // console.log(filterColors);
            showProducts(filterColors);
        }
        else{
            showProducts(allProducts);
        }
    })

})

sizeBtn.forEach((btn) => {

    // console.log("a");
    btn.addEventListener("change", (e) => {
        // console.log(e.target.value);
        if(e.target.checked){

            let sizeValue = e.target.value;
            let filterSize = allProducts.filter((item) => {
                // console.log(item.color)
                if (item.size === sizeValue) {
                    return item;
                }
            })
            // console.log(filterColors);
            showProducts(filterSize);
        }
        else{
            showProducts(allProducts);
        }
    })

})

var rangeVal;
rangeBtn.addEventListener("change", (e) => {
        console.log("a");

         rangeVal=e.target.value;
       console.log(rangeVal);
       let filterRange=allProducts.filter((item)=>{
        if(Math.floor(item.rating.rate<=rangeVal)){
            return item;
        }
      
       

    })
    showProducts(filterRange);
       if(rangeVal==="0"){
        console.log(allProducts);
        console.log("x");
        showProducts(allProducts);
       }
    //    console.log(filterRange)

    })



priceBtn.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener("change", (e) => {
        // console.log("a")
        if(e.target.checked){
            console.log("g");
            var priceArray = e.target.value;
            var filterPrice = allProducts.filter((item) => {
    
                if (priceArray === "0-25" && (item.price > 0 && item.price < 25)) {
                    return item;
                }
                else if (priceArray === "25-50" && (item.price > 25 && item.price < 50)) {
                    return item;
                }
                else if (priceArray === "50-100" && (item.price > 50 && item.price < 100)) {
                    return item;
                }
                else if (priceArray === "100on" && item.price > 100) {
                    return item;
                }
              
    
            })
            // console.log(filterPrice)
            showProducts(filterPrice);
        }
        else{
            showProducts(allProducts);
        }
    })
})

let cartArray=[];

function addToCart(e,id){
console.log("a");
cartArray.push(allProducts[id-1]);
// console.log(cartArray);
localStorage.setItem("cartArray",JSON.stringify(cartArray));

}
 








