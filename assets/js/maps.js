(function($){
"use strict";
	if ($('#contact_map').length > 0) {
			google.maps.event.addDomListener(window, 'load', init);
        	function init() {
            var mapOptions = {
			scrollwheel: false,
			zoom: 12,
            // center: new google.maps.LatLng(18.664519520268254,79.51479151431941),
            center: new google.maps.LatLng(42.669587,-83.239576),
			styles: [
                    {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                    {
                    "color": "#444444"
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
                    "color": "#cfcfcf"
                    },
                    {
                    "visibility": "on"
                    }
                    ]
                    }
                ],
			};
			var mapElement = document.getElementById('contact_map');
			var map = new google.maps.Map(mapElement, mapOptions);
			var contentString = '<div id="content">' +
				'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
			});
		}
	}
})(jQuery)

