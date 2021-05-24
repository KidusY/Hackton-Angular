const bookFinder = angular.module('bookFinder', ['ui.router']);
bookFinder.controller('mainCtrl', function () {
    //main controller
})
//router config
bookFinder.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //home route
    $stateProvider.state('home', {
        url: '/',
        template: '<search></search>'
    })
        //map route
        .state('map', {
            url: '/map',
            template: '<maps></maps>'
        })
})
const map = angular.module('maps', []);
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyABskby34aGFxCmMlzoXo_SP802Q7qTIYs&callback=initMap';
script.async = true;
// Attach your callback function to the `window` object
window.initMap = function () {
    // JS API is loaded and available
    navigator.geolocation.getCurrentPosition(position => {
        let mapProp
        if (position) {
            mapProp = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 10,
            };
        }
        var map = new google.maps.Map(
            document.getElementById('googleMap'),
            mapProp
        );
        const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
        // const features = [
        //     {
        //         position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        //         type: "info",
        //     }
        // ]
        axios.get(`https://whispering-reaches-81740.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyABskby34aGFxCmMlzoXo_SP802Q7qTIYs&location=${position.coords.latitude},${position.coords.longitude}&radius=10000&type=book store&keyword=book`)
            .then(res => {
              //  console.log(res.data.results)
                for (let i = 0; i < res.data.results.length; i++) {
                    const marker = new google.maps.Marker({
                        position: new google.maps.LatLng(res.data.results[i].geometry.location.lat, res.data.results[i].geometry.location.lng ),
                        icon: iconBase,
                        map: map,
                    });
                }
            })
            .catch(err => console.log(err))
    })
};
// Append the 'script' element to 'head'
document.head.appendChild(script);


