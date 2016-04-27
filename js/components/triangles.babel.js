import Module         from './module';
import TriangleLines  from './triangle-lines';
import WhiteTriangles from './white-triangles';

class Triangles extends Module {
  constructor(o) {
    super(o);
    return this.timeline;
  }
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();
    let blackBg = document.querySelector('#js-black-bg');
    this.timeline = new mojs.Timeline();

    // this.el.style[ 'mix-blend-mode' ] = 'screen'
    
    let o = {
      left: '50%', top: '50%',
      shape:    'polygon',
      duration: 800,
      radius:   65,
      angle:    { '-120': '-40' },
      fill:   'cyan',
      // scale:   { 0: 1 },
      x:       { '-200': 20 },
      y:       { '50': -20 },
      radiusX: { 0 : 85 },
      parent: this.el,
      isShowEnd: false
    },
    thenO = { x: 0, y: 0, duration: 300, angle: -60, radiusX: 65 };

    let tr1 = new mojs.Transit(o).then(thenO);
    tr1.el.style[ 'mix-blend-mode' ] = 'screen';
    tr1._modules[1].el.style[ 'mix-blend-mode' ] = 'screen';

    o.fill           = 'hotpink'; 
    o.angle            = { '-180': '-20' };
    o.y                = { '30': '-30' };
    o.delay            = 75;
    o.radiusX          = { 0 : 95 };
    let tr2 = new mojs.Transit(o).then(thenO);
    tr2.el.style[ 'mix-blend-mode' ] = 'screen';
    tr2._modules[1].el.style[ 'mix-blend-mode' ] = 'screen';

    o.fill           = 'yellow'; 
    o.angle            = { '-220': '-10' };
    o.y                = { '60': '-50' };
    o.delay            = 150;
    o.radiusX          = { 0 : 85 };
    let tr3 = new mojs.Transit(o).then(thenO);
    tr3.el.style[ 'mix-blend-mode' ] = 'screen';
    tr3._modules[1].el.style[ 'mix-blend-mode' ] = 'screen';

    let tm1 = new mojs.Timeline({ delay: 0 });

    tm1.add( tr1, tr2, tr3 );
    tm1.append( new WhiteTriangles );

    this.timeline.add( new TriangleLines({ delay: 100 }), tm1);
  }
}

export default Triangles;