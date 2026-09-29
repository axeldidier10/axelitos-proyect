/* =========================================
   MALDONADO BEANS
   JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ---------- CART ---------- */

const cart = document.getElementById("cart");
const cartButton = document.getElementById("cartButton");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let cartProducts = [];


/* Open cart */

function openCart() {

    cart.classList.add("open");
    overlay.classList.add("active");

}


/* Close cart */

function closeCartPanel() {

    cart.classList.remove("open");
    overlay.classList.remove("active");

}


cartButton.addEventListener("click", openCart);

closeCart.addEventListener("click", closeCartPanel);

overlay.addEventListener("click", closeCartPanel);


/* ---------- ADD PRODUCT ---------- */

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productName =
            button.dataset.product;

        const productPrice =
            parseFloat(button.dataset.price);


        cartProducts.push({

            name: productName,

            price: productPrice

        });


        updateCart();

        openCart();

    });

});


/* ---------- UPDATE CART ---------- */

function updateCart() {

    cartItems.innerHTML = "";


    if (cartProducts.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }


    cartProducts.forEach((product, index) => {

        const item = document.createElement("div");

        item.classList.add("cart-item");


        item.innerHTML = `

            <div>

                <h4>
                    ${product.name}
                </h4>

                <p>
                    €${product.price.toFixed(2)}
                </p>

            </div>

            <button
                class="remove-item"
                data-index="${index}"
            >
                Remove
            </button>

        `;


        cartItems.appendChild(item);

    });


    updateTotal();

    updateCartCount();

}


/* ---------- REMOVE PRODUCT ---------- */

cartItems.addEventListener("click", event => {

    if (
        event.target.classList.contains(
            "remove-item"
        )
    ) {

        const index =
            parseInt(
                event.target.dataset.index
            );


        cartProducts.splice(index, 1);

        updateCart();

    }

});


/* ---------- TOTAL ---------- */

function updateTotal() {

    const total = cartProducts.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );


    cartTotal.textContent =
        `€${total.toFixed(2)}`;

}


/* ---------- CART COUNT ---------- */

function updateCartCount() {

    cartCount.textContent =
        cartProducts.length;

}


/* ---------- NEWSLETTER ---------- */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById(
                "email"
            ).value;


        if (email) {

            alert(
                "Thank you for subscribing!"
            );


            newsletterForm.reset();

        }

    }
);


/* ---------- CHECKOUT ---------- */

const checkoutButton =
    document.querySelector(
        ".checkout-button"
    );


checkoutButton.addEventListener(
    "click",
    () => {

        if (cartProducts.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        alert(
            "Checkout will be available soon."
        );

    }
);


/* ---------- SCROLL ANIMATION ---------- */

const animatedElements =
    document.querySelectorAll(
        ".coffee-card, .process-item, .story-content"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
