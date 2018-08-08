import Target from "../models/Target.js"
let scarCrow = new Target("scarcrow", 100, "//placehold.it/200x200", 10, 15, 20, 50)
class SlapService {
  constructor() {

  }
  attack(type) {
    scarCrow.attack(type)
  }
  get Target() {
    return {
      health: scarCrow.health,
      name: scarCrow.name,
      hits: scarCrow.hits,
      img: scarCrow.img,
      dead: scarCrow.dead
    }
  }
}
console.log("hello from SlapService.js")
export default SlapService