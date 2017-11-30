
const csv=require('csvtojson')
var convertCsvToJson=function(csvStr,res){
    var convertedCsv=[];
csv({noheader:true})
.fromString(csvStr)
.on('csv',(csvRow)=>{ // this func will be called 3 times
   convertedCsv.push(csvRow);

})
.on('done',()=>{
       res.send(convertedCsv)
    //parsing finished
})
}
module.exports = function (app) {
  app.post('/api/convertToJson', function (req, res) {
   convertCsvToJson(req.body.a,res)
    });
    app.post('/api/saveJson',function(req,res){
                 if(req.body!==undefined){
                     res.send("ok");
                 }
    });
//     // application -------------------------------------------------------------
    app.get('*', function (req, res) {
         res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};