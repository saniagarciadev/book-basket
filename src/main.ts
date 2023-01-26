import './style.css'
import { setupBasket } from './basket'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>	
    &#128218;</h1>
    <h1>Book basket</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupBasket(document.querySelector<HTMLButtonElement>('#counter')!)
