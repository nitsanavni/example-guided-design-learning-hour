# Convert Example to Test Case

Convert [the example from the kata description](https://sammancoaching.org/kata_descriptions/shopping_basket.html) to a test case. (5% discount)

**Do not implement the code - only write the test.**

Use the following files:

- [shopping-basket-1.test.ts](shopping-basket-1.test.ts)
- [shopping-basket-2.test.ts](shopping-basket-2.test.ts)

When you're done, copy the test to replace those snippets:

## Design Idea 1

```ts
type Item = {
  price: number;
  quantity: number;
};

test("should get a discount of 5%", () => {
  const testItems: Item[] = [
    { price: 10, quantity: 5 },
    { price: 25, quantity: 2 },
    { price: 9.99, quantity: 6 },
  ];
  const { originalCost, finalCost, discountPercentage } =
    calcuatePriceForItems(testItems);
  expect(discountPercentage).toBe(5);
  expect(finalCost).toBe(151.94);
});
```

## Design Idea 2

```ts
test("should give 5% discount", () => {
  const totalPrice = 160;
  const quantity = 5;
  const priceAfterDiscount = getPriceAfterDiscount(totalPrice, quantity);
  expect(priceAfterDiscount).toBe(totalPrice * 0.95);
});
```
