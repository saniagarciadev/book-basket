type BookID = string;
type Amount = number;
type Basket = Record<BookID, Amount>;

let basket: Basket;
let total: number;
let bundle: number;

const discounts: { [num: number]: number } = {
  2: 5,
  3: 10,
  4: 20,
  5: 25
}

export function setupBasket() {
   const addToBasket = (book: BookID) => {
    basket = {...basket}
    let amount = basket[book] ? basket[book] + 1 : 1;
    basket = {...basket, [book]: amount}
    return basket;
}

const getTotal = () => { 
  if (!basket) return;
  total = Object.values(basket).reduce(function(a, b){
    return a + b;
  }, 0) * 8;
  bundle = Object.keys(basket).length;
  if (bundle > 1) {
    const discount: number = bundle * 8 / 100 * discounts[bundle]
    total -= discount;
  }

 }

  const bookButtons = document.querySelectorAll<HTMLButtonElement>('.book');
  
  bookButtons.forEach(btn => {
    btn.addEventListener('click', event => {
      const target = event.target as HTMLButtonElement;
      addToBasket(target.id)
    })
 })

 const calculateButton = document.querySelector<HTMLButtonElement>('#total');

 calculateButton && calculateButton.addEventListener('click', () => getTotal())
};

export function clearBasket() {
  basket = {}
  total = 0
  bundle = 0
}

export {basket, total}