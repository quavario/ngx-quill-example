import { Component } from '@angular/core'

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html'
})
export class FormulaComponent {

  modules = {}
  constructor() {
    this.modules = {
      formula: true,
      syntax: true,
      toolbar: [['formula'], ['image'], ['code-block']]
    }
  }

  addBindingCreated(quill) {
    quill.keyboard.addBinding({
      key: 'b'
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING B', range, context)
    })

    quill.keyboard.addBinding({
      key: 'B',
      shiftKey: true
    }, (range, context) => {
      // tslint:disable-next-line:no-console
      console.log('KEYBINDING SHIFT + B', range, context)
    })
  }

}
