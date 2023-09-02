module.exports = (sequelize, DataTypes) => {
    const alias = 'categoria-usuarios';

    const cols = {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
           
        },
       
    }


const config = {
    tableName: 'categoria-usuarios',
    timestamps: false
}

const Carrito = sequelize.define (alias, cols,config)

/* Carrito.associate = (models) =>{
//Aca hacemos las relaciones
} 
 */
return Carrito;
}