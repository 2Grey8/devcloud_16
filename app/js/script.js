const selector = (selector1, selector2, selector3, selector4) => {
  let accordion = document.querySelector(selector1);
  accordion.classList.add('accordion');

  let accordion_item = document.querySelectorAll(selector2);
  accordion_item.forEach((elem) => {
    elem.classList.add('accordion-item');
  });

  let trigger = document.querySelectorAll(selector3);
  trigger.forEach((elem) => {
    elem.classList.add('accordion-item__trigger');
  });


  let content = document.querySelectorAll(selector4);
  content.forEach((elem) => {
    elem.classList.add('accordion-item__content');
  });
}

selector('.tools__group', '.tools__box', '.tools__subtitle', '.tools__text');


document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {

    item.parentNode.classList.toggle('accordion-item_active');
    item.firstElementChild.classList.toggle('tools__arrow_active');
    item.lastElementChild.classList.toggle('tools__dot_active');
  })
);
