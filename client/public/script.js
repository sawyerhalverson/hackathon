mapboxgl.accessToken = 'pk.eyJ1Ijoic2RoYWx2ZXJzb24iLCJhIjoiY2xyd2R2Yzk4MHczODJpbnpwbTFseWF3MiJ9.OFD8OqtsIqk21jGKgV45WA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-111.652884, 40.250495]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 14.5
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // Add GeolocateControl
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        })
    );

    // Add MapboxDirections
    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoic2RoYWx2ZXJzb24iLCJhIjoiY2xyd2R2Yzk4MHczODJpbnpwbTFseWF3MiJ9.OFD8OqtsIqk21jGKgV45WA',
        // Add any additional options for MapboxDirections
    });

    map.addControl(directions, 'top-left');
}
