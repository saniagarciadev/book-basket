import {setupBasket, basket} from "../src/basket"

describe('Book basket', () => {
    beforeEach(() => { 
        setupBasket()
     })
    it('adds books to basket', () => { 
        console.table(basket)
     })
    // it('removes books from basket');
    // it('adds prices to total');
    // it('calculates and discounts savings percentages');
    // it(`doesn't apply discount to duplicate books`);
 })