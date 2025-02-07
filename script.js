document.getElementById('yesButton').addEventListener('click', function() {
  document.getElementById('response').classList.remove('hidden');
  document.getElementById('yesButton').style.display = 'none';
  document.getElementById('noButton').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
  alert("Please think about it again! 😊");
});
