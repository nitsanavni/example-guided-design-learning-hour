import { describe, expect, test } from "@jest/globals";

/* 

- Empty basket $0
- one item $50
- two items, both $20
- two items, $50 and $20
- one item $160 (5% discount)
- one item $250 (10% discount)
- Finally - go back to the [original example](https://sammancoaching.org/kata_descriptions/shopping_basket.html)

*/

type Item = {
  price: number;
  quantity: number;
};

const calcBasketPrice = (basket: Item[]) => {
  let sum = 0;
  for (const item of basket) {
    sum += item.price * item.quantity;
  }
  const percentAmount = getDiscountPercentAmount(sum)
  const discountFactor = 1-(percentAmount/100);

  return +(sum*discountFactor).toFixed(2)
};

const getDiscountPercentAmount= (price) =>{
  if(price>200) return 10
  if(price>100) return 5
  return 0
}

describe("shopping basket", () => {
  test("basked should be empty", () => {
    const price = calcBasketPrice([]);
    expect(price).toBe(0);
  });

  test("should get price of a single item (50)", () => {
    const price = calcBasketPrice([{ price: 50, quantity: 1 }]);
    expect(price).toBe(50);
  });

  test("should get price of a two item (40)", () => {
    const price = calcBasketPrice([{ price: 20, quantity: 2 }]);
    expect(price).toBe(40);
  });

  test("should get price of a two item (70)", () => {
    const price = calcBasketPrice([{ price: 50, quantity: 1 }, {price: 20, quantity:1}]);
    expect(price).toBe(70);
  });

  test("should get discount price of a single item (152)", () => {
    const price = calcBasketPrice([{ price: 160, quantity: 1 }]);
    expect(price).toBe(152);
  });

  test("should get bigger discount price of a single item (225)", () => {
    const price = calcBasketPrice([{ price: 250, quantity: 1 }]);
    expect(price).toBe(225);
  });

  test("should get bigger discount price of multipile items (151.94)", () => {
    const price = calcBasketPrice([{ price: 10, quantity: 5 },{ price: 25, quantity: 2 },{ price: 9.99, quantity: 6 }]);
    expect(price).toBe(151.94);
  });

});
