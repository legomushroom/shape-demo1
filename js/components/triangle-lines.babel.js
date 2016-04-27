
class TriangleLines {
  constructor(o={}) {
    this._o = o;
    return this._render();
  }
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    let timeline = new mojs.Timeline({ delay: this._o.delay || 0 }),
        o = {
          left: '50%', top: '50%',
          shape:    'polygon',
          duration: 1200,
          radius:   { 150 : 100 },
          angle:    { '-70': '-60' },
          fill:     'none',
          stroke:   'cyan',
          strokeDasharray: {'50% 100%' : '0% 100%'} , 
          strokeDashoffset: { '50%' : '-66%' },
          strokeWidth: 3,
        };

    let tr1 = new mojs.Transit(o);
    tr1.el.style[ 'mix-blend-mode' ] = 'screen';

    o.stroke           = 'hotpink'; 
    o.strokeDasharray  = {'30% 120%' : '0% 120%'}; 
    o.strokeDashoffset = { '42%' : '-76%' }; 
    o.angle            = { '-80': '-60' };
    o.delay            = 75;
    let tr2 = new mojs.Transit(o);
    tr2.el.style[ 'mix-blend-mode' ] = 'screen';

    o.stroke           = 'yellow'; 
    o.strokeDashoffset = { '42%' : '-86%' }; 
    o.angle            = { '-90': '-60' };
    o.delay            = 150;
    let tr3 = new mojs.Transit(o);
    tr3.el.style[ 'mix-blend-mode' ] = 'screen';


    timeline.add( tr1, tr2, tr3 );
    return timeline;
  }
}

export default TriangleLines;