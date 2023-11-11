export function activateSectionsOnLoad() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        section.classList.add('show-animate');
    });
}