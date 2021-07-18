const abrirmodal = document.querySelectorAll("[data-open]");
const cerrarmodal = document.querySelectorAll("[data-close]");
const ventanamodal = document.getElementById("modal");
const parrafocabecera = document.getElementById("parrafocabecera");
const imagenmodal = document.getElementById("imagenmodal");
const parrafopie = document.getElementById("parrafopie");
var i = -1;
const isVisible = "is-visible";

for(i=0; i<abrirmodal.length;i++){
    abrirmodal[i].addEventListener("click", function(){
        var modalid = this.dataset.open;
        switch (modalid) {
            case "modal1":
                ventanamodal.classList.add(isVisible);
                parrafocabecera.innerHTML = "Imagen 1";
                imagenmodal.setAttribute("src", "img/Como funciona.png");
                imagenmodal.setAttribute("alt", "Imagen 1");
                parrafopie.innerHTML = "Imagen 1";
                break;
                case "modal2":
                ventanamodal.classList.add(isVisible);
                parrafocabecera.innerHTML = "Imagen 2";
                imagenmodal.setAttribute("src", "img/ing.de datos.jpg");
                imagenmodal.setAttribute("alt", "Imagen 2");
                parrafopie.innerHTML = "Imagen 2";
                break;
                case "modal3":
                ventanamodal.classList.add(isVisible);
                parrafocabecera.innerHTML = "Imagen 3";
                imagenmodal.setAttribute("src", "img/QUE ES LA BIG DATA.png");
                imagenmodal.setAttribute("alt", "Imagen 3");
                parrafopie.innerHTML = "Imagen 3";
                break;
                case "modal4":
                ventanamodal.classList.add(isVisible);
                parrafocabecera.innerHTML = "Imagen 4";
                imagenmodal.setAttribute("src", "img/Vida Cotidiana Big Data.jpg");
                imagenmodal.setAttribute("alt", "Imagen4");
                parrafopie.innerHTML = "Imagen 4";
                break;
                default:
                break;
        }
    });
}

for(const modal of cerrarmodal) {
    modal.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener("click", (e) => {
    if(e.target==document.querySelector(".modal .isvisible")
    ) {
        document.querySelector(".modal is-visible").classList.remove(isVisible);
    }
});