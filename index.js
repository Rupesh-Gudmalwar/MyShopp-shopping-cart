const productsInCart = document.querySelector(".rendered-cart");
const category = document.querySelectorAll(".category");
const productsDisplay = document.querySelectorAll(".products-display");
const badge = document.querySelector(".badge");
const cartInfo = document.querySelector(".cartInfo h2");
const checkout = document.querySelector(".checkout");

////////// Products data //////////

const data = [
  {
    id: 1,
    category: "category1-laptop",
    name: "HP corei3",
    price: 41990,
    imageSrc: "images/laptop1.jpeg",
    quantityInCart: 0,
  },
  {
    id: 11,
    category: "category1-laptop",
    name: "ASUS ROG",
    price: 78990,
    imageSrc: "images/laptop2.jpeg",
    quantityInCart: 0,
  },
  {
    id: 12,
    category: "category1-laptop",
    name: "HP Ryzen3",
    price: 39990,
    imageSrc: "images/laptop3.jpeg",
    quantityInCart: 0,
  },
  {
    id: 13,
    category: "category1-laptop",
    name: "ACER Aspire7",
    price: 52990,
    imageSrc: "images/laptop4.jpeg",
    quantityInCart: 0,
  },
  {
    id: 14,
    category: "category1-laptop",
    name: "ASUS Vivobook",
    price: 38990,
    imageSrc: "images/laptop5.jpeg",
    quantityInCart: 0,
  },
  {
    id: 15,
    category: "category1-laptop",
    name: "DELL Vostro",
    price: 40990,
    imageSrc: "images/laptop6.jpeg",
    quantityInCart: 0,
  },
  {
    id: 16,
    category: "category1-laptop",
    name: "HP corei3",
    price: 41990,
    imageSrc: "images/laptop7.jpeg",
    quantityInCart: 0,
  },
  {
    id: 17,
    category: "category1-laptop",
    name: "APPLE Macbook",
    price: 85990,
    imageSrc: "images/laptop8.jpeg",
    quantityInCart: 0,
  },
  {
    id: 18,
    category: "category1-laptop",
    name: "ACER Aspire7",
    price: 55990,
    imageSrc: "images/laptop9.jpeg",
    quantityInCart: 0,
  },
  {
    id: 19,
    category: "category1-laptop",
    name: "ASUS corei3",
    price: 33990,
    imageSrc: "images/laptop10.jpeg",
    quantityInCart: 0,
  },
  {
    id: 2,
    category: "category2-mobile",
    name: "APPLE iPhone 13",
    price: 159900,
    imageSrc: "images/mobile1.jpeg",
    quantityInCart: 0,
  },
  {
    id: 21,
    category: "category2-mobile",
    name: "SAMSUNG Z Fold3",
    price: 157999,
    imageSrc: "images/mobile2.jpeg",
    quantityInCart: 0,
  },
  {
    id: 22,
    category: "category2-mobile",
    name: "SAMSUNG Z Flip3",
    price: 84999,
    imageSrc: "images/mobile3.jpeg",
    quantityInCart: 0,
  },
  {
    id: 23,
    category: "category2-mobile",
    name: "REALME Narzo 50A",
    price: 12499,
    imageSrc: "images/mobile4.jpeg",
    quantityInCart: 0,
  },
  {
    id: 24,
    category: "category2-mobile",
    name: "NOKIA 8.1",
    price: 28999,
    imageSrc: "images/mobile5.jpeg",
    quantityInCart: 0,
  },
  {
    id: 25,
    category: "category2-mobile",
    name: "SAMSUNG F62",
    price: 25999,
    imageSrc: "images/mobile6.jpeg",
    quantityInCart: 0,
  },
  {
    id: 26,
    category: "category2-mobile",
    name: "REALME 8pro",
    price: 19999,
    imageSrc: "images/mobile7.jpeg",
    quantityInCart: 0,
  },
  {
    id: 27,
    category: "category2-mobile",
    name: "Mi 11X pro",
    price: 34900,
    imageSrc: "images/mobile8.jpeg",
    quantityInCart: 0,
  },
  {
    id: 28,
    category: "category2-mobile",
    name: "OPPO Reno6 pro",
    price: 41990,
    imageSrc: "images/mobile9.jpeg",
    quantityInCart: 0,
  },
  {
    id: 29,
    category: "category2-mobile",
    name: "ONEPLUS 9R",
    price: 43999,
    imageSrc: "images/mobile10.jpg",
    quantityInCart: 0,
  },
  {
    id: 3,
    category: "category3-camera",
    name: "CANON EOS 1500D",
    price: 36999,
    imageSrc: "images/camera1.jpg",
    quantityInCart: 0,
  },
  {
    id: 31,
    category: "category3-camera",
    name: "TECHKING action",
    price: 1599,
    imageSrc: "images/camera2.jpeg",
    quantityInCart: 0,
  },
  {
    id: 32,
    category: "category3-camera",
    name: "SJCAM 4000 air",
    price: 4999,
    imageSrc: "images/camera3.jpeg",
    quantityInCart: 0,
  },
  {
    id: 33,
    category: "category3-camera",
    name: "FUJIFILM X10",
    price: 89999,
    imageSrc: "images/camera4.jpeg",
    quantityInCart: 0,
  },
  {
    id: 34,
    category: "category3-camera",
    name: "GoPro Hero9",
    price: 36999,
    imageSrc: "images/camera5.jpeg",
    quantityInCart: 0,
  },
  {
    id: 35,
    category: "category3-camera",
    name: "PAROXYSM Mini",
    price: 784,
    imageSrc: "images/camera6.jpeg",
    quantityInCart: 0,
  },
  {
    id: 36,
    category: "category3-camera",
    name: "FUJIFILM instax",
    price: 6099,
    imageSrc: "images/camera7.jpeg",
    quantityInCart: 0,
  },
  {
    id: 37,
    category: "category3-camera",
    name: "NIKON Z FC",
    price: 96495,
    imageSrc: "images/camera8.jpeg",
    quantityInCart: 0,
  },
  {
    id: 38,
    category: "category3-camera",
    name: "F Smartbuy D68AV",
    price: 6999,
    imageSrc: "images/camera9.jpeg",
    quantityInCart: 0,
  },
  {
    id: 39,
    category: "category3-camera",
    name: "IC Plus 6",
    price: 999,
    imageSrc: "images/camera10.jpeg",
    quantityInCart: 0,
  },
];

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
  event.preventDefault();
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
  cartInfo.innerHTML = `<h2>Cart : (₹ ${cartPrice})</h2>`;
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

checkout.addEventListener("click", checkoutFunction);
function checkoutFunction() {
  console.log("checkout");
  location.href = "./checkout.html";
}
