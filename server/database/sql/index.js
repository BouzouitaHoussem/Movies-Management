const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'movies_management'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});


const getAll = function(callback){
  const sql=`SELECT * from movies`
  connection.query(sql,function(error,result){
    callback(error,result)
  })
  
}
const add= function(values,callback){
  const sql= `INSERT INTO movies SET ?`
  connection.query(sql,values,function(error,result){
    callback(error,result)
  })
}

const deleteone= function(id,callback){
  const sql=`DELETE FROM movies WHERE idmovies=?`
  connection.query(sql,id,function(error,result){
    callback(error,result)
  })
}
const Modify = function(id,values,callback){
  const sql=`UPDATE movies SET ? WHERE idmovies=?`
  connection.query(sql,[values,id],function(error,result){
    callback(error,result)
  })

}



module.exports = {
  connection,
  getAll,
  add,
  deleteone,
  Modify
  
};