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
          onStart: ( isFwd ) => {
            this._toggleOpacity( pinkBg, isFwd );
            if ( isFwd ) { this.circle3._hide(); }
          }
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
    let circleSize = 500,
        scale      = this._calcScale( circleSize ),
        opts       = {
          parent,
          left:       '50%', top: '50%',
          radius:     circleSize,
          fill:       COLORS.GREY,
          scale:      { 0.05 : 0.2 },
          duration:   800,
          easing:     'cubic.out',
          isShowEnd:  false,
          isForce3d:  true,
        };

    const circle1 = new mojs.Shape(opts)
      .then({
        easing:     'cubic.inout',
        scale:      .125,
        duration:   600
      }).then({
        easing:     'cubic.inout',
        scale:      scale,
        duration:   800
      });

    const circle2 = new mojs.Shape({
      ...opts,
      fill:       COLORS.PINK,
      scale:      { 0 : .1125 },
      duration:   700,
      delay:      1000,

    }).then({
      easing:     'cubic.inout',
      scale:      scale,
      duration:   700
    });

    const circle3 = new mojs.Shape({
      ...opts,
      fill:         COLORS.GREY,
      scale:        { 0: scale },
      duration:     1000,
      delay:        2000,
      isShowStart:  true,
      isShowEnd:    true
    });
    this.circle3 = circle3;

    let smallCircle = new mojs.Shape({
      parent,
      left: '50%', top: '50%',
      radius:       { 5: 25 },
      fill:         'none',
      stroke:       COLORS.GREY,
      strokeWidth:  { 20: 0 },
      isShowEnd:    false,
      delay:        1200,
      duration:     500,
      // opacity:      { 1: 0 }
    });

    return [ circle1, circle2, circle3, smallCircle ];
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
      x:               -180,
      radius:           50,
      radiusY:          0,
      stroke:           COLORS.GREY,
      strokeWidth:      {15 : 0},
      duration:         1000,
      isShowEnd:        false,
      strokeDasharray:  '100% 100%',
      strokeDashoffset: { '-100%': '100%' },
      easing:           'cubic.out',
    }
    const line1 = new mojs.Shape(lineOpts);

    const line2 = new mojs.Shape({
      ...lineOpts,
      angle:  180,
      x:      -lineOpts.x
    });

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
    const triangle1 = new mojs.Shape( triangleOpts );

    const triangle2 = new mojs.Shape({
      ...triangleOpts,
      y:        { [-80] : 15 },
      angle:    180
    });
    return [ triangle1, triangle2 ]
  }
  /*
    Method to scale amount for radius to fill the screen.
    @private
    @returns Scale size.
  */
  _calcScale ( radius ) {
    // since it is `radius` not `diameter` - / 2
    // since it is a circle - * 1.25 to fill the square screen
    return 1.4 * (this._getWindowSize() / radius / 2);
  }

}

export default Circle;