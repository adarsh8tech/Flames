document.getElementById("flamesForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
  const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');

  const remaining = getRemainingLetters(name1, name2);
  const flamesResult = getFlamesResult(remaining);

  const resultText = {
    F: "Friends 👯",
    L: "Love ❤️",
    A: "Affection 😊",
    M: "Marriage 💍",
    E: "Enemies 😤",
    S: "Siblings 👫"
  };

  document.getElementById("result").innerText = `Relationship: ${resultText[flamesResult]}`;
});

function getRemainingLetters(name1, name2) {
  let arr1 = name1.split('');
  let arr2 = name2.split('');

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr1[i] = '';
      arr2[index] = '';
    }
  }

  const total = arr1.filter(ch => ch !== '').length + arr2.filter(ch => ch !== '').length;
  return total;
}

function getFlamesResult(count) {
  let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
  let index = 0;

  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  return flames[0];
}
