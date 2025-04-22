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

const getCategoria = async (req, res) => {
  try {
    const id = req.params
    const connection = await getConnection();
    const result = await connection.query(
      "select CategoriaID, CategoriaNombre,Descripcion,Imagen from categorias WHERE CategoriaID= ?",id
    );
    res.json(result);
  } catch (error) {}
};

const deletecategoria = async (req, res) => {
  try {
    const id = req.params
    const connection = await getConnection();
    const result = await connection.query(
      "delete  from categorias WHERE CategoriaID= ?",id
    );
    res.json(result);
  } catch (error) {}
};

const updateCategorias = async (req, res) => {
  try {
    const id = req.params
    const {CategoriaNombre,Descripcion, Image} = req.body;
    const categoria = {CategoriaNombre,Descripcion, Image}
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE categorias SET ?  WHERE CategoriaID= ?",[categoria,id]);
    res.json(result);
  } catch (error) {}
};


export const metodosHTTP = {
  getCategorias,
  postCategorias,
  getCategoria,
  deletecategoria,
  updateCategorias
};
