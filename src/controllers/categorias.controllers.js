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

const postCategorias = async (req, res) => {
  try {
    const {CategoriaNombre,Descripcion, Image} = req.body;
    const categoria = {CategoriaNombre,Descripcion, Image}
    const connection = await getConnection();
    const result = await connection.query(
      "insert into categorias SET ?",categoria);
    res.json(result);
  } catch (error) {}
};
export const metodosHTTP = {
  getCategorias,
  postCategorias
};
