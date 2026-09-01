const langToggle = document.getElementById('lang-toggle');
const translations = {
    en: {
        "linkedin": "View LinkedIn Profile",
        name: "TAMIM ALBAHUSSEIN",
        "title": "Computer Science Student | Web Developer",
        "about-title": "Professional Summary",
        "about-text": "Focused Computer Science student with expertise in Web Development and Cybersecurity.",
        "skills-title": "Technical Skills",
        "skill-1": "HTML & CSS",
        "skill-2": "JavaScript",
        "skill-3": "Beginner in Digital Forensics & Cloud Security",
        "skill-4": "Python",
        "contact-title": "Contact",
        "contact-email": "Email: <a href=\"mailto:albahusseintt@gmail.com\">albahusseintt@gmail.com</a>",
        "contact-phone": "Phone: <a href=\"tel:+966508488480\">+966508488480</a>",
        "contact-location": "Location: Riyadh, Saudi Arabia",
        "certificates-title": "Certificates",
        "cert-1": "Cloud Security",
        "cert-2": "HTML Essentials",
        btn: "العربية"
    },
    ar: {
        "linkedin": "عرض الملف الشخصي على لينكد إن",
        name: "تميم الباحسين",
        "title": "طالب علوم حاسب | مطور ويب",
        "about-title": "الملخص المهني",
        "about-text": "طالب علوم حاسب مهتم بتطوير الويب والأمن السيبراني والبنية التحتية للسحابية.",
        "skills-title": "المهارات التقنية",
        "skill-1": "HTML5 و CSS3 (بناء هيكلي واستجابة)",
        "skill-2": "جاوا سكريبت (Vanilla ES6+)",
        "skill-3": "مبتدئ في التحقيق الجنائي الرقمي وأمن السحابة",
        "skill-4": "بايثون",
        "contact-title": "تواصل",
        "contact-email": "البريد الإلكتروني: <a href=\"mailto:albahusseintt@gmail.com\">albahusseintt@gmail.com</a>",
        "contact-phone": "الهاتف: <a href=\"tel:+966508488480\">+966508488480</a>",
        "contact-location": "الموقع: الرياض، المملكة العربية السعودية",
        "certificates-title": "الشهادات",
        "cert-1": "أمن السحابة",
        "cert-2": "أساسيات HTML",
        btn: "English"
    }
};

let currentLang = 'en';

langToggle.addEventListener('click', () => {
    // Switch language state
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update direction and font
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update all text elements
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        const val = translations[currentLang][key];
        if (typeof val === 'undefined') return;
        // If the translation contains HTML (links), set as HTML to preserve anchors
        if (String(val).includes('<')) elem.innerHTML = val;
        else elem.innerText = val;
    });

    // Update button text
    langToggle.innerText = translations[currentLang].btn;
});

// Theme Toggle Logic (from previous response)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// Initialize language button and text on load
document.addEventListener('DOMContentLoaded', () => {
    // set initial lang attributes
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    // set initial button text
    if (langToggle) langToggle.innerText = translations[currentLang].btn;
    // populate translated text for any initial elements
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        const val = translations[currentLang][key];
        if (typeof val === 'undefined') return;
        if (String(val).includes('<')) elem.innerHTML = val;
        else elem.innerText = val;
    });
});

