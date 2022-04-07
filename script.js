mapboxgl.accessToken = 'pk.eyJ1IjoibG9maWpheTA2IiwiYSI6ImNsMXA1dG5lOTE2c3czY28ybHJqNGEwdGYifQ.rrUK-yW-ULQlWz98-Nu31Q';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: center,
    zoom: 15
});
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
 
  map.addControl(directions, 'top-left');
}

