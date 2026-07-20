// Smooth scroll for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

    // Close mobile nav if open
    const nav = document.querySelector(".main-nav");
    nav?.classList.remove("open");
  });
});

const languageToggle = document.getElementById("language-toggle");
const languageLabel = languageToggle?.querySelector(".language-label");
const titleElement = document.querySelector("title");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
  title: "GIS Portfolio",
  metaDescription:
    "GIS Portfolio - Mohamed Al-Habbash specializing in Web GIS, Cartography, Remote Sensing, and Spatial Analysis.",
  "nav-about": "About me",
  "nav-works": "My Projects",
  "nav-courses": "Courses & Certification",
  "nav-services": "My Services",
  "nav-contact": "Contacts",
  "hero-heading": '<span class="gis-highlight">GIS</span> Makes Life Better',
  "hero-subtitle": "Smart maps Better decisions.",
  "hero-cta": "View My Projects",
  "about-eyebrow": "About",
  "about-title": "About me",
  "about-intro":
    "I am Mohamed, a GIS specialist focused on web mapping, cartography, and spatial analysis. I work with geographic data to support informed decision-making and provide better spatial insights.",
  "works-eyebrow": "Projects",
  "works-title": "My Projects",
  "works-intro":
    "A selection of GIS projects focused on spatial analysis and mapping.",

    // تحليل السطوح لبنان
  "slide-0-title": "Lebanon Service Analysis",
  "slide-0-description":
    "The surface analysis of Lebanon includes elevations, slopes, and their directions, along with visibility and other analyses.",
  "slide-0-tag-1": "ArcGIS",
  "slide-0-tag-2": "surface analysis",
  "slide-0-aria": "Lebanon Service Analysis",

   // الخدمات الطبية قطاع غزة
  "slide-1-title": "Medical Services Gaza Strip",
  "slide-1-description":
    "A website showcasing medical services in the Gaza Strip, featuring a real-time information dashboard to facilitate viewing and interaction with the information.",
  "slide-1-tag-1": "Web App",
  "slide-1-tag-2": "Dashboard",
  "slide-1-aria": "Medical services gaza strip",

  // التحليل الشبكي المحافظة الوسطى
  "slide-2-title": "Service accessibility analysis",
  "slide-2-description":"Network analysis of the Central Governorate in the Gaza Strip using Geographic Information Systems",
  "slide-2-tag-1": "Network Analysis",
  "slide-2-tag-2": "Spatial Analysis",
  "slide-2-aria": "Network analysis of the central governorate in the Gaza Strip",

  // التغير الارضي في قطاع غزة
  "slide-3-title": "Land Use/Land Cover Analysis 2023 & 2025",
  "slide-3-description":
    "Deep-dive spatial analysis of land cover classifications using advanced GIS techniques and satellite data interpretation.",
  "slide-3-tag-1": "LULC",
  "slide-3-tag-2": "Analysis",
  "slide-3-aria": "Land Use/Land Cover Analysis 2023 & 2025",
   // الشهادات والدورات
  "courses-eyebrow": "Education",
  "courses-title": "Courses & Certification",
  "course-0-title": "Using GIS to Solve Problems",
  "course-0-description":"Hands‑on course focused on applying spatial thinking and GIS tools to real‑world decision‑making problems.",
   // ارك جي اس اونلاين 
  "course-1-title": "ArcGIS Online Basics",
  "course-1-description":"Covers the basic concepts in ArcGS online, along with some practical aspects that enhanced understanding.",
  // محادثات الانجليزية
  "course-2-title": "English Conversational Skills",
  "course-2-description":"Successfully completed English Conversational Skills for Beginners, covering basics of English conversation skills.",
  // نظم المعلومات الجغرافية لحل المشكلات
  "course-0-aria": "Using GIS to Solve Problems",
  "course-1-aria": "ArcGIS Online Basics",
  "course-2-aria": "English Conversational Skills",
  // الخدمات
  "services-eyebrow": "Services",
  "services-title": "My Services",
  "service-0-title": "Cartography",
  "service-0-description":
    "Designing clear, accurate, and visually effective maps that communicate geographic information and spatial patterns.",
  "service-1-title": "Remote Sensing",
  "service-1-description":
    "Analyzing satellite and remote sensing data to extract meaningful information, monitor change, and support spatial analysis.",
  "service-2-title": "Python for GIS",
  "service-2-description":
    "Using Python to automate GIS workflows, process spatial data, and improve analysis efficiency.",
  "service-3-title": "Geospatial Data Processing",
  "service-3-description":
    "Preparing, cleaning, and managing geospatial data to ensure accuracy and reliable analytical results.",
  "service-4-title": "Spatial Data Visualization",
  "service-4-description":
    "Transforming complex spatial data into clear visual outputs that support understanding and decision-making.",
  "service-5-title": "Web Map Development",
  "service-5-description":
    "Designing and developing interactive web maps that present spatial data clearly and support exploration and decision-making.",
  "tools-eyebrow": "Programmes & Platforms",
  "tools-title":
    '<span class="Exp-higlight">Experienced</span> with leading GIS tools and platforms',
  "contact-eyebrow": "Contact",
  "contact-title": "Have a question or want to work together?",
  "contact-intro": "Let’s build something useful with GIS",
  "contact-location-title": "Location",
  "contact-location-value": "Gaza - Palestine",
  "contact-email-title": "Email",
  "form-name-label": "Name",
  "form-name-placeholder": "Your name",
  "form-email-label": "Email",
  "form-email-placeholder": "you@example.com",
  "form-subject-label": "Subject",
  "form-subject-placeholder": "Project, question, or collaboration idea",
  "form-message-label": "Message",
  "form-message-placeholder":
    "Tell me more about your project or question...",
  "form-submit": "Send message",
  "footer-text": "Make your life better & easier by using GIS.",
  "footer-meta":
    "© <span id=\"year\"></span> Created by ❤️ Mohamed Al-Habbash | All rights reserved."
  },
  ar: {
  title: "محفظة نظم المعلومات الجغرافية",
  metaDescription:
    "محفظة نظم المعلومات الجغرافية - محمد الحباش متخصص في نظم المعلومات الجغرافية على الويب، رسم الخرائط، الاستشعار عن بعد، والتحليل المكاني.",
  "nav-about": "نبذة عني",
  "nav-works": "مشاريعي",
  "nav-courses": "الدورات والشهادات",
  "nav-services": "خدماتي",
  "nav-contact": "تواصل",
  "hero-heading": '<span class="gis-highlight">نظم المعلومات الجغرافية</span> تجعل الحياة أفضل',
  "hero-subtitle": "خرائط ذكية قرارات افضل.",
  "hero-cta": "عرض مشاريعي",
  "about-eyebrow": "من أنا",
  "about-title": "نبذة عني",
  "about-intro":
    "أنا محمد، متخصص نظم معلومات جغرافية أركز على خرائط الويب، ورسم الخرائط، والتحليل المكاني. أعمل مع البيانات الجغرافية لدعم اتخاذ القرار وتقديم رؤى مكانية أفضل.",
  "works-eyebrow": "المشاريع",
  "works-title": "أعمالي",
  "works-intro":
    "مجموعة من مشاريع نظم المعلومات الجغرافية التي تركز على التحليل المكاني والخرائط.",

  "slide-0-title": "تحليل السطوح في دولة لبنان",
  "slide-0-description":"تحليل السطوح لدولة لبنان يشمل الارتفاعات والانحدارات واتجاهاتها الى جانب مدى الرؤية والتحليلات الاخرى ",
  "slide-0-tag-1": "ArcGIS",
  "slide-0-tag-2": "تحليل التضاريس",
  "slide-0-aria": "تحليل السطوح في دولة لبنان",

  "slide-1-title": "دليل الخدمات الطبية في قطاع غزة",
  "slide-1-description": "موقع يعرض الخدمات الطبية في قطاع غزة مع عرض لوحة معلومات انية لتسهيل عرضها والتفاعل معها مكانيا ",
  "slide-1-tag-1": "مواقع ويب",
  "slide-1-tag-2": "لوحة معلومات",
  "slide-1-aria": "دليل الخدمات الطبية في قطاع غزة",

  "slide-2-title": "تحليل امكانية الوصول الى الخدمات",
  "slide-2-description": "تحليل شبكي للمحافظة الوسطى في قطاع غزة باستخدام نظم المعلومات الجغرافية ",
  "slide-2-tag-1": "تحليل شبكي",
  "slide-2-tag-2": "تحليل مكاني",
  "slide-2-aria": "تحليل",

  "slide-3-title": "تحليل استخدام/تغطية الأراضي 2023 و 2025",
  "slide-3-description":  "تحليل مكاني متعمق لتصنيفات تغطية الأراضي باستخدام تقنيات نظم المعلومات الجغرافية المتقدمة وتفسير بيانات الأقمار الصناعية.",
  "slide-3-tag-1": "LULC",
  "slide-3-tag-2": "تحليل",
  "slide-3-aria": "تحليل استخدام/تغطية الأراضي 2023 و 2025",

  "courses-eyebrow": "التعليم",
  "courses-title": "الدورات والشهادات",
  "course-0-title": "استخدام نظم المعلومات الجغرافية لحل المشكلات",
  "course-0-description":
    "دورة عملية تركز على تطبيق التفكير المكاني وأدوات نظم المعلومات الجغرافية لحل مشاكل العالم الحقيقي.",
  "course-1-title": "أساسيات ArcGIS Online",
  "course-1-description":
    "يغطي المفاهيم الأساسية في ArcGIS Online مع بعض الجوانب العملية التي تعزز الفهم.",
  "course-2-title": "مهارات المحادثة الإنجليزية",
  "course-2-description":
    "أكملت بنجاح دورة مهارات المحادثة الإنجليزية للمبتدئين، مع تغطية أساسيات المحادثة.",
  "course-0-aria": "استخدام نظم المعلومات الجغرافية لحل المشكلات",
  "course-1-aria": "أساسيات ArcGIS Online",
  "course-2-aria": "مهارات المحادثة الإنجليزية",
  "services-eyebrow": "الخدمات",
  "services-title": "خدماتي",
  "service-0-title": "رسم خرائط",
  "service-0-description":
    "تصميم خرائط واضحة ودقيقة وفعالة بصرياً تنقل المعلومات الجغرافية والأنماط المكانية.",
  "service-1-title": "الاستشعار عن بعد",
  "service-1-description":
    "تحليل بيانات الأقمار الصناعية والاستشعار عن بعد لاستخراج معلومات ذات معنى، ومراقبة التغيرات، ودعم التحليل المكاني.",
  "service-2-title": "بايثون لنظم المعلومات الجغرافية",
  "service-2-description":
    "استخدام بايثون لأتمتة سير عمل نظم المعلومات الجغرافية، ومعالجة البيانات المكانية، وتحسين كفاءة التحليل.",
  "service-3-title": "معالجة البيانات المكانية",
  "service-3-description":
    "إعداد وتنظيف وإدارة البيانات المكانية لضمان الدقة ونتائج تحليلية موثوقة.",
  "service-4-title": "تصوير البيانات المكانية",
  "service-4-description":
    "تحويل البيانات المكانية المعقدة إلى مخرجات بصرية واضحة تدعم الفهم واتخاذ القرار.",
  "service-5-title": "تطوير خرائط الويب",
  "service-5-description":
    "تصميم وتطوير خرائط ويب تفاعلية تعرض البيانات المكانية بوضوح وتدعم الاستكشاف واتخاذ القرار.",
  "tools-eyebrow": "البرامج والمنصات",
  "tools-title":
    '<span class="Exp-higlight">خبرة</span> في أدوات ومنصات نظم المعلومات الجغرافية الرائدة',
  "contact-eyebrow": "تواصل",
  "contact-title": "هل لديك سؤال أو ترغب في العمل معاً؟",
  "contact-intro": "لنقم ببناء شيء مفيد باستخدام نظم المعلومات الجغرافية",
  "contact-location-title": "الموقع",
  "contact-location-value": "غزة - فلسطين",
  "contact-email-title": "البريد الإلكتروني",
  "form-name-label": "الاسم",
  "form-name-placeholder": "اسمك",
  "form-email-label": "البريد الإلكتروني",
  "form-email-placeholder": "you@example.com",
  "form-subject-label": "الموضوع",
  "form-subject-placeholder": "مشروع، سؤال، أو فكرة تعاون",
  "form-message-label": "الرسالة",
  "form-message-placeholder":
    "أخبرني المزيد عن مشروعك أو سؤالك...",
  "form-submit": "إرسال ",
  "footer-text": "اجعل حياتك أفضل وأسهل باستخدام نظم المعلومات الجغرافية.",
  "footer-meta":
    "© <span id=\"year\"></span> تم الإنشاء بواسطة ❤️ محمد الهباش | كل الحقوق محفوظة."
  }
};

const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const i18nAria = document.querySelectorAll("[data-i18n-aria]");
const htmlElement = document.documentElement;
const bodyElement = document.body;

function updateLanguageToggle(lang) {
  if (!languageToggle || !languageLabel) return;
  languageLabel.textContent = lang === "ar" ? "EN" : "AR";
  languageToggle.setAttribute(
  "aria-label",
  lang === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic"
  );
}

function translatePage(lang) {
  const currentLang = translations[lang] ? lang : "en";
  htmlElement.lang = currentLang;
  htmlElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  if (titleElement) {
  titleElement.textContent = translations[currentLang].title;
  }

  if (metaDescription) {
  metaDescription.content = translations[currentLang].metaDescription;
  }

  i18nElements.forEach((element) => {
  const key = element.dataset.i18n;
  if (!key) return;
  const text = translations[currentLang][key];
  if (typeof text !== "undefined") {
    element.innerHTML = text;
  }
  });

  i18nPlaceholders.forEach((element) => {
  const key = element.dataset.i18nPlaceholder;
  if (!key) return;
  const placeholder = translations[currentLang][key];
  if (typeof placeholder !== "undefined") {
    element.placeholder = placeholder;
  }
  });

  i18nAria.forEach((element) => {
  const key = element.dataset.i18nAria;
  if (!key) return;
  const aria = translations[currentLang][key];
  if (typeof aria !== "undefined") {
    element.setAttribute("aria-label", aria);
  }
  });

  updateLanguageToggle(currentLang);
  updateSliderArrows(currentLang);
  localStorage.setItem("language", currentLang);
}

// When switching languages, swap slider arrow icons so "prev/next" match RTL direction
function updateSliderArrows(lang) {
  const prevButtons = document.querySelectorAll('.slider-btn-prev, .courses-slider-btn-prev');
  const nextButtons = document.querySelectorAll('.slider-btn-next, .courses-slider-btn-next');
  const leftIcon = '<i class="fa-solid fa-chevron-left"></i>';
  const rightIcon = '<i class="fa-solid fa-chevron-right"></i>';

  if (lang === 'ar') {
    // In RTL, visually reverse arrows
    prevButtons.forEach((btn) => { if (btn) btn.innerHTML = rightIcon; });
    nextButtons.forEach((btn) => { if (btn) btn.innerHTML = leftIcon; });
  } else {
    prevButtons.forEach((btn) => { if (btn) btn.innerHTML = leftIcon; });
    nextButtons.forEach((btn) => { if (btn) btn.innerHTML = rightIcon; });
  }
}

const savedLanguage = localStorage.getItem("language") || "en";
translatePage(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
  const nextLang = htmlElement.lang === "ar" ? "en" : "ar";
  translatePage(nextLang);
  });
}

// Theme toggle for dark mode
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  bodyElement.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  
  if (bodyElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Contact form fake submit (front-end only)
// Contact form submit -> sends the message to Formspree, which forwards it to your email
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Disable the button while sending to avoid duplicate submissions
    if (submitBtn) submitBtn.disabled = true;
    formStatus.classList.remove("error");
    formStatus.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent =
          name && typeof name === "string"
            ? `Thank you, ${name}! Your message has been sent.`
            : "Thank you! Your message has been sent.";
        formStatus.classList.remove("error");
        contactForm.reset();
      } else {
        const data = await response.json().catch(() => null);
        formStatus.textContent =
          data && data.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Something went wrong. Please try again or email me directly.";
        formStatus.classList.add("error");
      }
    } catch (error) {
      formStatus.textContent =
        "Network error. Please check your connection and try again.";
      formStatus.classList.add("error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.classList.remove("error");
      }, 5000);
    }
  });
}

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll(
  ".section-eyebrow, .section-title, .section-intro, " +
  ".service-card, .slide, .course-slide, .tool-slide, " +
  ".card, .about-image-wrapper, .contact-form, .site-footer, " +
  ".works-header, .tools-header, .section-grid > div:last-child"
).forEach((el) => {
  observer.observe(el);
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Works slider - shows 2 slides at a time
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".works-slider .slide");
const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");
const dots = document.querySelectorAll(".slider-dot");

let currentSlideIndex = 0;
let worksAutoPlayInterval = null;
const worksAutoPlayDelay = 5000; // 5 seconds

function getSlidesPerView() {
  // On mobile, show 1 slide; on desktop, show 2
  return window.innerWidth <= 900 ? 1 : 2;
}

function updateSlider() {
  if (!sliderTrack || !slides.length) return;

  const slidesPerView = getSlidesPerView();
  const totalGroups = Math.ceil(slides.length / slidesPerView);
  
  // Ensure currentSlideIndex is within bounds
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalGroups - 1;
  } else if (currentSlideIndex >= totalGroups) {
    currentSlideIndex = 0;
  }

  // Get the first visible slide element
  const firstVisibleSlideIndex = currentSlideIndex * slidesPerView;
  if (firstVisibleSlideIndex >= slides.length) return;

  const firstSlide = slides[firstVisibleSlideIndex];
  if (!firstSlide) return;

  // Calculate translateX based on slide position
  const slideWidth = firstSlide.offsetWidth;
  const gap = 16; // 1rem = 16px
  const translateX = -(firstVisibleSlideIndex * (slideWidth + gap));

  sliderTrack.style.transform = `translateX(${translateX}px)`;

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlideIndex);
  });
}

if (prevBtn && nextBtn && slides.length) {
  prevBtn.addEventListener("click", () => {
    currentSlideIndex--;
    updateSlider();
    startWorksAutoPlay();
  });

  nextBtn.addEventListener("click", () => {
    currentSlideIndex++;
    updateSlider();
    startWorksAutoPlay();
  });

  // Pause autoplay on hover
  const worksSlider = document.querySelector(".works-slider");
  if (worksSlider) {
    worksSlider.addEventListener("mouseenter", stopWorksAutoPlay);
    worksSlider.addEventListener("mouseleave", startWorksAutoPlay);
  }
}

if (dots.length) {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.getAttribute("data-slide") || "0");
      const slidesPerView = getSlidesPerView();
      currentSlideIndex = Math.floor(index / slidesPerView);
      updateSlider();
      startWorksAutoPlay();
    });
  });
}

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateSlider();
  }, 250);
});

// Initialize slider
if (slides.length) {
  updateSlider();
  startWorksAutoPlay();
}

function startWorksAutoPlay() {
  stopWorksAutoPlay();
  worksAutoPlayInterval = setInterval(() => {
    currentSlideIndex++;
    updateSlider();
  }, worksAutoPlayDelay);
}

function stopWorksAutoPlay() {
  if (worksAutoPlayInterval) {
    clearInterval(worksAutoPlayInterval);
    worksAutoPlayInterval = null;
  }
}

// Courses slider - auto-playing slider
const coursesSliderTrack = document.querySelector(".courses-slider-track");
const courseSlides = document.querySelectorAll(".courses-slider .course-slide");
const coursesPrevBtn = document.querySelector(".courses-slider-btn-prev");
const coursesNextBtn = document.querySelector(".courses-slider-btn-next");
const coursesDots = document.querySelectorAll(".courses-slider-dot");

let currentCourseIndex = 0;
let coursesAutoPlayInterval = null;
const coursesAutoPlayDelay = 4000; // 4 seconds

function updateCoursesSlider() {
  if (!coursesSliderTrack || !courseSlides.length) return;

  // Ensure currentCourseIndex is within bounds
  if (currentCourseIndex < 0) {
    currentCourseIndex = courseSlides.length - 1;
  } else if (currentCourseIndex >= courseSlides.length) {
    currentCourseIndex = 0;
  }

  const firstSlide = courseSlides[0];
  if (!firstSlide) return;

  const slideWidth = firstSlide.offsetWidth;
  const gap = 24; // 1.5rem = 24px
  const translateX = -(currentCourseIndex * (slideWidth + gap));

  coursesSliderTrack.style.transform = `translateX(${translateX}px)`;

  // Update dots
  coursesDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentCourseIndex);
  });
}

function startCoursesAutoPlay() {
  stopCoursesAutoPlay();
  coursesAutoPlayInterval = setInterval(() => {
    currentCourseIndex++;
    updateCoursesSlider();
  }, coursesAutoPlayDelay);
}

function stopCoursesAutoPlay() {
  if (coursesAutoPlayInterval) {
    clearInterval(coursesAutoPlayInterval);
    coursesAutoPlayInterval = null;
  }
}

if (coursesPrevBtn && coursesNextBtn && courseSlides.length) {
  coursesPrevBtn.addEventListener("click", () => {
    currentCourseIndex--;
    updateCoursesSlider();
    startCoursesAutoPlay(); // Restart autoplay after manual navigation
  });

  coursesNextBtn.addEventListener("click", () => {
    currentCourseIndex++;
    updateCoursesSlider();
    startCoursesAutoPlay(); // Restart autoplay after manual navigation
  });

  // Pause autoplay on hover
  const coursesSlider = document.querySelector(".courses-slider");
  if (coursesSlider) {
    coursesSlider.addEventListener("mouseenter", stopCoursesAutoPlay);
    coursesSlider.addEventListener("mouseleave", startCoursesAutoPlay);
  }
}

if (coursesDots.length) {
  coursesDots.forEach((dot1) => {
    dot1.addEventListener("click", () => {
      const index = Number(dot1.getAttribute("data-slide") || "0");
      currentCourseIndex = index;
      updateCoursesSlider();
      startCoursesAutoPlay(); // Restart autoplay after manual navigation
    });
  });
}

// Handle window resize
let coursesResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(coursesResizeTimer);
  coursesResizeTimer = setTimeout(() => {
    updateCoursesSlider();
  }, 250);
});

// Initialize courses slider
if (courseSlides.length) {
  updateCoursesSlider();
  startCoursesAutoPlay();
}

// Tools slider
const toolsSliderTrack = document.querySelector(".tools-track");
const toolSlides = document.querySelectorAll(".tools-slider .tool-slide");
const toolsPrevBtn = document.querySelector(".tools-slider .slider-btn-prev");
const toolsNextBtn = document.querySelector(".tools-slider .slider-btn-next");

let currentToolIndex = 0;
let toolsAutoPlayInterval = null;
const toolsAutoPlayDelay = 6000; // 6 seconds

function getToolSlidesPerView() {
  // On large screens: 4, medium: 3, mobile: 2
  return window.innerWidth <= 600 ? 2 : window.innerWidth <= 900 ? 3 : 4;
}

function updateToolsSlider() {
  if (!toolsSliderTrack || !toolSlides.length) return;

  const slidesPerView = getToolSlidesPerView();
  const totalGroups = Math.ceil(toolSlides.length / slidesPerView);

  // Ensure currentToolIndex is within bounds
  if (currentToolIndex < 0) {
    currentToolIndex = totalGroups - 1;
  } else if (currentToolIndex >= totalGroups) {
    currentToolIndex = 0;
  }

  // Get the first visible slide element
  const firstVisibleSlideIndex = currentToolIndex * slidesPerView;
  if (firstVisibleSlideIndex >= toolSlides.length) return;

  const firstSlide = toolSlides[firstVisibleSlideIndex];
  if (!firstSlide) return;

  // Calculate translateX based on slide position
  const slideWidth = firstSlide.offsetWidth;
  const gap = 0; // No gap in CSS
  const translateX = -(firstVisibleSlideIndex * (slideWidth + gap));

  toolsSliderTrack.style.transform = `translateX(${translateX}px)`;
}

if (toolsPrevBtn && toolsNextBtn && toolSlides.length) {
  toolsPrevBtn.addEventListener("click", () => {
    currentToolIndex--;
    updateToolsSlider();
    startToolsAutoPlay();
  });

  toolsNextBtn.addEventListener("click", () => {
    currentToolIndex++;
    updateToolsSlider();
    startToolsAutoPlay();
  });

  // Pause autoplay on hover
  const toolsSlider = document.querySelector(".tools-slider");
  if (toolsSlider) {
    toolsSlider.addEventListener("mouseenter", stopToolsAutoPlay);
    toolsSlider.addEventListener("mouseleave", startToolsAutoPlay);
  }
}

function startToolsAutoPlay() {
  stopToolsAutoPlay();
  toolsAutoPlayInterval = setInterval(() => {
    currentToolIndex++;
    updateToolsSlider();
  }, toolsAutoPlayDelay);
}

function stopToolsAutoPlay() {
  if (toolsAutoPlayInterval) {
    clearInterval(toolsAutoPlayInterval);
    toolsAutoPlayInterval = null;
  }
}

// Handle window resize for tools slider
let toolsResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(toolsResizeTimer);
  toolsResizeTimer = setTimeout(() => {
    updateToolsSlider();
  }, 250);
});

// Initialize tools slider
if (toolSlides.length) {
  updateToolsSlider();
  startToolsAutoPlay();
}




function initSlider(sliderElement, options = {}) {
  const track = sliderElement.querySelector(".slider-track");
  const slides = sliderElement.querySelectorAll(".slide");

  let index = 0;
  const gap = options.gap || 40;
  const delay = options.delay || 2000;

  function move() {
    if (!track || !slides.length) return;

    const slideWidth = slides[0].offsetWidth + gap;

    index++;
    if (index >= slides.length) index = 0;

    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  if (options.autoplay) {
    setInterval(move, delay);
  }
}

// تشغيل كل السلايدرز
document.querySelectorAll(".custom-slider").forEach((slider) => {
  const type = slider.dataset.slider;

  if (type === "tools") {
    initSlider(slider, { autoplay: true, delay: 2000 });
  }

  if (type === "projects") {
    initSlider(slider, { autoplay: false });
  }
});