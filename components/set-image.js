/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */


AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    link: {type: 'string'},
    dur: {type: 'number', default: 500}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    console.log(data);
    this.setupFadeAnimation();

    
    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      for (var i = 0; i < videos.length; i++) {
      var id = videos[i];
        var v = document.getElementById(id);
        v.play();
        v.pause();
        v.onended = function(e) {};
      };
      window.currentMove = data.link;
      var video = document.getElementById(data.src.replace('#',''));
      video.addEventListener('ended', myHandler, false);
      video.play();
      var playLoop = false;
      video.addEventListener('timeupdate', (e) => {
          var z = v1.duration - 5;
           if (v1.currentTime > z && !playLoop){
            playLoop = true;
            var categories = [];
            categories.push({key:4+ ""});
            categories.push({key:5 + ""});
            window.game.loadData(categories, function(){}); 
            window.game.renderLobby();
           }
      });
      function myHandler(e) {
          video.currentTime = v1.currentTime -5 ; 
          video.play();

           
      }
      data.target.setAttribute('material', 'src', data.src);

      //Remove current place.

      

    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#000',
      to: '#FFF'
    });
  }
});
