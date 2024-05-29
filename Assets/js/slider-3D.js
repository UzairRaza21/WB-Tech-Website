$(document).ready(function(){
  
    var panelSize = 256;
    var numberOfPanels = $('.pane').length - 1;
    var tz = Math.round((panelSize / 2) / Math.tan(((Math.PI * 2) / numberOfPanels) / 2)); //traslateZ
    var rY = (360 / numberOfPanels); //rotateY
    var deg = 0;
    var color = ["#008000a8", "#ffff00a8", "#ffa500a8", "#000000a8", "#00ffffa8"];
  
    $('.pane').each(function(i, obj) {
        var rand = color[Math.floor(Math.random() * color.length)];
        $(this).css('background-color', rand);
        if (i != $('.pane').length - 1) {
            $(this).css('transform', 'rotateY(' + deg + 'deg) translateZ(' + tz + 'px)');
        } else {
            $(this).css('border-radius', '50%');
            $(this).css('height', '170px');
        }
        deg += rY;
    });
  
    var isDragging = false;
    var previousX = 0;
    var startDeg = 0;
  
    $('#carousel').on('mousedown', function(event) {
        isDragging = true;
        previousX = event.clientX;
        startDeg = deg;
    });
  
    $(document).on('mousemove', function(event) {
        if (isDragging) {
            var movementX = event.clientX - previousX;
            deg = startDeg + (movementX / 5); // Adjust sensitivity if necessary
            $('#carousel').css('transform', 'rotateY(' + deg + 'deg)');
            event.preventDefault(); // Prevent default action (scrolling)
            event.stopPropagation(); // Stop event propagation to parent elements
        }
    });
  
    $(document).on('mouseup', function() {
        isDragging = false;
    });
  
    $('#carousel').on('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta / 120 > 0) {
            // Scrolling up
            deg -= rY;
        } else {
            // Scrolling down
            deg += rY;
        }
        $('#carousel').css('transform', 'rotateY(' + deg + 'deg)');
        event.preventDefault(); // Prevent default action (scrolling)
        event.stopPropagation(); // Stop event propagation to parent elements
    });
  
    $('#next').on('click', function() {
        deg -= rY;
        $('#carousel').css('transform', 'rotateY(' + deg + 'deg)');
    });
  
    $('#prev').on('click', function() {
        deg += rY;
        $('#carousel').css('transform', 'rotateY(' + deg + 'deg)');
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
  
  // Extract details from the first slide
  var firstSlide = document.querySelector('.pane');
  if (firstSlide) {
    var title = firstSlide.querySelector('.slider-3D-text h1').textContent;
    var description = firstSlide.querySelector('.slider-3D-text p').textContent;
  
    // Update the details container
    var detailTitle = document.getElementById('detail-title');
    var detailDescription = document.getElementById('detail-description');
    if (detailTitle && detailDescription) {
      detailTitle.textContent = title;
      detailDescription.textContent = description;
    }
  }
  
  // Add event listener for slide clicks
  var slides = document.querySelectorAll('.pane');
  slides.forEach(function(slide) {
    slide.addEventListener('click', function() {
      // Extract details from the clicked slide
      var title = this.querySelector('.slider-3D-text h1').textContent;
      var description = this.querySelector('.slider-3D-text p').textContent;
  
      // Update the details container
      var detailTitle = document.getElementById('detail-title');
      var detailDescription = document.getElementById('detail-description');
      if (detailTitle && detailDescription) {
        detailTitle.textContent = title;
        detailDescription.textContent = description;
      }
    });
  });
  
  });
  