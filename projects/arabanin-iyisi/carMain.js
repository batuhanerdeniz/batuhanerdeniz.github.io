let carArea = document.getElementById("ana");

// let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (carArea.innerHTML = carItemsData
    .map((x) => {
      let { id, carModel, price, carYear, bodyType, img } = x;
      // let search = basket.find((x) => x.id === id) || [];""""
      return `
    <div id=product-id-${id} class="car-card">
        <img width="220" src=${img} alt="">
        
          <h2>${carModel}</h2>
          <h3>${carYear}</h3>
          <p>${bodyType}</p>
          <div class="price-quantity">
            <h4> ${price} TL</h4>
          </div>
        
    </div>
    `;
    })
    .join(""));
};

generateShop();