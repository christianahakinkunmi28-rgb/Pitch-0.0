const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================
// WHY PITCH
// =========================

const whyItems = document.querySelectorAll(".why-item");
const whyScenes = document.querySelectorAll(".why-scene");


const whyObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;


            const sceneName = entry.target.dataset.scene;


            // Remove active from all text
            whyItems.forEach((item) => {
                item.classList.remove("active");
            });


            // Remove active from all scenes
            whyScenes.forEach((scene) => {
                scene.classList.remove("active");
            });


            // Activate current text
            entry.target.classList.add("active");


            // Find matching scene
            const matchingScene = document.querySelector(
                `.why-scene[data-scene="${sceneName}"]`
            );


            // Activate matching scene
            if (matchingScene) {
                matchingScene.classList.add("active");
            }

        });

    },
    {
        threshold: 0.6
    }
);


whyItems.forEach((item) => {
    whyObserver.observe(item);
}); 

const dragCursor = document.getElementById("dragCursor");
const cards = document.querySelectorAll(".how-card");


document.addEventListener("mousemove", (e) => {

    dragCursor.style.left = e.clientX + "px";
    dragCursor.style.top = e.clientY + "px";

});

const footer = document.querySelector('.footer');
const footerCta = document.querySelector('.footer-cta');

function updateFooter() {

    const rect = footer.getBoundingClientRect();

    /*
        When the footer reaches this point,
        the purple section starts shrinking.
    */
    const start = window.innerHeight * 0.85;

    /*
        When it reaches this point,
        the purple section has reached its
        normal 33% width.
    */
    const end = window.innerHeight * 0.25;

    let progress = (start - rect.top) / (start - end);

    // Keep progress between 0 and 1
    progress = Math.max(0, Math.min(1, progress));

    /*
        95% → 33%
    */
    const width = 95 - (62 * progress);

    footerCta.style.width = width + '%';
}

window.addEventListener('scroll', updateFooter);

window.addEventListener('resize', updateFooter);

updateFooter();
