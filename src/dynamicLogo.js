import Point from './classes/Point'
import Line from './classes/Line'
import Graphic from './classes/Graphic'
import Type from './classes/Type'

const DynamicLogo = {
  types : [
    new Type([
      new Line([
        new Point(7, 9),
        new Point(29, 9),
      ]),
      new Line([
        new Point(28, 16),
        new Point(25, 38),
      ]),
      new Line([
        new Point(7, 46),
        new Point(29, 46),
      ]),
      new Line([
        new Point(7, 60),
        new Point(29, 60),
      ]),
      new Line([
        new Point(29, 64),
        new Point(7, 83),
      ]),
      new Line([
        new Point(7, 87),
        new Point(29, 87),
      ]),
    ]),
    new Type([
      new Line([
        new Point(33, 9),
        new Point(52, 9),
      ]),
      new Line([
        new Point(39, 16),
        new Point(35, 38),
      ]),
      new Line([
        new Point(40, 27),
        new Point(51, 35),
      ]),
      new Line([
        new Point(57, 7),
        new Point(57, 39),
      ]),
      new Line([
        new Point(57, 20),
        new Point(63, 20),
      ], "strict"),
    ]),
    new Type([
      new Line([
        new Point(65, 9),
        new Point(82, 9),
      ]),
      new Line([
        new Point(82, 13),
        new Point(64, 32),
      ]),
      new Line([
        new Point(64, 37),
        new Point(82, 37),
      ]),
      new Line([
        new Point(87, 8),
        new Point(87, 38),
      ]),
      new Line([
        new Point(87, 21),
        new Point(93, 21),
      ], "strict"),
    ], 
    [
      new Graphic({
        x:78, y:48, shape:null
      })
    ])
  ]
}

export default DynamicLogo