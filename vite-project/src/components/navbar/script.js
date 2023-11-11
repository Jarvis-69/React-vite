function Script() {

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        section.classList.add('show-animate');
    });
}

export default Script;