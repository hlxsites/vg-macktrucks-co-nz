export default async function decorate(block) {
  const heroClass = 'v2-hero';
  const picture = block.querySelector('picture');
  const img = picture.querySelector('img');
  img.classList.add(`${heroClass}__image`);

  if (picture.parentElement.tagName === 'P') {
    picture.parentElement.remove();
  }

  const contentWrapper = block.querySelector(':scope > div');
  contentWrapper.classList.add(`${heroClass}__content-wrapper`);

  const content = block.querySelector(':scope > div > div');
  content.classList.add(`${heroClass}__content`);

  const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  [...headings].forEach((h) => h.classList.add(`${heroClass}__heading`));

  const ctaButtons = content.querySelectorAll('.button-container > a');
  [...ctaButtons].forEach((b) => {
    b.classList.add(`${heroClass}__cta`);
    b.parentElement.classList.add(`${heroClass}__cta-wrapper`);
  });

  const hrs = block.querySelectorAll('hr');
  [...hrs].forEach((hr) => hr.classList.add(`${heroClass}__separator`));

  block.prepend(picture);
  block.parentElement.classList.add('full-width');
}
