document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.animated-text');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('show');
          observer.unobserve(target); // Stop observing after animation starts
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(target);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.fade-in-right');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('show');
          observer.unobserve(target); // Stop observing after animation starts
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    observer.observe(target);
  });

