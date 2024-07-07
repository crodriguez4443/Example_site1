// JavaScript functions to enhance interactivity and handle form submissions

// Placeholder for Google Maps Embed
function initMap() {
    var serviceArea = {lat: 40.7128, lng: -74.0060}; // Example coordinates for New York
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: serviceArea
    });
  
    var serviceAreaCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: serviceArea,
      radius: 10000 // 10 km radius
    });
  }
  
  // Load Google Maps script dynamically
  function loadGoogleMapsScript() {
    var script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
  }
  
  window.onload = loadGoogleMapsScript;
  