// Example of lazy loading images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");
  
  const loadImage = (image) => {
    image.src = image.dataset.src;
    image.classList.remove("lazy");
  };

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        imageObserver.unobserve(entry.target);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});
