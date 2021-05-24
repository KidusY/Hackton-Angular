function resultsCtrl ($scope){
    const rCtrl = this;
    rCtrl.selectedBook = null;
    $scope.OnBookSelect = (book)=>{
        rCtrl.selectedBook=book;
        //console.log(rCtrl.selectedBook);
    }
}
bookFinder.controller('resultsCtrl',resultsCtrl);
bookFinder.component('results',{
    templateUrl:'/components/results/results.html',
    controller:resultsCtrl,
    bindings:{
        data:'<'
    }
})