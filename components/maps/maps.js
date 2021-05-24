function mapCtrl($scope) {
    const ctrl = this;
    
}
bookFinder.controller('mapCtrl', mapCtrl);
bookFinder.component('maps',{
    templateUrl:'/components/maps/maps.component.html',
    controller:mapCtrl
})