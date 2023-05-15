import sum from "utils/math";

test('adds 1 + 2 to equal 3', () => {
  expect(1+1).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});
