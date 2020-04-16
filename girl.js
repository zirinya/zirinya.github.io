

      var item3 = document.getElementById('avatar');
      item3.animate([
        { transform: 'rotate(0deg)'},
          { transform: ' rotate(-5deg)'  },
          { transform: 'rotate(5deg)'}, 
        ], {
          duration:500, //milliseconds
          easing: 'ease-in-out', //'linear', a bezier curve, etc.
          delay: 2, //milliseconds
          iterations: 4, //or a number
          direction: 'alternate', //'normal', 'reverse', etc.
          fill: 'forwards' //'backwards', 'both', 'none', 'auto'
        });
  