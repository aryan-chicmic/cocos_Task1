import { _decorator,Component,Node,Vec3, Sprite,UITransform,Input,Enum, DirectionalLight,} from "cc";
const { ccclass, property } = _decorator;

enum DIRECTION {
  NONE = 0,
  TOP = 1,
  BOTTOM = 2,
  LEFT = 3,
  RIGHT = 4,
}

@ccclass("btnclick")
export class btnclick extends Component {
  @property({ type: Enum(DIRECTION) })
  buttonType = DIRECTION.NONE;
  @property(Node)
  myImage: Node = null;

  start() {}

  onLoad() {
    this.node.on(Input.EventType.TOUCH_START, this.moveObject, this);
    this.node.on(Input.EventType.TOUCH_END, () => {
      this.unschedule(this.move);
    });
  }

  moveObject() {
    this.schedule(this.move, 0.1);
  }

  move() {
    switch (this.buttonType) {
      case DIRECTION.TOP:
        this.top();
        break;
      case DIRECTION.BOTTOM:
        this.bottom();
        break;
      case DIRECTION.LEFT:
        this.left();
        break;
      case DIRECTION.RIGHT:
        this.right();
        break;
    }
  }

  top() {
    var c = this.myImage.parent.getComponent(UITransform).height;
    var hofimage = this.myImage.getComponent(UITransform).height;
    if (this.myImage.position.y + hofimage / 2 < c / 2) {
      this.myImage.setPosition(
        this.myImage.position.x,
        this.myImage.position.y + 10
      );
    }
  }

  bottom() {
    var hofimage = this.myImage.getComponent(UITransform).height;
    var c = this.myImage.parent.getComponent(UITransform).height;
    if (Math.abs(this.myImage.position.y) + hofimage / 2 < c / 2) {
      this.myImage.setPosition(
        this.myImage.position.x,
        this.myImage.position.y - 10
      );
    }
  }

  left() {
    var hofimage = this.myImage.getComponent(UITransform).width;
    var c = this.myImage.parent.getComponent(UITransform).width;
    if (Math.abs(this.myImage.position.x) + hofimage / 2 < c / 2) {
      this.myImage.setPosition(
        this.myImage.position.x - 10,
        this.myImage.position.y
      );
    }
  }

  right() {
    var hofimage = this.myImage.getComponent(UITransform).width;
    var c = this.myImage.parent.getComponent(UITransform).width;
    if (this.myImage.position.x + hofimage / 2 < c / 2) {
      this.myImage.setPosition(
        this.myImage.position.x + 10,
        this.myImage.position.y
      );
    }
  }

  update(deltaTime: number) {}
}

function abs(y: number) {
  throw new Error("Function not implemented.");
}
