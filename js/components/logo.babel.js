import Module from './module';
import COLORS from './colors';

class Logo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    let logo  = this._findEl( '#js-logo' );
    let mChar = this._findEl( '#js-logo-m' );
    let oChar = this._findEl( '#js-logo-o' );
    let jChar = this._findEl( '#js-logo-j' );
    let sChar = this._findEl( '#js-logo-s' );
    let pinkBg    = this._findEl('#js-pink-bg'),
        shiftEase = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' ),
        scaleEase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' ),
        timeline  = new mojs.Timeline({
          delay:   this._props.delay,
          onStart: ( isFwd ) => {
            // this._toggleOpacity( pinkBg, isFwd );
            mojs.h.setPrefixedStyle( logo, 'transform', 'none' );
          },
          onComplete: ( isFwd ) => {
            this._toggleOpacity( pinkBg, !isFwd );

            this._toggleOpacity( mChar,  !isFwd );
            this._toggleOpacity( oChar,  !isFwd );
            this._toggleOpacity( jChar,  !isFwd );
            this._toggleOpacity( sChar,  !isFwd );

            let modules = this.underlineShape.childModules;
            for (var i = 0; i < modules.length; i++) {
              modules[i]._hide();
            }
          }
        });
    
    return timeline.add(
      this._mChar( shiftEase, scaleEase ),
      this._oChar( shiftEase, scaleEase ),
      this._jChar( shiftEase, scaleEase ),
      this._sChar( shiftEase, scaleEase ),
      this._logoShift( shiftEase, scaleEase ),
      this._addLines( logo ),
      this._addShapes( logo )
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
      x: [ 75, 105, 95 ],
      y: [ -15, 5, -25 ],
      quantifier:  'shape',
      shape:        [ 'circle', 'polygon', 'rect' ],
      radius:       7,
      fill:         'none',
      stroke:       [ 'deeppink', COLORS.CYAN, COLORS.YELLOW ],
      strokeWidth:  { 5 : 0 },
      scale:        { .75 : 1 },
      delay:        'stagger(3000, 100)',
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
      shape: 'line',
      x:        233,
      y:        { 0 : 150 },
      strokeWidth: 5,
      stroke: COLORS.CYAN,
      radius: 44,
      parent: logo,
      angle:   90,
      duration: 800,
      delay: 850,
      isShowStart: 1,
      strokeDasharray: '100% 100%',
      strokeDashoffset: { '100%': '-100%' }
    }
    let shape1 = new mojs.Shape( opts );

    opts.x = -140;
    opts.y = { 200 : 0 };
    opts.stroke = COLORS.HOTPINK;
    opts.strokeDashoffset = { '-100%': '100%' };
    opts.delay = 300;
    let shape2 = new mojs.Shape( opts );

    opts.x = 43;
    opts.y = 20;
    opts.stroke = COLORS.YELLOW;
    opts.delay = 1200;
    opts.angle = 0;
    let shape3 = new mojs.Shape( opts );

    let StaggerShape = new mojs.stagger( mojs.Shape );

    opts.y = 40;
    opts.strokeWidth = 3;
    opts.stroke = [ COLORS.HOTPINK, COLORS.YELLOW, COLORS.CYAN, COLORS.WHITE ];
    opts.duration = 1000;
    opts.delay = 'stagger(2600, 250)';
    opts.strokeDashoffset = { '100%': 0 };
    opts.quantifier = 'stroke';
    opts.easing = 'expo.out';
    let shape4 = new StaggerShape( opts );
    this.underlineShape = shape4;

    return [ shape1, shape2, shape3, shape4 ];
  }
  /*
    Method to describe last shift logo sequence.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _logoShift ( shiftEase, scaleEase ) {
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
  /*
    Method to describe M character sequnce.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _mChar ( shiftEase, scaleEase ) {
    let char = this._findEl( '#js-logo-m' );
    let timeline = new mojs.Timeline;

    let xShift = 0; let yShift = 100;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   1000,
      delay:      400,
      onStart: ( isFwd ) => { this._toggleOpacity( char, isFwd ); },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(-${ xShift }px, ${ 250*(1-shiftP) + yShift }px)
           scaleY(${ 1 + 7*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*(1-shiftP) }%`
        );
      }
    });
    timeline.add( tween1 );

    let tween2 = new mojs.Tween({
      easing:     'linear.none',
      duration:   1000,
      delay:      200,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ yShift*(1-shiftP) }px)
           scaleY(${ 1 + 3*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*(1-shiftP) }%`
        );
      }
    });
    timeline.append( tween2 );

    return timeline;
  }
  /*
    Method to describe O character sequnce.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _oChar ( shiftEase, scaleEase ) {
    let timeline = new mojs.Timeline;
    let char = this._findEl( '#js-logo-o' );

    let xShift = 200; let yShift = 250;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   800,
      delay:      600,
      onStart: ( isFwd ) => { this._toggleOpacity( char, isFwd ); },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(${ xShift }px, ${ (- yShift)*(1-shiftP) + yShift }px)
           scaleY(${ 1 + 8*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*shiftP }%`
        );
      }
    });
    timeline.add( tween1 );

    let tween2 = new mojs.Tween({
      easing:     'linear.none',
      duration:   700,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(${ xShift*(1-shiftP) }px, ${ yShift }px)
           scaleX(${ 1 + 15*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `${ 100*(1-shiftP) }% 50%`
        );
      }
    });

    timeline.append( tween2 );

    let tween3 = new mojs.Tween({
      easing:     'linear.none',
      duration:   700,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ yShift*(1-shiftP) }px)
           scaleY(${ 1 + 6*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*(1-shiftP) }%`
        );
      }
    });

    timeline.append( tween3 );

    return timeline;
  }
  /*
    Method to describe J character sequnce.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _jChar ( shiftEase, scaleEase ) {
    let timeline = new mojs.Timeline;
    let char = this._findEl( '#js-logo-j' );

    let xShift = 200; let yShift = 100;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   1000,
      delay:      40,
      onStart: ( isFwd ) => {
        this._toggleOpacity( char, isFwd );
      },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(-${ xShift }px, ${ (250 + yShift)*(1-shiftP) - yShift }px)
           scaleY(${ 1 + 10*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*(1-shiftP) }%`
        );
      }
    });
    timeline.add( tween1 );

    let tween2 = new mojs.Tween({
      easing:     'linear.none',
      duration:   900,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(${ -xShift*(1-shiftP) }px, ${ -yShift }px)
           scaleX(${ 1 + 15*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `${ 100*shiftP }% 50%`
        );
      }
    });

    timeline.append( tween2 );

    let tween3 = new mojs.Tween({
      easing:     'linear.none',
      duration:   900,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ -yShift*(1-shiftP) }px)
           scaleY(${ 1 + 3*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*shiftP }%`
        );
      }
    });

    timeline.append( tween3 );

    return timeline;
  }
  /*
    Method to describe S character sequnce.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _sChar ( shiftEase, scaleEase ) {
    let timeline = new mojs.Timeline;
    let char = this._findEl( '#js-logo-s' );

    let xShift = 500; let yShift = 200;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   900,
      delay:      200,
      onStart: ( isFwd ) => { this._toggleOpacity( char, isFwd ); },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(${ xShift*(1-shiftP) }px, ${ yShift }px)
           scaleX(${ 1 + 19*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `${ 100*(1-shiftP) }% 50%`
        );
      }
    });
    timeline.add( tween1 );

    let tween2 = new mojs.Tween({
      easing:     'linear.none',
      duration:   900,
      delay:      200,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ yShift*(1-shiftP) }px)
           scaleY(${ 1 + 5.5*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*(1-shiftP) }%`
        );
      }
    });

    timeline.append( tween2 );

    return timeline;
  }
}

export default Logo;