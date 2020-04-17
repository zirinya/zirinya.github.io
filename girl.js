

      var item3 = document.getElementById('avatar');
      item3.animate([
        { transform: 'rotate(0deg)'},
          { transform: ' rotate(-5deg)'  },
          { transform: 'rotate(5deg)'}, 
        ], {
          duration:500,
          easing: 'ease-in-out',
          delay: 2, 
          iterations: 4,
          direction: 'alternate', 
          fill: 'forwards' 
        });
  