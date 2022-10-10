const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    let content = i;
    let bg = "bg-blue";

    if ((i % 3 === 0) && (i % 5 === 0)) {
        content = "FizzBuzz";
        bg = "bg-red";
    } else if (i % 3 === 0) {
        content = "Fizz";
        bg = "bg-green";
    } else if (i % 5 === 0) {
        content = "Buzz";
        bg = "bg-yellow";
    }
    
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add(bg);
    cell.innerHTML = content;
    row.append(cell);
}