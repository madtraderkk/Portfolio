document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const menuItems = document.querySelectorAll(".nav-item");

    if (mobileToggle && navLinksContainer) {
        const toggleMenu = () => {
            const isOpen = navLinksContainer.classList.toggle("open");
            mobileToggle.classList.toggle("active");
            mobileToggle.setAttribute("aria-expanded", isOpen);
        };

        mobileToggle.addEventListener("click", toggleMenu);

        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                if (navLinksContainer.classList.contains("open")) {
                    toggleMenu();
                }
            });
        });
    }

    const certTriggers = document.querySelectorAll(".image-zoom-trigger");
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxExpandedImg = document.getElementById("lightboxExpandedImg");

    if (
        certTriggers.length &&
        lightboxModal &&
        lightboxClose &&
        lightboxExpandedImg
    ) {
        const openLightbox = trigger => {
            const targetSourceImg = trigger.querySelector(".embedded-source-img");

            lightboxExpandedImg.src = targetSourceImg.src;
            lightboxExpandedImg.alt = targetSourceImg.alt;

            lightboxModal.style.display = "flex";

            setTimeout(() => {
                lightboxModal.classList.add("active");
            }, 10);

            document.body.style.overflow = "hidden";
            lightboxModal.setAttribute("aria-hidden", "false");
        };

        const closeLightbox = () => {
            lightboxModal.classList.remove("active");

            setTimeout(() => {
                lightboxModal.style.display = "none";
                document.body.style.overflow = "";
                lightboxModal.setAttribute("aria-hidden", "true");
            }, 300);
        };

        certTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => openLightbox(trigger));
        });

        lightboxClose.addEventListener("click", closeLightbox);

        lightboxModal.addEventListener("click", e => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", e => {
            if (
                e.key === "Escape" &&
                lightboxModal.classList.contains("active")
            ) {
                closeLightbox();
            }
        });
    }

    const trackingSections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute("id");

                    menuItems.forEach(item => {
                        if (item.getAttribute("href") === `#${activeId}`) {
                            item.classList.add("active");
                        } else {
                            item.classList.remove("active");
                        }
                    });
                }
            });
        },
        {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        }
    );

    trackingSections.forEach(section => {
        sectionObserver.observe(section);
    });
});