import Module         from './module';
import TriangleLines  from './triangle-lines';
import WhiteTriangles from './white-triangles';
import COLORS         from './colors';

class Triangles extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    super._render();

    return (new mojs.Timeline)
      .add( this._triangles( this.el ), new TriangleLines({ delay: 100 }) );
  }
  /*
    Method to add bright triangles and append white triangles scene.
    @private
    @param {Object} `HTML` element to add the circles to.
    @returns {Array(Object)} Array of timelines.
  */
  _triangles ( parent ) {
    let blendMode = 'screen',
        o = {
          left:       '50%', top: '50%',
          shape:      'polygon',
          duration:   800,
          radius:     65,
          angle:      { '-120': '-40' },
          fill:       COLORS.CYAN,
          x:          { '-200': 20 },
          y:          { '50': -20 },
          scaleX:     { 0 : 1.3 },
          parent,
          isShowEnd:  false
        },
        thenO = { x: 0, y: 0, duration: 300, angle: -60, scaleX: 1 };

    let tr1 = new mojs.Transit(o).then(thenO);
    tr1.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    o.fill             = COLORS.HOTPINK; 
    o.angle            = { '-180': '-20' };
    o.y                = { '30': '-30' };
    o.delay            = 75;
    o.scaleX          = { 0 : 1.46 };
    let tr2 = new mojs.Transit(o).then(thenO);
    tr2.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    o.fill             = COLORS.YELLOW; 
    o.angle            = { '-220': '-10' };
    o.y                = { '60': '-50' };
    o.delay            = 150;
    o.scaleX          = { 0 : 1.3 };
    let tr3 = new mojs.Transit(o).then(thenO);
    tr3.wrapperEl.style[ 'mix-blend-mode' ] = blendMode;

    return (new mojs.Timeline)
              .add( tr1, tr2, tr3 )
              .append( new WhiteTriangles );
  }
}

export default Triangles;