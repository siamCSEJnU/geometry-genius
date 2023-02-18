// get text value
function getTextValue(id) {
  const value = document.getElementById(id).innerText;
  return value;
}

// get input value
function getInputValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

//conversion string to number
function stringToNumber(string) {
  const num = parseFloat(string);
  return num;
}

//reset input field
function resetInputField(id1, id2) {
  document.getElementById(id1).value = "";
  document.getElementById(id2).value = "";
}

//table displaying function
function displayTableData(shapeName, AreaInCm) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td>${shapeName}</td>
    <td>${AreaInCm}</td>
    <td><button class=" bg-indigo-400 text-lg font-semibold text-white px-6 py-2 rounded-lg hover:bg-amber-400">calc<button></td>`;
  container.appendChild(tr);
}

//error checking case
function errorCheck(num1, num2) {
  if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    return true;
  }
}

//function for disabling the button
function disableButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
  document.getElementById(id).classList.add("bg-red-700", "hover:bg-red-700");
}

let count = 0;
//area of triangle
document.getElementById("triangle-btn").addEventListener("click", function () {
  const broadth = stringToNumber(getInputValue("input-b"));
  const height = stringToNumber(getInputValue("input-h"));
  resetInputField("input-b", "input-h");
  if (errorCheck(broadth, height)) {
    alert("something went wrong!!Try again.");
    return;
  }
  count++;
  const area = (0.5 * broadth * height).toFixed(2);
  displayTableData("triangle", area);
  disableButton("triangle-btn");
});

//area of rectangle
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const width = stringToNumber(getInputValue("input-w"));
  const length = stringToNumber(getInputValue("input-l"));
  resetInputField("input-w", "input-l");
  if (errorCheck(width, length)) {
    alert("something went wrong!!Try again.");
    return;
  }
  count++;
  const area = (width * length).toFixed(2);
  displayTableData("rectangle", area);
  disableButton("rectangle-btn");
});

//area of parallelogram
document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    const b = stringToNumber(getTextValue("text-b-parallelogram"));
    const h = stringToNumber(getTextValue("text-h-parallelogram"));
    resetInputField("text-b-parallelogram", "text-h-parallelogram");
    if (errorCheck(b, h)) {
      alert("something went wrong!!Try again.");
      return;
    }
    count++;
    const area = (b * h).toFixed(2);
    displayTableData("Parallel", area);
    disableButton("Parallelogram-btn");
  });

//area of rhombus
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = stringToNumber(getTextValue("text-value-d1"));
  const d2 = stringToNumber(getTextValue("text-value-d2"));
  resetInputField("text-value-d2", "text-value-d2");
  if (errorCheck(d1, d2)) {
    alert("something went wrong!!Try again.");
    return;
  }
  count++;
  const area = (0.5 * d1 * d2).toFixed(2);
  displayTableData("rhombus", area);
  disableButton("rhombus-btn");
});

//area of pentagon
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const p = stringToNumber(getTextValue("textValue-p"));
  const b = stringToNumber(getTextValue("textValue-b"));
  resetInputField("textValue-p", "textValue-b");
  if (errorCheck(p, b)) {
    alert("something went wrong!!Try again.");
    return;
  }
  count++;
  const area = (0.5 * p * b).toFixed(2);
  displayTableData("pentagon", area);
  disableButton("pentagon-btn");
});

//area of ellipse
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const a = stringToNumber(getTextValue("textEllipse-a"));
  const b = stringToNumber(getTextValue("textEllipse-b"));
  resetInputField("textEllipse-a", "textEllipse-b");
  if (errorCheck(a, b)) {
    alert("something went wrong!!Try again.");
    return;
  }
  count++;
  const area = (3.14 * a * b).toFixed(2);
  displayTableData("ellipse", area);
  disableButton("ellipse-btn");
});

//repeatedly background color changing
let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);
// for (let i = 0; i < 6; i++) {
//   document
//     .getElementsByClassName("bg-change")
//     [i].addEventListener("mousemove", function (e) {
//       e.target.style.backgroundColor =
//         "rgb(" + red + "," + green + "," + blue + ")";
//       e.target.style.color = "white";
//     });
// }
for (let i = 0; i < 6; i++) {
  document
    .getElementsByClassName("bg-change")
    [i].addEventListener("mouseleave", function (e) {
      e.target.style.backgroundColor =
        "rgb(" + red + "," + green + "," + blue + ")";
    });
}
