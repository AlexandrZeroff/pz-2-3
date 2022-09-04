let index = 1;

const data = ['Update', 'Delete', 'Pending']
const colors = ['#d9534f', '#d9534f', '#f0ad4e']

document.getElementById("btn").addEventListener('click', function onClick() {
    console.log("function")
  btn.style.backgroundColor = colors[index];
  btn.innerHTML = data[index]

  index = index >= colors.length - 1 ? 0 : index + 1;
});