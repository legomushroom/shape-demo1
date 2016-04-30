import Polyfill       from 'classlist-polyfill';
import MojsPlayer     from 'mojs-player'
import Module         from './components/module';
import TriangleLines  from './components/triangle-lines';
import Triangles      from './components/triangles';
import GreenScene     from './components/green-scene';
import Circle         from './components/circle';

// require('css/blocks/mojs-player.postcss.css');
// let CLASSES = require('css/blocks/mojs-player.postcss.css.json');


class Demo extends Module {
  /*
    Method for initial module's render.
    @private
  */
  _render () {
    const mainTimeline = ( new mojs.Timeline )
      .add( new Triangles )
      .add( new GreenScene({ delay: 2700 }) )
      .add( new Circle({ delay: 4000 }) );

    ( new MojsPlayer({ add: mainTimeline }) )
      .el.style[ 'z-index' ] = 10;
  }
}

new Demo;

// if ( (typeof define === "function") && define.amd ) {
//   define(function () { return MojsPlayer; });
// }
// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
//   module.exports = MojsPlayer;
// }

// let _global = ( typeof global !== 'undefined' ) ? global : window;
// _global.MojsPlayer = MojsPlayer;

export default Demo;