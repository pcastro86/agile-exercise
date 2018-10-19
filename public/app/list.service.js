
angular 
    .module('app')
    .service('serviceMain', serviceMain)


    function serviceMain($http){
        this.getHistory = function(){
            return $http({
            url : '/api/v1/transaction',
            method: 'GET'
        })
    }
}

