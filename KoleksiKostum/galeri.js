const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.galeri-card');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupCaption = document.getElementById('popup-caption');
const closeBtn = document.querySelector('.popup .close');

// Filter kategori
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Popup foto
cards.forEach(card => {
  card.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = card.querySelector('img').src;
    popupCaption.textContent = card.querySelector('.galeri-caption').textContent;
  });
});

// Tutup popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', e => {
  if(e.target === popup) popup.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".galeri-card");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupCaption = document.getElementById("popup-caption");
  const closeBtn = document.querySelector(".popup .close");

  // pastikan popup mati saat pertama load
  popup.classList.remove("show");

  // klik gambar
  cards.forEach(card => {
    card.addEventListener("click", function(){
      const img = card.querySelector("img");
      const caption = card.querySelector(".galeri-caption");

      popupImg.src = img.src;
      popupCaption.textContent = caption.textContent;

      popup.classList.add("show");
    });
  });

  // tombol X
  closeBtn.addEventListener("click", function(){
    popup.classList.remove("show");
  });

  // klik luar
  popup.addEventListener("click", function(e){
    if(e.target === popup){
      popup.classList.remove("show");
    }
  });

});