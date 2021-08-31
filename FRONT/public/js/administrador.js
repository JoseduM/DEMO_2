import { RetrieveData } from "./senddata.js";

//variables para mostrar en la tabla
const contenedor = document.getElementById('tbody');
let resultados = ''
const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const btnGuardar = document.getElementById('guardar')
const id = document.getElementById('id');
const descripcion = document.getElementById('descripcion');
const disponibilidad = document.getElementById('disponibilidad');
const precio = document.getElementById('precio');
let opcion = ''

//boton que abre la ventana para agregar nuevo artículo
btnCrear.addEventListener('click', () => {
  id.value = '';
  descripcion.value = '';
  disponibilidad.value = '';
  precio.value = '';
  opcion = 'crear'
  const categoria = document.getElementById('select')

  modalArticulo.show()
})


//funcion para mostrar los artículos de la categoría seleccionada
const mostrar = async (categoria) => {
  let articulos = await RetrieveData.getArticulos(categoria)
  articulos.forEach(articulo => {
    resultados += `<tr>
      <td>${articulo.id_item}</td>
      <td>${articulo.descripcion}</td>
      <td>${articulo.cat}</td>
      <td>${articulo.disponibilidad}</td>
      <td>${articulo.precio}</td>
      <td><button class='btn btn-primary btnEditar'>Editar</button>
      <button class='btn btn-danger btnBorrar'>Borrar</button>

      `
  });
  contenedor.innerHTML = resultados


}

mostrar()


//boton borrar
const on = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e)
    }
  })
}

on(document, 'click', '.btnBorrar', async (e) => {
  const fila = e.target.parentNode.parentNode;
  const idArticulo = fila.children[0].innerHTML
  console.log(idArticulo)
  try {
    let resultado = await RetrieveData.deleteArticulo(idArticulo)
    if (resultado) {
      setTimeout(() => {
        window.location = 'http://localhost:3001/administrador'
      }, 1000);
    }
  } catch (error) {
    console.log(error)
  }
})


//boton editar
on(document, 'click', '.btnEditar', async (e) => {
  const fila = e.target.parentNode.parentNode;
  const idForm = fila.children[0].innerHTML
  let descripcionForm = fila.children[1].innerHTML
  let disponibilidadForm = fila.children[3].innerHTML
  let precioForm = fila.children[4].innerHTML

  id.value = idForm;
  descripcion.value = descripcionForm;
  disponibilidad.value = disponibilidadForm;
  precio.value = precioForm;
  opcion = 'editar'
  modalArticulo.show()
})
console.log(formArticulo)
//boton guardar

btnGuardar.addEventListener('click', async () => {
  let categoria =document.getElementById("select").value
  try {
    if (opcion == 'crear') {
      let articuloNuevo = JSON.stringify({
        id_item: id.value,
        categoria:categoria,
        descripcion: descripcion.value,
        disponibilidad: disponibilidad.value,
        precio: precio.value
      })
      const resultado = await RetrieveData.nuevoArticulo(articuloNuevo)
    }
    if (opcion == 'editar') {
      let articuloActualizado = JSON.stringify({
        id: id.value,
        categoria:categoria,
        descripcion: descripcion.value,
        disponibilidad: disponibilidad.value,
        precio: precio.value
      })
      console.log(articuloActualizado)
      const resultado = await RetrieveData.actualizarArticulo(articuloActualizado)
    }
    modalArticulo.hide()
  } catch (error) {
    console.log(error)
  }

})



//conseguir categorías y mostrarlas en menu
async function mostrarOpcionesCategorias() {
  try {
    let elegirCategoria = document.getElementById("select")
    let data = await RetrieveData.getCategories();
    data.forEach(element => {
      let opcion = document.createElement('option');
      opcion.value = `${element.id}`;
      opcion.textContent = `${element.nombre}`;
      elegirCategoria.appendChild(opcion);
    });

  }
  catch (er) {
    console.log(er)
  }
}

//boton que hace el llamado de la categoría elegida
document.getElementById('buttonSelect').addEventListener('click', async () => {
  let seleccionCategoria = document.getElementById("select")
  let categoria = seleccionCategoria.value
  mostrar(categoria)



})
mostrarOpcionesCategorias()


