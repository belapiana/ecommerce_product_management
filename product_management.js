const priceElement = document.getElementById('product-price')
const colorSelector = document.getElementById('color-selector')

colorSelector.addEventListener("change", (event) => {
    const selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`
})