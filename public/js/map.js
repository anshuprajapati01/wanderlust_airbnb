mapboxgl.accessToken = mapToken;

// Fallback coordinates (agar kisi purani listing mein geometry na ho)
const coordinates =
  listing.geometry && listing.geometry.coordinates.length === 2
    ? listing.geometry.coordinates
    : [77.209, 28.6139]; // Default: New Delhi

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates,
  zoom: 10,
});

// Zoom (+/-), Compass aur Fullscreen controls add kiye
map.addControl(new mapboxgl.NavigationControl(), "top-right");
map.addControl(new mapboxgl.FullscreenControl(), "top-right");

// Custom Airbnb-style Marker (Home icon + soft approximate radius)
const markerEl = document.createElement("div");
markerEl.className = "airbnb-marker";
markerEl.innerHTML = `<i class="fa-solid fa-house"></i>`;

const popup = new mapboxgl.Popup({ offset: 30, closeButton: true }).setHTML(`
  <div class="map-popup">
    <h6>${listing.title}</h6>
    <p class="mb-1 text-muted" style="font-size: 0.85rem;">
      <i class="fa-solid fa-location-dot text-danger"></i> ${listing.location}, ${listing.country}
    </p>
    <p class="mb-0" style="font-size: 0.8rem;">Exact location will be provided after booking.</p>
  </div>
`);

new mapboxgl.Marker(markerEl).setLngLat(coordinates).setPopup(popup).addTo(map);
