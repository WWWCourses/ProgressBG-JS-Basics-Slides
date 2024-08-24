var gmarkers = [];
var map = null;
var ib = new InfoBox();

// A function to create the marker and set up the event window
function createMarker(latlng,name,html,category) {
  var boxText = document.createElement("div");
  boxText.style.cssText = "margin-top: 42px; background: rgba(68,53,134,0.6); padding: 10px; border-radius: 10px; color: #fff";
  var fullContent = name
  boxText.innerHTML = name;

  var myOptions = {
    content: boxText,
    disableAutoPan: false,
    maxWidth: 0,
    pixelOffset: new google.maps.Size(-100, 0),
    zIndex: null,
    boxStyle: {
      background: "url('http://www.eyestagedit.com/wtda/assets/map/tip.png') no-repeat",
      width: "250px",
    },
    closeBoxURL: "",
    infoBoxClearance: new google.maps.Size(1, 1),
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  var marker = new google.maps.Marker({
    position: latlng,
    icon: category + ".png",
    map: map,
    title: name,
    zIndex: Math.round(latlng.lat()*-100000)<<5
  });

  // === Store the category and name info as a marker properties ===
  marker.mycategory = category;
  marker.myname = name;
  gmarkers.push(marker);

  google.maps.event.addListener(marker, 'click', function() {
    ib.setOptions(myOptions)
    ib.open(map, this);
  });
} // end createMarker

// == shows all markers of a particular category, and ensures the checkbox is checked ==
function show(category) {
  for (var i=0; i<gmarkers.length; i++) {
    if (gmarkers[i].mycategory == category) {
      gmarkers[i].setVisible(true);
    }
  }
  // == check the checkbox ==
  document.getElementById(category+"box").checked = true;
}

// == hides all markers of a particular category, and ensures the checkbox is cleared ==
function hide(category) {
  for (var i=0; i<gmarkers.length; i++) {
    if (gmarkers[i].mycategory == category) {
      gmarkers[i].setVisible(false);
    }
  }
  // == clear the checkbox ==
  document.getElementById(category+"box").checked = false;
  // == close the info window, in case its open on a marker that we just hid
  ib.close();
}

// == a checkbox has been clicked ==
function boxclick(box,category) {
  if (box.checked) {
    show(category);
  } else {
    hide(category);
  }
}

function myclick(i) {
  google.maps.event.trigger(gmarkers[i],"click");
}

function initialize() {
  var myOptions = {
    zoom: 14,
    center: new google.maps.LatLng(35.54655,-77.05217),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map"), myOptions);

  google.maps.event.addListener(map, 'click', function() {
    ib.close();
  });

  $(document).ready(function(){
    $.getJSON('data.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        // obtain the attribues of each marker
        var item = data[i];
        var point = new google.maps.LatLng(item.ltt, item.lgt);
        var name = item.name;
        var html = "<b>"+item.name+"<\/b><br \/>"+item.address+"<br \/><a href='"+ item.url +"' title='"+ item.name +"'>View details<\/a>";
        var category = item.cat;
        // create the marker
        var marker = createMarker(point,name,html,category);
      }

      // == show or hide the categories initially ==
      show("eat");
      hide("stay");
      hide("shop");
      hide("play");
      hide("community");
    }); //end JSON
  }); //end jQuery

} //end initialize
