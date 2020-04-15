var item = document.getElementById('circle1');
item.animate([
    { transform: 'scale(1)',    left: 0,bottom: "-30%"},
    { transform: ' rotate(270deg)',   left: "2%",bottom: "-30%"},
    { transform: 'rotate(0deg)',   left: "0%",  bottom: "-35%"},
  ], {
    duration: 3000, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });
  var item = document.getElementById('circle2');
  item.animate([
      { transform: 'scale(1)',   left: "35%" ,  bottom: "-60px" },
      { transform: ' rotate(270deg)',  left: "38%"  , bottom: "-70px"  },
      { transform: 'rotate(0deg)',   left: "40%", bottom: "-80px"},
    ], {
      duration:3000, //milliseconds
      easing: 'ease-in-out', //'linear', a bezier curve, etc.
      delay: 10, //milliseconds
      iterations: Infinity, //or a number
      direction: 'alternate', //'normal', 'reverse', etc.
      fill: 'forwards' //'backwards', 'both', 'none', 'auto'
    });


    var item = document.getElementById('circle3');
    item.animate([
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
      var item = document.getElementById('circle4');
    item.animate([
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
  