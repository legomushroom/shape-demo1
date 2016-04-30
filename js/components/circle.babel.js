import Module from './module';
import COLORS from './colors';

class Circle extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    
    let pinkBg   = this._findEl('#js-pink-bg'),
        timeline = new mojs.Timeline({
          delay:   this._props.delay,
          onStart: ( isFwd ) => { this._toggleOpacity( pinkBg, isFwd ); },
          onComplete: ( isFwd ) => { this._toggleOpacity( pinkBg, !isFwd ); }
        });

    pinkBg.style[ 'background' ] = COLORS.PINK;
    
    return timeline
            .add( this._scaleCircles( pinkBg ) )      
            .add( this._triangles( pinkBg ) )
            .add( this._lines( pinkBg ) );
  }
  /*
    Method to add the main scale circles to the scene.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _scaleCircles ( parent ) {
    let circleSize = 25,
        scale      = this._calcScale( circleSize ),
        opts       = {
          parent,
          left:       '50%', top: '50%',
          radius:     circleSize,
          fill:       '#555',
          scale:      { 1 : 4 },
          isShowEnd:  false,
          duration:   800,
          easing:     'cubic.out'
        };

    const circle1 = new mojs.Transit(opts)
      .then({
        easing:     'cubic.inout',
        scale:      2.5,
        duration:   600
      }).then({
        easing:     'cubic.inout',
        scale:      scale,
        duration:   800
      });

    // circle1.wrapperEl.style[ 'backface-visibility' ] = 'hidden';

    opts.fill     = COLORS.PINK;
    opts.scale    = { 0 : 2.25};
    opts.duration = 700;
    opts.delay    = 1000;
    const circle2 = new mojs.Transit(opts)
      .then({
        easing:     'cubic.inout',
        scale:      scale,
        duration:   700
      });

    // circle2.wrapperEl.style[ 'backface-visibility' ] = 'hidden';

    opts.fill     = COLORS.GREY;
    opts.scale    = { 0 : scale };
    opts.duration = 1000;
    opts.delay    = 2000;
    const circle3 = new mojs.Transit(opts);

    // circle3.wrapperEl.style[ 'backface-visibility' ] = 'hidden';

    return [ circle1, circle2, circle3 ];
  }
  /*
    Method to add the lines that are near circle.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _lines ( parent ) {
    const lineOpts = {
      parent,
      shape:            'line',
      left:             '50%', top: '50%',
      x:               -180,
      radius:           50,
      stroke:           COLORS.GREY,
      strokeWidth:      {15 : 0},
      duration:         1000,
      strokeDasharray:  '100% 100%',
      strokeDashoffset: { '-100%': '100%' },
      easing:           'cubic.out',
    }
    const line1 = new mojs.Transit(lineOpts);

    lineOpts.angle = 180;
    lineOpts.x     = -lineOpts.x;
    const line2 = new mojs.Transit(lineOpts);

    return [ line1, line2 ];
  }
  /*
    Method to add the triangles that are inside circle,
    moving toward it's center.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _triangles ( parent ) {
    const triangleOpts = {
      parent,
      left:       '50%', top: '50%',
      shape:      'polygon',
      radius:     15,
      duration:   700,
      fill:       COLORS.PINK,
      y:          { 80 : -15 },
      scale:      {  1 : 0 },
      delay:      850,
      easing:     'cubic.out'
    }
    const triangle1 = new mojs.Transit( triangleOpts );

    triangleOpts.y      = { '-80': 15 };
    triangleOpts.angle  = 180;
    const triangle2 = new mojs.Transit( triangleOpts );
    return [ triangle1, triangle2 ]
  }
  /*
    Method to get max window size.
    @private
    @returns Max window size.
  */
  _getWindowSize () {
    let w = window,
        width  = w.innerWidth || e.clientWidth || g.clientWidth,
        height = w.innerHeight || e.clientHeight || g.clientHeight;

    return Math.max( width, height );
  }
  /*
    Method to scale amount for radius to fill the screen.
    @private
    @returns Scale size.
  */
  _calcScale ( radius ) {
    // since it is `radius` not `diameter` - / 2
    // since it is a circle - * 1.25 to fill the square screen
    return 1.25 * (this._getWindowSize() / radius / 2);
  }

}

export default Circle;