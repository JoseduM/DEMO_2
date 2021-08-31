const sequelize = require('../db/conexion.js')

module.exports.nuevoArticulo = async (articulo) => {
    //let id = await sequelize.query('SELECT count(id_item) FROM articulos')

    let newProd = [ `${articulo.id_item}`, articulo.descripcion, articulo.cat, articulo.disponibilidad, articulo.precio ]

    try {
        let resultado = await sequelize.query(`INSERT INTO ARTICULOS (id_item, descripcion, cat, disponibilidad, precio) VALUES (?,?,?,?,?)`,
        {replacements: newProd, type: sequelize.QueryTypes.INSERT});
        return 'Nuevo producto agregado'
    } catch (error) {
        console.log('El error fue: ')
        console.log(error)
        throw new Error ('Ocurrió un error en el post.')
    }
}

module.exports.listaProductos = async () => {
    try {
        let resultado = await sequelize.query('SELECT * FROM ARTICULOS')
        return resultado[0]
    } catch (error) {
        console.log(error)
        throw new Error ('Ocurrio error en la consulta.')
    }
}

module.exports.agregarArticulo = async (articulo) => {
    let newProd = [
        articulo.id,
        articulo.cantidad
    ]
    try {
        let resultado =await sequelize.query(`UPDATE articulos SET disponibilidad = disponibilidad + ${articulo.cantidad} WHERE id_item = '${articulo.id}'`)
    } catch (error) {
        console.log(error)
        throw new Error('No fue posible actualizar la cantidad.')        
    }
}

module.exports.actualizarArticulo= async (articulo) => {
    try {
        let resultado =await sequelize.query(`UPDATE articulos SET id_item = '${articulo.id}', descripcion='${articulo.descripcion}', disponibilidad='${articulo.disponibilidad}', precio = ${articulo.precio} WHERE id_item = '${articulo.id}'`)
    } catch (error) {
        console.log(error)
        throw new Error('No fue posible actualizar los datos.')        
    }
}
module.exports.borrarArticulo = async (articulo)=> {
    try{
        let resultado = await sequelize.query(`DELETE FROM  articulos WHERE id_item = '${articulo.id}'`)
    }catch(error){
        console.log(error)
        throw new Error('No se pudo eliminar el artículo')
    }
}
module.exports.restarArticulo = async (articulo) => {
    let newProd = [
        articulo.id,
        articulo.cantidad
    ]
    try {
        let resultado =await sequelize.query(`UPDATE articulos SET disponibilidad = disponibilidad - ${articulo.cantidad} WHERE id_item = '${articulo.id}'`)
    } catch (error) {
        console.log(error)
        throw new Error('No fue posible actualizar la cantidad.')
    }
}
