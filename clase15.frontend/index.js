fetch('http://localhost:3000/orders')
  .then(response => response.json())
  .then(data => {
    const ordersList = document.querySelector('.orders-list')

    data.message.forEach(order => {
      const orderItem = document.createElement('li')
      orderItem.classList.add('order-item')

      orderItem.innerHTML = `
        <p class="order-number">Número de orden: ${order.number}</p>
        <p class="order-user">Usuario: ${order.user.name} (${
        order.user.email
      })</p>
        <p class="order-restaurant">Restaurante: ${order.restaurant.name}</p>
        <p class="order-price">Precio total: $${order.totalPrice}</p>
        <div class="order-products">
          <p>Productos:</p>
          <ul>
            ${order.products
              .map(product => `<li>${product.name} - $${product.price}</li>`)
              .join('')}
          </ul>
        </div>
      `

      ordersList.appendChild(orderItem)
    })
  })
  .catch(error => console.log(error))
