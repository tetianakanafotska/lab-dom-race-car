class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.ceil(Math.random() * (420 - 10)) + 10,
      0,
      70,
      100,
      "/images/redcar.png"
    );
  }
  move() {
    this.top += 3;
    this.updatePosition();
  }
}
