document.addEventListener('DOMContentLoaded', async function () {
    //Llamada a la funcion que hace un fetch a la API
    await fetchFakeStore()
})

async function fetchFakeStore(){
    // Fetch a la fake store
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    // Tranformamos la response a un JSON
    const data = await response.json();

    // Recorremos el array de productos
    data.forEach((product) => {
        // Por cada producto llamamos la funcion para crear un producto
       createProduct(product)
    });
}

function createProduct (product) {
    // Desesctructuramos el objeto
    const { title, image, price  } = product

    // Creamos un div con la clase 'col'
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    // <div class="col"></div>

    // Creamos un div con la clase 'card'
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

     // <div class="card"></div>

    // Agregremos el cardDiv dentro del colDiv
    colDiv.appendChild(cardDiv);

    // <div class="col">
    //     <div class="card"></div>
    // </div>

    const img = document.createElement("img");
    img.src = image;
    img.className = "card-img-top";
    img.alt = title;
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.objectFit = "cover";
    img.style.display = "block";
    img.style.marginLeft = "auto"
    img.style.marginRight = "auto"

    cardDiv.appendChild(img);

    // <div class="col">
    //     <div class="card">
    //         <img src="/grafica nvidia/nvidia_rtx_4080.png" class="card-img-top" alt="..." style="width: 150px; height: 150px; object-fit: cover; display: block; margin-left: auto; margin-right: auto;">
    //     </div>
    // </div>

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    cardDiv.appendChild(cardBody);

    // <div class="col">
    //     <div class="card">
    //         <img src="/grafica nvidia/nvidia_rtx_4080.png" class="card-img-top" alt="..." style="width: 150px; height: 150px; object-fit: cover; display: block; margin-left: auto; margin-right: auto;">
    //         <div class="card-body"></div>
    //     </div>
    // </div>
    
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    cardBody.appendChild(cardTitle);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    cardDiv.appendChild(cardFooter);

    const priceContainer = document.createElement("small");
    price.className = "text-body-secondary";

    cardFooter.appendChild(priceContainer);

    const priceTag = document.createElement("h4");
    priceTag.textContent = `$ ${price}`;

    priceContainer.appendChild(priceTag);

    const container = document.getElementById("cardContainer");
    container.appendChild(colDiv);
}