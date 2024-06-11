document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const items = document.querySelectorAll(".blog-item");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;
  const intervalTime = 5000;

  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.toggle("active", idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function goToPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  leftArrow.addEventListener("click", () => {
    goToPrev();
    resetInterval();
  });

  rightArrow.addEventListener("click", () => {
    goToNext();
    resetInterval();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currentIndex = parseInt(dot.getAttribute("data-index"));
      showItem(currentIndex);
      resetInterval();
    });
  });

  showItem(currentIndex);

  let slideInterval = setInterval(goToNext, intervalTime);

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(goToNext, intervalTime);
  }
});
