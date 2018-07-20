var map;
var latitude = 38.427;
var longitude = -97.354;
var zoomIn = 3;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: zoomIn
  });
}

var collection = [
  {
    title: "Los Angeles",
    src: "https://odis.homeaway.com/odis/destination/2b4108ba-cbdb-4505-8950-57b997042ef9.hw1.jpg",
    lat: 34.052,
    lng: -118.243
  },
  {
    title: "Chicago",
    src: "http://www.trbimg.com/img-5a3d3316/turbine/ct-edit-amazon-chicago-rank-edit-20171206",
    lat: 41.878,
    lng: -87.629
  },
  {
    title: "New York",
    src: "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
    lat: 40.712,
    lng: -74.006
  }
]

for (var i = 0; i < collection.length; i++){
  $("#main").append(`<div class="collection" data-index="${i}">
    <h2 class="title">${collection[i].title}</h2>
    <div class="image" style="background-image: url('${collection[i].src}')"></div>
  </div>`);
}

$("#main").on("click", ".collection", function(){
  var thisItem = $(this).attr("data-index");
  latitude = collection[thisItem].lat;
  longitude = collection[thisItem].lng;
  zoomIn = 8;
  initMap();
})
