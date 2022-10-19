function click1(event) {
  let f1 = document.getElementsByName("field1");
  let f2 = document.getElementsByName("field2");
  let r = document.getElementById("result");

  let v1 = parseInt(f1[0].value);
  let v2 = parseInt(f2[0].value);

  if (isNaN(v1) || isNaN(v2)) alert("Введите корректное значение!");
  else r.innerHTML = v1 * v2;

  event.preventDefault();
}

window.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("myForm");
  b.addEventListener("submit", click1);
})
