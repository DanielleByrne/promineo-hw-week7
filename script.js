
document.getElementById("add").addEventListener("click", () => {
event.preventDefault()
  let table = document.getElementById("grocery-table");
  let row = table.insertRow(1);
  row.insertCell(0).innerHTML = document.getElementById("newItem").value;
  row.insertCell(1).innerHTML = document.getElementById("quantity").value;
  document.getElementById("newItem").value = "";
  document.getElementById("quantity").value = "";
});
