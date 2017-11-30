var app = angular.module('csvChart', []);
app.controller('csvController', function($scope,dataService) {
  $scope.series=[];
   var datasets=[];
  $scope.dataset=[];
  $scope.title = 'Upload your csv';
  $scope.fileContent=undefined;
  $scope.saveToServer=function(){
    dataService.postJsonData(datasets).then(function(){
         var resp= confirm("Do you want to save the below Json"+JSON.stringify(datasets));
         if(resp){
           alert("JSON saved");
         }
         else{
           alert("Operation Cancelled")
         }
    });
  }
  $scope.convertToJson=function(data){
  dataService.getJsonData({a:data}).then(function(data){
          saveParsedJson(data);
  })
  }
var updateChart=function(){
  chart.render();        
}
var renderChart=function(){
var chart = new CanvasJS.Chart("chartContainer",{
            title:{
                text:$scope.series_id
            },
            axisX: {                        
              title: "Year"
            },
            axisY: {                        
              title: "Score"
            },
            data: [{
                type: "line",
                dataPoints : $scope.dataset,
            }]
        });
        chart.render();
}
$scope.updateChart=function(){
 var index = $scope.series.indexOf(this.selectedSeries);
 $scope.dataset=datasets[index].dataset;
 $scope.series_id=datasets[index].title;
 renderChart();
}
var saveParsedJson=function(data){
data.data.forEach(function(i,k){
var tempArr=[]
i.forEach(function(item,ind){
if(ind!==0){
 var temp=item.split('|');
      tempArr.push({
       x:parseInt(temp[0]),
       y:parseInt(temp[1])        
}) 
}
})
datasets.push({title:i[0],dataset:tempArr});
$scope.series.push(i[0]);
});
}
});

