function bookSearch($scope, $http) {
    const ctrl = this;
    ctrl.SearchedBooks = [];
    ctrl.Spinner = false;
    //search for books 
    $scope.search = () => {
        $http({
            method: 'GET',
            url: "https://www.googleapis.com/books/v1/volumes",
            params: {
                q: `${$scope.bookSearched}`,
                key: "AIzaSyABskby34aGFxCmMlzoXo_SP802Q7qTIYs"
            }
        }).then(res => {
            ctrl.Spinner = false;
            ctrl.SearchedBooks = res.data.items;
        }).catch(err => {
            console.log(err);
            $scope.Spinner = false;
        })
    }
}
bookFinder.controller('searchCtrl', bookSearch);
bookFinder.component('search', {
    templateUrl: './components/bookSearch/bookSearch.html',
    controller: bookSearch,
    controllerAs: 'vm'

});