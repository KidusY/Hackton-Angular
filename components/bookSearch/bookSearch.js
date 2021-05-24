function bookSearch($scope, $http) {
    const ctrl = this;
    ctrl.SearchedBooks = [];
    ctrl.Spinner = false;
    ctrl.selectedBook = null;
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
            ctrl.SearchedBooks = res.data.items.map((book) => {
                if (!book.volumeInfo.imageLinks) {
                    const imageLinks = {
                        thumbnail: 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                    }
                    book.volumeInfo = { ...book.volumeInfo, imageLinks }
                }
                return book;
            });
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
    controllerAs: 'ctrl'

});