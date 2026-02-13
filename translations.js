// Language translations
const translations = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    hire_me: "Hire Me",
    hero_tagline: "Creative Developer",
    hero_title: "Hi, I'm Jeeyson. I build",
    hero_title_highlight: "digital experiences",
    hero_title_end: "that matter.",
    hero_description:
      "I specialize in crafting high-performance, modern web applications with a focus on clean aesthetics and intuitive user interactions.",
    view_work: "View My Work",
    resume: "Resume",
    featured_projects: "Featured Projects",
    projects_subtitle:
      "A selection of my recent work in design and development.",
    view_all: "View All",
    view_case_study: "View Case Study",
    explore_project: "Explore Project",
    about_title: "About",
    about_text1:
      "I'm a creative developer focused on building modern, high-performance web experiences with clean UI, thoughtful UX, and accessible interfaces.",
    about_text2:
      "Want to collaborate? Jump to the contact section and let's talk about your project.",
    cta_title: "Interested in working together?",
    cta_description:
      "I'm currently available for freelance work and full-time creative opportunities. Let's build something amazing.",
    btn_email: "Email",
    btn_whatsapp: "WhatsApp",
    label_email: "Email",
    label_whatsapp: "WhatsApp",
  },
  es: {
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_about: "Sobre Mí",
    nav_contact: "Contacto",
    hire_me: "Contrátame",
    hero_tagline: "Desarrollador Creativo",
    hero_title: "Hola, soy Jeeyson. Construyo",
    hero_title_highlight: "experiencias digitales",
    hero_title_end: "que importan.",
    hero_description:
      "Me especializo en crear aplicaciones web modernas y de alto rendimiento con un enfoque en estética limpia e interacciones de usuario intuitivas.",
    view_work: "Ver Mi Trabajo",
    resume: "Currículum",
    featured_projects: "Proyectos Destacados",
    projects_subtitle:
      "Una selección de mi trabajo reciente en diseño y desarrollo.",
    view_all: "Ver Todo",
    view_case_study: "Ver Caso de Estudio",
    explore_project: "Explorar Proyecto",
    about_title: "Sobre Mí",
    about_text1:
      "Soy un desarrollador creativo enfocado en crear experiencias web modernas y de alto rendimiento con interfaces de usuario limpias, UX reflexivo y interfaces accesibles.",
    about_text2:
      "¿Quieres colaborar? Ve a la sección de contacto y hablemos de tu proyecto.",
    cta_title: "¿Te interesa trabajar juntos?",
    cta_description:
      "Actualmente estoy disponible para trabajos freelance y oportunidades creativas a tiempo completo. Construyamos algo increíble.",
    btn_email: "Correo",
    btn_whatsapp: "WhatsApp",
    label_email: "Correo",
    label_whatsapp: "WhatsApp",
  },
};

// Current language
let currentLang = "en";

// Set language function
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update language switcher button
  const langBtn = document.getElementById("current-lang");
  if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
  }

  // Save preference
  localStorage.setItem("preferredLang", lang);
}

// Initialize language on page load
function initLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem("preferredLang");
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
    return;
  }

  // Try to detect browser language
  const browserLang = navigator.language.slice(0, 2);
  if (translations[browserLang]) {
    setLanguage(browserLang);
  } else {
    setLanguage("en"); // Default to English
  }
}

// Language switcher click handler
function setupLanguageSwitcher() {
  const langSwitcher = document.getElementById("lang-switcher");
  if (langSwitcher) {
    langSwitcher.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "es" : "en";
      setLanguage(newLang);
    });
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  setupLanguageSwitcher();
});
