// Scalable Dynamic Services Database
const servicesData = [
    {
        id: "pan-new",
        title: "PAN Card (New / Correction)",
        category: "pan",
        desc: "New NSDL/UTI PAN card application, details update, and instant e-PAN reprint.",
        docs: ["Aadhaar Card", "Mobile Number", "2 Passport Photos"],
        govtFee: "₹107",
        centerFee: "₹100",
        timeline: "7 - 15 Days"
    },
    {
        id: "aadhaar-update",
        title: "Aadhaar Demographic Update",
        category: "aadhaar",
        desc: "Address update, mobile linking guidance, and PVC Aadhaar card order.",
        docs: ["Proof of Address (Ration Card/Voter ID)", "Aadhaar Number", "Linked Mobile"],
        govtFee: "₹50",
        centerFee: "₹50",
        timeline: "3 - 7 Days"
    },
    {
        id: "income-cert",
        title: "Income Certificate (Aavak Nu Pramanpatra)",
        category: "govt",
        desc: "State Revenue Department Income Certificate application for scholarships/schemes.",
        docs: ["Ration Card", "Property Tax Receipt / Light Bill", "Self Declaration Form"],
        govtFee: "₹30",
        centerFee: "₹120",
        timeline: "7 Days"
    },
    {
        id: "caste-cert",
        title: "Caste / Domicile Certificate",
        category: "govt",
        desc: "OBC / SC / ST / EWS certification for government admissions and jobs.",
        docs: ["School Leaving Cert", "Father's ID / Caste Proof", "Aadhaar Card"],
        govtFee: "₹30",
        centerFee: "₹120",
        timeline: "7 - 10 Days"
    },
    {
        id: "jeevan-pramaan",
        title: "Jeevan Pramaan (Life Certificate)",
        category: "banking",
        desc: "Digital biometric Life Certificate submission for defense & civil pensioners.",
        docs: ["PPO Number", "Aadhaar Card", "Bank Passbook"],
        govtFee: "₹0",
        centerFee: "₹100",
        timeline: "Immediate"
    },
    {
        id: "job-forms",
        title: "Govt Recruitment Exam Forms",
        category: "education",
        desc: "Online form filling for SSC, Railway, Banking, Defense, and State Exams.",
        docs: ["Educational Marksheets", "Passport Photo & Signature", "Caste Certificate"],
        govtFee: "As per Govt Rules",
        centerFee: "₹100",
        timeline: "Immediate"
    },
    {
        id: "ration-card",
        title: "Ration Card Services",
        category: "govt",
        desc: "New Ration Card, member addition, deletion, and split ration card.",
        docs: ["Aadhaar Card of all members", "Electricity Bill", "Income Proof"],
        govtFee: "₹50",
        centerFee: "₹100",
        timeline: "15 Days"
    },
    {
        id: "voter-id",
        title: "Voter ID Card (New & Correction)",
        category: "govt",
        desc: "New Voter ID registration (Form 6), address change, and EPIC print.",
        docs: ["Aadhaar Card", "Passport Photo", "Age Proof"],
        govtFee: "₹0",
        centerFee: "₹80",
        timeline: "15 - 30 Days"
    },
    {
        id: "passport-apply",
        title: "Fresh / Renewal Passport",
        category: "govt",
        desc: "Online appointment booking, application filing, and document check.",
        docs: ["Aadhaar Card", "10th Marksheet", "Bank Passbook"],
        govtFee: "₹1,500",
        centerFee: "₹300",
        timeline: "7 - 20 Days"
    },
    {
        id: "ayushman-card",
        title: "Ayushman Bharat Card",
        category: "govt",
        desc: "Health insurance card print & eligibility check for ₹5 Lakh free treatment.",
        docs: ["Ration Card", "Aadhaar Card", "Mobile Number"],
        govtFee: "₹0",
        centerFee: "₹50",
        timeline: "Immediate"
    },
    {
        id: "pm-kisan",
        title: "PM-Kisan Samman Nidhi e-KYC",
        category: "banking",
        desc: "Biometric e-KYC & land seeding update for farmer installments.",
        docs: ["Aadhaar Card", "Khatoni / 7-12 Certificate", "Bank Passbook"],
        govtFee: "₹15",
        centerFee: "₹50",
        timeline: "Immediate"
    },
    {
        id: "driving-license",
        title: "Learner / Driving License",
        category: "govt",
        desc: "Sarathi RTO online application, test slot booking, and DL renewal.",
        docs: ["Aadhaar Card", "Blood Group Report", "Passport Photo"],
        govtFee: "As per RTO",
        centerFee: "₹200",
        timeline: "7 - 15 Days"
    }
];

// Multi-Language Translations Engine (Hindi Default)
const i18nData = {
    hi: {
        page_title: "Shree Krishna CSC - Jan Seva & Digital Services",
        brand_name: "Shree Krishna CSC Center",
        brand_tagline: "Jan Seva & Digital Services Hub",
        nav_home: "होम",
        nav_about: "हमारे बारे में",
        nav_services: "सेवाएं",
        nav_reviews: "रिव्यूज",
        nav_faq: "सवाल-जवाब",
        nav_contact: "संपर्क करें",
        hero_badge: "तेज़ और भरोसेमंद सेवा",
        hero_title: "सरकारी योजनाएं और डिजिटल काम एक ही छत के नीचे",
        hero_desc: "आधार, पैन कार्ड, आय/जाति प्रमाण पत्र, बैंकिंग, पेंशन और सभी ऑनलाइन फॉर्म बिना किसी परेशानी के भरवाएं।",
        btn_our_services: "हमारी सेवाएं",
        btn_whatsapp: "व्हाट्सएप पर बात करें",
        connect_with_us: "सोशल मीडिया पर जुड़ें:",
        info_loc_title: "हमारा पता",
        info_loc_desc: "मेन मार्केट, बस स्टेशन के पास, गुजरात",
        info_time_title: "खुलने का समय",
        info_time_desc: "सोम - शनि: सुबह 9:00 से शाम 8:00 तक",
        info_phone_title: "डायरेक्ट हेल्पलाइन",
        about_title: "श्री कृष्णा सीएससी सेंटर के बारे में",
        about_subtitle: "5+ सालों से आपकी सेवा में समर्पित",
        about_desc: "Shree Krishna CSC Center नागरिकों को बिना किसी परेशानी के सभी सरकारी और डिजिटल सेवाएं देने के लिए प्रतिबद्ध है।",
        about_bullet1: "100% पारदर्शी सरकारी शुल्क",
        about_bullet2: "अनुभवी और प्रशिक्षित स्टाफ",
        about_bullet3: "तेज़ आवेदन प्रक्रिया",
        spec_title: "हमारी खासियत",
        spec_desc: "सरकारी योजनाओं के कठिन फॉर्म्स और डॉक्यूमेंटेशन को हम आसान बनाते हैं।",
        stat_happy: "संतुष्ट ग्राहक",
        stat_services: "उपलब्ध सेवाएं",
        services_title: "हमारी प्रमुख सेवाएं",
        services_subtitle: "कार्ड पर क्लिक करके ज़रूरी दस्तावेज देखें।",
        search_ph: "सेवा खोजें (जैसे: PAN, Aadhaar, Caste...)",
        cat_all: "सभी सेवाएं",
        cat_aadhaar: "आधार",
        cat_pan: "पैन & टैक्स",
        cat_govt: "सरकारी प्रमाण पत्र",
        cat_banking: "बैंकिंग & पेंशन",
        cat_education: "नौकरी & परीक्षा",
        hiw_title: "काम कैसे होता है?",
        hiw_subtitle: "4 आसान चरणों में अपना काम करवाएं",
        hiw_step1_t: "संपर्क करें",
        hiw_step1_d: "सेंटर पर आएं या व्हाट्सएप करें।",
        hiw_step2_t: "डॉक्यूमेंट दें",
        hiw_step2_d: "जरूरी दस्तावेज़ जमा करें।",
        hiw_step3_t: "फॉर्म प्रोसेसिंग",
        hiw_step3_d: "फॉर्म ऑनलाइन भरा जाएगा।",
        hiw_step4_t: "काम पूरा",
        hiw_step4_d: "रसीद और डॉक्यूमेंट प्राप्त करें।",
        reviews_title: "ग्राहकों के अनुभव",
        reviews_subtitle: "स्थानीय लोगों की वास्तविक राय (हर 50 सेकंड में अपडेट)",
        faq_title: "अक्सर पूछे जाने वाले सवाल",
        faq_q1: "सेंटर के खुलने का समय क्या है?",
        faq_a1: "सोमवार से शनिवार: सुबह 9:00 बजे से शाम 8:00 बजे तक। रविवार बंद रहता है।",
        faq_q2: "क्या व्हाट्सएप पर डॉक्यूमेंट भेज सकते हैं?",
        faq_a2: "हां, आप सत्यापन और पूछताछ के लिए व्हाट्सएप कर सकते हैं।",
        faq_q3: "भुगतान के कौन-कौन से विकल्प उपलब्ध हैं?",
        faq_a3: "हम नकद, गूगल पे, फोनपे, पेटीएम और यूपीआई के माध्यम से भुगतान स्वीकार करते हैं।",
        faq_q4: "फॉर्म भरने के बाद आवेदन की स्थिति कैसे जानें?",
        faq_a4: "फॉर्म जमा करने के बाद आपको एक आवेदन संदर्भ संख्या/रसीद दी जाती है। आप व्हाट्सऐप पर संदेश भेजकर भी अपने आवेदन की स्थिति की जानकारी प्राप्त कर सकते हैं।",
        contact_title: "संपर्क और लोकेशन",
        contact_address: "दुकान नं 12, शॉपिंग सेंटर, मेन मार्केट, गुजरात - 380001",
        contact_timing: "सोम-शनि: सुबह 9:00 से शाम 8:00",
        btn_directions: "लोकेशन देखें",
        footer_about: "आपका भरोसेमंद डिजिटल पार्टनर। तेज, पारदर्शी और सटीक सेवाएं।",
        footer_quick_links: "क्विक लिंक्स",
        footer_top_services: "प्रमुख सेवाएं",
        footer_support: "मदद और सपोर्ट"
    },
    en: {
        page_title: "Shree Krishna CSC - Jan Seva & Digital Services",
        brand_name: "Shree Krishna CSC Center",
        brand_tagline: "Jan Seva & Digital Services Hub",
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_reviews: "Reviews",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_badge: "Fast & Reliable Service",
        hero_title: "Sarkari Yojana & Digital Work Completed Under One Roof",
        hero_desc: "Aadhaar, PAN Card, Income/Caste Certificates, Banking, Pension, and all Online Forms applied easily.",
        btn_our_services: "Our Services",
        btn_whatsapp: "Chat on WhatsApp",
        connect_with_us: "Connect With Us:",
        info_loc_title: "Our Location",
        info_loc_desc: "Main Market, Near Bus Station, Gujarat",
        info_time_title: "Opening Hours",
        info_time_desc: "Mon - Sat: 9:00 AM to 8:00 PM",
        info_phone_title: "Direct Helpline",
        about_title: "About Shree Krishna CSC",
        about_subtitle: "Serving You For Over 5+ Years",
        about_desc: "Shree Krishna CSC Center is committed to providing seamless government and digital services to local citizens.",
        about_bullet1: "100% Genuine Govt Fee Transparency",
        about_bullet2: "Experienced & Trained Staff",
        about_bullet3: "Fast Application Processing",
        spec_title: "Our Specialty",
        spec_desc: "We simplify complex government documentation and scheme application forms.",
        stat_happy: "Happy Customers",
        stat_services: "Active Services",
        services_title: "Our Comprehensive Services",
        services_subtitle: "Click card to view required documents animation.",
        search_ph: "Search service (e.g. PAN, Aadhaar...)",
        cat_all: "All Services",
        cat_aadhaar: "Aadhaar",
        cat_pan: "PAN & Tax",
        cat_govt: "Govt & Certs",
        cat_banking: "Banking & Pension",
        cat_education: "Jobs & Exams",
        hiw_title: "How It Works",
        hiw_subtitle: "Get your work done in 4 easy steps",
        hiw_step1_t: "Visit / WhatsApp",
        hiw_step1_d: "Visit center or contact via WhatsApp.",
        hiw_step2_t: "Submit Docs",
        hiw_step2_d: "Submit required documents for verification.",
        hiw_step3_t: "Form Processing",
        hiw_step3_d: "Our staff will fill the form online.",
        hiw_step4_t: "Work Complete",
        hiw_step4_d: "Receive receipt and final document.",
        reviews_title: "Customer Reviews",
        reviews_subtitle: "Real feedback from local citizens (Auto-updates every 50 seconds)",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What are the center timings?",
        faq_a1: "Monday to Saturday: 9:00 AM to 8:00 PM. Closed on Sundays.",
        faq_q2: "Can I send documents on WhatsApp?",
        faq_a2: "Yes, you can send documents for pre-verification on WhatsApp.",
        faq_q3: "What payment options are available?",
        faq_a3: "We accept Cash, Google Pay, PhonePe, Paytm, and UPI Payments.",
        faq_q4: "How to track status after form filling?",
        faq_a4: "After submission, an acknowledgment slip is provided. You can also message on WhatsApp.",
        contact_title: "Contact Us & Location",
        contact_address: "Shop No. 12, Shopping Centre, Main Market, Gujarat - 380001",
        contact_timing: "Mon-Sat: 9:00 AM - 8:00 PM",
        btn_directions: "Get Directions",
        footer_about: "Your trusted digital partner. Fast, transparent, and reliable services.",
        footer_quick_links: "Quick Links",
        footer_top_services: "Top Services",
        footer_support: "Help & Support"
    },
    gu: {
        page_title: "શ્રી કૃષ્ણા CSC - જન સેવા અને ડિજિટલ સેવાઓ",
        brand_name: "Shree Krishna CSC Center",
        brand_tagline: "જન સેવા અને ડિજિટલ સર્વિસ હબ",
        nav_home: "હોમ",
        nav_about: "અમારા વિશે",
        nav_services: "સેવાઓ",
        nav_reviews: "રિવ્યુ",
        nav_faq: "પ્રશ્નોત્તરી",
        nav_contact: "સંપર્ક કરો",
        hero_badge: "ઝડપી અને વિશ્વસનીય સેવા",
        hero_title: "સરકારી યોજનાઓ અને ડિજિટલ કામ એક જ સ્થળે",
        hero_desc: "આધાર, પાન કાર્ડ, આવક/જાતિના દાખલા, બેંકિંગ, પેન્શન અને ઓનલાઈન ફોર્મ સરળતાથી ભરાવો.",
        btn_our_services: "અમારી સેવાઓ",
        btn_whatsapp: "વોટ્સએપ પર વાત કરો",
        connect_with_us: "અમારી સાથે જોડાઓ:",
        info_loc_title: "અમારું સરનામું",
        info_loc_desc: "મેઇન માર્કેટ, બસ સ્ટેશન પાસે, ગુજરાત",
        info_time_title: "ખુલવાનો સમય",
        info_time_desc: "સોમ - શનિ: સવારે 9:00 થી સાંજે 8:00",
        info_phone_title: "ડાયરેક્ટ હેલ્પલાઇન",
        about_title: "About Shree Krishna CSC",
        about_subtitle: "5+ વર્ષોથી આપની સેવામાં કાર્યરત",
        about_desc: "Shree Krishna CSC Center નાગરિકોને સરળતાથી તમામ સરકારી અને ડિજિટલ સેવાઓ આપવા માટે કટિબદ્ધ છે.",
        about_bullet1: "100% પારદર્શક સરકારી ફી",
        about_bullet2: "અનુભવી અને તાલીમબદ્ધ સ્ટાફ",
        about_bullet3: "ઝડપી ઓનલાઈન પ્રોસેસિંગ",
        spec_title: "અમારી વિશેષતા",
        spec_desc: "સરકારી યોજનાઓના અઘરા ફોર્મ્સ અને ડોક્યુમેન્ટેશનને સરળ બનાવીએ છીએ.",
        stat_happy: "સંતુષ્ટ ગ્રાહકો",
        stat_services: "ઉપલબ્ધ સેવાઓ",
        services_title: "અમારી મુખ્ય સેવાઓ",
        services_subtitle: "જરૂરી ડોક્યુમેન્ટ જોવા માટે કાર્ડ પર ક્લિક કરો.",
        search_ph: "શોધો (જેમ કે: પાન, આધાર, દાખલો...)",
        cat_all: "તમામ સેવાઓ",
        cat_aadhaar: "આધાર",
        cat_pan: "પાન અને ટેક્સ",
        cat_govt: "સરકારી દાખલા",
        cat_banking: "બેંકિંગ & પેન્શન",
        cat_education: "નોકરી & પરીક્ષા",
        hiw_title: "કેવી રીતે કામ કરે છે?",
        hiw_subtitle: "4 સરળ તબક્કામાં કામ કરાવો",
        hiw_step1_t: "સંપર્ક કરો",
        hiw_step1_d: "સેન્ટર પર આવો અથવા વોટ્સએપ કરો.",
        hiw_step2_t: "ડોક્યુમેન્ટ આપો",
        hiw_step2_d: "જરૂરી કાગળો જમા કરાવો.",
        hiw_step3_t: "ફોર્મ પ્રોસેસિંગ",
        hiw_step3_d: "ઓનલાઈન ફોર્મ સબમિટ થશે.",
        hiw_step4_t: "કામ પૂર્ણ",
        hiw_step4_d: "પહોંચ અને ડોક્યુમેન્ટ મેળવો.",
        reviews_title: "ગ્રાહકોના અનુભવ",
        reviews_subtitle: "સ્થાનિક લોકોના રિવ્યુ (દર 50 સેકન્ડે અપડેટ)",
        faq_title: "વારંવાર પૂછાતા પ્રશ્નો",
        faq_q1: "સેન્ટરનો સમય શું છે?",
        faq_a1: "સોમવારથી શનિવાર: સવારે 9:00 થી સાંજે 8:00 સુધી. રવિવારે બંધ રહેશે.",
        faq_q2: "શું વોટ્સએપ પર કાગળો મોકલી શકાય?",
        faq_a2: "હા, ચકાસણી અને પૂછપરછ માટે તમે વોટ્સએપ કરી શકો છો.",
        faq_q3: "પેમેન્ટ માટે કયા વિકલ્પો છે?",
        faq_a3: "અમે કેશ, ગુગલ પે, ફોનપે, પેટીએમ અને UPI પેમેન્ટ સ્વીકારીએ છીએ.",
        faq_q4: "ફોર્મ ભર્યા પછી સ્ટેટસ કેવી રીતે ચેક કરવું?",
        faq_a4: "ફોર્મ સબમિટ થયા પછી પહોંચ આપવામાં આવે છે. વોટ્સએપ પર પણ જાણી શકો છો.",
        contact_title: "સંપર્ક અને લોકેશન",
        contact_address: "દુકાન નં. 12, શોપિંગ સેન્ટર, મેઇન માર્કેટ, ગુજરાત - 380001",
        contact_timing: "સોम-शनि: સવારે 9:00 થી સાંજે 8:00",
        btn_directions: "લોકેશન જુઓ",
        footer_about: "તમારું વિશ્વસનીય ડિજિટલ પાર્ટનર. ઝડપી અને પારદર્શક સેવાઓ.",
        footer_quick_links: "ઝડપી લિંક્સ",
        footer_top_services: "મુખ્ય સેવાઓ",
        footer_support: "મદદ અને સપોર્ટ"
    }
};

// State Management
let currentLang = 'hi';
let currentPage = 1;
const itemsPerPage = 6;
let filteredServices = [...servicesData];

// Reviews Dataset Pools
const reviewPool = [
    [
        { name: "Rajesh Patel", text: "Mera Income Certificate bas 4 din mein ban gaya. Staff kafi helpful hai aur documents easily verify kar diye.", rating: 5 },
        { name: "Suresh Parmar", text: "PAN card correction ke liye gaya tha. Exact guidance di aur WhatsApp par status bhi update kar diya.", rating: 5 },
        { name: "Meena Shah", text: "Fast service aur clear government charges. Baar-baar chakkar kaatne ki pareshani nahi hui.", rating: 5 }
    ],
    [
        { name: "Amit Trivedi", text: "Aadhaar card address update bahut hi jaldi ho gaya. Shree Krishna CSC Center ki service sabse acchi hai.", rating: 5 },
        { name: "Pooja Sharma", text: "Scholarship form fill karwaya tha, bina kisi mistake ke time par submit ho gaya. Highly recommended!", rating: 5 },
        { name: "Vikas Verma", text: "Jeevan Pramaan Patra digital tarike se biometric se turant ban gaya. Bahut hi smooth experience.", rating: 5 }
    ],
    [
        { name: "Ramesh Bhai", text: "Sarkari yojnao ki sahi jankari milti hai yahan. Unka behaviour aur kaam dono top notch hain.", rating: 5 },
        { name: "Neha Joshi", text: "Passport application aur documentation consultation bahut ache se handle kiya. Thank you!", rating: 5 },
        { name: "Kiran Rabari", text: "Caste Certificate easily mil gaya bina kisi hassle ke. Direct helpline and WhatsApp update super fast hai.", rating: 5 }
    ]
];

let currentReviewIndex = 0;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupSearchAndFilters();
    renderPaginatedServices();
    renderReviews();
    startReviewsLoop();
    setupFAQToggle();
    changeLanguage('hi');
});

// Dynamic Multi-Language Change Function
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-selector').forEach(sel => sel.value = lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            el.innerText = i18nData[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (i18nData[lang] && i18nData[lang][key]) {
            el.placeholder = i18nData[lang][key];
        }
    });
}

// Mobile Navigation Toggle
function setupMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.classList.toggle("hidden");

        if (mobileMenu.classList.contains("hidden")) {
            menuIcon.classList.replace("fa-xmark", "fa-bars");
        } else {
            menuIcon.classList.replace("fa-bars", "fa-xmark");
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// Search & Category Filtering
function setupSearchAndFilters() {
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");

    function applyFilterAndSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector(".filter-btn.active")?.dataset.category || "all";

        filteredServices = servicesData.filter(service => {
            const matchesCategory = activeCategory === "all" || service.category === activeCategory;
            const matchesQuery = service.title.toLowerCase().includes(query) || 
                                 service.desc.toLowerCase().includes(query) ||
                                 service.docs.some(d => d.toLowerCase().includes(query));
            return matchesCategory && matchesQuery;
        });

        currentPage = 1;
        renderPaginatedServices();
    }

    if (searchInput) {
        searchInput.addEventListener("input", applyFilterAndSearch);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyFilterAndSearch();
        });
    });
}

// Render Services Grid & Pagination
function renderPaginatedServices() {
    const grid = document.getElementById("services-grid");
    const pageInfo = document.getElementById("page-info");
    const pageButtons = document.getElementById("page-buttons");

    if (!grid) return;
    grid.innerHTML = "";

    if (filteredServices.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-xl border border-gray-200">
                <i class="fa-solid fa-folder-open text-4xl text-gray-300 mb-3"></i>
                <p class="text-gray-600 text-sm font-semibold">Koi matching service nahi mili.</p>
                <p class="text-xs text-gray-400 mt-1">Kripya koi doosra search term try karein ya WhatsApp par direct contact karein.</p>
            </div>
        `;
        if (pageInfo) pageInfo.innerText = "No results found";
        if (pageButtons) pageButtons.innerHTML = "";
        return;
    }

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = filteredServices.slice(startIdx, endIdx);

    currentItems.forEach(service => {
        const encodedMsg = encodeURIComponent(`Hello, mujhe [${service.title}] service ke baare mein information chahiye.`);
        const totalCharge = service.govtFee === "As per Govt Rules" || service.govtFee === "As per RTO" 
            ? "Varies as per rules" 
            : `${service.govtFee} + ${service.centerFee}`;

        const cardContainer = document.createElement("div");
        cardContainer.className = "flip-card min-h-[320px]";

        cardContainer.innerHTML = `
            <div class="flip-card-inner">
                <!-- Card Front Side -->
                <div class="flip-card-front bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">${service.category}</span>
                            <span class="text-xs text-gray-400 font-medium"><i class="fa-solid fa-clock mr-1"></i>${service.timeline}</span>
                        </div>
                        <h3 class="text-base font-bold text-gray-800 mb-2">${service.title}</h3>
                        <p class="text-xs text-gray-600 mb-4">${service.desc}</p>
                        
                        <div class="bg-blue-50/60 p-3 rounded-lg border border-blue-100/50 mb-4 text-xs">
                            <p class="text-gray-500">Est. Total: <strong class="text-blue-900">${totalCharge}</strong></p>
                        </div>
                    </div>

                    <div>
                        <button type="button" class="flip-btn w-full mb-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold py-2 px-3 rounded-lg flex justify-center items-center transition">
                            <i class="fa-solid fa-rotate mr-2"></i> Required Documents
                        </button>
                        <a href="https://wa.me/919876543210?text=${encodedMsg}" target="_blank" rel="noopener noreferrer" class="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex justify-center items-center transition">
                            <i class="fa-brands fa-whatsapp mr-2 text-sm"></i> Enquire Now
                        </a>
                    </div>
                </div>

                <!-- Card Back Side -->
                <div class="flip-card-back bg-blue-900 text-white rounded-xl p-6 shadow-md flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <h4 class="text-sm font-bold text-yellow-400"><i class="fa-solid fa-file-lines mr-2"></i>Required Documents</h4>
                            <button type="button" class="unflip-btn text-white/80 hover:text-white text-xs bg-white/10 p-1.5 rounded-full">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <p class="text-[11px] text-blue-200 mb-3">${service.title} ke liae ye documents tayar rakhein:</p>
                        <ul class="text-xs space-y-2 mb-4">
                            ${service.docs.map(doc => `<li class="flex items-center"><i class="fa-solid fa-check text-yellow-400 mr-2 text-[10px]"></i> ${doc}</li>`).join('')}
                        </ul>
                    </div>

                    <div>
                        <button type="button" class="unflip-btn w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-xs font-bold py-2 px-3 rounded-lg flex justify-center items-center transition">
                            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Details
                        </button>
                    </div>
                </div>
            </div>
        `;

        const flipBtns = cardContainer.querySelectorAll(".flip-btn, .unflip-btn");
        flipBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                cardContainer.classList.toggle("flipped");
            });
        });

        grid.appendChild(cardContainer);
    });

    if (pageInfo) {
        pageInfo.innerText = `Showing ${startIdx + 1} - ${Math.min(endIdx, filteredServices.length)} of ${filteredServices.length} Services`;
    }

    if (pageButtons) {
        pageButtons.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.className = `page-btn px-3 py-1.5 rounded-lg text-xs font-medium transition ${i === currentPage ? 'active' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`;
            btn.innerText = i;
            btn.addEventListener("click", () => {
                currentPage = i;
                renderPaginatedServices();
                document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
            });
            pageButtons.appendChild(btn);
        }
    }
}

// Render Reviews Section
function renderReviews() {
    const container = document.getElementById("reviews-container");
    if (!container) return;

    const currentSet = reviewPool[currentReviewIndex];
    container.innerHTML = "";

    currentSet.forEach(review => {
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded-xl shadow-md border border-gray-100 fade-in flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="flex text-yellow-400 text-xs mb-3">
                    ${Array(review.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
                </div>
                <p class="text-xs text-gray-600 italic mb-4 leading-relaxed">"${review.text}"</p>
            </div>
            <div class="font-bold text-gray-800 text-xs border-t border-gray-100 pt-3 flex items-center">
                <div class="w-7 h-7 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold mr-2">
                    ${review.name.charAt(0)}
                </div>
                - ${review.name}
            </div>
        `;
        container.appendChild(card);
    });
}

// Auto Cycle Reviews Loop Every 10 Seconds
function startReviewsLoop() {
    setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviewPool.length;
        renderReviews();
    }, 10000);
}

// Accessible FAQ Toggle Accordion
function setupFAQToggle() {
    const faqBtns = document.querySelectorAll(".faq-btn");

    faqBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector("i");
            const isOpen = !answer.classList.contains("hidden");

            document.querySelectorAll("#faq-accordion > div > div").forEach(el => el.classList.add("hidden"));
            document.querySelectorAll("#faq-accordion .fa-chevron-down").forEach(i => i.classList.remove("rotate-180"));

            if (!isOpen) {
                answer.classList.remove("hidden");
                icon.classList.add("rotate-180");
            }
        });
    });
}