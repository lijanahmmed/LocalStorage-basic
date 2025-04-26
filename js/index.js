const addProduct = () => {
    const product = document.getElementById("product").value
    const quantity = document.getElementById("quantity").value   
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
    displayProduct(product, quantity);
    saveProductInLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById("ul-contain");
    const li = document.createElement("li");
    li.classList.add("text-xl")
    li.innerText = `- ${product} : ${quantity}`
    ul.appendChild(li)
}

const getStoredCart = () => {
    const storedcart = localStorage.getItem('cart');
    let cart = {}
    if(storedcart){
        cart = JSON.parse(storedcart);
    }
    return cart;
}

const saveProductInLocalStorage = (product, quantity) => {
    const cart = getStoredCart();
    cart[product] = quantity;
    const cartStrigified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStrigified)
}

const displayProductCartFromLocalStorage = () => {
    const saveCart = getStoredCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product, quantity);
    }
}

displayProductCartFromLocalStorage();