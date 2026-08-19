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