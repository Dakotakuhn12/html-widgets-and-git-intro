// get all elements with a class of collapsible//
const collapsibles = document.querySelectorAll('.collapsible');
console.log(collapsibles);
collapsibles.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible-expanded');
  });
});
