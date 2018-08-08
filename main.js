import SlapController from "./app/components/SlapController.js"



class App {
  constructor() {
    this.controllers = {
      mySlapController: new SlapController()
    }
  }
}

console.log("hello from main.js")
window.app = new App()