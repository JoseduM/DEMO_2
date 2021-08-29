

export class RetrieveData {
  static async getCategories() {
    try {
      let result = await fetch(' http://localhost:3002/categorias');
      return result.json();
    }
    catch (error) {
      console.log('error')
      console.log(error)
    }
  }


  static async getArticulos(categoriaID) {
    try {
      let result = await fetch('http://localhost:3002/categorias/articulos', {
        method: 'POST',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: categoriaID
        })
      })
      return result.json()
    } catch (error) {
      console.log('fetch')
      console.log(error);
    }
  }
  static async nuevoArticulo(articuloNuevo) {
    let result = await fetch('http://localhost:3002/articulos', {
      method: 'POST',
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: articuloNuevo
    })

  }
  static async actualizarArticulo(articuloActualizado) {
    let result = await fetch('http://localhost:3002/actualizar', {
      method: 'POST',
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: articuloActualizado
    })
  }

  static async deleteArticulo(id) {
    try {
      let result = await fetch('http://localhost:3002/articulo', {
        method: 'DELETE',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id
        })
      })
      return true
    } catch (error) {
      console.log(error)
      throw new Error('NO se pudo eliminar')
    }
  }
}