import Module        from './module';

class GreenScene extends Module {
  constructor(o) {
    super(o);
    return this.timeline;
  }
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    let greenBg = document.querySelector('#js-green-bg');
    this.timeline = new mojs.Timeline({
      delay: 2700,
      onStart: function (isForward) {
        isForward && (greenBg.style.opacity = 1);
        !isForward && (greenBg.style.opacity = 0);
      },
      onComplete: function (isForward) {
        isForward && (greenBg.style.opacity = 0);
        !isForward && (greenBg.style.opacity = 1);
      }
    });

    let pinkSquare = new mojs.Transit({
      left: '50%', top: '50%',
      shape:  'rect',
      stroke: 'hotpink',
      strokeWidth: 50,
      angle: { '-240': 0 },
      radius: 25,
      scale: { 0 : 2 },
      duration: 1500,
      fill: 'none',
      easing: 'expo.out',
      parent: greenBg,
    }).then({ strokeWidth: 3, duration: 600, easing: 'cubic.out', radius: 25 });

    pinkSquare.wrapperEl.style[ 'height' ] = '100%';
    pinkSquare.wrapperEl.style[ 'position' ] = 'relative';

    this.trailOpts = {
      left:         '40%', top: '23%',
      shape:        'circle',
      stroke:       'white',
      strokeWidth:  { 5 : 0 },
      fill:         'none',
      radius:       25,
      radiusX:      20,
      angle:       -90,
      duration:     1250,
      delay:        200,
      parent:       pinkSquare.el,
      strokeLinecap: 'round',
      strokeDasharray: '20% 300%',
      strokeDashoffset: {'-75%': '-100%'},
    }
    
    this.timeline.add(
      pinkSquare,
      this._addTrail1( pinkSquare ),
      this._addTrail2( pinkSquare ),
      this._addTrail3( pinkSquare ),
      this._addTrail4( pinkSquare )
    );
  }

  _addTrail1 ( pinkSquare ) {
    let tm     = new mojs.Timeline,
        trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle = -150;
    this.trailOpts.top = '14%';
    this.trailOpts.left = '32%';
    this.trailOpts.radius = 15;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    // this.trailOpts.stroke = 'red';
    this.trailOpts.angle = -120;
    this.trailOpts.top = '17%';
    this.trailOpts.left = '32%';
    this.trailOpts.radius = 10;
    this.trailOpts.radiusX = 7;
    let trail3 = new mojs.Transit(this.trailOpts);

    return  tm.add( trail1, trail2, trail3 );
  }
  _addTrail2 ( pinkSquare ) {
    let tm = new mojs.Timeline;
    
    this.trailOpts.left    = '78%';
    this.trailOpts.top     = '40%';
    this.trailOpts.radius  = 22;
    this.trailOpts.radiusX = 20;
    this.trailOpts.angle   = 0;
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle = -60;
    this.trailOpts.top = '32%';
    this.trailOpts.left = '85%';
    this.trailOpts.radius = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle = -0;
    this.trailOpts.top = '37%';
    this.trailOpts.left = '78%';
    this.trailOpts.radius = 10;
    this.trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(this.trailOpts);

    return tm.add( trail1, trail2, trail3 );
  }
  _addTrail3 ( pinkSquare ) {
    let tm = new mojs.Timeline;
    
    this.trailOpts.left    = '59%';
    this.trailOpts.top     = '81%';
    this.trailOpts.radius  = 18;
    this.trailOpts.radiusX = 20;
    this.trailOpts.angle   = 75;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 80;
    this.trailOpts.top     = '81%';
    this.trailOpts.left    = '60%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 45;
    this.trailOpts.left    = '67%';
    this.trailOpts.top     = '84%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(this.trailOpts);

    return tm.add( trail1, trail2, trail3 );
  }
  _addTrail4 ( pinkSquare ) {
    let tm = new mojs.Timeline;
    
    this.trailOpts.left    = '17%';
    this.trailOpts.top     = '60%';
    this.trailOpts.radius  = 20;
    this.trailOpts.radiusX = 18;
    this.trailOpts.angle   = 150;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    // this.trailOpts.angle   = 170;
    this.trailOpts.left    = '16%';
    this.trailOpts.top     = '66%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 12;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 180;
    this.trailOpts.left    = '22%';
    this.trailOpts.top     = '64%';
    this.trailOpts.radius  = 8;
    this.trailOpts.radiusX = 10;
    let trail3 = new mojs.Transit(this.trailOpts);

    return tm.add( trail1, trail2, trail3 );
  }
}

export default GreenScene;