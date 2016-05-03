import Module from './module';
import COLORS from './colors';

class GreenScene extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    let greenBg = document.querySelector('#js-green-bg'),
        timeline = new mojs.Timeline({
          delay: this._props.delay,
          onStart:(isFwd) => { this._toggleOpacity( greenBg, isFwd ); },
          onComplete: (isFwd) => { this._toggleOpacity( greenBg, !isFwd ); }
        });

    greenBg.style[ 'background' ] = COLORS.GREEN;

    let pinkSquare = new mojs.Transit({
      left: '50%', top: '50%',
      shape:        'rect',
      stroke:       COLORS.HOTPINK,
      strokeWidth:  40,
      angle:        { '-240': 0 },
      radius:       20,
      scale:        { 0 : 2 },
      duration:     1500,
      fill:         'none',
      easing:       'expo.out',
      parent:       greenBg,
    });

    this.trailOpts = {
      left: '45%', top: '-12%',
      shape:          'circle',
      stroke:         'white',
      strokeWidth:    { 6 : 0 },
      fill:           'none',
      radius:         25,
      radiusX:        20,
      angle:          -100,
      duration:       1150,
      delay:          300,
      parent:         pinkSquare.el,
      strokeLinecap:  'round',
      strokeDasharray: '20% 300%',
      strokeDashoffset: {'-75%': '-100%'},
    }
    
    return timeline.add(
      pinkSquare,
      this._addTrail1( pinkSquare ),
      this._addTrail2( pinkSquare ),
      this._addTrail3( pinkSquare ),
      this._addTrail4( pinkSquare )
    );
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail1 ( pinkSquare ) {
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle = -140;
    this.trailOpts.top = '-22%';
    this.trailOpts.left = '22%';
    this.trailOpts.radius = 15;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    // this.trailOpts.stroke = 'red';
    this.trailOpts.angle = -100;
    this.trailOpts.top = '-16%';
    this.trailOpts.left = '36%';
    this.trailOpts.radius = 10;
    this.trailOpts.radiusX = 7;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail2 ( pinkSquare ) {
    this.trailOpts.left    = '115%';
    this.trailOpts.top     = '40%';
    this.trailOpts.radius  = 22;
    this.trailOpts.radiusX = 20;
    this.trailOpts.angle   = -10;
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = -60;
    this.trailOpts.left    = '122%';
    this.trailOpts.top     = '19%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = -20;
    this.trailOpts.left    = '114%';
    this.trailOpts.top     = '32%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail3 ( pinkSquare ) {
    this.trailOpts.left    = '63%';
    this.trailOpts.top     = '115%';
    this.trailOpts.radius  = 18;
    this.trailOpts.radiusX = 20;
    this.trailOpts.angle   = 75;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 80;
    this.trailOpts.left    = '64%';
    this.trailOpts.top     = '113%';
    this.trailOpts.radius  = 12;
    this.trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 45;
    this.trailOpts.left    = '83%';
    this.trailOpts.top     = '120%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
  /*
    Method to add trail.
    @private
    @returns {Array(Object)} Array of `Transits`.
  */
  _addTrail4 ( pinkSquare ) {
    this.trailOpts.left    = '-19%';
    this.trailOpts.top     = '64%';
    this.trailOpts.radius  = 20;
    this.trailOpts.radiusX = 18;
    this.trailOpts.angle   = 135;
    // this.trailOpts.strokeDasharray = '';
    let trail1 = new mojs.Transit(this.trailOpts);

    this.trailOpts.angle   = 180;
    this.trailOpts.left    = '-7%';
    this.trailOpts.top     = '68%';
    this.trailOpts.radius  = 10;
    this.trailOpts.radiusX = 12;
    let trail2 = new mojs.Transit(this.trailOpts);

    // this.trailOpts.angle   = 180;
    this.trailOpts.left    = '-20%';
    this.trailOpts.top     = '65%';
    this.trailOpts.radius  = 8;
    this.trailOpts.radiusX = 10;
    // this.trailOpts.stroke = 'deeppink';
    let trail3 = new mojs.Transit(this.trailOpts);

    return [ trail1, trail2, trail3 ];
  }
}

export default GreenScene;