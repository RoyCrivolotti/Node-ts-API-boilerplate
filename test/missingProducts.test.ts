import { Service as service } from "services/old_service";
import sum from "utils/math";

test('Missing products properly returned', () => {
  const requestedProducts = [11, 2, 4, 11, 11, 2, 3];
  const deliveredProducts = [2, 4, 2, 11];

  const result = service.missingProducts(requestedProducts, deliveredProducts);

  expect(result).toMatchObject([3, 11]);
})

test('Empty array is returned if no products were missing', () => {
  const requestedProducts = [1, 3, 5];
  const deliveredProducts = [5, 3, 1];

  const result = service.missingProducts(requestedProducts, deliveredProducts);

  expect(result.length).toEqual(0);
})

describe("testing intersecting lists", () => {
  it.each([
    [[1, 2, 3], [9, 3, 4], [3]],
    [[10, 35, 14], [90, 35, 10, 14, 28], [10, 35, 14]],
    [[100, 25, 134, 2, 4], [4, 2], [4, 2]],
    [[10, 35, 14], [], []],
    [[10, 35, 14], [1, 2, 3], []],
  ])("When input is %d", (l1, l2, expected) => {
    const intersectingElements = service.intersection(l1, l2);
    expect(intersectingElements.sort()).toMatchObject(expected.sort())
  })
})


