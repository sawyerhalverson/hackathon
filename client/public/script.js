mapboxgl.accessToken = 'pk.eyJ1Ijoic2RoYWx2ZXJzb24iLCJhIjoiY2xyd2R2Yzk4MHczODJpbnpwbTFseWF3MiJ9.OFD8OqtsIqk21jGKgV45WA';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){}

function setupMap(center){
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center:center
    
    })
}
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });