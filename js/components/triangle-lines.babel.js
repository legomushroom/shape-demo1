import Module from './module';
import COLORS from './colors';
const { Timeline } = mojs;

class TriangleLines extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    return ( new Timeline({ delay: this._props.delay }) ).add( this._lines() );
  }

  _lines () {
    let blendMode = 'screen',
        o         = {
          left:         '50%', top: '50%',
          shape:        'polygon',
          duration:     1200,
          radius:       { 150 : 100 },
          angle:        { '-70': '-60' },
          fill:         'none',
          stroke:       COLORS.CYAN,
          strokeWidth:  3,
          strokeDasharray:  {'50% 100%' : '0% 100%'} , 
          strokeDashoffset: { '50%' : '-66%' },
        };

    let shape1 = new mojs.Transit(o);
    shape1.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    o.stroke           = COLORS.HOTPINK; 
    o.strokeDasharray  = {'30% 120%' : '0% 120%'}; 
    o.strokeDashoffset = { '42%' : '-76%' }; 
    o.angle            = { '-80': '-60' };
    o.delay            = 75;
    let shape2 = new mojs.Transit(o);
    shape2.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    o.stroke           = COLORS.YELLOW; 
    o.strokeDashoffset = { '42%' : '-86%' }; 
    o.angle            = { '-90': '-60' };
    o.delay            = 150;
    let shape3  = new mojs.Transit(o);
    shape3.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    return [ shape1, shape2, shape3 ];
  }
}

export default TriangleLines;