let chosenItem
const url = `http://localhost:3000/menu`

const getMenuItems = (url) => {
    fetch(url)
    .then(res => res.json()) 
    .then(menuItemsArray => {
        renderMenuImages(menuItemsArray)
        updateDisplay(menuItemsArray[0])
    })
}

getMenuItems(url)

const renderMenuImages = (menuItemsArray) => {
    menuItemsArray.forEach(menuItem => createMenuImages(menuItem))
}

const createMenuImages = (menuItem) => {
    const menuItemsList = document.getElementById('menu-items')
    const menuItemName = document.createElement('span')

    menuItemName.textContent = menuItem.name

    menuItemsList.appendChild(menuItemName)

    menuItemName.addEventListener('click', (e) =>
    updateDisplay(menuItem))

}


const updateDisplay = (menuItem) => {
    const dishImage = document.getElementById('dish-image')
    const dishName = document.getElementById('dish-name')
    const dishDescription = document.getElementById('dish-description')
    const dishPrice = document.getElementById('dish-price')
    const dishInCart = document.getElementById('number-in-cart')
    
    dishImage.src = menuItem.image
    dishName.textContent = menuItem.name
    dishDescription.textContent = menuItem.description
    dishPrice.textContent = menuItem.price
    dishInCart.textContent = menuItem.number_in_bag

    chosenItem = menuItem
}

const addToCart = () => {
    const cartForm = document.getElementById('cart-form')
    const toBeAdded = document.getElementById('cart-amount')
    const cartTotal = document.getElementById('number-in-cart')

    const newCartTotal = parseInt(cartTotal.textContent) + parseInt(toBeAdded.value)
    
    chosenItem.number_in_bag = newCartTotal
    updateDisplay(chosenItem)
    cartForm.reset()
    
}

const addButton = document.getElementsByTagName('input')[1]
    addButton.addEventListener('click', (e) =>{
        e.preventDefault()
        addToCart()
    })



// "id": 2,
// "name": "Carne Asada Burrito",
// "image": "./assets/calexico-carne-asada-burrito.webp",
// "description":"Grilled marinated steak, Jack and cheddar cheese, crispy tortilla strips, and chili crema.",
// "price": 14.00,
// "number_in_bag": 0


/* 
    Challenge 1:
         - Get all menu items, create <span> for element that contains item name, add to menu-items div. - complete

    Challenge 2:
        - On page load, display first menu item details. - complete

    Challenge 3:
        - Display details of menu item when image is clicked. - complete
    
    Challenge 4:
        - Add menu items to cart.

    ***********

    Bonus 1:
        - Cart total should persist for each item.

    Bonus 2: 
        - Calculate total cost of items in cart and display on page.
    
    Bonus 3: 
        - Use PATCH requests to maintian cart value between refreshes.


*/