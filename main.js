/**
 * CULTURA RURAL & URBANA - Main JS
 * Contém todas as interações, animações e funcionalidades
 * @version 2.0
 */

document.addEventListener('DOMContentLoaded', () => {
  // ===== LOADER =====
  const loader = document.querySelector('.loader');
  
  // Esconde o loader após o carregamento
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // ===== MENU MOBILE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== ANIMAÇÕES AOS =====
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 120
  });

  // ===== GALERIA INTERATIVA =====
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const overlay = item.querySelector('.gallery-overlay');
      overlay.style.opacity = '1';
      overlay.querySelector('h3').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', () => {
      const overlay = item.querySelector('.gallery-overlay');
      overlay.style.opacity = '0';
      overlay.querySelector('h3').style.transform = 'translateY(20px)';
    });
  });

  // ===== FORMULÁRIO NEWSLETTER =====
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput.value && isValidEmail(emailInput.value)) {
        // Simulação de envio
        newsletterForm.innerHTML = `
          <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <p>Inscrição realizada com sucesso!</p>
          </div>
        `;
      } else {
        emailInput.style.borderColor = 'var(--danger)';
        setTimeout(() => {
          emailInput.style.borderColor = '#ddd';
        }, 2000);
      }
    });
  }

  // ===== BOTÃO DE COPY =====
  const copyBtn = document.querySelector('#copy-btn');
  
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = document.querySelector('#password-output').value;
      
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.backgroundColor = 'var(--success)';
            
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
              copyBtn.style.backgroundColor = '';
            }, 2000);
          })
          .catch(err => {
            console.error('Erro ao copiar:', err);
          });
      }
    });
  }

  // ===== VIDEO BACKGROUND =====
  const heroVideo = document.querySelector('.hero-video video');
  
  if (heroVideo) {
    // Garante que o vídeo comece a tocar mesmo em mobile
    heroVideo.muted = true;
    const playPromise = heroVideo.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay prevented:', error);
        // Fallback para imagem estática se o vídeo não tocar
        document.querySelector('.hero').style.backgroundImage = 'url(assets/hero-fallback.jpg)';
        document.querySelector('.hero-video').style.display = 'none';
      });
    }
  }

  // ===== FUNÇÕES AUXILIARES =====
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ===== DETECÇÃO DE DISPOSITIVO =====
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  // Ajustes específicos para mobile
  if (isMobileDevice()) {
    document.body.classList.add('mobile');
    // Otimizações adicionais para mobile podem ser adicionadas aqui
  }
});

// ===== ANIMAÇÃO CONTÍNUA DO SCROLL INDICATOR =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  setInterval(() => {
    scrollIndicator.style.animation = 'none';
    void scrollIndicator.offsetWidth; // Trigger reflow
    scrollIndicator.style.animation = 'scrollBounce 2s infinite';
  }, 2000);
}
