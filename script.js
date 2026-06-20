document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });
  }

  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxExpandedImg");
  const closeBtn = document.getElementById("lightboxClose");

  function openLightbox(src, alt = "") {
    if (!modal || !modalImg) return;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = src;
    modalImg.alt = alt;
  }

  function closeLightbox() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
  }

  const cert1 = document.getElementById("certTrigger");
  const cert2 = document.getElementById("certTrigger2");

  if (cert1) cert1.addEventListener("click", () => openLightbox("certificate.jpeg", "Certificate 1"));
  if (cert2) cert2.addEventListener("click", () => openLightbox("certificate2.jpeg", "Certificate 2"));
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeSkillModal();
    }
  });

  const skillModal = document.getElementById("skillModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDescription");
  const closeSkill = document.querySelector(".close-modal");

  const skillData = {
    Automation: {
      title: "Ticketing Automation & Resale Systems",
      desc: "With over 4.5 years of experience in the ticketing industry, I have helped clients scale their operations and generate consistent profits through advanced ticketing automation and marketplace mirroring solutions.\n\nExperienced with major ticketing platforms, including Ticketmaster, Vivid Seats, AXS, SeatGeek, Telecharge, StubHub, TicketNetwork, and others.\n\nDeveloped and managed automation systems capable of handling inventory for 1,000+ events simultaneously, ensuring efficient inventory management, marketplace synchronization, and scalable operations.\n\nFor more information or collaboration opportunities, please feel free to get in touch.",
    },
    "CFD Trading": {
      title: "CFD Day Trader",
      desc: "With 3+ years of trading experience, I specialize in technical analysis, market structure, chart reading, risk management, and capital growth strategies.\n\nMy trading approach is built on discipline, psychology, and consistency, with a strong focus on preserving capital and avoiding overtrading. Through continuous improvement and data-driven decision-making, I have developed a trading framework that delivers sustainable results.\n\nSkilled in managing multiple trading accounts and operating under profit-sharing models, while maintaining a high win rate and a disciplined risk-to-reward approach.\n\nIf you are looking to grow a small trading account with a structured and disciplined approach, feel free to get in touch to discuss potential opportunities and strategies.",
    },
    Infrastructure: {
      title: "Infrastructure & Systems Architecture",
      desc: "I specialize in designing and maintaining robust, high-performance server environments and cloud infrastructure. My focus is on ensuring 99.9% uptime, implementing strict security protocols, and optimizing system performance to handle high-traffic loads.\n\nFrom automated deployments to load balancing and disaster recovery, I build the backbone that allows your applications to scale reliably and securely.",
    },
    WordPress: {
      title: "WordPress Development",
      desc: "I don't just build websites; I craft high-converting digital experiences. My WordPress services focus on clean, custom theme development, lightning-fast performance, and airtight security.\n\nWhether you need a bespoke corporate site, a high-traffic blog, or a custom e-commerce solution, I ensure your platform is easy to manage, SEO-ready, and fully optimized to deliver results for your business.",
    },
  };

  function openSkillModal(title) {
    if (!skillModal || !modalTitle || !modalDesc) return;
    const data = skillData[title];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    skillModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSkillModal() {
    if (!skillModal) return;
    skillModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".skill-meter-card").forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent?.trim();
      openSkillModal(title);
    });
  });

  if (closeSkill) closeSkill.addEventListener("click", closeSkillModal);

  if (skillModal) {
    skillModal.addEventListener("click", (e) => {
      if (e.target === skillModal) closeSkillModal();
    });
  }
});
