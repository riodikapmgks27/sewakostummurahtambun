// Toggle menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Active link highlight
const navLinksAll = document.querySelectorAll(".nav-links a");
navLinksAll.forEach(link => {
  link.addEventListener("click", function () {
    navLinksAll.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Program card animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const animElements = document.querySelectorAll('.animate-program');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animasi sekali
      }
    });
  }, { threshold: 0.2 });

  animElements.forEach(el => observer.observe(el));
});

// Dropdown toggle (klik untuk buka/close)
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', e => {
    e.preventDefault();

    // Tutup dropdown lain yang terbuka
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    // Toggle menu saat klik
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// Tutup dropdown jika klik di luar
document.addEventListener('click', e => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    }
  });
});
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', e => {
    // Tutup dropdown setelah klik
    const menu = link.closest('.dropdown-menu');
    if (menu) menu.style.display = 'none';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const animElements = document.querySelectorAll('.animate-program');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animasi sekali
      }
    });
  }, { threshold: 0.2 });

  animElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
  const galeriItems = document.querySelectorAll('.animate-galeri');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  galeriItems.forEach(item => observer.observe(item));
});
document.addEventListener("DOMContentLoaded", () => {
  // Animasi muncul
  const cards = document.querySelectorAll('.animate-galeri');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const closeLightbox = document.querySelector(".close-lightbox");

  document.querySelectorAll(".galeri-img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.dataset.full;
      lightboxCaption.textContent = img.alt;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-galeri");

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 100);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-galeri");

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 100);
  });
});
const images = document.querySelectorAll(".galeri-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const caption = document.querySelector(".lightbox-caption");

images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    caption.innerText = img.alt;
  };
});

document.querySelector(".close-lightbox").onclick = () => {
  lightbox.style.display = "none";
};
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".galeri-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if(filter === "all" || card.dataset.category === filter){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});