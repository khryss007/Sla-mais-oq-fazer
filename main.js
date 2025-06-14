document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile
  const menuToggle = document.createElement('button');
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  menuToggle.className = 'menu-toggle';
  document.querySelector('nav').appendChild(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
  });
  
  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark/Light Mode Toggle
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.className = 'theme-toggle';
  document.querySelector('nav').appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 
      document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    );
    themeToggle.innerHTML = document.documentElement.getAttribute('data-theme') === 'light' 
      ? '<i class="fas fa-moon"></i>' 
      : '<i class="fas fa-sun"></i>';
  });
  
  // Efeitos nos cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const isRural = card.querySelector('h3')?.textContent.includes('Rural');
      card.style.boxShadow = isRural 
        ? '0 8px 16px rgba(93, 156, 73, 0.3)' 
        : '0 8px 16px rgba(63, 114, 175, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
  });
});
