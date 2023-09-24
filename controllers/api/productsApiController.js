const DB = require("../../database/models");

const productsController = {

  getUsers: async (req, res) => {

    try {

        const products = await DB.stock.findAll({
            attributes: ['id_producto', 'nombre', 'descripcion', 'categoria',]
        });

        const listProducts = products.map((product) => {
            return {
                id: product.id,
                name: product.nombre,
                email: product.email,
                detail: `/api/products/${product.id_producto}`
            }
        })
        
        let response = {
            count: products.length,
            products: listProducts,
        }

        return res.json(response);

    } catch (error) {
        console.error('error al consultar por producto:', error)
    }
},
    
  getProductsById: async (req, res) => {
    try {
      const stock = await DB.Stock.findByPk(req.params.id, {
        attributes: [
          'id_producto',
          'nombre',
          'categoria',
          'imagen',
          'descripcion',
          'precio',
        ],
      });

      stock.imagen = `http://localhost:3000/img/${stock.imagen}`;

      if (!stock) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      return res.json(stock);
    } catch (error) {
      console.error("error al consultar por producto:", error);
      return res.status(404).json({
        message: "Product not found",
      });
    }
  },
};

module.exports = productsController;