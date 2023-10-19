import {data} from './data/data.js';

console.log(data);

const items=document.getElementById('items')
const templatecard=document.getElementById('template-card').content;
const fragment = document.createDocumentFragment ();
let like={};

document.addEventListener('DOMContentLoaded', () => {
 loadData(data);
})

const loadData = data => {
    data.forEach(personaje => {
        const {id, name, image} = personaje;
        templatecard.querySelector('h5').textcontent = name;
        templatecard.querySelector('img').setAttribute('src',image);
        templatecard.querySelector('.btn-dark').dataset.id = id;
        const clone = templatecard.cloneNode(true);
        fragment.appendChild(clone)
    });


  //appendchild agrega un nodo al final de la lista
  items.appendChild(fragment);
}
items.addEventListener('click',e=>{
    addlike(e);
})

const addlike = e =>{
    //que contenga btn dark y devuelve true
    if (e.target.classList.contains('btn-dark')) {
    //captura todos los elementos de la target
    setLike(e.target.parentElement);
    }
}

const setLike = objeto =>{
    const boton ={
        id: objeto.querySelector('btn-dark').dataset.id,
        cantidad :0
    }
    console.log(objeto);

    if(like.hasOwnproperty(boton.id)) {
        boton.cantidad = like [boton.id].cantidad +1
        objeto.querySelector('#like').textcontent=boton.cantidad;
    };

    like[boton.id]= {...boton};

    console.log(like[boton,id])
}