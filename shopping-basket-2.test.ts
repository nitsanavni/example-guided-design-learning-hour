import { describe, expect, test } from "@jest/globals";



describe("Shopping Basket Discount 2", () => {
  test("should give 5% discount", () => {
    const totalPrice = 160
    const priceAfterDiscount = getPriceAfterDiscount(totalPrice , quantity )
    expect(priceAfterDiscount).toBe(totalPrice*0.95);
  });
});
