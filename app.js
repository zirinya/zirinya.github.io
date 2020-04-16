var item = document.getElementById('circle1');
item.animate([
    { transform: 'scale(1)',    left: "-10%",bottom: "-30%"},
    { transform: ' rotate(270deg)',   left: "-11%",bottom: "-30%"},
    { transform: 'rotate(0deg)',   left: "-14%",  bottom: "-35%"},
  ], {
    duration: 3000, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });
  var item1 = document.getElementById('circle2');
  item1.animate([
      { transform: 'scale(1)',   left: "28%" ,  bottom: "-60px" },
      { transform: ' rotate(270deg)',  left: "30%"  , bottom: "-70px"  },
      { transform: 'rotate(0deg)',   left: "35%", bottom: "-80px"},
    ], {
      duration:3000, //milliseconds
      easing: 'ease-in-out', //'linear', a bezier curve, etc.
      delay: 10, //milliseconds
      iterations: Infinity, //or a number
      direction: 'alternate', //'normal', 'reverse', etc.
      fill: 'forwards' //'backwards', 'both', 'none', 'auto'
    });


    var item2 = document.getElementById('circle3');
    item2.animate([
        { transform: 'scale(1)',  bottom:" 0%"  },
        { transform: ' rotate(270deg)' ,  bottom:" 5%" },
        { transform: 'rotate(0deg)',  bottom:" 10%"},
      ], {
        duration:3000, //milliseconds
        easing: 'ease-in-out', //'linear', a bezier curve, etc.
        delay: 10, //milliseconds
        iterations: Infinity, //or a number
        direction: 'alternate', //'normal', 'reverse', etc.
        fill: 'forwards' //'backwards', 'both', 'none', 'auto'
      });
      var item3 = document.getElementById('circle4');
    item3.animate([
        { transform: 'scale(1)',  bottom:" -5%"  },
        { transform: ' rotate(270deg)' ,  bottom:" -10%" },
        { transform: 'rotate(0deg)',  bottom:" -15%"},
      ], {
        duration:3000, //milliseconds
        easing: 'ease-in-out', //'linear', a bezier curve, etc.
        delay: 10, //milliseconds
        iterations: Infinity, //or a number
        direction: 'alternate', //'normal', 'reverse', etc.
        fill: 'forwards' //'backwards', 'both', 'none', 'auto'
      });
