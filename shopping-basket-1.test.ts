import { describe, expect, test } from "@jest/globals";

type Item = {
  price: number;
  quantity: number;
};

// type Cart = {
//   items: Item[];
// };

/* 

- Item A: price $10, quantity 5
- Item B: price $25, quantity 2
- Item C: price $9.99, quantity 6
*/

describe("Shopping Basket Discount 1", () => {
  test("should get a discount of 5%", () => {
    const testItems: Item[] = [
      { price: 10, quantity: 5 },
      { price: 25, quantity: 2 },
      { price: 9.99, quantity: 6 },
    ];
    const {originalCost, finalCost, discountPercentage} = calcuatePriceForItems(testItems);
    expect(discountPercentage).toBe(5);
    expect(finalCost).toBe(151.94);
  });
});
