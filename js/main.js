const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e =>
  {
    const header = e.target.closest('.jsAccordionHeader')
    if (!header) return

    const accordion = header.parentNode
    const accordionContent = header.nextElementSibling
    const accordionInner = accordionContent.firstElementChild
    const height = accordion.classList.contains('is-open')
    ? 0
    : accordionInner.getBoundingClientRect().height

    accordionContent.style.height = height + 'px';
    accordion.classList.toggle('is-open')

  }
)