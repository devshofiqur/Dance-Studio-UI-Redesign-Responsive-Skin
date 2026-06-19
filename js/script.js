/* ============================================================
   RUMPUREE WORLD DANCE STUDIO — script.js
   Features: i18n (EN/BN/ES), sticky nav, mobile menu,
   multi-step form, schedule tabs, scroll animations,
   back-to-top, newsletter, language switcher
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.classes": "Classes",
    "nav.schedule": "Schedule",
    "nav.loyalty": "Dance Royalty",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.cta": "Book Free Trial",

    "hero.eyebrow": "World Dance Studio · Est. 2006",
    "hero.title": "Feel the Music.<br>Master the Floor.",
    "hero.subtitle": "Salsa, Bachata, Argentine Tango, Ballet and Pole Dance — taught by passionate instructors, for every age and every level, since 2006.",
    "hero.cta1": "Book Your Free Class",
    "hero.cta2": "View Schedule",
    "hero.badge1": "Years of Teaching",
    "hero.badge2": "Dance Disciplines",
    "hero.badge3": "All Ages Welcome",

    "form.eyebrow": "Get Started",
    "form.title": "Reserve Your Free Trial Class",
    "form.subtitle": "Three quick steps. No commitment.",
    "form.name": "Full Name",
    "form.phone": "Phone Number",
    "form.email": "Email Address",
    "form.styleLabel": "Which dance style interests you?",
    "form.styleUnsure": "Not sure yet",
    "form.levelLabel": "Your experience level",
    "form.levelBeginner": "Beginner",
    "form.levelIntermediate": "Intermediate",
    "form.levelAdvanced": "Advanced",
    "form.timeLabel": "Preferred class time",
    "form.timeMorning": "Morning",
    "form.timeEvening": "Evening",
    "form.timeWeekend": "Weekend",
    "form.notes": "Anything else we should know? (optional)",
    "form.back": "Back",
    "form.next": "Continue",
    "form.submit": "Reserve My Spot",
    "form.successTitle": "You're on the list!",
    "form.successText": "A member of our team will call you within 24 hours to confirm your free trial class.",

    "about.eyebrow": "Our Story",
    "about.title": "Eighteen Years of Movement, Music & Community",
    "about.p1": "rumPUREE is a premier dance studio based in Bangkok, Thailand, renowned for its inclusive and vibrant community. Established in 2006 by Apple, a Harvard graduate who worked in New York City as a Strategic Facility Planner for an architecture firm and fell in love with dancing, her goal was to create a dance community that is easily accessible to people of all ages and backgrounds. rumPUREE offers a diverse range of dance styles taught by a talented and experienced faculty.",
    "about.p2": "Conveniently located in Bangkok’s central business areas—Asok and Samyan—rumPUREE provides a welcoming space where anyone, regardless of age or experience, can explore and enjoy dance. The studio emphasizes community, connection, and personal growth, making every class not just a lesson, but an opportunity to meet like-minded people, build confidence, and express oneself through movement.",
    "about.p3": "With its inclusive philosophy, expert instructors, and prime locations, rumPUREE has become a premier destination for dancers seeking both high-quality training and a vibrant, supportive community. rumPUREE is truly a dance studio for all.",
    "about.stat1": "Studio Founded",
    "about.stat2": "Dance Styles",
    "about.stat3": "Dancers Trained",

    "classes.eyebrow": "What We Teach",
    "classes.title": "Dance Styles For Every Story",
    "classes.subtitle": "Six distinct programs. One studio. Find the rhythm that's yours.",
    "classes.level.all": "All Levels",
    "classes.level.kids": "Kids & Adults",
    "classes.level.family": "Family Friendly",
    "classes.salsa.title": "Salsa",
    "classes.salsa.desc": "Vibrant footwork and partner connection rooted in Latin rhythm.",
    "classes.bachata.title": "Bachata",
    "classes.bachata.desc": "Sensual, close-hold movement built on connection and musicality.",
    "classes.tango.title": "Argentine Tango",
    "classes.tango.desc": "The elegant embrace and improvised walk of Buenos Aires' milongas.",
    "classes.ballet.title": "Ballet",
    "classes.ballet.desc": "Classical foundation, posture and grace for dancers of any age.",
    "classes.pole.title": "Pole Dance",
    "classes.pole.desc": "Strength, flexibility and confident artistry on and off the pole.",
    "classes.social.title": "Open Floor & Socials",
    "classes.social.desc": "Practice nights and group socials to dance freely with the community.",
    "classes.cta": "View Class Times →",

    "schedule.eyebrow": "Plan Your Week",
    "schedule.title": "Weekly Schedule",
    "schedule.subtitle": "Tap a day to see classes and events. Updated weekly.",

    "promo.eyebrow": "Limited Time",
    "promo.title": "Current Promotions",
    "promo.ribbon1": "New Student",
    "promo.ribbon2": "Couples",
    "promo.ribbon3": "Membership",
    "promo.card1.title": "First Class Free",
    "promo.card1.desc": "Try any style on us — no card, no pressure, just dance.",
    "promo.card2.title": "Bring a Partner, Save 20%",
    "promo.card2.desc": "Sign up together for Bachata or Tango and split the savings.",
    "promo.card3.title": "Annual Pass — 2 Months Free",
    "promo.card3.desc": "Commit for a year and unlock unlimited classes year-round.",

    "loyalty.eyebrow": "Dance Royalty Program",
    "loyalty.title": "Earn Your Crown, Class by Class",
    "loyalty.subtitle": "Every class you take moves you closer to royalty status — and the rewards that come with it.",
    "loyalty.bronze.name": "Bronze Pass",
    "loyalty.bronze.points": "0 – 19 Classes",
    "loyalty.bronze.b1": "1 point per class attended",
    "loyalty.bronze.b2": "Member newsletter & event invites",
    "loyalty.bronze.b3": "Birthday month discount",
    "loyalty.gold.name": "Gold Pass",
    "loyalty.gold.points": "20 – 49 Classes",
    "loyalty.gold.b1": "Everything in Bronze, plus:",
    "loyalty.gold.b2": "Priority booking on socials & workshops",
    "loyalty.gold.b3": "One free guest pass every month",
    "loyalty.gold.b4": "10% off studio merchandise",
    "loyalty.royal.name": "Royal Pass",
    "loyalty.royal.points": "50+ Classes",
    "loyalty.royal.b1": "Everything in Gold, plus:",
    "loyalty.royal.b2": "Free class every birthday month",
    "loyalty.royal.b3": "Invitation to the annual Royalty Gala",
    "loyalty.royal.b4": "Reserved front-row seating at showcases",
    "loyalty.cta": "Join Dance Royalty",

    "testimonials.eyebrow": "From Our Dancers",
    "testimonials.title": "Stories From the Floor",
    "testimonials.t1.quote": "I walked in knowing zero salsa and walked out two years later teaching beginner classes. The instructors genuinely care.",
    "testimonials.t1.role": "Salsa Student, 2 years",
    "testimonials.t2.quote": "My daughter started ballet here at age six. Watching her confidence grow on that floor has been the best part of our week.",
    "testimonials.t2.role": "Parent, Ballet Program",
    "testimonials.t3.quote": "Pole dance here is about strength and artistry, not a gimmick. I've never felt stronger or more at home in a studio.",
    "testimonials.t3.role": "Pole Dance Student",

    "gallery.eyebrow": "Inside The Studio",
    "gallery.title": "Moments From the Floor",

    "contact.eyebrow": "Visit Us",
    "contact.title": "Come Dance With Us",
    "contact.p1": "Drop by for a tour, watch a class from the lobby, or just say hello. New dancers are always welcome on the floor.",
    "contact.addressLabel": "Studio Address",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.hoursLabel": "Studio Hours",
    "contact.hoursValue": "Mon – Sat, 10 AM – 10 PM",
    "contact.newsletterTitle": "Stay In The Loop",
    "contact.newsletterText": "Get class updates, new promotions and event invites straight to your inbox.",
    "contact.newsletterPlaceholder": "Your email address",
    "contact.newsletterButton": "Subscribe",
    "contact.newsletterSuccess": "Thanks — you're subscribed!",

    "footer.tagline": "Teaching the world to dance since 2006.",
    "footer.quickLinks": "Quick Links",
    "footer.programs": "Programs",
    "footer.language": "Language",
    "footer.rights": "All rights reserved.",

    "schedule.days": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  },

  bn: {
    "nav.home": "হোম",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.classes": "ক্লাসেস",
    "nav.schedule": "সময়সূচি",
    "nav.loyalty": "ড্যান্স রয়্যালটি",
    "nav.gallery": "গ্যালারি",
    "nav.contact": "যোগাযোগ",
    "nav.cta": "বিনামূল্যে ট্রায়াল বুক করুন",

    "hero.eyebrow": "ওয়ার্ল্ড ড্যান্স স্টুডিও · প্রতিষ্ঠিত ২০০৬",
    "hero.title": "সংগীত অনুভব করুন।<br>ফ্লোর জয় করুন।",
    "hero.subtitle": "সালসা, বাচাটা, আর্জেন্টাইন ট্যাঙ্গো, ব্যালে এবং পোল ড্যান্স — আবেগী প্রশিক্ষকদের দ্বারা পরিচালিত, সব বয়সের ও সব স্তরের জন্য, ২০০৬ সাল থেকে।",
    "hero.cta1": "বিনামূল্যে ক্লাস বুক করুন",
    "hero.cta2": "সময়সূচি দেখুন",
    "hero.badge1": "বছরের শিক্ষাদান",
    "hero.badge2": "নৃত্য শৈলী",
    "hero.badge3": "সকল বয়স স্বাগত",

    "form.eyebrow": "শুরু করুন",
    "form.title": "আপনার বিনামূল্যে ট্রায়াল ক্লাস সংরক্ষণ করুন",
    "form.subtitle": "মাত্র তিনটি ধাপ। কোনো বাধ্যবাধকতা নেই।",
    "form.name": "পুরো নাম",
    "form.phone": "ফোন নম্বর",
    "form.email": "ইমেইল ঠিকানা",
    "form.styleLabel": "কোন নৃত্য শৈলীতে আপনার আগ্রহ?",
    "form.styleUnsure": "এখনো নিশ্চিত নই",
    "form.levelLabel": "আপনার অভিজ্ঞতার স্তর",
    "form.levelBeginner": "শিক্ষানবিস",
    "form.levelIntermediate": "মাঝারি",
    "form.levelAdvanced": "উন্নত",
    "form.timeLabel": "পছন্দের ক্লাসের সময়",
    "form.timeMorning": "সকাল",
    "form.timeEvening": "সন্ধ্যা",
    "form.timeWeekend": "সাপ্তাহিক ছুটি",
    "form.notes": "অন্য কিছু জানাতে চান? (ঐচ্ছিক)",
    "form.back": "পেছনে",
    "form.next": "পরবর্তী",
    "form.submit": "আমার স্থান সংরক্ষণ করুন",
    "form.successTitle": "আপনি তালিকায় আছেন!",
    "form.successText": "আমাদের দলের একজন সদস্য ২৪ ঘণ্টার মধ্যে আপনার বিনামূল্যে ট্রায়াল ক্লাস নিশ্চিত করতে কল করবেন।",

    "about.eyebrow": "আমাদের গল্প",
    "about.title": "আঠারো বছরের আন্দোলন, সংগীত ও সম্প্রদায়",
    "about.p1": "২০০৬ সালে প্রতিষ্ঠিত, রাম্পুরি ওয়ার্ল্ড ড্যান্স স্টুডিও সব পটভূমির নৃত্যশিল্পীদের জন্য একটি ঘর হয়ে উঠেছে।",
    "about.p2": "আমাদের প্রশিক্ষকরা উষ্ণ ও উৎসাহজনক পরিবেশে সালসা, বাচাটা, আর্জেন্টাইন ট্যাঙ্গো, ব্যালে এবং পোল ড্যান্সে খাঁটি প্রশিক্ষণ দেন।",
    "about.stat1": "স্টুডিও প্রতিষ্ঠিত",
    "about.stat2": "নৃত্য শৈলী",
    "about.stat3": "প্রশিক্ষিত নৃত্যশিল্পী",

    "classes.eyebrow": "আমরা কী শেখাই",
    "classes.title": "প্রতিটি গল্পের জন্য নৃত্য শৈলী",
    "classes.subtitle": "ছয়টি বিশেষ প্রোগ্রাম। একটি স্টুডিও। আপনার ছন্দ খুঁজুন।",
    "classes.level.all": "সব স্তর",
    "classes.level.kids": "শিশু ও বড়",
    "classes.level.family": "পরিবার-বান্ধব",
    "classes.salsa.title": "সালসা",
    "classes.salsa.desc": "লাতিন তালে উজ্জ্বল পদক্ষেপ এবং সঙ্গী সংযোগ।",
    "classes.bachata.title": "বাচাটা",
    "classes.bachata.desc": "সংগীতময়তা ও সংযোগে নির্মিত কাছের অনুভূতিপ্রবণ আন্দোলন।",
    "classes.tango.title": "আর্জেন্টাইন ট্যাঙ্গো",
    "classes.tango.desc": "বুয়েনোস আইরেসের মিলোঙ্গার মার্জিত আলিঙ্গন ও সুপ্রবৃত্তি পদচালনা।",
    "classes.ballet.title": "ব্যালে",
    "classes.ballet.desc": "যেকোনো বয়সের নৃত্যশিল্পীদের জন্য ক্লাসিক্যাল ভিত্তি, ভঙ্গি ও কমনীয়তা।",
    "classes.pole.title": "পোল ড্যান্স",
    "classes.pole.desc": "পোলে এবং বাইরে শক্তি, নমনীয়তা এবং আত্মবিশ্বাসী শিল্পকলা।",
    "classes.social.title": "ওপেন ফ্লোর ও সোশ্যাল",
    "classes.social.desc": "সম্প্রদায়ের সাথে স্বাধীনভাবে নাচার জন্য অনুশীলন রাত ও গ্রুপ সোশ্যাল।",
    "classes.cta": "ক্লাসের সময় দেখুন →",

    "schedule.eyebrow": "আপনার সপ্তাহ পরিকল্পনা করুন",
    "schedule.title": "সাপ্তাহিক সময়সূচি",
    "schedule.subtitle": "ক্লাস ও ইভেন্ট দেখতে একটি দিন ট্যাপ করুন। সাপ্তাহিক আপডেট।",

    "promo.eyebrow": "সীমিত সময়",
    "promo.title": "বর্তমান প্রচার",
    "promo.ribbon1": "নতুন শিক্ষার্থী",
    "promo.ribbon2": "দম্পতি",
    "promo.ribbon3": "সদস্যতা",
    "promo.card1.title": "প্রথম ক্লাস বিনামূল্যে",
    "promo.card1.desc": "আমাদের পক্ষ থেকে যেকোনো শৈলী চেষ্টা করুন — কার্ড নেই, চাপ নেই, শুধু নাচ।",
    "promo.card2.title": "সঙ্গী নিয়ে আসুন, ২০% সাশ্রয়",
    "promo.card2.desc": "বাচাটা বা ট্যাঙ্গোতে একসাথে সাইন আপ করুন এবং সঞ্চয় ভাগ করুন।",
    "promo.card3.title": "বার্ষিক পাস — ২ মাস বিনামূল্যে",
    "promo.card3.desc": "এক বছরের প্রতিশ্রুতি দিন এবং সারা বছর সীমাহীন ক্লাস উপভোগ করুন।",

    "loyalty.eyebrow": "ড্যান্স রয়্যালটি প্রোগ্রাম",
    "loyalty.title": "প্রতিটি ক্লাসে আপনার মুকুট অর্জন করুন",
    "loyalty.subtitle": "প্রতিটি ক্লাস আপনাকে রয়্যালটি স্ট্যাটাসের কাছে নিয়ে যায় — এবং এর সাথে আসা পুরস্কারগুলিও।",
    "loyalty.bronze.name": "ব্রোঞ্জ পাস",
    "loyalty.bronze.points": "০ – ১৯ ক্লাস",
    "loyalty.bronze.b1": "প্রতি ক্লাসে ১ পয়েন্ট",
    "loyalty.bronze.b2": "সদস্য নিউজলেটার ও ইভেন্ট আমন্ত্রণ",
    "loyalty.bronze.b3": "জন্মদিন মাসে ছাড়",
    "loyalty.gold.name": "গোল্ড পাস",
    "loyalty.gold.points": "২০ – ৪৯ ক্লাস",
    "loyalty.gold.b1": "ব্রোঞ্জের সব সুবিধা, এবং:",
    "loyalty.gold.b2": "সোশ্যাল ও ওয়ার্কশপে অগ্রাধিকার বুকিং",
    "loyalty.gold.b3": "প্রতি মাসে একটি বিনামূল্যে গেস্ট পাস",
    "loyalty.gold.b4": "স্টুডিও পণ্যে ১০% ছাড়",
    "loyalty.royal.name": "রয়্যাল পাস",
    "loyalty.royal.points": "৫০+ ক্লাস",
    "loyalty.royal.b1": "গোল্ডের সব সুবিধা, এবং:",
    "loyalty.royal.b2": "জন্মদিন মাসে বিনামূল্যে ক্লাস",
    "loyalty.royal.b3": "বার্ষিক রয়্যালটি গালায় আমন্ত্রণ",
    "loyalty.royal.b4": "শোকেসে সংরক্ষিত সামনের আসন",
    "loyalty.cta": "ড্যান্স রয়্যালটিতে যোগ দিন",

    "testimonials.eyebrow": "আমাদের নৃত্যশিল্পীদের কাছ থেকে",
    "testimonials.title": "ফ্লোর থেকে গল্প",
    "testimonials.t1.quote": "আমি সালসা না জেনে ঢুকেছিলাম এবং দুই বছর পরে বিগিনার ক্লাস পড়িয়ে বেরিয়েছি। প্রশিক্ষকরা সত্যিই যত্নশীল।",
    "testimonials.t1.role": "সালসা শিক্ষার্থী, ২ বছর",
    "testimonials.t2.quote": "আমার মেয়ে ছয় বছর বয়সে এখানে ব্যালে শুরু করেছিল। সেই ফ্লোরে তার আত্মবিশ্বাস বাড়তে দেখা আমাদের সপ্তাহের সেরা অংশ।",
    "testimonials.t2.role": "অভিভাবক, ব্যালে প্রোগ্রাম",
    "testimonials.t3.quote": "এখানে পোল ড্যান্স শক্তি ও শিল্পকলা সম্পর্কে, কোনো চমক নয়। আমি কখনো এত শক্তিশালী বা স্টুডিওতে এতটা ঘরে মনে করিনি।",
    "testimonials.t3.role": "পোল ড্যান্স শিক্ষার্থী",

    "gallery.eyebrow": "স্টুডিওর ভেতরে",
    "gallery.title": "ফ্লোর থেকে মুহূর্ত",

    "contact.eyebrow": "আমাদের পরিদর্শন করুন",
    "contact.title": "আমাদের সাথে নাচুন",
    "contact.p1": "একটি ট্যুরের জন্য আসুন, লবি থেকে একটি ক্লাস দেখুন, বা শুধু হ্যালো বলুন। নতুন নৃত্যশিল্পীরা সবসময় ফ্লোরে স্বাগত।",
    "contact.addressLabel": "স্টুডিও ঠিকানা",
    "contact.phoneLabel": "ফোন",
    "contact.emailLabel": "ইমেইল",
    "contact.hoursLabel": "স্টুডিও সময়",
    "contact.hoursValue": "সোম – শনি, সকাল ১০টা – রাত ১০টা",
    "contact.newsletterTitle": "আপডেট পান",
    "contact.newsletterText": "ক্লাস আপডেট, নতুন প্রচার এবং ইভেন্ট আমন্ত্রণ সরাসরি আপনার ইনবক্সে পান।",
    "contact.newsletterPlaceholder": "আপনার ইমেইল ঠিকানা",
    "contact.newsletterButton": "সাবস্ক্রাইব",
    "contact.newsletterSuccess": "ধন্যবাদ — আপনি সাবস্ক্রাইব হয়েছেন!",

    "footer.tagline": "২০০৬ সাল থেকে পৃথিবীকে নাচ শেখাচ্ছে।",
    "footer.quickLinks": "দ্রুত লিঙ্ক",
    "footer.programs": "প্রোগ্রামসমূহ",
    "footer.language": "ভাষা",
    "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",

    "schedule.days": ["সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার","রবিবার"]
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.classes": "Clases",
    "nav.schedule": "Horario",
    "nav.loyalty": "Dance Royalty",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.cta": "Reservar Clase Gratis",

    "hero.eyebrow": "Estudio de Baile Mundial · Est. 2006",
    "hero.title": "Siente la Música.<br>Conquista la Pista.",
    "hero.subtitle": "Salsa, Bachata, Tango Argentino, Ballet y Baile en Barra — con instructores apasionados, para todas las edades y niveles, desde 2006.",
    "hero.cta1": "Reserva tu Clase Gratis",
    "hero.cta2": "Ver Horario",
    "hero.badge1": "Años de Enseñanza",
    "hero.badge2": "Estilos de Baile",
    "hero.badge3": "Todas las Edades",

    "form.eyebrow": "Comenzar",
    "form.title": "Reserva tu Clase de Prueba Gratis",
    "form.subtitle": "Tres pasos rápidos. Sin compromiso.",
    "form.name": "Nombre Completo",
    "form.phone": "Número de Teléfono",
    "form.email": "Correo Electrónico",
    "form.styleLabel": "¿Qué estilo de baile te interesa?",
    "form.styleUnsure": "Aún no estoy seguro",
    "form.levelLabel": "Tu nivel de experiencia",
    "form.levelBeginner": "Principiante",
    "form.levelIntermediate": "Intermedio",
    "form.levelAdvanced": "Avanzado",
    "form.timeLabel": "Horario de clase preferido",
    "form.timeMorning": "Mañana",
    "form.timeEvening": "Tarde/Noche",
    "form.timeWeekend": "Fin de semana",
    "form.notes": "¿Algo más que debamos saber? (opcional)",
    "form.back": "Atrás",
    "form.next": "Continuar",
    "form.submit": "Reservar mi Lugar",
    "form.successTitle": "¡Estás en la lista!",
    "form.successText": "Un miembro de nuestro equipo te llamará en 24 horas para confirmar tu clase de prueba gratuita.",

    "about.eyebrow": "Nuestra Historia",
    "about.title": "Dieciocho Años de Movimiento, Música y Comunidad",
    "about.p1": "Fundado en 2006, Rumpuree World Dance Studio se ha convertido en un hogar para bailarines de todos los orígenes.",
    "about.p2": "Nuestros instructores aportan formación auténtica en Salsa, Bachata, Tango Argentino, Ballet y Baile en Barra.",
    "about.stat1": "Estudio Fundado",
    "about.stat2": "Estilos de Baile",
    "about.stat3": "Bailarines Formados",

    "classes.eyebrow": "Qué Enseñamos",
    "classes.title": "Estilos de Baile para Cada Historia",
    "classes.subtitle": "Seis programas distintos. Un estudio. Encuentra tu ritmo.",
    "classes.level.all": "Todos los Niveles",
    "classes.level.kids": "Niños y Adultos",
    "classes.level.family": "Para Familia",
    "classes.salsa.title": "Salsa",
    "classes.salsa.desc": "Pasos vibrantes y conexión con pareja arraigada en el ritmo latino.",
    "classes.bachata.title": "Bachata",
    "classes.bachata.desc": "Movimiento sensual construido sobre conexión y musicalidad.",
    "classes.tango.title": "Tango Argentino",
    "classes.tango.desc": "El elegante abrazo y el caminar improvisado de las milongas de Buenos Aires.",
    "classes.ballet.title": "Ballet",
    "classes.ballet.desc": "Base clásica, postura y gracia para bailarines de cualquier edad.",
    "classes.pole.title": "Baile en Barra",
    "classes.pole.desc": "Fuerza, flexibilidad y arte confiado dentro y fuera de la barra.",
    "classes.social.title": "Pista Libre y Sociales",
    "classes.social.desc": "Noches de práctica y sociales grupales para bailar libremente.",
    "classes.cta": "Ver Horarios de Clase →",

    "schedule.eyebrow": "Planifica tu Semana",
    "schedule.title": "Horario Semanal",
    "schedule.subtitle": "Toca un día para ver clases y eventos. Actualizado semanalmente.",

    "promo.eyebrow": "Tiempo Limitado",
    "promo.title": "Promociones Actuales",
    "promo.ribbon1": "Nuevo Alumno",
    "promo.ribbon2": "Parejas",
    "promo.ribbon3": "Membresía",
    "promo.card1.title": "Primera Clase Gratis",
    "promo.card1.desc": "Prueba cualquier estilo sin costo — sin tarjeta, sin presión.",
    "promo.card2.title": "Trae Pareja, Ahorra 20%",
    "promo.card2.desc": "Inscríbanse juntos en Bachata o Tango y compartan el ahorro.",
    "promo.card3.title": "Pase Anual — 2 Meses Gratis",
    "promo.card3.desc": "Comprométete por un año y desbloquea clases ilimitadas todo el año.",

    "loyalty.eyebrow": "Programa Dance Royalty",
    "loyalty.title": "Gana tu Corona, Clase por Clase",
    "loyalty.subtitle": "Cada clase te acerca al estatus de realeza — y las recompensas que vienen con él.",
    "loyalty.bronze.name": "Pase Bronce",
    "loyalty.bronze.points": "0 – 19 Clases",
    "loyalty.bronze.b1": "1 punto por clase asistida",
    "loyalty.bronze.b2": "Boletín de miembros e invitaciones a eventos",
    "loyalty.bronze.b3": "Descuento en el mes de tu cumpleaños",
    "loyalty.gold.name": "Pase Oro",
    "loyalty.gold.points": "20 – 49 Clases",
    "loyalty.gold.b1": "Todo en Bronce, más:",
    "loyalty.gold.b2": "Reserva prioritaria en sociales y talleres",
    "loyalty.gold.b3": "Un pase de invitado gratis cada mes",
    "loyalty.gold.b4": "10% de descuento en mercancía del estudio",
    "loyalty.royal.name": "Pase Real",
    "loyalty.royal.points": "50+ Clases",
    "loyalty.royal.b1": "Todo en Oro, más:",
    "loyalty.royal.b2": "Clase gratis cada mes de cumpleaños",
    "loyalty.royal.b3": "Invitación a la Gala Anual de Realeza",
    "loyalty.royal.b4": "Asientos de primera fila reservados en espectáculos",
    "loyalty.cta": "Unirse a Dance Royalty",

    "testimonials.eyebrow": "De Nuestros Bailarines",
    "testimonials.title": "Historias desde la Pista",
    "testimonials.t1.quote": "Entré sin saber nada de salsa y salí dos años después enseñando clases para principiantes. Los instructores realmente se preocupan.",
    "testimonials.t1.role": "Alumna de Salsa, 2 años",
    "testimonials.t2.quote": "Mi hija comenzó ballet aquí a los seis años. Verla crecer en confianza en esa pista ha sido lo mejor de nuestra semana.",
    "testimonials.t2.role": "Padre, Programa de Ballet",
    "testimonials.t3.quote": "El baile en barra aquí es sobre fuerza y arte, no un truco. Nunca me he sentido más fuerte ni más en casa en un estudio.",
    "testimonials.t3.role": "Alumna de Baile en Barra",

    "gallery.eyebrow": "Dentro del Estudio",
    "gallery.title": "Momentos desde la Pista",

    "contact.eyebrow": "Visítanos",
    "contact.title": "Ven a Bailar Con Nosotros",
    "contact.p1": "Pasa para un recorrido, mira una clase desde el lobby, o simplemente saluda.",
    "contact.addressLabel": "Dirección",
    "contact.phoneLabel": "Teléfono",
    "contact.emailLabel": "Correo",
    "contact.hoursLabel": "Horario",
    "contact.hoursValue": "Lun – Sáb, 10 AM – 10 PM",
    "contact.newsletterTitle": "Mantente Informado",
    "contact.newsletterText": "Recibe actualizaciones de clases, promociones y eventos directamente en tu bandeja de entrada.",
    "contact.newsletterPlaceholder": "Tu correo electrónico",
    "contact.newsletterButton": "Suscribirse",
    "contact.newsletterSuccess": "¡Gracias — estás suscrito!",

    "footer.tagline": "Enseñando al mundo a bailar desde 2006.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.programs": "Programas",
    "footer.language": "Idioma",
    "footer.rights": "Todos los derechos reservados.",

    "schedule.days": ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]
  }
};

/* ── SCHEDULE DATA ────────────────────────────────────────── */
const SCHEDULE_DATA = {
  0: [ // Monday
    { time:"10:00 AM", title:"Ballet Foundations", meta:"Studio A · 60 min", type:"class" },
    { time:"06:00 PM", title:"Salsa Beginners",    meta:"Studio B · 75 min", type:"class" },
    { time:"07:30 PM", title:"Argentine Tango",   meta:"Studio A · 90 min", type:"class" }
  ],
  1: [ // Tuesday
    { time:"10:30 AM", title:"Bachata Beginners",  meta:"Studio B · 60 min", type:"class" },
    { time:"05:00 PM", title:"Kids Ballet",        meta:"Studio A · 45 min", type:"class" },
    { time:"07:00 PM", title:"Salsa Intermediate", meta:"Studio B · 75 min", type:"class" },
    { time:"08:30 PM", title:"Pole Dance Level 1", meta:"Pole Room · 60 min", type:"class" }
  ],
  2: [ // Wednesday
    { time:"11:00 AM", title:"Bachata Intermediate",meta:"Studio A · 60 min", type:"class" },
    { time:"06:30 PM", title:"Salsa All Levels",   meta:"Studio B · 90 min", type:"class" },
    { time:"08:00 PM", title:"Social Dance Night", meta:"Main Hall · 2 hrs",  type:"event" }
  ],
  3: [ // Thursday
    { time:"10:00 AM", title:"Ballet Adults",      meta:"Studio A · 60 min", type:"class" },
    { time:"06:00 PM", title:"Argentine Tango",   meta:"Studio B · 90 min", type:"class" },
    { time:"07:30 PM", title:"Pole Dance Level 2", meta:"Pole Room · 60 min", type:"class" }
  ],
  4: [ // Friday
    { time:"05:00 PM", title:"Kids Ballet",        meta:"Studio A · 45 min", type:"class" },
    { time:"06:30 PM", title:"Salsa Advanced",     meta:"Studio B · 75 min", type:"class" },
    { time:"08:00 PM", title:"Bachata Social",     meta:"Main Hall · 3 hrs",  type:"event" }
  ],
  5: [ // Saturday
    { time:"10:00 AM", title:"Beginner Weekend Intensive", meta:"Studio A · 2 hrs", type:"class" },
    { time:"12:30 PM", title:"Couples Tango Workshop", meta:"Studio B · 90 min", type:"event" },
    { time:"03:00 PM", title:"Pole Dance All Levels",  meta:"Pole Room · 60 min", type:"class" },
    { time:"06:00 PM", title:"Salsa Social Party",     meta:"Main Hall · 4 hrs",  type:"event" }
  ],
  6: [ // Sunday
    { time:"11:00 AM", title:"Ballet Sunday Class",    meta:"Studio A · 60 min", type:"class" },
    { time:"03:00 PM", title:"Open Floor Practice",    meta:"Main Hall · 2 hrs",  type:"event" }
  ]
};

/* ── APP STATE ────────────────────────────────────────────── */
let currentLang    = 'en';
let currentStep    = 1;
let totalSteps     = 3;
let activeDay      = new Date().getDay(); // 0=Sun … 6=Sat, map to Mon=0
activeDay = activeDay === 0 ? 6 : activeDay - 1;

/* ── HELPERS ──────────────────────────────────────────────── */
const t  = (key) => TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function applyTranslations() {
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = t(key);
    if (val) el.placeholder = val;
  });
  document.documentElement.lang = currentLang;
}

/* ── LANGUAGE SWITCHER ────────────────────────────────────── */
function initLang() {
  const btn  = $('#langBtn');
  const menu = $('#langMenu');
  const cur  = $('#langCurrent');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  const setLang = (lang) => {
    currentLang = lang;
    cur.textContent = lang.toUpperCase();
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    $$('[role="option"]').forEach(li => {
      li.setAttribute('aria-selected', li.dataset.lang === lang);
    });
    applyTranslations();
    buildScheduleTabs();
    renderSchedule(activeDay);
  };

  $$('[role="option"]').forEach(li => {
    li.addEventListener('click', () => setLang(li.dataset.lang));
  });

  // Footer language buttons
  $$('.footer-lang button').forEach(btn2 => {
    btn2.addEventListener('click', () => setLang(btn2.dataset.lang));
  });
}

/* ── STICKY HEADER ────────────────────────────────────────── */
function initHeader() {
  const header = $('#siteHeader');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE MENU ──────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = $('#menuToggle');
  const nav    = $('#primaryNav');
  const cta    = $('.nav-cta');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    if (cta) cta.classList.toggle('is-open', open);
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (cta) cta.classList.remove('is-open');
    });
  });
}

/* ── ACTIVE NAV HIGHLIGHT ─────────────────────────────────── */
function initActiveNav() {
  const sections = $$('section[id]');
  const links    = $$('.primary-nav a');
  if (!sections.length || !links.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => io.observe(s));
}

/* ── MULTI-STEP FORM ──────────────────────────────────────── */
function initForm() {
  const form    = $('#regForm');
  if (!form) return;

  const panels  = form.querySelectorAll('.reg-panel');
  const dots    = $$('.reg-step-dot');
  const nextBtn = $('#regNext');
  const backBtn = $('#regBack');
  const subBtn  = $('#regSubmit');

  function showPanel(step) {
    panels.forEach(p => p.classList.toggle('is-active', parseInt(p.dataset.panel) === step || p.dataset.panel === 'success' && step === 'success'));
    dots.forEach(d => {
      const n = parseInt(d.dataset.step);
      d.classList.toggle('is-done',   n < step);
      d.classList.toggle('is-active', n === step);
    });

    if (step === 'success') {
      nextBtn.hidden = true;
      backBtn.hidden = true;
      subBtn.hidden  = true;
      $$('.reg-step-dot').forEach(d => d.classList.add('is-done'));
      return;
    }

    backBtn.hidden = step === 1;
    nextBtn.hidden = step === totalSteps;
    subBtn.hidden  = step !== totalSteps;
  }

  function validateStep(step) {
    let ok = true;
    if (step === 1) {
      ['fullName','phone','email'].forEach(name => {
        const inp = form.querySelector(`[name="${name}"]`);
        if (!inp) return;
        const valid = inp.checkValidity();
        inp.classList.toggle('error', !valid);
        if (!valid) ok = false;
      });
    }
    if (step === 2) {
      const style = form.querySelector('[name="style"]:checked');
      const level = form.querySelector('[name="level"]:checked');
      if (!style) { ok = false; }
      if (!level) { ok = false; }
    }
    if (step === 3) {
      const time = form.querySelector('[name="time"]:checked');
      if (!time) { ok = false; }
    }
    return ok;
  }

  nextBtn.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < totalSteps) {
      currentStep++;
      showPanel(currentStep);
    }
  });

  backBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showPanel(currentStep);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;
    // Simulate async submit
    subBtn.disabled  = true;
    subBtn.textContent = '...';
    setTimeout(() => {
      showPanel('success');
    }, 900);
  });

  // Remove error state on input
  form.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => inp.classList.remove('error'));
  });

  showPanel(1);
}

/* ── SCHEDULE ─────────────────────────────────────────────── */
function buildScheduleTabs() {
  const container = $('#dayTabs');
  if (!container) return;
  const days = t('schedule.days');
  container.innerHTML = '';
  days.forEach((day, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'day-tab' + (i === activeDay ? ' is-active' : '');
    btn.textContent = day;
    btn.dataset.day = i;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === activeDay);
    btn.addEventListener('click', () => {
      activeDay = i;
      $$('.day-tab').forEach(b => {
        b.classList.toggle('is-active', parseInt(b.dataset.day) === i);
        b.setAttribute('aria-selected', parseInt(b.dataset.day) === i);
      });
      renderSchedule(i);
    });
    container.appendChild(btn);
  });
}

function renderSchedule(dayIndex) {
  const list = $('#scheduleList');
  if (!list) return;
  const items = SCHEDULE_DATA[dayIndex] || [];

  if (!items.length) {
    list.innerHTML = '<p style="text-align:center;color:var(--mid);padding:2rem 0;">No classes scheduled.</p>';
    return;
  }

  list.innerHTML = items.map(item => `
    <div class="sched-item type-${item.type} fade-up">
      <div class="sched-time">${item.time}</div>
      <div>
        <div class="sched-title">${item.title}</div>
        <div class="sched-meta">${item.meta}</div>
      </div>
      <span class="sched-tag">${item.type === 'event' ? 'Event' : 'Class'}</span>
    </div>
  `).join('');

  // Trigger animation
  requestAnimationFrame(() => {
    list.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), i * 80);
    });
  });
}

/* ── SCROLL ANIMATIONS ────────────────────────────────────── */
function initScrollAnimations() {
  const targets = $$('.class-card, .promo-card, .pass-card, .testi-card, .about-media, .gallery-item, .sched-item');
  targets.forEach(el => el.classList.add('fade-up'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => io.observe(el));
}

/* ── BACK TO TOP ──────────────────────────────────────────── */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── NEWSLETTER ───────────────────────────────────────────── */
function initNewsletter() {
  const form = $('#newsletterForm');
  const note = $('#newsletterNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = form.querySelector('input[type="email"]');
    if (!inp || !inp.checkValidity()) return;
    form.style.display = 'none';
    if (note) {
      note.hidden = false;
      note.textContent = t('contact.newsletterSuccess');
    }
  });
}

/* ── SMOOTH SCROLL ────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });
}

/* ── FOOTER YEAR ──────────────────────────────────────────── */
function initYear() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  applyTranslations();
  initLang();
  initHeader();
  initMobileMenu();
  initActiveNav();
  initForm();
  buildScheduleTabs();
  renderSchedule(activeDay);
  initScrollAnimations();
  initBackToTop();
  initNewsletter();
  initSmoothScroll();
});
