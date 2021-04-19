var express = require('express');
var router = express.Router();
var mysql= require('mysql');
var cors = require('cors');
router.use(cors({
  origin: 'http://localhost:3001'
}));
var config={
host:'localhost',
user:'root',
password:'H@rit#@16',
database:'hospital search'
}
const pool = mysql.createPool(config);
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});
router.get('/hospitals',async function(req,res,next){
  var name = req.query.name;
  
pool.query('SELECT * FROM covid_bed_vaccancy_excel where hospital_details like "%'+name+'%"', (error, result) => {
  console.log(error);
  if (error) throw error;

res.send(result);
});
})

/* GET home page. */


module.exports = router;