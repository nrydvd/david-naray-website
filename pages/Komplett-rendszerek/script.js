/* ============================================================
   DAVID NARAY — KOMPLETT RENDSZER
============================================================ */


/* ============================================================
   PROJECT TABS
============================================================ */

const projectTabs = document.querySelectorAll(".project-tab");
const projectPanels = document.querySelectorAll(".project-panel");

projectTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        const project = tab.dataset.project;

        projectTabs.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        projectPanels.forEach((panel) => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        const selectedPanel = document.querySelector(
            `.project-panel[data-panel="${project}"]`
        );

        if (selectedPanel) {
            selectedPanel.classList.add("active");
        }

    });

});


/* ============================================================
   IMAGE GALLERIES
============================================================ */

/*
   Később ide kerülnek a valódi képek.

   A rendszer projektalapon kezeli a galériákat.
   Mindkét projekthez maximum 12 kép van előkészítve.
*/

const galleries = {

    "real-estate": [
        "assets/real-estate/01.jpg",
        "assets/real-estate/02.jpg",
        "assets/real-estate/03.jpg",
        "assets/real-estate/04.jpg",
        "assets/real-estate/05.jpg",
        "assets/real-estate/06.jpg",
        "assets/real-estate/07.jpg",
    ],

    "zoldkert": [
        "assets/zoldkert/01.jpg",
        "assets/zoldkert/02.jpg",
        "assets/zoldkert/03.jpg",
        "assets/zoldkert/04.jpg",
        "assets/zoldkert/05.jpg",
        "assets/zoldkert/06.jpg",
        "assets/zoldkert/07.jpg",
        "assets/zoldkert/08.jpg",
        "assets/zoldkert/09.jpg",
    ]

};


const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const currentImage = document.getElementById("currentImage");
const totalImages = document.getElementById("totalImages");

const imageTriggers = document.querySelectorAll(".image-trigger");

let currentGallery = [];
let currentIndex = 0;


function openGallery(galleryName) {

    if (!galleries[galleryName]) {
        return;
    }

    currentGallery = galleries[galleryName];

    /*
       Ha a valódi képek még nincsenek a mappában,
       a lightbox nem nyílik meg hibás üres állapotban.
    */

    currentIndex = 0;

    showGalleryImage();

    imageLightbox.classList.add("open");
    imageLightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

}


function closeGallery() {

    imageLightbox.classList.remove("open");
    imageLightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


function showGalleryImage() {

    if (!currentGallery.length) {
        return;
    }

    lightboxImage.src = currentGallery[currentIndex];

    currentImage.textContent = String(currentIndex + 1).padStart(2, "0");
    totalImages.textContent = String(currentGallery.length).padStart(2, "0");

}


function nextImage() {

    if (!currentGallery.length) {
        return;
    }

    currentIndex =
        (currentIndex + 1) % currentGallery.length;

    showGalleryImage();

}


function previousImage() {

    if (!currentGallery.length) {
        return;
    }

    currentIndex =
        (currentIndex - 1 + currentGallery.length) %
        currentGallery.length;

    showGalleryImage();

}


imageTriggers.forEach((trigger) => {

    trigger.addEventListener("click", () => {

        const galleryName = trigger.dataset.gallery;

        openGallery(galleryName);

    });

});


document
    .querySelector(".lightbox-close")
    .addEventListener("click", closeGallery);


document
    .querySelector(".lightbox-next")
    .addEventListener("click", nextImage);


document
    .querySelector(".lightbox-prev")
    .addEventListener("click", previousImage);


/* ============================================================
   VIDEO LIGHTBOX
============================================================ */

const videoLightbox = document.getElementById("videoLightbox");
const projectVideo = document.getElementById("projectVideo");

const videoTriggers = document.querySelectorAll(".video-preview");


function openVideo(videoSource) {

    if (!videoSource) {
        return;
    }

    projectVideo.src = videoSource;

    videoLightbox.classList.add("open");
    videoLightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

}


function closeVideo() {

    projectVideo.pause();
    projectVideo.removeAttribute("src");
    projectVideo.load();

    videoLightbox.classList.remove("open");
    videoLightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


videoTriggers.forEach((trigger) => {

    trigger.addEventListener("click", () => {

        const videoSource = trigger.dataset.video;

        openVideo(videoSource);

    });

});


document
    .querySelector(".video-lightbox-close")
    .addEventListener("click", closeVideo);


/* ============================================================
   KEYBOARD CONTROLS
============================================================ */

document.addEventListener("keydown", (event) => {

    if (imageLightbox.classList.contains("open")) {

        if (event.key === "Escape") {
            closeGallery();
        }

        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }

    }

    if (videoLightbox.classList.contains("open")) {

        if (event.key === "Escape") {
            closeVideo();
        }

    }

});


/* ============================================================
   CLICK OUTSIDE MODALS
============================================================ */

imageLightbox.addEventListener("click", (event) => {

    if (event.target === imageLightbox) {
        closeGallery();
    }

});


videoLightbox.addEventListener("click", (event) => {

    if (event.target === videoLightbox) {
        closeVideo();
    }

});


/* ============================================================
   IMAGE ERROR HANDLING
============================================================ */

lightboxImage.addEventListener("error", () => {

    lightboxImage.alt = "A projekt képe jelenleg nem érhető el.";

});


/* ============================================================
   CONTACT FORM
============================================================ */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        if (submitButton) {

            submitButton.disabled = true;
            submitButton.style.opacity = "0.6";
            submitButton.innerHTML = "Küldés…";

        }

    });

}