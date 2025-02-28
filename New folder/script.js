function changeColor() {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightgray"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

