const btn = document.createElement('BUTTON');
btn.textContent = "Add Square";
const container = document.createElement('div');
container.className = "container";
let squareCount = 1;
document.body.appendChild(btn);
document.body.appendChild(container);

class Box {
  constructor() {
    this.div = document.createElement('div');
    this.value = document.createTextNode(squareCount);
    this.render();
    this.eventListeners();
  };

  render() {
    this.value.className = "boxText";
    this.div.className = "box";
    this.div.id = squareCount;
    container.appendChild(this.div);
  };

  eventListeners() {
    this.div.addEventListener("mouseover", () => this.div.appendChild(this.value));
    this.div.addEventListener("mouseout", () => this.div.removeChild(this.value));
    this.div.addEventListener("click", () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      this.div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
    this.div.addEventListener("dblclick", () => {
      if (this.div.id % 2 == 0) {
        if (this.div.nextSibling) {
          container.removeChild(this.div.nextSibling);
        } else {
          alert('There is no following square!');
        };
      } else {
          if (this.div.previousSibling) {
            container.removeChild(this.div.previousSibling);
          } else {
            alert('There is no previous square!');
          };
      };
    });
  };
};

btn.addEventListener('click', function() {
  new Box();
  squareCount++;
});