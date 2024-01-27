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

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.651666, 40.241669]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '400 E / 600 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.651669, 40.239053]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '400 E / 400 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.655104, 40.241694]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '200 E / 600 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.655162, 40.239038]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '200 E / 400 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.648217, 40.241716]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '600 E / 600 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.648217, 40.239065]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '600 E / 400 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.651707, 40.236413]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '400 E / 200 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.655127, 40.236413]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '200 E / 200 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.648244, 40.236413]
              , 
            },
            properties: {
              title: 'Mapbox',
              description: '600 E / 200 N'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.645939, 40.248592]
            },
            properties: {
              title: 'Mapbox',
              description: 'Wilk'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.653702, 40.250293]
            },
            properties: {
              title: 'Mapbox',
              description: 'Tanner Building'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.650340, 40.250446]
            },
            properties: {
              title: 'Mapbox',
              description: 'JKB'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-111.647440, 40.245715]
            },
            properties: {
              title: 'Mapbox',
              description: 'EB'
            }
          },

        ]
      };
    
    
     
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
      
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    
      }
}