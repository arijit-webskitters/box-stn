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
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "lightness": "74"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "3"
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
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
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
                ariaLabel: locationData.title,
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
