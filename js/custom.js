
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);

  document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.querySelector('.video-container');
    var overlay = videoContainer.querySelector('.video-overlay');
    var iframe = videoContainer.querySelector('.video-frame');

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        iframe.style.filter = 'none';

        var player = new YT.Player(iframe, {
            events: {
                'onReady': function (event) {
                    event.target.playVideo();
                }
            }
        });
    });
});


// FUNGSI LOGIN GOOGLE

document.getElementById('login-icon').addEventListener('click', function() {
  document.getElementById('login-popup').classList.add('active');
});

document.getElementById('popup-close').addEventListener('click', function() {
  document.getElementById('login-popup').classList.remove('active');
});

// Close the pop-up when clicking outside of it
document.addEventListener('click', function(event) {
  const popup = document.getElementById('login-popup');
  const icon = document.getElementById('login-icon');

  if (!popup.contains(event.target) && event.target !== icon) {
      popup.classList.remove('active');
  }
});

function googleLogin() {
  // Add your Google login functionality here
  alert('Google login clicked!');
}

// Grafik Game
document.addEventListener('DOMContentLoaded', function () {
  var expCtx = document.getElementById('exp-chart').getContext('2d');
  var levelCtx = document.getElementById('level-chart').getContext('2d');

  var expChart = new Chart(expCtx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'EXP Gained',
              data: [200, 400, 300, 500, 600, 700],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Month'
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'EXP'
                  }
              }
          }
      }
  });

  var levelChart = new Chart(levelCtx, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'Level Progress',
              data: [1, 2, 3, 4, 5, 6],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: true,
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Month'
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Level'
                  }
              }
          }
      }
  });
});

