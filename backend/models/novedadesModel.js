var pool = require("./bd");

async function getNovedades() {
  var query = "select * from noticias";
  var rows = await pool.query(query);
  return rows;
}

async function mandarNovedad(obj) {
  try{
    var query = "insert into noticias set ?";
    var rows = await pool.query(query, [obj] )
    return rows;

  }catch(error){
    console.log(error);
  throw error;

  }
}

async function borrarNoticiaById(id){
  var query = 'delete from noticias where id =?';
  var rows = await pool.query(query, [id]);
  return rows;
}


async function getNoticiaById(id){
  var query = 'select * from noticias where id = ?';
  var rows = await pool.query(query, [id]);
  return rows[0];
}

async function modificarNoticiaById(obj, id){
  try{
    var query = 'update noticias set ? where id=?';
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error){
    throw error;
  }
}

module.exports = { getNovedades, mandarNovedad, borrarNoticiaById, getNoticiaById, modificarNoticiaById};
