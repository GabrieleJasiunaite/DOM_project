document.getElementById('type').addEventListener('input', (e) => {
    if (e.target.value === "shingle") {
        document.getElementById('pic-shingle').classList.remove('disabled');
        document.getElementById('pic-tile').classList.add('disabled');
        document.getElementById('pic-sheet').classList.add('disabled');
        document.getElementById('type').nextElementSibling.style.display = 'none';
        document.getElementById('type').classList.remove('error');
    } else if (e.target.value === "tile") {
        document.getElementById('pic-shingle').classList.add('disabled');
        document.getElementById('pic-tile').classList.remove('disabled');
        document.getElementById('pic-sheet').classList.add('disabled');
        document.getElementById('type').nextElementSibling.style.display = 'none';
        document.getElementById('type').classList.remove('error');
    } else if (e.target.value === "metal-sheet") {
        document.getElementById('pic-shingle').classList.add('disabled');
        document.getElementById('pic-tile').classList.add('disabled');
        document.getElementById('pic-sheet').classList.remove('disabled');
        document.getElementById('type').nextElementSibling.style.display = 'none';
        document.getElementById('type').classList.remove('error');
    } else {
        document.getElementById('pic-shingle').classList.add('disabled');
        document.getElementById('pic-tile').classList.add('disabled');
        document.getElementById('pic-sheet').classList.add('disabled');
    }
})

document.getElementById('submit').addEventListener('click', (e) => {
    let width = document.getElementById('width').valueAsNumber;
    let length = document.getElementById('length').valueAsNumber;
    let roofArea = width * length;
    let type = document.getElementById('type').value;
    let size = 0;
    let price = 0;

    if (type === "shingle") {
        size = 2;
        price = 18.99;
    } else if (type === "tile") {
        size = 0.1386;
        price = 1.09;
    } else if (type === 'metal-sheet') {
        size = 1.9775;
        price = 19.99;
    } else {
        document.getElementById('type').nextElementSibling.style.display = 'block';
        document.getElementById('type').classList.add('error');
        return;
    }

    document.getElementById('calculations').innerHTML =
        `<p><strong>Roof area: </strong>${roofArea} m<sup>2</sup></p>
        <p><strong>Needed pieces of ${type} roofing: </strong>${Math.ceil(roofArea / size)} (price per piece: ${price}&euro;)</p>
        <p><strong>Price of ${type} roofing: </strong>${(Math.ceil(roofArea / size) * price).toFixed(2)}&euro;</p>`
});

document.getElementById('width').addEventListener('input', (e) => {
    if (e.target.valueAsNumber < 0) {
        e.target.classList.add('error');
        e.target.nextElementSibling.style.display = 'block';
    } else {
        e.target.classList.remove('error');
        e.target.nextElementSibling.style.display = 'none';
    }
})

document.getElementById('length').addEventListener('input', (e) => {
    if (e.target.valueAsNumber < 0) {
        e.target.classList.add('error');
        e.target.nextElementSibling.style.display = 'block';
    } else {
        e.target.classList.remove('error');
        e.target.nextElementSibling.style.display = 'none';
    }
});

document.getElementById('reset').addEventListener('click', (e) => {
    document.getElementById('width').valueAsNumber = 0;
    document.getElementById('length').valueAsNumber = 0;
    document.getElementById('type').value = "default";
    document.getElementById('calculations').innerHTML = '<p>No calculations to show yet...</p>';
    document.getElementById('pic-shingle').classList.remove('disabled');
    document.getElementById('pic-tile').classList.remove('disabled');
    document.getElementById('pic-sheet').classList.remove('disabled');
    document.querySelectorAll('#error').forEach(box => { box.style.display = "none" });
    document.querySelectorAll('input').forEach(input => { input.classList.remove('error') });
    document.getElementById('type').classList.remove('error');
});