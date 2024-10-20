// Task 2: Add Event Listeners for Product Selection

const priceElement = document.getElementById('product-price')
const colorSelector = document.getElementById('color-selector')

colorSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`
})

// Task 3: Handle Stock Availability
let stock = 10
const inventoryCount = document.getElementById('inventory-count')
const purchaseButton = document.getElementById('purchase-button')

function updateInventory () {
    if (stock > 0) {
        purchaseButton.disabled = false
        inventoryCount.textContent = `In Stock: ${stock}`
        alert('Thank you for your purchase!')
    }
    else {
        purchaseButton.disabled = true
        inventoryCount.textContent = 'Out of Stock'
    }
}
// Task 4: Create a Checkout Event 
purchaseButton.addEventListener('click', () => {
    stock--
    updateInventory()
})

updateInventory()