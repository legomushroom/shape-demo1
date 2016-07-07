import Module from './module';
import COLORS from './colors';

class Logo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    this._createChars();

    const {approximate} = mojs.easing;
    
    let logo      = this._findEl('#js-logo');
    let pinkBg    = this._findEl('#js-pink-bg'),
        shiftCurve = approximate(mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' )),
        scaleCurve = approximate(mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' )),
        timeline  = new mojs.Timeline({
          delay:   this._props.delay,
          // speed: .75,
          onStart: ( isFwd ) => {
            mojs.h.setPrefixedStyle( logo, 'transform', 'none' );
          },
          onComplete: ( isFwd ) => {
            this._toggleOpacity( pinkBg, !isFwd );

            let modules = this.underlineShape.childModules;
            for (var i = 0; i < modules.length; i++) {
              modules[i]._hide();
            }
          }
        });

    const scale = function (curve, n) {
      return (p) => { return n*curve(p); }
    }

    const increase = function (curve, n) {
      return (p) => { return n + curve(p); }
    }

    const scaleC = approximate( increase( scaleCurve, 1 ) );

    const scaledCurve = ( amount ) => {
      return increase( scale( scaleCurve, amount ), 1 );
    }
    
    const scaleCShort = approximate( scaledCurve(.75) );

    const charSize = 25;
    const leftStep = 22;

    const CHAR_OPTS = {
      parent:       logo,
      fill:         'white',
      radius:       charSize/2,
      stroke:       'white',
      isForce3d:    true
    }

    const CHAR_HIDE_THEN = {
      delay: 1600,
      isShowEnd: false
    }

    const mNewChar = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'm',
      left:       `${1*leftStep}%`,
      x:         -7,
      y:          { [350] : 150, easing: shiftCurve },
      scaleY:     { 1 : 1, curve: scaleCShort },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve },
      delay:      400,
      duration:   1000
    }).then({
      y:          { to: 0, easing: shiftCurve },
      scaleY:     { 1: 1, curve: approximate( scaledCurve(.5) ) },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve },
      delay:      200
    }).then(CHAR_HIDE_THEN);

    const oNewChar = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'circle',
      fill:       'none',
      left:       `${2*leftStep}%`,
      strokeWidth: 3,
      x:          200,
      y:          { [-100] : 250, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleC },
      origin:     { '50% 0%' : '50% 100%', easing: shiftCurve },
      delay:      600,
      duration:   800
    }).then({
      duration:   700,
      x:          { to: 0, easing: shiftCurve },
      scaleX:     { 1: 1, curve: scaleCShort },
      origin:     { '100% 50%' : '0% 50%', easing: shiftCurve }
    }).then({
      duration:   1200,
      y:          { to: 0, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleCShort },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);

    const oNewCharInner = new mojs.Shape({
      parent:       oNewChar.el,
      fill:         'white',
      radius:       3,
      y:            { 0: 35 },
      delay:        2300,
      easing:       'expo.out',
      isForce3d:    true,
      isShowStart:  true
    }).then({
      y: 0,
      easing: 'elastic.out',
      duration: 2000
    });

    const jNewChar = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'j',
      left:       `${3*leftStep}%`,
      x:         -200,
      y:          { [250] : -100, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleC },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve },
      delay:      40,
      duration:   1000
    })
    .then({
      duration:   900,
      x:          { to: 0, easing: shiftCurve },
      scaleX:     { 1: 1, curve: scaleCShort },
      origin:     { '0% 50%' : '100% 50%', easing: shiftCurve }
    })
    .then({
      y:          { to: 0, easing: shiftCurve },
      scaleY:     { 1: 1, curve:  approximate( scaledCurve(.5) ) },
      origin:     { '50% 0%' : '50% 100%', easing: shiftCurve }
    }).then(CHAR_HIDE_THEN);

    const sNewChar = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      's',
      left:       `${4*leftStep}%`,
      x:          { 500: 0, easing: shiftCurve },
      y:          200,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve },
      delay:      200,
      duration:   900
    })
    .then({
      delay:      200,
      y:          { to: 0, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleCShort },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
    }).then({ ...CHAR_HIDE_THEN, delay: 2200 });

    return timeline.add(
      mNewChar,
      oNewChar, oNewCharInner,
      jNewChar,
      sNewChar,
      this._addLines( logo ),
      this._addShapes( logo ),
      this._logoShift()
    );
  }
  /*
    Method to add bright line shapes.
    @private
    @param {Object} HTML element to use as parent of shapes.
    @returns {Array(Object)} Array of Shapes.
  */
  _addShapes ( parent ) {
    let StaggerShape = mojs.stagger( mojs.Shape );

    let stagger = new StaggerShape({
      parent,
      left: '100%',
      x: [ -20, 10, 0 ],
      y: [ -25, -5, -35 ],
      quantifier:  'shape',
      shape:        [ 'circle', 'polygon', 'rect' ],
      radius:       7,
      fill:         'none',
      stroke:       [ 'deeppink', COLORS.CYAN, COLORS.YELLOW ],
      strokeWidth:  { 5 : 0 },
      scale:        { .75 : 1 },
      delay:        'stagger(3200, 100)',
      isTimelineLess: true
    });
    return stagger;
  }
  /*
    Method to add bright line shapes.
    @private
    @param {Object} HTML element to use as parent of shapes.
    @returns {Array(Object)} Array of Shapes.
  */
  _addLines ( logo ) {
    let opts = {
      shape:        'line',
      strokeWidth:  { 10: 0 },
      stroke:       COLORS.CYAN,
      radius:       44,
      parent:       logo,
      angle:        90,
      duration:     800,
      delay:        850,
      radiusY:      0,
      strokeDasharray: '100% 100%',
      strokeDashoffset: { '100%': '-100%' }
    };

    let line1 = new mojs.Shape({
      ...opts,
      x:  189,
      y:  { [-20] : 160 },
    });

    let line2 = new mojs.Shape({
      ...opts,
      x: -175,
      y: { 200 : -20 },
      stroke: COLORS.HOTPINK,
      strokeDashoffset: { '-100%' : '100%' },
      delay: 500
    });

    let line3 = new mojs.Shape({
      ...opts,
      radius: 53,
      // x: 43,
      y: 30,
      stroke: COLORS.YELLOW,
      strokeDashoffset: { '-100%': '100%' },
      delay: 1400,
      angle: 0
    });

    let StaggerShape = new mojs.stagger( mojs.Shape );

    let underlines      = new StaggerShape({
      ...opts,
      radius: 53,
      angle:  0,
      radiusY: 0,
      y: 30,
      strokeWidth: 2,
      stroke: [ COLORS.HOTPINK, COLORS.YELLOW, COLORS.CYAN, COLORS.WHITE ],
      duration: 1000,
      delay: 'stagger(2900, 250)',
      strokeDasharray: null,
      strokeDashoffset: null,
      scaleX: { 0: 1 },
      origin: '0 50%',
      quantifier: 'stroke',
      easing: 'expo.out',
      x: 1,
      isForce3d: true
    });
    this.underlineShape = underlines;
    
    return [
      line1, line2, line3, underlines
    ];
  }
  /*
    Method to describe last shift logo sequence.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _logoShift ( shiftEase, scaleCurve ) {
    let timeline = new mojs.Timeline({ delay: 4800 });

    let logo = this._findEl( '#js-logo' );

    this._getLastShift();
    let yShift = this._lastShift;

    mojs.h.setPrefixedStyle( logo, 'transform-origin', `50% 0` );
    let tween = new mojs.Tween({
      duration: 600,
      onUpdate (p) {
        var shiftP = mojs.easing.cubic.in( p );
        var scaleP = mojs.easing.quad.in( p );

        mojs.h.setPrefixedStyle( logo, 'transform',
          `translate(0px, ${ yShift*shiftP }px)
          scaleY(${ 1 + 25*scaleP })`
        );
      }
    })

    return timeline.add( tween );
  }
  /*
    Method to get the last Y shift.
  */
  _getLastShift () {
    let height = this._getWindowHeight();
    this._lastShift = height/1.5;
  }

  _createChars () {
    
    class M extends mojs.CustomShape {
      getShape () {
        return '<path d="M91.5714286,44.4285714 L91.5714286,100 L96.7142857,100 L96.7142857,33.4285714 L49.8571429,72 L3,33.4285714 L3,100 L8.14285714,100 L8.14285714,44.4285714 L49.8571429,78.7142857 L91.5714286,44.4285714 Z M49.8571429,38.7142857 L92,3.85714286 L88.7142857,-6.50146603e-13 L49.8571429,31.8571429 L11,-6.50146603e-13 L7.71428571,3.85714286 L49.8571429,38.7142857 Z"></path>';
      }
    }
    mojs.addShape('m', M);

    class J extends mojs.CustomShape {
      getShape () {
        return '<path d="M22,87.535014 C27.7422969,95.0980392 36.8459384,100 47.070028,100 C64.2969188,100 78.442577,88.6554622 78.442577,68.627451 L78.442577,0 L73.4005602,0 L73.4005602,68.627451 C73.4005602,85.8543417 61.4957983,94.9579832 47.070028,94.9579832 C38.3865546,94.9579832 30.5434174,90.6162465 25.7815126,84.0336134 L22,87.535014 Z"></path>';
      }
    }
    mojs.addShape('j', J);

    class S extends mojs.CustomShape {
      getShape () {
        return '<path d="M15,71.0164835 C15,92.3076923 34.7802198,100 49.478022,100 C68.5714286,100 84.0934066,91.2087912 84.0934066,72.3901099 C84.0934066,61.5384615 79.2857143,51.7857143 61.978022,45.1923077 C45.2197802,38.8736264 27.2252747,35.5769231 27.2252747,21.8406593 C27.2252747,10.3021978 38.0769231,4.53296703 48.9285714,4.53296703 C59.9175824,4.53296703 70.7692308,10.3021978 70.7692308,21.8406593 L75.7142857,21.8406593 C75.7142857,7.14285714 62.6648352,0 49.478022,0 C36.0164835,0 22.2802198,7.41758242 22.2802198,21.8406593 C22.2802198,39.5604396 43.4340659,42.9945055 60.6043956,49.5879121 C74.8901099,55.0824176 79.1483516,63.7362637 79.1483516,72.5274725 C79.1483516,89.010989 64.1758242,95.0549451 49.478022,95.0549451 C35.3296703,95.0549451 19.9450549,87.6373626 19.9450549,71.0164835 L15,71.0164835 Z"></path>';
      }
    }
    mojs.addShape('s', S);

  }
}

export default Logo;