import Module from './module';
import COLORS from './colors';

class WhiteTriangles extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    
    let blackBg = document.querySelector('#js-black-bg'),
        timeline = new mojs.Timeline({
          delay: this._props.delay,
          onStart: ( isFwd ) => { this._toggleOpacity( blackBg, isFwd ); },
          onComplete: ( isFwd ) => { this._toggleOpacity( blackBg, !isFwd ); }
        });

    blackBg.style[ 'background' ] = COLORS.BLACK;

    return timeline.add( this._static( blackBg ), this._triangles( blackBg ) );
  }
  /*
    Method to add white triangles.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Object} Static triangle object.
  */
  _static ( parent ) {
    // the static one
    return new mojs.Transit({
      parent,
      left:         '50%', top: '50%',
      shape:        'polygon',
      duration:     2000,
      radius:       { 60: 65 },
      angle:       -60,
      fill:         'none',
      stroke:       COLORS.WHITE,
      strokeWidth:  {30:5},
      easing:       'cubic.out',
      isShowEnd:    false
    });
  }
  /*
    Method to add white triangles.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _triangles ( parent ) {
    let opts = {
      parent,
      left: '50%', top: '50%',
      shape:        'polygon',
      duration:     2000,
      radius:       { 85: 125 },
      angle:       -60,
      fill:         'none',
      stroke:       COLORS.WHITE,
      strokeWidth:  { 7 : 0 },
      easing:       'cubic.out',
      delay:        100,
      isShowEnd:    false
    }
    let shape3 = new mojs.Transit(opts);

    opts.strokeWidth = { 4 : 0 };
    opts.duration = 1400;
    opts.radius = { 85 : 95 };
    let shape3_1 = new mojs.Transit(opts);

    return [ this._smallTriangles( parent ), shape3, shape3_1 ];
  }
  /*
    Method to add small white triangles.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _smallTriangles ( parent ) {
    let shift1 = 87,
        shift2 = 50,
        opts   = {
          parent,
          left: '50%', top: '50%',
          shape:        'polygon',
          duration:     2000,
          radius:       14,
          angle:       -60,
          fill:         'none',
          stroke:       COLORS.WHITE,
          strokeWidth:  { 14 : 4 },
          easing:       'expo.out',
          isShowEnd:    false
        };

    opts.x = { 0: -shift1 };
    opts.y = { 0: -shift2 };
    let shape2_1 = new mojs.Transit(opts);

    opts.x = { 0: shift1 };
    opts.y = { 0: -shift2 };
    let shape2_2 = new mojs.Transit(opts);

    opts.x = 0;
    opts.y = { 0: 1.15*shift1 };
    let shape2_3 = new mojs.Transit(opts);

    return [ shape2_1, shape2_2, shape2_3 ];
  }
}

export default WhiteTriangles;