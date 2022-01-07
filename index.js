const productsInCart = document.querySelector(".rendered-cart");
const category = document.querySelectorAll(".category");
const productsDisplay = document.querySelectorAll(".products-display");
const badge = document.querySelector(".badge");
const cartInfo = document.querySelector(".cartInfo h2");

////////// function to set multiple attributes //////////

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

////////// render products display //////////

data.map((product) => {
  const renderProduct = document.createElement("div");
  renderProduct.classList.add("product", product.category);

  const renderProductImg = document.createElement("img");
  setAttributes(renderProductImg, {
    src: product.imageSrc,
    alt: product.name,
  });

  const renderProductH3 = document.createElement("h3");
  renderProductH3.textContent = product.name;

  const renderProductH4 = document.createElement("h4");
  renderProductH4.textContent = `₹  ${product.price}`;

  const renderProductBtn = document.createElement("button");
  renderProductBtn.textContent = "Add to cart";
  setAttributes(renderProductBtn, {
    class: "btn-add-to-cart",
    onclick: `addToCart(${product.id})`,
  });

  renderProduct.appendChild(renderProductImg);
  renderProduct.appendChild(renderProductH3);
  renderProduct.appendChild(renderProductH4);
  renderProduct.appendChild(renderProductBtn);

  //innerHTML is avoided for security

  if (renderProduct.classList.contains("category1-laptop")) {
    productsDisplay[0].append(renderProduct);
  } else if (renderProduct.classList.contains("category2-mobile")) {
    productsDisplay[1].append(renderProduct);
  } else if (renderProduct.classList.contains("category3-camera")) {
    productsDisplay[2].append(renderProduct);
  }
});

////////// Change category //////////

function changeCategory(event, catType) {
  productsDisplay.forEach((prds) => {
    prds.style.display = "none";
  });

  category.forEach((c) => c.classList.remove("active"));
  event.currentTarget.className += " active";

  document.getElementById(catType).style.display = "flex";
}

document.querySelector(".category1").click();

/////// Add to cart functionality ///////

let dynamicCart = JSON.parse(sessionStorage.getItem("dynamicCart")) || [];
updateCart();

function addToCart(id) {
  // event.preventDefault();
  console.log(dynamicCart);

  if (dynamicCart.some((itm) => itm.id === id)) {
    changeQuantity("plus", id);
  } else {
    let item = data.find((itm) => id === itm.id);
    item.quantityInCart = 1;
    dynamicCart.push({ ...item });
  }

  updateCart();
}

////////// update cart items functionality //////////
function updateCart() {
  renderCart();
  subTotal();

  sessionStorage.setItem("dynamicCart", JSON.stringify(dynamicCart));
}

////////// Render to cart functionality //////////
function renderCart() {
  productsInCart.innerHTML = "";

  if (dynamicCart.length < 1) {
    productsInCart.innerHTML = `<h3 style="text-align: center; margin-top: 30%;">Hi, your cart is empty.</h3>`;
  }

  dynamicCart.map((cartitm) => {
    let itemInCart = document.createElement("div");
    itemInCart.classList.add("pincart");

    let itemInCartImg = document.createElement("img");
    setAttributes(itemInCartImg, {
      src: cartitm.imageSrc,
      alt: cartitm.name,
      width: "100px",
    });

    let itemInCartDiv = document.createElement("div");

    itemInCartDiv.innerHTML = `<h3>${cartitm.name}</h3>
      <h4>Quantity : <button class="btn-decrease" onclick="changeQuantity('minus', ${cartitm.id})">-</button><span
      class="qty">${cartitm.quantityInCart}</span><button class="btn-increase" onclick="changeQuantity('plus', ${cartitm.id})">+</button>
      </h4>`;

    let itemInCartBtn = document.createElement("button");
    itemInCartBtn.textContent = "Remove";
    setAttributes(itemInCartBtn, {
      class: "btn-remove",
      onclick: `removeProduct(${cartitm.id})`,
    });

    itemInCart.appendChild(itemInCartImg);
    itemInCart.appendChild(itemInCartDiv);
    itemInCart.appendChild(itemInCartBtn);

    productsInCart.append(itemInCart);
  });
}

function subTotal() {
  let badgeUpdate = 0;
  let cartPrice = 0;

  dynamicCart.forEach((itm) => {
    badgeUpdate += itm.quantityInCart;
    cartPrice += itm.quantityInCart * itm.price;
  });
  badge.innerHTML = badgeUpdate;
  cartInfo.innerHTML = `<h2 style="text-align: center;">Cart : (₹  ${cartPrice})</h2>
  <hr>`;
}

/////////////// show cart on click ///////////////

const showCart = document.querySelector(".products-in-cart");

showCart.style.display = "none";

const cart = document.querySelector(".cart");
cart.addEventListener("click", inCart);

function inCart() {
  if (showCart.style.display == "none") {
    showCart.style.display = "block";
  } else {
    showCart.style.display = "none";
  }
}

/////////////// products update and remove functionality ///////////////

function removeProduct(id) {
  dynamicCart = dynamicCart.filter((itm) => itm.id != id);
  updateCart();
}

function changeQuantity(change, id) {
  dynamicCart = dynamicCart.map((itm) => {
    if (itm.id === id) {
      if (change === "plus") {
        itm.quantityInCart += 1;
      } else if (change === "minus" && itm.quantityInCart > 1) {
        itm.quantityInCart -= 1;
      }
    }
    return {
      ...itm,
    };
  });

  updateCart();
}
