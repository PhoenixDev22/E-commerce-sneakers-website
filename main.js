const openMenuBar = document.getElementById("open");
const closeMenuBar = document.getElementById("close");
const navigationBar = document.querySelector(".navigation__menu");
const overlay = document.querySelector(".overlay");
const nextTBtn = document.getElementById("next-btn");
const previousTBtn = document.getElementById("previous-btn");
const arrayImages = [ "images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg" , "images/image-product-4.jpg"]
const mainImage = document.querySelector(".main__image");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const input = document.getElementById("number-of-items");
const addToCartBtn = document.getElementById("add__to-cart");
const shoppingCartMidllePart = document.querySelector(".shopping__cart-items");
const cartButton = document.querySelector(".cart-btn");

const numberItemsInTheCart = document.getElementById("number__items");
const totalAmount = document.getElementById("total__amount");
const shoppingCart = document.getElementById("shopping__cart");
const cartBtn = document.getElementById("cart");
const elCart = document.querySelector(".shopping__cart-items");
const checkOutBtn = document.getElementById("checkout");

const btnArray = Array.from(document.querySelectorAll(".img__btn"));
const imageArray = Array.from(document.querySelectorAll(".img__btn img"));

const display = document.querySelector(".display");
const closeImg = document.querySelector(".close-img");

let emptyMsgExist =  false;
let currentIndex ;

// the price and discount
const thePreviousPrice = 250;
const discount = .5;
// making the price and the discount dynamic
document.querySelector(".discounted__price").innerHTML =`$${(thePreviousPrice*discount).toFixed(2)}`;
document.querySelector(".first__price del").innerHTML =`$${(thePreviousPrice).toFixed(2)}`;
document.querySelector(".discount__amount ").innerHTML =`${(discount)*100}%`;


openMenuBar.addEventListener("click", () => oggle())

closeMenuBar.addEventListener("click", () => menuToggle())

overlay.addEventListener("click", () => menuToggle())

// show the menu bar and the overlay
function oggle(){
    navigationBar.classList.add("visible");
    overlay.classList.add("appear-overlay");
}

// hide the nenu bar and the overlay
function menuToggle(){
    navigationBar.classList.remove("visible");
    overlay.classList.remove("appear-overlay");
}

// handle previous button 
previousTBtn.addEventListener("click", () => {
    currentIndex = getTheCurrentIndex();
    currentIndex == 1 ? currentIndex = arrayImages.length : currentIndex--; 
    mainImage.src = `images/image-product-${currentIndex}.jpg`;   
})
// handle next button 
nextTBtn.addEventListener("click", () => {
    currentIndex = getTheCurrentIndex();
    currentIndex == arrayImages.length   ? currentIndex = 1 : currentIndex++; 
    mainImage.src = `images/image-product-${currentIndex}.jpg`;
})

// get the index of the current main image
function getTheCurrentIndex(){
    return parseInt(mainImage.src.split(`/`).pop().split(`.`).shift().split(`-`).pop());
}

// toggle the shopping cart items
cartBtn.addEventListener("click", () => {
    shoppingCart.classList.toggle("hide-cart");
});

if(input.value == 0){
    elCart.classList.add("disappear");
    cartButton.classList.add("dispaly-none");
    emptyShoppingCart();    
}else{
    elCart.classList.remove("disappear");
    cartButton.classList.remove("dispaly-none");
}

checkOutBtn.addEventListener("click", () => {
    // the popup messsage as the shopping successed
    setTimeout(createPopup, 500);
    setTimeout(() =>{
        document.querySelector(".popup").remove()
    }, 2500)
    if(document.querySelector(".num-of-items")){
        document.querySelector(".num-of-items").remove();
    }

    elCart.classList.add("disappear");
    cartButton.classList.add("dispaly-none");
    emptyShoppingCart();  

    shoppingCart.classList.remove("hide-cart");
    
})
// popup mesaage appear when the checkout is successed
function createPopup(){
    const popupdiv = document.createElement("div");
    const circlediv = document.createElement("div");
    const popupparagraph = document.createElement("p");
    const paratext = document.createTextNode("Thank you for shopping with us");
    circlediv.innerHTML =`<i class="fa-solid fa-check"></i>`
    popupparagraph.appendChild(paratext);
    popupdiv.appendChild( popupparagraph);
    popupdiv.prepend(circlediv );
    circlediv.setAttribute("class", "circle");
    popupdiv.setAttribute("class", "popup");
    document.body.appendChild(popupdiv);
  
}



addToCartBtn.addEventListener("click", () => {
    const innerCart= ` <img src="images/image-product-1-thumbnail.jpg" alt="shoe sneakers selected" class="shopping__cart-thumbnail">
    <div class="middle__shopping-cart">
    <p class="edition-para">Autumn Limited Edition...</p>
    <p> <Span>$${(thePreviousPrice * discount).toFixed(2)} * </Span><span id="number__items" class="number__items"> </span> <span id="total__amount" class="total"></span></p>
    </div>
    <button id="delete__btn" class="delete__btn ff" type="button" aria-label="delete the selected the selected item in the shopping cart"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></button>   `;
    
    if(input.value == 0){
        elCart.classList.add("disappear");
        cartButton.classList.add("dispaly-none");
        if(!emptyMsgExist){
            emptyShoppingCart();  
        }
    }else{
    

        elCart.innerHTML = innerCart;
        elCart.classList.remove("disappear");
        cartButton.classList.remove("dispaly-none");

        if(document.querySelector(".empty-msg")){
            document.querySelector(".empty-msg").remove();
        }

        //  create a span with the number of items aove the cart in the header
        let spanNumberOofItems = document.createElement("span");
        spanNumberOofItems.setAttribute("class", "num-of-items")
        spanNumberOofItems.innerHTML = input.value;
        cartBtn.appendChild(spanNumberOofItems);

        const numberItemsInTheCart = document.getElementById("number__items");
        const totalAmount = document.getElementById("total__amount");
        numberItemsInTheCart.innerHTML = input.value;
        // totalAmount.innerHTML = `$${parseInt(input.value) * 125}.00`;
        totalAmount.innerHTML = `$${(parseInt(input.value) * thePreviousPrice*discount).toFixed(2)}`;

        input.value = "0";

        // delete button in the shopping cart 
        const deleteBtn = document.getElementById("delete__btn");
        deleteBtn.addEventListener("click", ( )=> {
            elCart.classList.add("disappear");
            cartButton.classList.add("dispaly-none");
            emptyShoppingCart();    
            input.value = "0";
            document.querySelector(".num-of-items").remove(); 
        })
    }
})

// empty the shopping cart function
function emptyShoppingCart(){
    // create the empty message in the shopping cart
    let emptyMsg = document.createElement("span");
    let emptyText = document.createTextNode("Your cart is empty");
    emptyMsg.setAttribute("class", "empty-msg");
    emptyMsg.appendChild(emptyText);
    shoppingCart.appendChild(emptyMsg);
    cartButton.classList.add("dispaly-none");
    emptyMsgExist = true;
}


add.addEventListener("click", () => input.value++ )
minus.addEventListener("click", () => {
    if (input.value > 0){
        input.value--;
    }
})

// handling thumbnail images
imageArray.forEach(img => {
    img.addEventListener("click", (e) =>{
        // add the border around the buttons which they wrap the thumbnails images
        btnArray.forEach(btn => btn.classList.remove("active"));
        e.target.parentElement.classList.add("active");
        
        // clear the active state from all the thumbnail images
        imageArray.forEach(img => img.classList.remove("active"));
        // add the active state to the current thumbnail image
        e.currentTarget.classList.add("active");

        console.log(e.currentTarget.src.split(`/`).pop().split(`-`)[2]);
        mainImage.src =`images/image-product-${e.currentTarget.src.split(`/`).pop().split(`-`)[2]}.jpg`;
    })
})

// when you press on the main image a bigger sized image appears with a lightboxx
mainImage.addEventListener("click", () => {
    display.classList.add("display-1");
    overlay.classList.toggle("appear-overlay");
})
closeImg.addEventListener("click", () => {
    display.classList.remove("display-1");
    overlay.classList.remove("appear-overlay");
})
overlay.addEventListener("click", () => {
    display.classList.remove("display-1");
    overlay.classList.remove("appear-overlay");
})