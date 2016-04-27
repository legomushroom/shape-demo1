import Module        from './module';

class WhiteTriangles extends Module {
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
    this.timeline = new mojs.Timeline({
      onStart: function () {
        console.log('start', this._props.name);
        blackBg.style.opacity = 1;
      },
      onComplete: function () {
        blackBg.style.opacity = 0;
        console.log('comple', this._props.name);
      }
    });
    
    // the static one
    let tr1 = new mojs.Transit({
      left: '50%', top: '50%',
      shape:    'polygon',
      duration: 800,
      radius:   65,
      angle:    -60,
      fill:   'none',
      stroke: 'white',
      strokeWidth: {25:5},
    });

    let shift1 = 87,
        shift2 = 50,
        opts   = {
          left: '50%', top: '50%',
          shape:    'polygon',
          duration: 2000,
          radius:   14,
          angle:    -60,
          fill:   'none',
          stroke: 'white',
          strokeWidth: { 14 : 4 },
          easing: 'expo.out',
        };

    opts.x = { 0: -shift1 };
    opts.y = { 0: -shift2 };
    let tr2_1 = new mojs.Transit(opts);

    opts.x = { 0: shift1 };
    opts.y = { 0: -shift2 };
    let tr2_2 = new mojs.Transit(opts);

    opts.x = 0;
    opts.y = { 0: 1.15*shift1 };
    let tr2_3 = new mojs.Transit(opts);

    let tr3 = new mojs.Transit({
      left: '50%', top: '50%',
      shape:    'polygon',
      duration: 2000,
      radius:   { 85: 125 },
      angle:    -60,
      fill:   'none',
      stroke: 'white',
      strokeWidth: { 7 : 0 },
      easing: 'cubic.out',
      delay: 100
    });

    let tr3_1 = new mojs.Transit({
      left: '50%', top: '50%',
      shape:    'polygon',
      duration: 1400,
      radius:   { 85: 95 },
      angle:    -60,
      fill:   'none',
      stroke: 'white',
      strokeWidth: { 4 : 0 },
      easing: 'cubic.out',
    });
    
    this.timeline.add( tr1, tr2_1, tr2_2, tr2_3, tr3, tr3_1 );
  }
}

export default WhiteTriangles;