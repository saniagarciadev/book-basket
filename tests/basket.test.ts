import {setupBasket, clearBasket, total} from "../src/basket"

describe('Book basket', () => {
    document.body.innerHTML = `
    <div>
      <h1>	
      &#128218;</h1>
      <h1>Book basket</h1>
      <div id="basket" class="card">
        <button id="1" class="book" type="button">Book 1</button>
        <button id="2" class="book" type="button">Book 2</button>
        <button id="3" class="book" type="button">Book 3</button>
        <button id="4" class="book" type="button">Book 4</button>
        <button id="5" class="book" type="button">Book 5</button>
        </div>
        <button id="total" type="button">Calculate total</button>
    </div>
    `;

    const book1Button = document.getElementById('1');
    const book2Button = document.getElementById('2');
    const book3Button = document.getElementById('3');
    const book4Button = document.getElementById('4');
    const book5Button = document.getElementById('5');

    beforeEach(() => {
        setupBasket()
     })
     afterEach(() => {
        clearBasket()
        document.body.innerHTML = "";
     })
    it('adds prices to total', () => {
        book1Button && book1Button.click()
        book1Button && book1Button.click()
        book1Button && book1Button.click()

        expect(total).toEqual(24);

     })
    it('calculates and discounts savings percentages', () => {
        book1Button && book1Button.click()
        book5Button && book5Button.click()
        expect(total).toEqual(15.2);
    });
    it(`doesn't apply discount to duplicate books`, () => { 
        book5Button && book5Button.click()
        book5Button && book5Button.click()
        expect(total).toEqual(16);
     });
    it(`accepts more than one discount bundle per basket`, () => { 
        book1Button && book1Button.click()
        book1Button && book1Button.click()
        book2Button && book2Button.click()
        book2Button && book2Button.click()
        book3Button && book3Button.click()
        book3Button && book3Button.click()
        book4Button && book4Button.click()
        book5Button && book5Button.click()
        expect(total).toEqual(51.60);
    });
    // TODO it gets the best possible deal
 })