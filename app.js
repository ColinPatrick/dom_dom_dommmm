window.addEventListener('DOMContentLoaded', function(){
  let btn = document.createElement('BUTTON');
  btn.innerHTML = "Add Square";
  let container = document.createElement('div');
  container.className = "container";
  let squareCount = 0;
  document.body.appendChild(btn);
  document.body.appendChild(container);

  btn.addEventListener('click', function(){
    let square = document.createElement('div');
    square.className = "squares";
    squareCount++;
    square.setAttribute("id", squareCount);

    let squareCountSpan = document.createElement('span');
    squareCountSpan.textContent = squareCount;
    squareCountSpan.className = 'hide-span';

    square.appendChild(squareCountSpan);

    square.addEventListener("mouseenter", function(){
      squareCountSpan.className = "show-span";
    });

    square.addEventListener("mouseleave", function(){
      squareCountSpan.className = "hide-span";
    });

    square.addEventListener("click", function(){
      let colors = ['blue', 'yellow', 'red', 'green', 'purple', 'brown', 'pink', 'magenta'];
      let randomNum = Math.floor(Math.random() * colors.length);
      square.style.backgroundColor = colors[randomNum];
    });

    square.addEventListener("dblclick", function(){
      if (square.id % 2 == 0) {
        if (square.nextSibling) {
          container.removeChild(square.nextSibling);
        } else {
          alert('There is no following square!');
        };
      } else {
          if (square.previousSibling) {
            container.removeChild(square.previousSibling);
          } else {
            alert('There is no previous square!');
          };
      };
    });

    container.appendChild(square);
  });

});
