const customMapContainer = document.getElementById("map");
if (customMapContainer != undefined) {
  const locationData = [
    {
      id: 0,
      title: "BOX.STN",
      address: "FIRST AVENUE, STANSTED, CM24 1RY",
      button: "Making an appointment here",
      lat: 51.8831825,
      lng: 0.2189952,
      zoom: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt interdum vestibulum. Integer nec nisl neque. Proin venenatis facilisis metus, sed semper augue blandit in.",
      img: "https://picsum.photos/200/200",
    },
  ];

  function initMap() {
    // set google map style
    const mapStyle = [
      {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "weight": "2.00"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#9c9c9c"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#eeeeee"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#7b7b7b"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#46bcec"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#c8d7d4"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#070707"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      }
  ];

    // marker
    const markerIng = customMapContainer.querySelector("img").src;
    customMapContainer.querySelector("img").remove;
    var map, marker;
    const marker_icon = {
      url: markerIng, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
    };

    locationData.forEach((data, index) => {
      // console.log(data);

      // init Map
      if (index == 0) {
        map = new google.maps.Map(customMapContainer, {
          zoom: data.zoom,
          center: {
            lat: data.lat,
            lng: data.lng,
          },
          styles: mapStyle,
          // disableDefaultUI: true,
          // zoomControl: true,
          // scaleControl: false,
          // mapTypeControl: false,
          // mapTypeControlOptions: {
          //   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          //   mapTypeIds: ["roadmap", "terrain"],
          // },
          // streetViewControl: false,
          // fullscreenControl: false,
        });
      }

      // open info window
      let contentString = `
    <div id="map_popup_${data.id}" class="map_popup">
      <div class="map_content_inner">
      <h3 class="map_title">${data.title}</h3>
      <p class="map_address">${data.address}</p>
      </div>
    </div>
    `;
      let infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel:locationData.title,
      });

      // set marker with infow window

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map,
        icon: marker_icon,
        title: locationData.title,
        class: "custom_marker",
        id: data.id,
        animation: google.maps.Animation.DROP,
      });

      infowindow.open({
        anchor: marker,
        map,
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
      infowindow.addListener("closeclick", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
      map.addListener("click", () => {
          map.setZoom(data.zoom);
          map.panTo(marker.position);
          infowindow.open({
              anchor: marker,
              map,
          });
      });
    });
  }

  setTimeout(() => {
    initMap();
  }, 1000);
}
