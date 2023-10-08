import Tooltip from '../Tooltip';

// beforeAll(() => {
//   document.body.innerHTML = '<div class="container"></div>';
//   const btn = document.querySelector('.btn')
// });

test('bind', () => {
  document.body.innerHTML = '<div class = "container"></div>';
  const container = document.querySelector('.container');
  const tooltip = new Tooltip(container);
  tooltip.bindToDOM();
  expect(container.innerHTML).toEqual(Tooltip.markUp);
});

test('removeHidden', () => {
  document.body.innerHTML = '<div class = "container"><button type="button" class="btn" title="Popover title">Click to toggle popover</button></div>';
  const container = document.querySelector('.container');
  const tooltip = new Tooltip(container);
  tooltip.bindToDOM();
  const btn = container.querySelector('.btn');
  const tlp = container.querySelector('.tooltip-container');
  btn.click();
  expect(tlp.classList.contains('hidden')).toBeTruthy();
});
