// (function () {
  const buttons = document.querySelectorAll(".btn");
  const storeItems = document.querySelectorAll(".store-item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      // Get the data-filter value of the button clicked
      const filter = e.target.dataset.filter;

      storeItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
// })();
