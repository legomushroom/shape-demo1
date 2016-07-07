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

    let pinkSquare = new mojs.Shape({
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

    class Sparks extends mojs.CustomShape {
      getShape () { return '<path d="M11.8274713,76.9078071 C11.8274713,76.9078071 2.16693973,42.95046 30.0687526,21.2517012"></path><path d="M25.7538383,77.4836394 C25.7538383,77.4836394 20.7413252,19.6928312 92.8457655,18.1298659"></path><path d="M29.8949928,85.1781099 C29.8949928,85.1781099 41.4904038,48.3985179 81.1308462,59.416066"></path>'; }
    }
    mojs.addShape( 'sparks', Sparks );


    const SPARKS_OPTS = {
      shape:    'sparks',
      parent:   pinkSquare.el,
      radius:   15,
      left:     '130%',
      top:      '25%',
      fill:     'none',
      strokeWidth: { 10 : 0 },
      stroke: 'white',
      strokeDasharray: '75',
      strokeDashoffset: { '75' : '-75' },
      duration: 1200,
      // easing: 'cubic.out',
      strokeLinecap: 'round'
    }

    const sparks1 = new mojs.Shape({
      ...SPARKS_OPTS,
      left:     '125%',
      top:      '25%',
      angle:    80,
    });

    const sparks2 = new mojs.Shape({
      ...SPARKS_OPTS,
      top:     '125%',
      left:    '80%',
      angle:    165,
    });

    const sparks3 = new mojs.Shape({
      ...SPARKS_OPTS,
      top:     '75%',
      left:    '-25%',
      angle:    250,
    });

    const sparks4 = new mojs.Shape({
      ...SPARKS_OPTS,
      top:     '-25%',
      left:    '20%',
      angle:    330,
    });

    return timeline.add(
      pinkSquare,
      sparks1,
      sparks2,
      sparks3,
      sparks4,
      // heart
    );
  }
}

export default GreenScene;