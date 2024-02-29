const button = document.getElementById('button');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const submit = document.getElementById('submitButton');
const modalTwo = document.getElementById('modalTwo');


button.addEventListener('click', function() {
    modal.classList.add('show');
    overlay.classList.add('show');
})
overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
    modal.classList.remove('show');
    modalTwo.classList.remove('show');
})
submit.addEventListener('click', function() {
    var name = document.getElementById('userName').value;
    if (!name.trim()) {
        document.getElementById('errorMessage').classList.add('show');
    } else {
        document.getElementById('display').value = `Fuck You ${name}`;
        document.getElementById('errorMessage').classList.remove('show');
        modalTwo.classList.add('show');
    }
})

