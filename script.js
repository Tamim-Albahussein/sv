const langToggle = document.getElementById('lang-toggle');
const translations = {
    en: {
        "github": "View GitHub Profile",
        name: "TAMIM ALBAHUSSEIN",
        "title": "Computer Science Student | Web Developer",
        "about-title": "Summary",
        "about-text": "Motivated Computer Science student with a strong interest in web development, cybersecurity, and modern digital technologies. Skilled in building responsive web interfaces, learning new tools quickly, and solving technical problems with a practical and creative approach.",
        "education-title": "Education",
        "education-item": "Student Bachelor of Computer Science, Shaqra University GPA: 4.57",
        "skills-title": "Technical Skills",
        "skill-1": "HTML & CSS",
        "skill-2": "JavaScript",
        "skill-3": "Beginner in Digital Forensics & Cloud Security",
        "skill-4": "Python",
        "soft-skills-title": "Soft Skills",
        "soft-skill-1": "Fast Learner",
        "soft-skill-2": "Teamwork",
        "soft-skill-3": "Problem Solving",
        "soft-skill-4": "Adaptability",
        "soft-skill-5": "Time Management",
        "contact-title": "Contact",
        "contact-email": "Email: <a href=\"mailto:albahusseintt@gmail.com\">albahusseintt@gmail.com</a>",
        "contact-phone": "Phone: <a href=\"tel:+966508488480\">+966508488480</a>",
        "certificates-title": "Certificates",
        "cert-1": "IBM Cloud Security",
        "cert-2": "Cisco HTML Essentials",
        "cert-3": "Cisco Python Essentials",
        "languages-title": "Languages",
        "language-1": "Arabic: Native",
        "language-2": "English: Professional",
        btn: "العربية"
    },
    ar: {
        "github": "عرض الملف الشخصي على GitHub",
        name: "تميم الباحسين",
        "title": "طالب علوم حاسب | مطور ويب",
        "about-title": "الملخص",
        "about-text": "طالب علوم حاسب مهتم بتطوير الويب والأمن السيبراني والبنية التحتية للسحابة.",
        "education-title": "التعليم",
        "education-item": "طالب بكالوريوس علوم الحاسب، جامعة شقراء معدل 4,57",
        "skills-title": "المهارات التقنية",
        "skill-1": "HTML5 و CSS3 (بناء هيكلي واستجابة)",
        "skill-2": "جاوا سكريبت (Vanilla ES6+)",
        "skill-3": "مبتدئ في التحقيق الجنائي الرقمي وأمن السحابة",
        "skill-4": "بايثون",
        "soft-skills-title": "المهارات الشخصية",
        "soft-skill-1": "سرعة التعلم",
        "soft-skill-2": "العمل الجماعي",
        "soft-skill-3": "حل المشكلات",
        "soft-skill-4": "التكيف",
        "soft-skill-5": "إدارة الوقت",
        "contact-title": "تواصل",
        "contact-email": "البريد الإلكتروني: <a href=\"mailto:albahusseintt@gmail.com\">albahusseintt@gmail.com</a>",
        "contact-phone": "الهاتف: <a href=\"tel:+966508488480\">+966508488480</a>",
        "certificates-title": "الشهادات",
        "cert-1": "IBM أمن السحابة",
        "cert-2": "Cisco اساسيات HTML",
        "cert-3": "Cisco اساسيات بايثون",
        "languages-title": "اللغات",
        "language-1": "العربية: أصلية",
        "language-2": "الإنجليزية: محترفة",
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

