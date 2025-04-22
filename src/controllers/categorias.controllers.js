import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "select CategoriaID, CategoriaNombre,Descripcion,Imagen from categorias"
    );
    res.json(result);
  } catch (error) {}
};

export const metodosHTTP = {
  getCategorias,
};
