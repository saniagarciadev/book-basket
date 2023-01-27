type BookID = string;

let total: number;
let bundles = [[0, 0, 0, 0, 0]]

const discounts: { [num: number]: number } = {
  2: 5,
  3: 10,
  4: 20,
  5: 25
}

export function setupBasket() {
  total = 0
  const addToBasket = (book: BookID) => {
    for (var i = 0; i < bundles.length; i++) {
      if (bundles[i][Number(book) - 1] == 0) {
        bundles[i].splice(Number(book) - 1, 1, 1);
        break;
      } else if (bundles[i][Number(book) - 1] == 1 && i == bundles.length - 1) {
      bundles.push([0, 0, 0, 0, 0])
    }
    }
    console.table(bundles)
    total = 0
    let subTotal = 0;

    bundles.forEach((bundle) => {
      let bundleSize = bundle.reduce((a, b) => {return (a + b)})
      subTotal = bundleSize * 8;
      let discount = bundleSize > 1 ? subTotal / 100 * discounts[bundleSize] : 0
      subTotal -= discount;
      total += subTotal;
      console.log("Bundle x", bundleSize, " | Discount: ", discount, " | Subtotal: ", subTotal)
    })
    console.log("Total: ", total)

  }

  const bookButtons = document.querySelectorAll<HTMLButtonElement>('.book');
  
  bookButtons.forEach(btn => {
    btn.addEventListener('click', event => {
      const target = event.target as HTMLButtonElement;
      addToBasket(target.id)
    })
  })
};

export function clearBasket() {
  total = 0
  bundles = [[0, 0, 0, 0, 0]]
}

export {total}