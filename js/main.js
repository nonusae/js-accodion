const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e =>
  {
    const header = e.target.closest('.jsAccordionHeader')
    if (!header) return

    const accordion = header.parentNode
    const accordionContent = header.nextElementSibling
    const accordionInner = accordionContent.firstElementChild
    const height = accordionInner.getBoundingClientRect().height

    if  (accordion.classList.contains('is-open')) {
      accordionContent.style.height = '0px'
      accordion.classList.remove('is-open')
    } else {
      accordionContent.style.height = height + 'px';
      accordion.classList.add('is-open');
    }
  }
)