
// create a wrapper around native canvas element (with id="c")
window.onload = function(e) {

// create a wrapper around native canvas element (with id="c")
 var canvas = new fabric.Canvas('c');
  canvas.add(rect = new fabric.Rect({ left: 110, top: 110, fill: '#f0f', width: 50, height: 50 }));
  canvas.add(rect2 = new fabric.Rect({ left: 50, top: 50, fill: '#77f', width: 40, height: 40 }));

  canvas.forEachObject(function(o){ o.hasBorders = o.hasControls = false; });

  canvas.hoverCursor = 'pointer';

  function animate(e, dir) {
    if (e.target) {
      fabric.util.animate({
        startValue: e.target.get('angle'),
        endValue: e.target.get('angle') + (dir ? 10 : -10),
        duration: 100,
        onChange: function(value) {
          e.target.setAngle(value);
          canvas.renderAll();
        },
        onComplete: function() {
          e.target.setCoords();
        }
      });
      fabric.util.animate({
        startValue: e.target.get('scaleX'),
        endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
        duration: 100,
        onChange: function(value) {
          e.target.scale(value);
          canvas.renderAll();
        },
        onComplete: function() {
          e.target.setCoords();
        }
      });
    }
  }
  rect.animate('left', 500, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 5000,
    easing: fabric.util.ease.easeOutBounce
  });
  canvas.on('mouse:down', function(e) { animate(e, 1); });
  canvas.on('mouse:up', function(e) { animate(e, 0); });

  rect2.animate('left', 600, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 8000,
    easing: fabric.util.ease.easeInBounce
  });
  canvas.on('mouse:down', function(e) { animate(e, 1); });
  canvas.on('mouse:up', function(e) { animate(e, 0); });
}