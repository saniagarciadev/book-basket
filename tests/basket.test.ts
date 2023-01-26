import {setupBasket, basket, total} from "../src/basket"

describe('Book basket', () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <div>
          <h1>	
          &#128218;</h1>
          <h1>Book basket</h1>
          <div id="basket" class="card">
            <button id="book-1" class="book" type="button">Book 1</button>
            <button id="book-2" class="book" type="button">Book 2</button>
            <button id="book-3" class="book" type="button">Book 3</button>
            <button id="book-4" class="book" type="button">Book 4</button>
            <button id="book-5" class="book" type="button">Book 5</button>
            </div>
            <button id="total" type="button">Calculate total</button>
        </div>
        `;
        setupBasket()
     })
    it('adds books to basket', () => { 
        const book1Button = document.querySelector<HTMLButtonElement>('#book-1');
        book1Button && book1Button.click()
        book1Button && book1Button.click()
        const book5Button = document.querySelector<HTMLButtonElement>('#book-5');
        book5Button && book5Button.click()

        expect(basket["book-1"]).toEqual(2);
        expect(basket["book-5"]).toEqual(1);

     })
    // TODO it('removes books from basket');
    it.only('adds prices to total', () => { const book1Button = document.querySelector<HTMLButtonElement>('#book-1');
    book1Button && book1Button.click()
    book1Button && book1Button.click()
    book1Button && book1Button.click()
        const calculateButton = document.querySelector<HTMLButtonElement>('#total');
        calculateButton && calculateButton.click()
        expect(total).toEqual(24);

     })
    // it('calculates and discounts savings percentages');
    // it(`doesn't apply discount to duplicate books`);
 })