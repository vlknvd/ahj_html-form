export default class Tooltip {
  constructor(container) {
    this.container = container;
  }

  static get markUp() {
    return `
        <div class="tooltip-container hidden">
          <h3 class="tooltip-title">
            Popover title
          </h3>
          <p class="tooltip-text">
            And here's some amazing content.It's very engaging.Right?
          </p>
        </div>
        `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.constructor.markUp);
  }

  onClick() {
    this.bindToDOM();
    const btn = this.container.querySelector('.btn');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.removeHidden();
    });
  }

  removeHidden() {
    this.tooltip = document.querySelector('.tooltip-container');
    this.tooltip.classList.toggle('hidden');
  }
}
