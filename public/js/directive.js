
app.directive('fileReader', function() {
    return {
      scope: {
        fileReader:"=",
        ctj:"="
  
      },
      link: function(scope, element) {
        element.on('change', function(changeEvent) {
          var files = changeEvent.target.files;
          if (files.length) {
            var r = new FileReader();
            r.onload = function(e) {
                var contents = e.target.result;
                scope.$apply(function () {
                  scope.fileReader = contents;
                  scope.ctj(contents);
                  scope.testing = contents;
                });
            };
            
            r.readAsText(files[0]);
         
           
  
          }
        });
      }
    };
  
  });