/**
 * GlobalGate Travel Website JavaScript
 * Handles multilingual support, animations, form validation, and user interactions
 */

// Language Data Structure - Complete translation pack
const LANG = {
  en: {
    siteName: "GlobalGate",
    hero: {
      title: "Explore the world — travel with confidence.",
      subtitle: "Fast booking, global network, local expertise.",
      primaryCTA: "Book Now",
      secondaryCTA: "Contact Sales"
    },
    nav: {
      home: "Home",
      about: "About",
      domestic: "Domestic",
      international: "International",
      contact: "Contact",
      visas: "Visas"
    },
    section: { visas: "Visas" },
    about: "GlobalGate connects travelers to the world's best routes and experiences. We combine local knowledge with a global platform to offer secure, seamless travel.",
    domesticTitle: "Domestic Tickets",
    internationalTitle: "International Tickets",
    visas: [
      { name:"Schengen Visa", type:"Tourist", base:80.00, taxPercent:0, fee:25.00, continent: 'europe' },
      { name:"UK Visa", type:"Visitor", base:120.00, taxPercent:0, fee:35.00, continent: 'europe' },
      { name:"UAE Visa", type:"Tourist", base:100.00, taxPercent:0, fee:20.00, continent: 'asia' }
    ],
    tickets: [
      { route:"Erbil — Sulaymaniyah", class:"Economy", base:45.00, taxPercent:10, fee:3.00 },
      { route:"Baghdad — Basra", class:"Economy", base:60.00, taxPercent:10, fee:3.50 },
      { route:"Duhok — Erbil", class:"Business", base:120.00, taxPercent:10, fee:5.00 }
    ],
    international: [
      { route:"Erbil — Istanbul (IST)", class:"Economy", base:220.00, taxPercent:8, fee:12.00 },
      { route:"Erbil — Dubai (DXB)", class:"Economy", base:310.00, taxPercent:8, fee:15.00 },
      { route:"Erbil — London (LHR)", class:"Business", base:1200.00, taxPercent:8, fee:40.00 }
    ],
    contactTitle: "Contact us",
    offices: [
      { city:"Erbil", address:"Azadi St, Erbil", phone:"+964 750 000 0001" },
      { city:"London", address:"10 King's Rd, London", phone:"+44 20 7000 0002" }
    ],
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      language: "Preferred Language",
      message: "Message",
      submit: "Send Message"
    },
    modal: {
      success: "Message Sent Successfully!",
      message: "Your message has been prepared. Click below to send it via your email client.",
      openEmail: "Open Email Client"
    },
    pricing: {
      basePrice: "Base Price",
      tax: "Tax/VAT",
      serviceFee: "Service Fee",
      total: "Total",
      bookNow: "Book Now"
    },
    continents: {
      all: "All Visas",
      asia: "Asia",
      europe: "Europe",
      africa: "Africa",
      north_america: "North America",
      south_america: "South America",
      oceania: "Oceania",
      antarctica: "Antarctica"
    },
    labels: {
      showing: "Showing:"
    }
  },
  ku: {
    siteName: "گلوبالگێیت",
    hero: {
      title: "جیهان بەکەشـوە — بە دڵنیایی گەشت بکە.",
      subtitle: "فەرمی نەخۆشی، شابەکەی جیهانی، تایبەتمەندی ناوخۆیی.",
      primaryCTA: "ئێستا بۆک بکە",
      secondaryCTA: "پەیوەندی بە فرۆشیار"
    },
    nav: {
      home: "سەرەتا",
      about: "دەربارە",
      domestic: "ناوخۆیی",
      international: "جیهانی",
      contact: "پەیوەندی",
      visas: "ویزە"
    },
    section: { visas: "ویزە" },
    about: "گلوبالگێیت گەڕاوانەکان پەیوەندیدەکات بە باشترین ڕێگاکان و تاقیکردنەوەکانی جیهان. ئێمە زانیاری ناوخۆیی لەگەڵ پلاتفۆرمی جیهانی تێکدەهەڵین بۆ پێشکەشکردنی گەشتی پاراستوو و بێتێگەیشت.",
    domesticTitle: "تکتە ناوخۆییەکان",
    internationalTitle: "تکتە جیهانیەکان",
    visas: [
      { name:"ویزەی شێنگەن", type:"گەشتیاری", base:80.00, taxPercent:0, fee:25.00, continent: 'europe' },
      { name:"ویزەی بەریتانیا", type:"سەردان", base:120.00, taxPercent:0, fee:35.00, continent: 'europe' },
      { name:"ویزەی UAE", type:"گەشتیاری", base:100.00, taxPercent:0, fee:20.00, continent: 'asia' }
    ],
    tickets: [
      { route:"هەولێر — سلێمانی", class:"ئیکۆنۆمی", base:45.00, taxPercent:10, fee:3.00 },
      { route:"بەغدا — بەسرە", class:"ئیکۆنۆمی", base:60.00, taxPercent:10, fee:3.50 },
      { route:"دۆھۆک — هەولێر", class:"بیزنێس", base:120.00, taxPercent:10, fee:5.00 }
    ],
    international: [
      { route:"هەولێر — ئستانبۆل (IST)", class:"ئیکۆنۆمی", base:220.00, taxPercent:8, fee:12.00 },
      { route:"هەولێر — دوبای (DXB)", class:"ئیکۆنۆمی", base:310.00, taxPercent:8, fee:15.00 },
      { route:"هەولێر — لیندن (LHR)", class:"بیزنێس", base:1200.00, taxPercent:8, fee:40.00 }
    ],
    contactTitle: "پەیوەندی بکە",
    offices: [
      { city:"هەولێر", address:"شارۆکەی ئازادی، هەولێر", phone:"+964 750 000 0001" },
      { city:"لۆندۆن", address:"10 King's Rd, London", phone:"+44 20 7000 0002" }
    ],
    form: {
      name: "ناو",
      email: "ئیمەیڵ",
      subject: "بابەت",
      language: "زمانی پەسەندکراو",
      message: "پەیام",
      submit: "پەیام بنێرە"
    },
    modal: {
      success: "پەیام بە سەرکەوتوویی نێردرا!",
      message: "پەیامەکەت ئامادە کراوە. لە خوارەوە کلیک بکە بۆ ناردنی لە ڕێگەی کلاینتی ئیمەیڵەکەتەوە.",
      openEmail: "کلاینتی ئیمەیڵ بکەرەوە"
    },
    pricing: {
      basePrice: "نرخی بنەڕەتی",
      tax: "باج/VAT",
      serviceFee: "کرێی خزمەتگوزاری",
      total: "کۆی گشتی",
      bookNow: "ئێستا بۆک بکە"
    },
    continents: {
      all: "هه‌موو ویزه‌کان",
      asia: "ئاسیا",
      europe: "ئەورووپا",
      africa: "ئەفریقا",
      north_america: "ئەمریکی باکوور",
      south_america: "ئەمریکی باشوور",
      oceania: "ئۆقیانۆسیا",
      antarctica: "ئەنٹارکتیکا"
    },
    labels: {
      showing: "پیشاندان:"
    }
  },
  ar: {
    siteName: "جلوبال جيت",
    hero: {
      title: "استكشف العالم — سافر بثقة.",
      subtitle: "حجز سريع، شبكة عالمية، خبرة محلية.",
      primaryCTA: "احجز الآن",
      secondaryCTA: "تواصل معنا"
    },
    nav: {
      home: "الرئيسية",
      about: "حول",
      domestic: "داخلي",
      international: "دولي",
      contact: "اتصل",
      visas: "تأشيرات"
    },
    section: { visas: "التأشيرات" },
    about: "جلوبال جيت تربط المسافرين بأفضل المسارات والتجارب العالمية. نجمع الخبرة المحلية مع منصة عالمية لتقديم سفر آمن وسلس.",
    domesticTitle: "تذاكر داخلية",
    internationalTitle: "تذاكر دولية",
    visas: [
      { name:"تأشيرة شنغن", type:"سياحة", base:80.00, taxPercent:0, fee:25.00, continent: 'europe' },
      { name:"تأشيرة المملكة المتحدة", type:"زيارة", base:120.00, taxPercent:0, fee:35.00, continent: 'europe' },
      { name:"تأشيرة الإمارات", type:"سياحة", base:100.00, taxPercent:0, fee:20.00, continent: 'asia' }
    ],
    tickets: [
      { route:"أربيل — السليمانية", class:"اقتصادي", base:45.00, taxPercent:10, fee:3.00 },
      { route:"بغداد — البصرة", class:"اقتصادي", base:60.00, taxPercent:10, fee:3.50 },
      { route:"دهوك — أربيل", class:"رجال أعمال", base:120.00, taxPercent:10, fee:5.00 }
    ],
    international: [
      { route:"أربيل — إسطنبول (IST)", class:"اقتصادي", base:220.00, taxPercent:8, fee:12.00 },
      { route:"أربيل — دبي (DXB)", class:"اقتصادي", base:310.00, taxPercent:8, fee:15.00 },
      { route:"أربيل — لندن (LHR)", class:"رجال أعمال", base:1200.00, taxPercent:8, fee:40.00 }
    ],
    contactTitle: "تواصل معنا",
    offices: [
      { city:"أربيل", address:"شارع الحرية، أربيل", phone:"+964 750 000 0001" },
      { city:"لندن", address:"10 King's Rd, London", phone:"+44 20 7000 0002" }
    ],
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      language: "اللغة المفضلة",
      message: "الرسالة",
      submit: "إرسال الرسالة"
    },
    modal: {
      success: "تم إرسال الرسالة بنجاح!",
      message: "تم إعداد رسالتك. انقر أدناه لإرسالها عبر عميل البريد الإلكتروني الخاص بك.",
      openEmail: "فتح عميل البريد الإلكتروني"
    },
    pricing: {
      basePrice: "السعر الأساسي",
      tax: "الضريبة/VAT",
      serviceFee: "رسوم الخدمة",
      total: "الإجمالي",
      bookNow: "احجز الآن"
    },
    continents: {
      all: "كل التأشيرات",
      asia: "آسيا",
      europe: "أوروبا",
      africa: "أفريقيا",
      north_america: "أمريكا الشمالية",
      south_america: "أمريكا الجنوبية",
      oceania: "أوقيانوسيا",
      antarctica: "القارة القطبية الجنوبية"
    },
    labels: {
      showing: ":عرض"
    }
  }
};

// Continent utilities
const continentLabel = (slug) => {
  const data = LANG[currentLang];
  if (data && data.continents && data.continents[slug]) return data.continents[slug];
  return slug || '';
};

const updateContinentStatus = () => {
  const statusEl = document.getElementById('selectedContinentText');
  if (statusEl) statusEl.textContent = continentLabel(currentContinent);
  const prefixEl = document.getElementById('continentStatusPrefix');
  if (prefixEl && LANG[currentLang] && LANG[currentLang].labels) {
    prefixEl.textContent = LANG[currentLang].labels.showing;
  }
};

// Global State
let currentLang = 'en';
let motionEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentContinent = 'asia';

// DOM Elements
const elements = {
  html: document.documentElement,
  navbar: document.getElementById('navbar'),
  navMenu: document.getElementById('navMenu'),
  mobileToggle: document.getElementById('mobileToggle'),
  motionToggle: document.getElementById('motionToggle'),
  motionBackground: document.getElementById('motionBackground'),
  langButtons: document.querySelectorAll('.lang-btn'),
  siteName: document.getElementById('siteName'),
  heroTitle: document.getElementById('heroTitle'),
  heroSubtitle: document.getElementById('heroSubtitle'),
  primaryCTA: document.getElementById('primaryCTA'),
  secondaryCTA: document.getElementById('secondaryCTA'),
  aboutText: document.getElementById('aboutText'),
  domesticTitle: document.getElementById('domesticTitle'),
  internationalTitle: document.getElementById('internationalTitle'),
  domesticTickets: document.getElementById('domesticTickets'),
  internationalTickets: document.getElementById('internationalTickets'),
  visasTitle: document.getElementById('visasTitle'),
  visasGrid: document.getElementById('visasGrid'),
  continentFilters: document.getElementById('continentFilters'),
  continentButtons: document.querySelectorAll('.continent-btn'),
  contactTitle: document.getElementById('contactTitle'),
  officesGrid: document.getElementById('officesGrid'),
  contactForm: document.getElementById('contactForm'),
  successModal: document.getElementById('successModal'),
  modalClose: document.getElementById('modalClose'),
  openEmail: document.getElementById('openEmail'),
};

// Utility Functions
const formatCurrency = (amount, locale = 'en-US') => {
  const localeMap = {
    'en': 'en-US',
    'ku': 'en-US', // Fallback to en-US for Kurdish
    'ar': 'ar-SA'
  };
  
  return new Intl.NumberFormat(localeMap[locale] || 'en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Language Management
const updateLanguage = (lang) => {
  // Fallback to 'en' if requested language is not available
  if (!LANG[lang]) {
    lang = 'en';
  }
  currentLang = lang;
  const data = LANG[lang];
  console.debug('[GlobalGate] updateLanguage()', { lang });
  
  // Update HTML attributes
  elements.html.lang = lang;
  elements.html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update document title and meta
  document.title = `${data.siteName} - ${data.hero.title}`;
  
  // Update site name
  if (elements.siteName) elements.siteName.textContent = data.siteName;
  
  // Update hero section
  if (elements.heroTitle) elements.heroTitle.textContent = data.hero.title;
  if (elements.heroSubtitle) elements.heroSubtitle.textContent = data.hero.subtitle;
  if (elements.primaryCTA) elements.primaryCTA.textContent = data.hero.primaryCTA;
  if (elements.secondaryCTA) elements.secondaryCTA.textContent = data.hero.secondaryCTA;
  
  // Update about section
  if (elements.aboutText) elements.aboutText.textContent = data.about;
  
  // Update section titles
  if (elements.domesticTitle) elements.domesticTitle.textContent = data.domesticTitle;
  if (elements.internationalTitle) elements.internationalTitle.textContent = data.internationalTitle;
  if (elements.contactTitle) elements.contactTitle.textContent = data.contactTitle;
  if (elements.visasTitle && data.section && data.section.visas) {
    elements.visasTitle.textContent = data.section.visas;
  }
  
  
  // Update navigation and form elements with data-translate attributes
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const keys = key.split('.');
    let value = data;
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    if (value) {
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  // Update form labels
  const formLabels = {
    name: data.form.name,
    email: data.form.email,
    subject: data.form.subject,
    language: data.form.language,
    message: data.form.message
  };
  
  Object.keys(formLabels).forEach(key => {
    const label = document.querySelector(`label[for="${key}"]`);
    if (label) {
      label.textContent = formLabels[key];
    }
  });
  
  // Update form submit button
  if (elements.contactForm) {
    const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = data.form.submit;
    }
  }
  
  // Update language buttons
  elements.langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update continent buttons text to localized names
  if (elements.continentButtons && elements.continentButtons.length) {
    elements.continentButtons.forEach(btn => {
      const slug = btn.dataset.continent;
      if (slug) btn.textContent = continentLabel(slug);
    });
    updateContinentStatus();
  }
  
  // Render tickets
  renderTickets();
  renderOffices();
  console.debug('[GlobalGate] render complete for lang', currentLang);
  
  // Store preference
  localStorage.setItem('globalgate-lang', lang);
};

// Ticket Rendering
const renderTickets = () => {
  const data = LANG[currentLang];
  console.debug('[GlobalGate] renderTickets() start', { lang: currentLang });
  
  // Render domestic tickets
  if (elements.domesticTickets && Array.isArray(data.tickets)) {
    elements.domesticTickets.innerHTML = data.tickets.map(ticket => 
      createTicketCard(ticket, data)
    ).join('');
  } else {
    console.debug('Domestic tickets container or data missing');
  }
  
  // Render international tickets
  if (elements.internationalTickets && Array.isArray(data.international)) {
    elements.internationalTickets.innerHTML = data.international.map(ticket => 
      createTicketCard(ticket, data)
    ).join('');
  } else {
    console.debug('International tickets container or data missing');
  }
  
  // Render visas (filtered by continent)
  if (elements.visasGrid && Array.isArray(data.visas)) {
    const filtered = (currentContinent === 'all')
      ? data.visas
      : data.visas.filter(v => !v.continent || v.continent === currentContinent);
    elements.visasGrid.innerHTML = filtered.map(visa => 
      createVisaCard(visa, data)
    ).join('');
    updateContinentStatus();
  } else if (elements.visasGrid) {
    console.debug('Visas data missing');
  }
  
  // Add event listeners to ticket buttons
  document.querySelectorAll('.ticket-cta').forEach(btn => {
    btn.addEventListener('click', handleTicketBooking);
  });
  console.debug('[GlobalGate] renderTickets() done', {
    domestic: elements.domesticTickets ? elements.domesticTickets.childElementCount : null,
    international: elements.internationalTickets ? elements.internationalTickets.childElementCount : null,
    visas: elements.visasGrid ? elements.visasGrid.childElementCount : null
  });
};

const createTicketCard = (ticket, data) => {
  const tax = ticket.base * (ticket.taxPercent / 100);
  const total = ticket.base + tax + ticket.fee;
  
  return `
    <div class="ticket-card loading">
      <div class="ticket-header">
        <div>
          <div class="ticket-route">${ticket.route}</div>
          <div class="ticket-class">${ticket.class}</div>
        </div>
        <div class="price-badge">${formatCurrency(total, currentLang)}</div>
      </div>
      <button class="ticket-cta" data-route="${ticket.route}" data-price="${total}">
        ${data.pricing.bookNow}
      </button>
    </div>
  `;
};

// Visa Card Rendering
const createVisaCard = (visa, data) => {
  const tax = visa.base * (visa.taxPercent / 100);
  const total = visa.base + tax + visa.fee;
  
  return `
    <div class="ticket-card loading">
      <div class="ticket-header">
        <div>
          <div class="ticket-route">${visa.name}</div>
          <div class="ticket-class">${visa.type}</div>
        </div>
        <div class="price-badge">${formatCurrency(total, currentLang)}</div>
      </div>
      <button class="ticket-cta" data-route="${visa.name}" data-price="${total}">
        ${data.pricing.bookNow}
      </button>
    </div>
  `;
};

// Office Rendering
const renderOffices = () => {
  const data = LANG[currentLang];
  if (!elements.officesGrid) return;
  elements.officesGrid.innerHTML = data.offices.map(office => `
    <div class="office-card loading">
      <div class="office-city">${office.city}</div>
      <div class="office-address">${office.address}</div>
      <div class="office-phone">${office.phone}</div>
    </div>
  `).join('');
};

// Event Handlers
const handleLanguageSwitch = (e) => {
  const lang = e.target.dataset.lang;
  if (lang && lang !== currentLang) {
    console.debug('[GlobalGate] language button clicked', { to: lang });
    updateLanguage(lang);
  }
};

const handleMobileToggle = () => {
  elements.navMenu.classList.toggle('active');
  elements.mobileToggle.classList.toggle('active');
};

const handleMotionToggle = () => {
  motionEnabled = !motionEnabled;
  document.body.classList.toggle('motion-disabled', !motionEnabled);
  localStorage.setItem('globalgate-motion', motionEnabled);
  
  // Update motion background visibility
  elements.motionBackground.style.display = motionEnabled ? 'block' : 'none';
};

const handleNavClick = (e) => {
  if (e.target.classList.contains('nav-link')) {
    // Close mobile menu
    elements.navMenu.classList.remove('active');
    elements.mobileToggle.classList.remove('active');
    
    // Smooth scroll to section
    const targetId = e.target.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
};

const handleTicketBooking = (e) => {
  const route = e.target.dataset.route;
  const price = e.target.dataset.price;
  
  // Simulate booking process
  const bookingData = {
    route,
    price,
    timestamp: new Date().toISOString(),
    language: currentLang
  };
  
  console.log('Booking initiated:', bookingData);
  
  // Show success message (in a real app, this would redirect to booking page)
  alert(`Booking initiated for ${route} - ${formatCurrency(price, currentLang)}`);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  const formData = new FormData(elements.contactForm);
  const data = Object.fromEntries(formData.entries());
  
  // Validate form
  if (!validateForm(data)) {
    return;
  }
  
  // Prepare email content
  const emailSubject = encodeURIComponent(`GlobalGate Contact: ${data.subject}`);
  const emailBody = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Preferred Language: ${data.language}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from GlobalGate Contact Form
  `);
  
  // Store email data for modal
  elements.openEmail.onclick = () => {
    window.location.href = `mailto:info@globalgate.com?subject=${emailSubject}&body=${emailBody}`;
    closeModal();
  };
  
  // Show success modal
  showModal();
  
  // Reset form
  elements.contactForm.reset();
};

const validateForm = (data) => {
  const errors = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.subject.trim()) {
    errors.push('Subject is required');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  }
  
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return false;
  }
  
  return true;
};

const showModal = () => {
  elements.successModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  elements.successModal.classList.remove('active');
  document.body.style.overflow = '';
};

const handleScroll = debounce(() => {
  const scrolled = window.scrollY > 50;
  elements.navbar.style.background = scrolled 
    ? 'rgba(255, 255, 255, 0.98)' 
    : 'rgba(255, 255, 255, 0.95)';
}, 10);

// Animation Observers
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loading');
        setTimeout(() => {
          entry.target.classList.remove('loading');
        }, 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all sections and cards
  document.querySelectorAll('section, .ticket-card, .office-card').forEach(el => {
    observer.observe(el);
  });
};

// Keyboard Navigation
const handleKeyboardNavigation = (e) => {
  // ESC key closes modal and mobile menu
  if (e.key === 'Escape') {
    closeModal();
    elements.navMenu.classList.remove('active');
    elements.mobileToggle.classList.remove('active');
  }
  
  // Enter key on language buttons
  if (e.key === 'Enter' && e.target.classList.contains('lang-btn')) {
    handleLanguageSwitch(e);
  }
};

// Initialize Application
const init = () => {
  // Load saved preferences
  const savedLangRaw = localStorage.getItem('globalgate-lang');
  const savedContinent = localStorage.getItem('globalgate-continent');
  const savedLang = LANG[savedLangRaw] ? savedLangRaw : 'en';
  const savedMotion = localStorage.getItem('globalgate-motion');
  console.debug('[GlobalGate] init()', { savedLang, savedMotion });
  
  if (savedMotion !== null) {
    motionEnabled = savedMotion === 'true';
  }

  if (savedContinent) {
    currentContinent = savedContinent;
  }
  
  // Apply motion preference
  if (!motionEnabled) {
    document.body.classList.add('motion-disabled');
    elements.motionBackground.style.display = 'none';
  }
  
  // Set initial language
  updateLanguage(savedLang);

  // Initialize continent buttons
  if (elements.continentButtons && elements.continentButtons.length) {
    elements.continentButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.continent === currentContinent);
      btn.addEventListener('click', () => {
        const sel = btn.dataset.continent;
        if (!sel || sel === currentContinent) return;
        currentContinent = sel;
        localStorage.setItem('globalgate-continent', currentContinent);
        elements.continentButtons.forEach(b => b.classList.toggle('active', b === btn));
        // Re-render visas only
        renderTickets();
        updateContinentStatus();
      });
    });
    updateContinentStatus();
  }
  
  // Event Listeners
  elements.langButtons.forEach(btn => {
    btn.addEventListener('click', handleLanguageSwitch);
  });
  
  if (elements.mobileToggle) {
    elements.mobileToggle.addEventListener('click', handleMobileToggle);
  }
  if (elements.motionToggle) {
    elements.motionToggle.addEventListener('click', handleMotionToggle);
  }
  if (elements.navMenu) {
    elements.navMenu.addEventListener('click', handleNavClick);
  }
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
  }
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  if (elements.successModal) {
    elements.successModal.addEventListener('click', (e) => {
      if (e.target === elements.successModal) {
        closeModal();
      }
    });
  }
  
  // Global event listeners
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('keydown', handleKeyboardNavigation);
  
  // Initialize animations
  observeElements();
  
  // Handle reduced motion preference changes
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches && motionEnabled) {
      handleMotionToggle();
    }
  });
  
  console.log('GlobalGate website initialized successfully');
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential external use
window.GlobalGate = {
  updateLanguage,
  getCurrentLanguage: () => currentLang,
  toggleMotion: handleMotionToggle,
  isMotionEnabled: () => motionEnabled
};
