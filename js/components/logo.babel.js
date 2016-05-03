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
            this._toggleOpacity( pinkBg, isFwd );
            mojs.h.setPrefixedStyle( logo, 'transform', 'none' );
          },
          onComplete: ( isFwd ) => {
            this._toggleOpacity( pinkBg, !isFwd );
            this._toggleOpacity( mChar,  !isFwd );
            this._toggleOpacity( oChar,  !isFwd );
            this._toggleOpacity( jChar,  !isFwd );
            this._toggleOpacity( sChar,  !isFwd );
          }
        });
    
    return timeline.add(
      this._mChar( shiftEase, scaleEase ),
      this._oChar( shiftEase, scaleEase ),
      this._jChar( shiftEase, scaleEase ),
      this._sChar( shiftEase, scaleEase ),
      this._logoShift( shiftEase, scaleEase )
    );
  }
  /*
    Method to describe last shift logo sequence.
    @private
    @param {Function} Shift easing.
    @param {Function} Scale easing.
  */
  _logoShift ( shiftEase, scaleEase ) {
    let timeline = new mojs.Timeline({ delay: 4000 });

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
          `translate(-${ xShift }px, ${ 500*(1-shiftP) + yShift }px)
           scaleY(${ 1 + 14*scaleP })`
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

    let xShift = 200; let yShift = 200;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   800,
      delay:      600,
      onStart: ( isFwd ) => { this._toggleOpacity( char, isFwd ); },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(${ xShift }px, ${ (-500 - yShift)*(1-shiftP) + yShift }px)
           scaleY(${ 1 + 15*scaleP })`
        );
        mojs.h.setPrefixedStyle( char, 'transform-origin',
          `50% ${ 100*shiftP }%`
        );
      }
    });
    timeline.add( tween1 );

    let tween2 = new mojs.Tween({
      easing:     'linear.none',
      duration:   750,
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
      duration:   750,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ yShift*(1-shiftP) }px)
           scaleY(${ 1 + 7*scaleP })`
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

    let xShift = 200; let yShift = 200;

    let tween1 = new mojs.Tween({
      easing:     'linear.none',
      duration:   1000,
      onStart: ( isFwd ) => { this._toggleOpacity( char, isFwd ); },
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(-${ xShift }px, ${ (500 + yShift)*(1-shiftP) - yShift }px)
           scaleY(${ 1 + 12*scaleP })`
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
      duration:   1000,
      onUpdate (p) {
        var shiftP = shiftEase( p );
        var scaleP = scaleEase( p );

        mojs.h.setPrefixedStyle( char, 'transform',
          `translate(0px, ${ -yShift*(1-shiftP) }px)
           scaleY(${ 1 + 4*scaleP })`
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
           scaleY(${ 1 + 6*scaleP })`
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