const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const carritoArray = [];

// Delegación de eventos:
document.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.matches(".card button"));
    if (e.target.matches(".card button")) {
        agregarCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-danger"));
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    // console.log(carritoArray);

    pintarCarrito(carritoArray);
};

const pintarCarrito = (nuevoCarrito) => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    nuevoCarrito.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};

const btnAumentar = (e) => {
    console.log(e.target.dataset.id);
    const nuevoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito(nuevoArray);
};

const btnDisminuir = (e) => {
    console.log(e.target.dataset.id);
    const nuevoArray = carritoArray.filter((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad--;
            if (item.cantidad !== 0) {
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito(nuevoArray);
};
