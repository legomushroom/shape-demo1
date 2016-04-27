import Module        from './module';

class GreenScene extends Module {
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
    let greenBg = document.querySelector('#js-green-bg');
    this.timeline = new mojs.Timeline({
      onStart: function () {
        console.log('start', this._props.name);
        greenBg.style.opacity = 1;
      },
      onComplete: function () {
        greenBg.style.opacity = 0;
        console.log('comple', this._props.name);
      }
    });

    let pinkSquare = new mojs.Transit({
      left: '50%', top: '50%',
      shape:  'rect',
      stroke: 'hotpink',
      strokeWidth: 50,
      angle: { '-240': 0 },
      radius: 25,
      scale: { 0 : 2 },
      duration: 1200,
      fill: 'none',
      easing: 'expo.out'
    })
    // .then({ strokeWidth: 5, radius: 50 });

    
    
    this.timeline.add( pinkSquare, this._addTrail1( pinkSquare ), this._addTrail2( pinkSquare ) );
  }

  _addTrail1 ( pinkSquare ) {
    let tm = new mojs.Timeline;
    let trailOpts = {
      left: '40%', top: '23%',
      shape: 'circle',
      stroke: 'white',
      strokeWidth: { 5 : 0 },
      fill: 'none',
      radius: 25,
      radiusX: 20,
      angle: -90,
      strokeDasharray: '20% 300%',
      strokeDashoffset: {'-75%': '-100%'},
      duration: 550,
      delay: 200,
      parent: pinkSquare.el
    }

    let trail1 = new mojs.Transit(trailOpts);

    trailOpts.angle = -150;
    trailOpts.top = '14%';
    trailOpts.left = '32%';
    trailOpts.radius = 15;
    trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(trailOpts);

    // trailOpts.stroke = 'red';
    trailOpts.angle = -120;
    trailOpts.top = '17%';
    trailOpts.left = '32%';
    trailOpts.radius = 10;
    trailOpts.radiusX = 7;
    let trail3 = new mojs.Transit(trailOpts);

    return  tm.add( trail1, trail2, trail3 );
  }
  _addTrail2 ( pinkSquare ) {
    let tm = new mojs.Timeline;
    let trailOpts = {
      left: '78%', top: '40%',
      shape: 'circle',
      stroke: 'white',
      strokeWidth: { 5 : 0 },
      fill: 'none',
      radius: 22,
      radiusX: 20,
      angle: 0,
      strokeDasharray: '20% 300%',
      strokeDashoffset: {'-75%': '-100%'},
      duration: 550,
      delay: 200,
      parent: pinkSquare.el
    }

    let trail1 = new mojs.Transit(trailOpts);

    trailOpts.angle = -60;
    // trailOpts.stroke = 'red';
    trailOpts.top = '32%';
    trailOpts.left = '85%';
    trailOpts.radius = 12;
    trailOpts.radiusX = 10;
    let trail2 = new mojs.Transit(trailOpts);

    // trailOpts.stroke = 'red';
    trailOpts.angle = -0;
    // trailOpts.stroke = 'yellow';
    trailOpts.top = '37%';
    trailOpts.left = '78%';
    trailOpts.radius = 10;
    trailOpts.radiusX = 8;
    let trail3 = new mojs.Transit(trailOpts);

    return tm.add( trail1, trail2, trail3 );
  }
}

export default GreenScene;