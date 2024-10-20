// Task 2: 

const priceElement = document.getElementById('product-price')
const colorSelector = document.getElementById('color-selector')

colorSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`
})

// Task 3: 
let stock = 12
const inventoryCount = document.getElementById('inventory-count')
const purchaseButton = document.getElementById('purchase-button')

function updateInventory () {
    if (stock > 0) {
        purchaseButton.disable = false
        inventoryCount.textContent = `In Stock: ${stock}`
    }
    else {
        purchaseButton.disable = true
        inventoryCount.textContent = 'Out of Stock'
    }
}

purchaseButton.addEventListener