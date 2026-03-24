
//membuat dark mode

const tombol = document.getElementById('tombol-tema');

tombol.addEventListener('click', function() {

    document.body.classList.toggle('gelap');

    if(document.body.classList.contains('gelap')) {
        tombol.innerText = "ubah ke mode terang";
    } else {
        tombol.innerText = "ubah ke mode gelap";
    }

});