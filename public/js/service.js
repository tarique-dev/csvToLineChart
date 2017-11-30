app.service('dataService',function($http){
    this.getJsonData=function(content){
     return $http.post('api/convertToJson',content);
    }
    this.postJsonData=function(content){
      return $http.post('api/saveJson',content);
     }
  });
  