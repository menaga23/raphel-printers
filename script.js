/**
 * ═══════════════════════════════════════════════════════════════
 *  RAPHEL PRINTERS — script.js
 *  All editable content lives in CONFIG below.
 * ═══════════════════════════════════════════════════════════════
 */

/* ─────────────────────────────────────────────────────────────────
   CONFIG — Edit this to update content without touching HTML/CSS
───────────────────────────────────────────────────────────────── */
const CONFIG = {
  // Contact
  phone:       '+919842177118',
  phoneDisplay:'+91 98421 77118',
  whatsapp:    '919842177118',
  address:     '41, Perumal Sannathi St, Meenakshipuram, Tirunelveli, Tamil Nadu 627001',
  instagram:   'https://www.instagram.com/raphel_printers',

  // Optional. Leave empty to auto-detect. Set only if using a custom domain.
  siteUrl:     '',

  // Business hours (24h IST)
  openHour:  9,
  closeHour: 20,
  closedDays: [0], // 0 = Sunday

  // ── SERVICES ─────────────────────────────────────────────────
  services: [
    {
      icon: '💌',
      keyEn: 'svc_wedding',
      keyTa: 'svc_wedding_ta',
      nameEn: 'Wedding Invitations',
      nameTa: 'திருமண அழைப்பிதழ்கள்',
      descEn: 'Elegant Tamil & English wedding invitations — traditional or modern designs.',
      descTa: 'தமிழ் & ஆங்கில திருமண அழைப்பிதழ்கள் — பாரம்பரிய அல்லது நவீன வடிவங்கள்.',
    },
    {
      icon: '🪪',
      keyEn: 'svc_visiting',
      keyTa: 'svc_visiting_ta',
      nameEn: 'Visiting Cards',
      nameTa: 'விசிட்டிங் கார்டுகள்',
      descEn: 'Professional business cards that make a lasting first impression.',
      descTa: 'நீடித்த முதல் அபிப்பிராயம் ஏற்படுத்தும் தொழில்முறை விசிட்டிங் கார்டுகள்.',
    },
    {
      icon: '📄',
      keyEn: 'svc_brochures',
      keyTa: 'svc_brochures_ta',
      nameEn: 'Brochures',
      nameTa: 'சிறுநூல்கள் (Brochures)',
      descEn: 'Tri-fold, bi-fold, and custom brochures for businesses and events.',
      descTa: 'வணிகங்கள் மற்றும் நிகழ்வுகளுக்கான மூன்று மடிப்பு, இரண்டு மடிப்பு சிறுநூல்கள்.',
    },
    {
      icon: '🏷️',
      keyEn: 'svc_stickers',
      keyTa: 'svc_stickers_ta',
      nameEn: 'Stickers',
      nameTa: 'ஸ்டிக்கர்கள்',
      descEn: 'Die-cut vinyl stickers, labels, and product stickers in bulk.',
      descTa: 'டை-கட் வினைல் ஸ்டிக்கர்கள், லேபிள்கள் மற்றும் தயாரிப்பு ஸ்டிக்கர்கள்.',
    },
    {
      icon: '🍽️',
      keyEn: 'svc_menu',
      keyTa: 'svc_menu_ta',
      nameEn: 'Menu Cards',
      nameTa: 'மெனு கார்டுகள்',
      descEn: 'Restaurant menu cards in Tamil, English, or bilingual formats.',
      descTa: 'உணவக மெனு கார்டுகள் — தமிழ், ஆங்கிலம் அல்லது இரு மொழிகளிலும்.',
    },
    {
      icon: '📓',
      keyEn: 'svc_notebooks',
      keyTa: 'svc_notebooks_ta',
      nameEn: 'Notebooks',
      nameTa: 'நோட்புக்குகள்',
      descEn: 'Custom-branded notebooks for schools, offices, and corporate gifting.',
      descTa: 'பள்ளிகள், அலுவலகங்கள் மற்றும் பரிசுகளுக்கான தனிப்பயன் நோட்புக்குகள்.',
    },
  ],

  // ── GALLERY ──────────────────────────────────────────────────
  // TODO: Add real photos. Simply add a new { src, alt } object to this array.
  gallery: [
    { src: 'images/gallery-1.jpg', altEn: 'Tamil wedding invitation design printed by Raphel Printers', altTa: 'ரஃபேல் பிரிண்டர்ஸ் அச்சிட்ட திருமண அழைப்பிதழ்' },
    { src: 'images/gallery-2.jpg', altEn: 'Premium visiting cards printed in Tirunelveli', altTa: 'திருநெல்வேலியில் அச்சிட்ட விசிட்டிங் கார்டுகள்' },
    { src: 'images/gallery-3.jpg', altEn: 'Tri-fold brochure designed and printed by Raphel Printers', altTa: 'ரஃபேல் பிரிண்டர்ஸ் வடிவமைத்த சிறுநூல்' },
    { src: 'images/gallery-4.jpg', altEn: 'Colourful die-cut stickers printed by Raphel Printers', altTa: 'ரஃபேல் பிரிண்டர்ஸ் அச்சிட்ட ஸ்டிக்கர்கள்' },
    { src: 'images/gallery-5.jpg', altEn: 'Restaurant menu cards in Tamil and English', altTa: 'தமிழ் மற்றும் ஆங்கிலத்தில் உணவக மெனு கார்டுகள்' },
    { src: 'images/gallery-6.jpg', altEn: 'Custom branded notebooks for corporate gifting', altTa: 'பரிசுக்கான தனிப்பயன் நோட்புக்குகள்' },
    { src: 'images/gallery-7.jpg', altEn: 'Wedding invitation envelopes with Tamil calligraphy', altTa: 'தமிழ் எழுத்துக்கலை கொண்ட திருமண உறைகள்' },
    { src: 'images/gallery-8.jpg', altEn: 'Bulk printed flyers for South Indian festival event', altTa: 'தென்னிந்திய விழாவிற்கான அதிக அளவு சுவரொட்டிகள்' },
  ],

  // ── CUSTOMER FEEDBACK & REVIEWS CONFIG ──────────────────────
  // TODO: Replace with your actual Google Business Profile review link:
  // e.g. https://g.page/r/YOUR_ID/review or https://search.google.com/local/writereview?placeid=...
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=TODO_GOOGLE_PLACE_ID',
};

/* ─────────────────────────────────────────────────────────────────
   TRANSLATIONS
───────────────────────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    // Logo
    logo_sub: 'Printers',
    // Nav
    nav_services: 'Services',
    nav_why:      'Why Us',
    nav_gallery:  'Gallery',
    nav_about:    'About',
    nav_contact:  'Contact',
    nav_quote:    'Get a Quote',
    nav_feedback: 'Feedback',
    // Hero
    hero_h1_line1: '29 Years of',
    hero_h1_line2: 'Printing Trust',
    hero_h1_line3: 'in Tirunelveli',
    hero_tagline:  'Wedding invitations to visiting cards — printed with care by Raphel Printers since 1996. Tamil & English designs, bulk orders welcome.',
    // Badges
    badge_open:   '✦ Open Now',
    badge_closed: 'Closed · Opens 10 AM',
    // Trust
    trust_years: '29+ Years Experience',
    trust_langs: 'Tamil & English',
    trust_bulk:  'Bulk Orders',
    // Buttons
    btn_call:      'Call Now',
    btn_whatsapp:  'WhatsApp',
    btn_get_quote: 'Get a Quote',
    btn_enquire:   'Enquire Now',
    // Services section
    services_eyebrow:  'What We Print',
    services_heading:  'Our Services',
    services_subtitle: 'Quality printing for every occasion — in Tamil, English, or both.',
    // Why Raphel
    why_eyebrow:   'The Raphel Difference',
    why_heading:   'Why Choose Raphel Printers?',
    why_subtitle:  'Three decades of excellence in Tirunelveli\'s printing industry.',
    why_years_label:    'Years in Business',
    why_years_desc:     'Serving Tirunelveli since 1996. Trust earned over decades.',
    why_orders_label:   'Orders Fulfilled',
    why_orders_desc:    'From single cards to bulk wedding orders, delivered on time.',
    why_langs_label:    'Languages',
    why_langs_desc:     'Fluent Tamil and English designs. Both in one order if you need.',
    why_services_label: 'Print Services',
    why_services_desc:  'Invitations to notebooks — one trusted shop for all your needs.',
    feat_quality_h:  'Uncompromising Quality',
    feat_quality_p:  'Every print is inspected for colour accuracy, sharpness, and finish before delivery.',
    feat_bulk_h:     'Bulk Order Specialists',
    feat_bulk_p:     'Competitive pricing and express turnaround for large wedding or corporate batches.',
    feat_trust_h:    'Trusted by Thousands',
    feat_trust_p:    'Families across Tirunelveli district have trusted Raphel Printers for their most special occasions.',
    feat_tamilen_h:  'Tamil & English Expertise',
    feat_tamilen_p:  'Beautiful Tamil typography alongside English. Scripts that honour tradition and modernity.',
    // Gallery
    gallery_eyebrow:  'Our Work',
    gallery_heading:  'Sample Work',
    gallery_subtitle: 'A glimpse of the prints we\'ve crafted for families and businesses across Tirunelveli.',
    // About
    about_eyebrow: 'Our Story',
    about_heading: 'A Legacy of Ink & Trust',
    about_p1: 'Raphel Printers was born in the heart of Tirunelveli in 1996, when M. Ramakrishnan set up his first press at 41, Perumal Sannathi Street. What began as a small neighbourhood print shop has grown into one of the most trusted names in the district\'s printing industry.',
    about_p2: 'Over 29 years, we have printed hundreds of thousands of wedding invitations, visiting cards, brochures, and more — each piece handled with the same care and attention as the first. Our clients return not just for quality but for the personal touch that only a family-run shop can offer.',
    about_p3: 'We specialise in bilingual printing — beautiful Tamil typography alongside crisp English layouts. Whether you need a simple visiting card or a 1,000-piece wedding invitation order, Raphel Printers delivers on time, every time.',
    owner_title: 'Founder & Owner',
    years_badge: 'Years',
    // Testimonials
    test_eyebrow: 'Happy Customers',
    test_heading: 'What Our Clients Say',
    test_subtitle: 'Verified reviews from our valued clients across Tirunelveli.',
    test_empty_title: 'Be the first to share your experience!',
    test_empty_desc: 'Have you printed with us recently? We value honest feedback from every client. Scan the QR code or click below to leave a review.',
    qr_heading: 'Rate Us & Leave Feedback',
    qr_subtitle: 'Scan to rate us and share your feedback',
    qr_download_btn: 'Download QR (PNG)',
    qr_rate_btn: 'Rate Us Online',
    qr_warning: 'Set your live website address in CONFIG.siteUrl',
    qr_local_notice_en: 'QR will work after the website is deployed online. Deploy to Netlify, then download the QR from the live site.',
    qr_local_notice_ta: 'இணையதளம் ஆன்லைனில் வெளியிடப்பட்ட பிறகு QR செயல்படும். Netlify-ல் பதிவேற்றிய பின், நேரடி தளத்திலிருந்து QR-ஐ பதிவிறக்கவும்.',
    qr_link_label: 'Encodes:',
    qr_copy_link: 'Copy link',
    qr_copied: 'Copied!',
    // Quote form
    quote_eyebrow:        'Free Estimate',
    quote_heading:        'Request a Quote',
    quote_subtitle:       'Fill in the form and we\'ll send you a quote via WhatsApp instantly.',
    form_name_label:      'Your Name',
    form_service_label:   'Service Required',
    form_service_placeholder: 'Select a service...',
    form_qty_label:       'Approximate Quantity',
    form_lang_label:      'Language Preference',
    form_lang_tamil:      'Tamil',
    form_lang_english:    'English',
    form_lang_both:       'Both',
    form_message_label:   'Additional Details (optional)',
    form_submit:          'Send Quote Request on WhatsApp',
    form_note:            'Clicking sends a pre-filled WhatsApp message. No backend, no data stored.',
    svc_wedding:  'Wedding Invitations',
    svc_visiting: 'Visiting Cards',
    svc_brochures:'Brochures',
    svc_stickers: 'Stickers',
    svc_menu:     'Menu Cards',
    svc_notebooks:'Notebooks',
    // Contact
    contact_eyebrow:        'Find Us',
    contact_heading:        'Get in Touch',
    contact_subtitle:       'Visit us at our shop or reach us instantly via call or WhatsApp.',
    contact_address_label:  'Address',
    contact_phone_label:    'Phone & WhatsApp',
    contact_hours_label:    'Business Hours',
    contact_instagram_label:'Instagram',
    hours_days: 'Monday – Saturday',
    hours_sunday: 'Sunday: Closed',
    hours_ist:  '(IST)',
    map_open:   'Open in Maps',
    ig_follow:  'Follow us on Instagram',
    // Footer
    footer_tagline:         'Tirunelveli\'s printing press since 1996.',
    footer_links_heading:   'Quick Links',
    footer_contact_heading: 'Contact',
    footer_rights:          'All rights reserved.',
    footer_made:            'Made with',
    footer_in:              'in Tirunelveli',
    // Service enquire
    enquire_wa: 'Enquire on WhatsApp',
    // Desktop Call Modal
    call_modal_title:    'Call us at 98421 77118',
    call_modal_subtitle: 'Dial directly from your phone or copy the number below:',
    call_modal_copy:     'Copy number',
    call_modal_copied:   'Copied!',
    call_modal_wa:       'Open WhatsApp instead',
    call_modal_hours:    'Hours: 10 AM to 8 PM',
    call_modal_close:    'Close',
  },

  ta: {
    // Logo
    logo_sub: 'பிரிண்டர்ஸ்',
    // Nav
    nav_services: 'சேவைகள்',
    nav_why:      'ஏன் நாங்கள்',
    nav_gallery:  'படக்காட்சி',
    nav_about:    'எங்களை பற்றி',
    nav_contact:  'தொடர்பு',
    nav_quote:    'விலைக்கணக்கு',
    nav_feedback: 'கருத்துகள்',
    // Hero
    hero_h1_line1: '29 ஆண்டுகளாக',
    hero_h1_line2: 'நம்பகமான அச்சகம்',
    hero_h1_line3: 'திருநெல்வேலியில்',
    hero_tagline:  'திருமண அழைப்பிதழிலிருந்து விசிட்டிங் கார்டு வரை — 1996 முதல் ரஃபேல் பிரிண்டர்ஸ் தரமாக அச்சிடுகிறோம். தமிழ் & ஆங்கில வடிவங்கள், மொத்த ஆர்டர்கள் வரவேற்கப்படுகின்றன.',
    // Badges
    badge_open:   '✦ இப்போது திறந்திருக்கிறோம்',
    badge_closed: 'மூடப்பட்டது · காலை 10 மணிக்கு திறக்கும்',
    // Trust
    trust_years: '29+ ஆண்டுகள் அனுபவம்',
    trust_langs: 'தமிழ் & ஆங்கிலம்',
    trust_bulk:  'மொத்த ஆர்டர்கள்',
    // Buttons
    btn_call:      'இப்போதே அழைக்கவும்',
    btn_whatsapp:  'வாட்ஸ்அப்',
    btn_get_quote: 'விலை கேளுங்கள்',
    btn_enquire:   'விசாரிக்கவும்',
    // Services
    services_eyebrow:  'நாங்கள் அச்சிடுவது',
    services_heading:  'எங்கள் சேவைகள்',
    services_subtitle: 'ஒவ்வொரு சந்தர்ப்பத்திற்கும் தரமான அச்சிடல் — தமிழ், ஆங்கிலம் அல்லது இரண்டிலும்.',
    // Why Raphel
    why_eyebrow:   'ரஃபேல் சிறப்பு',
    why_heading:   'ரஃபேல் பிரிண்டர்ஸை ஏன் தேர்வு செய்வது?',
    why_subtitle:  'திருநெல்வேலியின் அச்சுத்துறையில் மூன்று தசாப்த சிறப்பு.',
    why_years_label:    'ஆண்டுகள் அனுபவம்',
    why_years_desc:     '1996 முதல் திருநெல்வேலிக்கு சேவை செய்கிறோம்.',
    why_orders_label:   'ஆர்டர்கள் நிறைவேற்றப்பட்டவை',
    why_orders_desc:    'ஒற்றை கார்டிலிருந்து மொத்த திருமண ஆர்டர்கள் வரை.',
    why_langs_label:    'மொழிகள்',
    why_langs_desc:     'தமிழ் மற்றும் ஆங்கில வடிவங்கள். தேவைப்பட்டால் ஒரே ஆர்டரில்.',
    why_services_label: 'அச்சுச் சேவைகள்',
    why_services_desc:  'அழைப்பிதழிலிருந்து நோட்புக்கு வரை — ஒரே நம்பகமான கடை.',
    feat_quality_h:  'தரம் மட்டுமே',
    feat_quality_p:  'ஒவ்வொரு அச்சிடலும் வண்ண துல்லியம், கூர்மை மற்றும் முடிவுக்காக ஆய்வு செய்யப்படுகிறது.',
    feat_bulk_h:     'மொத்த ஆர்டர் நிபுணர்கள்',
    feat_bulk_p:     'பெரிய திருமண அல்லது கார்ப்பரேட் ஆர்டர்களுக்கு சிறந்த விலையும் விரைவான டர்னரவுண்டும்.',
    feat_trust_h:    'ஆயிரக்கணக்கானோர் நம்பகம்',
    feat_trust_p:    'திருநெல்வேலி மாவட்டம் முழுவதும் குடும்பங்கள் தங்கள் சிறப்பு சந்தர்ப்பங்களுக்கு ரஃபேல் பிரிண்டர்ஸை நம்புகின்றனர்.',
    feat_tamilen_h:  'தமிழ் & ஆங்கில திறமை',
    feat_tamilen_p:  'ஆங்கிலத்துடன் அழகான தமிழ் எழுத்துக்கலை. பாரம்பரியத்தையும் நவீனத்தையும் கௌரவிக்கும் எழுத்துகள்.',
    // Gallery
    gallery_eyebrow:  'எங்கள் வேலை',
    gallery_heading:  'மாதிரி வேலைகள்',
    gallery_subtitle: 'திருநெல்வேலி முழுவதும் குடும்பங்களுக்கும் வணிகங்களுக்கும் நாங்கள் உருவாக்கிய அச்சிடல்களின் ஒரு பார்வை.',
    // About
    about_eyebrow: 'எங்கள் கதை',
    about_heading: 'மை மற்றும் நம்பிக்கையின் மரபு',
    about_p1: 'ரஃபேல் பிரிண்டர்ஸ் 1996 ஆம் ஆண்டு திருநெல்வேலியின் இதயத்தில் பிறந்தது, M. ராமகிருஷ்ணன் 41, பெருமாள் சன்னதி தெருவில் தனது முதல் அச்சகத்தை நிறுவியபோது. ஒரு சிறிய அக்கம்பக்க அச்சக கடையாக தொடங்கியது இப்போது மாவட்டத்தின் மிகவும் நம்பகமான அச்சு வணிகமாக வளர்ந்துள்ளது.',
    about_p2: '29 ஆண்டுகளாக, நாங்கள் லட்சக்கணக்கான திருமண அழைப்பிதழ்கள், விசிட்டிங் கார்டுகள், சிறுநூல்கள் மற்றும் பலவற்றை அச்சிட்டோம் — ஒவ்வொரு துண்டும் முதல் நாள் போலவே கவனத்துடன் கையாளப்படுகிறது.',
    about_p3: 'நாங்கள் இரு மொழி அச்சிடலில் நிபுணர்கள் — அழகான தமிழ் எழுத்துக்கலை மற்றும் நேர்த்தியான ஆங்கில தளவமைப்பு. ஒரு எளிய விசிட்டிங் கார்டு அல்லது 1,000 திருமண அழைப்பிதழ் ஆர்டர் — ரஃபேல் பிரிண்டர்ஸ் எப்போதும் சரியான நேரத்தில் வழங்குகிறது.',
    owner_title: 'நிறுவனர் & உரிமையாளர்',
    years_badge: 'ஆண்டுகள்',
    // Testimonials
    test_eyebrow: 'மகிழ்ச்சியான வாடிக்கையாளர்கள்',
    test_heading: 'எங்கள் வாடிக்கையாளர்கள் கூறுவது',
    test_subtitle: 'திருநெல்வேலி வாடிக்கையாளர்களின் சரிபார்க்கப்பட்ட கருத்துக்கள்.',
    test_empty_title: 'உங்கள் அனுபவத்தை முதலில் பகிர்ந்துகொள்ளுங்கள்!',
    test_empty_desc: 'சமீபத்தில் எங்களிடம் அச்சிட்டீர்களா? ஒவ்வொரு வாடிக்கையாளரின் கருத்தையும் நாங்கள் மதிக்கிறோம். QR-ஐ ஸ்கேன் செய்தோ அல்லது கீழேயுள்ள பொத்தானை கிளிக் செய்தோ உங்கள் கருத்தை பதிவிடுங்கள்.',
    qr_heading: 'எங்களை மதிப்பிடுங்கள்',
    qr_subtitle: 'மதிப்பாய்வு செய்ய மற்றும் உங்கள் கருத்தைப் பகிர ஸ்கேன் செய்யுங்கள்',
    qr_download_btn: 'QR அட்டை பதிவிறக்குக (PNG)',
    qr_rate_btn: 'இணையத்தில் மதிப்பிட',
    qr_warning: 'CONFIG.siteUrl-ல் நேரடி இணையதள முகவரியை அமைக்கவும் (Set your live website address in CONFIG.siteUrl)',
    qr_local_notice_en: 'QR will work after the website is deployed online. Deploy to Netlify, then download the QR from the live site.',
    qr_local_notice_ta: 'இணையதளம் ஆன்லைனில் வெளியிடப்பட்ட பிறகு QR செயல்படும். Netlify-ல் பதிவேற்றிய பின், நேரடி தளத்திலிருந்து QR-ஐ பதிவிறக்கவும்.',
    qr_link_label: 'இணைப்பு:',
    qr_copy_link: 'இணைப்பை நகலெடு',
    qr_copied: 'நகலெடுக்கப்பட்டது!',
    // Quote form
    quote_eyebrow:        'இலவச மதிப்பீடு',
    quote_heading:        'விலைக்கணக்கு கோரவும்',
    quote_subtitle:       'படிவத்தை நிரப்பவும், வாட்ஸ்அப் வழியாக உடனடியாக விலைக்கணக்கு அனுப்புவோம்.',
    form_name_label:      'உங்கள் பெயர்',
    form_service_label:   'தேவையான சேவை',
    form_service_placeholder: 'ஒரு சேவையை தேர்வு செய்யவும்...',
    form_qty_label:       'தோராயமான அளவு',
    form_lang_label:      'மொழி விருப்பம்',
    form_lang_tamil:      'தமிழ்',
    form_lang_english:    'ஆங்கிலம்',
    form_lang_both:       'இரண்டும்',
    form_message_label:   'கூடுதல் விவரங்கள் (விருப்பமானது)',
    form_submit:          'வாட்ஸ்அப்பில் விலைக்கணக்கு கோரவும்',
    form_note:            'கிளிக் செய்வதால் முன்-நிரப்பிய வாட்ஸ்அப் செய்தி அனுப்பப்படும். எந்த தரவும் சேமிக்கப்படாது.',
    svc_wedding:  'திருமண அழைப்பிதழ்கள்',
    svc_visiting: 'விசிட்டிங் கார்டுகள்',
    svc_brochures:'சிறுநூல்கள்',
    svc_stickers: 'ஸ்டிக்கர்கள்',
    svc_menu:     'மெனு கார்டுகள்',
    svc_notebooks:'நோட்புக்குகள்',
    // Contact
    contact_eyebrow:        'எங்களை கண்டுபிடியுங்கள்',
    contact_heading:        'தொடர்பு கொள்ளுங்கள்',
    contact_subtitle:       'எங்கள் கடைக்கு வாருங்கள் அல்லது அழைப்பு அல்லது வாட்ஸ்அப் மூலம் உடனடியாக தொடர்பு கொள்ளுங்கள்.',
    contact_address_label:  'முகவரி',
    contact_phone_label:    'தொலைபேசி & வாட்ஸ்அப்',
    contact_hours_label:    'வணிக நேரம்',
    contact_instagram_label:'இன்ஸ்டாகிராம்',
    hours_days: 'திங்கள் – சனி',
    hours_sunday: 'ஞாயிறு: விடுமுறை',
    hours_ist:  '(IST)',
    map_open:   'வரைபடத்தில் திற',
    ig_follow:  'இன்ஸ்டாகிராமில் பின்தொடருங்கள்',
    // Footer
    footer_tagline:         '1996 முதல் திருநெல்வேலியின் அச்சகம்.',
    footer_links_heading:   'விரைவு இணைப்புகள்',
    footer_contact_heading: 'தொடர்பு',
    footer_rights:          'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    footer_made:            'அன்புடன் உருவாக்கப்பட்டது',
    footer_in:              'திருநெல்வேலியில்',
    // Service enquire
    enquire_wa: 'வாட்ஸ்அப்பில் விசாரிக்கவும்',
    // Desktop Call Modal
    call_modal_title:    'எங்களை அழைக்கவும்: 98421 77118',
    call_modal_subtitle: 'உங்கள் போனில் அழைக்கவும் அல்லது எண்ணை நகலெடுக்கவும்:',
    call_modal_copy:     'எண்ணை நகலெடு',
    call_modal_copied:   'நகலெடுக்கப்பட்டது!',
    call_modal_wa:       'வாட்ஸ்அப்பில் தொடர்புகொள்ள',
    call_modal_hours:    'நேரம்: காலை 10 மணி முதல் இரவு 8 மணி வரை',
    call_modal_close:    'மூடுக',
  },
};

/* ─────────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────────── */
let currentLang = 'en';
let sliderIndex = 0;
let lightboxIndex = 0;
let countersStarted = false;

/* ─────────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────────── */
function waLink(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.en[key] || key;
}

function $(selector, context = document) {
  return context.querySelector(selector);
}

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

/* ─────────────────────────────────────────────────────────────────
   LANGUAGE SYSTEM
───────────────────────────────────────────────────────────────── */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Store preference
  try { localStorage.setItem('raphel_lang', lang); } catch (_) {}

  // Update all i18n elements
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) el.textContent = text;
  });

  // Update Tamil font class on body
  if (lang === 'ta') {
    document.body.classList.add('ta-text');
  } else {
    document.body.classList.remove('ta-text');
  }

  // Update language toggle label
  const label = $('#lang-label');
  if (label) label.textContent = lang === 'en' ? 'தமிழ்' : 'English';

  // Re-render dynamic content with new language
  renderServices();
  renderGallery();
  renderTestimonials();

  // Update open/closed badge text
  updateOpenBadge();
}

/* ─────────────────────────────────────────────────────────────────
   OPEN / CLOSED BADGE
───────────────────────────────────────────────────────────────── */
function updateOpenBadge() {
  const badge = $('#open-badge');
  const text  = $('#open-badge-text');
  if (!badge || !text) return;

  // Get current IST time
  const now = new Date();
  const istOffset = 5.5 * 60; // IST = UTC+5:30
  const utcMs  = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utcMs + istOffset * 60000);
  const hour    = istDate.getHours();
  const day     = istDate.getDay(); // 0 = Sunday
  const isSunday = CONFIG.closedDays.includes(day);
  const isOpen = !isSunday && hour >= CONFIG.openHour && hour < CONFIG.closeHour;

  badge.classList.toggle('is-open', isOpen);
  badge.classList.toggle('is-closed', !isOpen);
  text.textContent = isOpen ? t('badge_open') : t('badge_closed');
}

/* ─────────────────────────────────────────────────────────────────
   RENDER SERVICES
───────────────────────────────────────────────────────────────── */
function renderServices() {
  const grid = $('#services-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.services.map((svc, i) => {
    const name = currentLang === 'ta' ? svc.nameTa : svc.nameEn;
    const desc = currentLang === 'ta' ? svc.descTa : svc.descEn;
    const waMsg = `Hello Raphel Printers, I would like to enquire about ${svc.nameEn}.`;
    const enquireLabel = t('enquire_wa');

    return `
      <article class="service-card" role="listitem" data-reveal>
        <div class="service-icon" aria-hidden="true">${svc.icon}</div>
        <h3>${name}</h3>
        <p>${desc}</p>
      </article>`;
  }).join('');

  // Re-observe new elements for scroll reveal
  observeReveal();
}

/* ─────────────────────────────────────────────────────────────────
   RENDER GALLERY
───────────────────────────────────────────────────────────────── */
function renderGallery() {
  const grid = $('#gallery-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.gallery.map((item, i) => {
    const alt = currentLang === 'ta' ? item.altTa : item.altEn;
    return `
      <div class="gallery-item" role="listitem" tabindex="0"
           data-index="${i}"
           aria-label="${alt}">
        <img src="${item.src}" alt="${alt}" loading="lazy"
             onerror="this.parentElement.style.background='var(--paper-dark)'; this.style.display='none';" />
        <div class="gallery-overlay" aria-hidden="true">
          <span class="gallery-caption">${alt}</span>
        </div>
      </div>`;
  }).join('');

  // Attach click/keyboard events
  $$('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(item.dataset.index));
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────────────────── */
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  const lb = $('#lightbox');
  lb.hidden = false;
  lb.focus();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = $('#lightbox');
  lb.hidden = true;
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = CONFIG.gallery[lightboxIndex];
  if (!item) return;
  const alt = currentLang === 'ta' ? item.altTa : item.altEn;
  $('#lightbox-img').src = item.src;
  $('#lightbox-img').alt = alt;
  $('#lightbox-caption').textContent = alt;
}

function initLightbox() {
  const lb = $('#lightbox');
  $('#lightbox-close').addEventListener('click', closeLightbox);

  $('#lightbox-prev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
    updateLightbox();
  });

  $('#lightbox-next').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % CONFIG.gallery.length;
    updateLightbox();
  });

  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % CONFIG.gallery.length; updateLightbox(); }
  });
}

/* ─────────────────────────────────────────────────────────────────
   REAL CUSTOMER TESTIMONIALS (FIREBASE FIRESTORE)
───────────────────────────────────────────────────────────────── */
let approvedTestimonials = [];
let hasFetchedTestimonials = false;

async function fetchApprovedTestimonials() {
  try {
    const { firebaseConfig, isFirebaseConfigured } = await import('./firebase-config.js');
    if (!isFirebaseConfigured()) {
      console.info('Firebase feedback: firebase-config.js is in setup mode. Add your credentials to load approved customer reviews.');
      hasFetchedTestimonials = true;
      renderTestimonials();
      return;
    }

    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, collection, query, where, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    const db  = getFirestore(app);

    const q = query(
      collection(db, 'feedback'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc'),
      limit(12)
    );

    const snapshot = await getDocs(q);
    const list = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      list.push({
        id: doc.id,
        name: (data.name || 'Valued Customer').trim(),
        area: (data.area || '').trim(),
        rating: Math.max(1, Math.min(5, parseInt(data.rating, 10) || 5)),
        comment: (data.comment || '').trim(),
      });
    });

    approvedTestimonials = list;
    hasFetchedTestimonials = true;
  } catch (err) {
    console.warn('Could not load testimonials from Firestore:', err);
    approvedTestimonials = [];
    hasFetchedTestimonials = true;
  } finally {
    renderTestimonials();
  }
}

function renderTestimonials() {
  const sliderWrapper = $('#testimonials-slider-wrapper');
  const emptyState    = $('#testimonials-empty-state');
  const slider        = $('#testimonials-slider');
  const dots          = $('#slider-dots');

  if (!sliderWrapper || !emptyState || !slider || !dots) return;

  // If no approved reviews yet, display the friendly empty state
  if (!approvedTestimonials.length) {
    sliderWrapper.hidden = true;
    emptyState.hidden = false;
    return;
  }

  // Approved reviews exist: show slider, hide empty state
  sliderWrapper.hidden = false;
  emptyState.hidden = true;
  slider.innerHTML = '';
  dots.innerHTML = '';

  // Render cards with strict textContent escaping to prevent script injection
  approvedTestimonials.forEach((t, i) => {
    const card = document.createElement('article');
    card.className = 'testimonial-card';
    card.setAttribute('aria-label', `Testimonial from ${t.name}`);

    // Stars
    const starsDiv = document.createElement('div');
    starsDiv.className = 'testimonial-stars';
    starsDiv.setAttribute('aria-label', `${t.rating} out of 5 stars`);
    starsDiv.textContent = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    card.appendChild(starsDiv);

    // Comment (Escaped safely)
    const commentP = document.createElement('p');
    commentP.className = 'testimonial-text';
    commentP.textContent = t.comment;
    card.appendChild(commentP);

    // Author block
    const authorDiv = document.createElement('div');
    authorDiv.className = 'testimonial-author';

    const avatar = document.createElement('div');
    avatar.className = 'author-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = (t.name.charAt(0) || 'R').toUpperCase();
    authorDiv.appendChild(avatar);

    const authorInfo = document.createElement('div');
    const nameEl = document.createElement('div');
    nameEl.className = 'author-name';
    nameEl.textContent = t.name;
    authorInfo.appendChild(nameEl);

    if (t.area) {
      const locEl = document.createElement('div');
      locEl.className = 'author-loc';
      locEl.textContent = t.area;
      authorInfo.appendChild(locEl);
    }
    authorDiv.appendChild(authorInfo);
    card.appendChild(authorDiv);

    slider.appendChild(card);

    // Dot navigation button
    const dot = document.createElement('button');
    dot.className = `slider-dot ${i === sliderIndex ? 'active' : ''}`;
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', String(i === sliderIndex));
    dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
    dot.dataset.i = String(i);
    dot.addEventListener('click', () => {
      sliderIndex = i;
      updateSlider();
    });
    dots.appendChild(dot);
  });

  updateSlider();
}

function updateSlider() {
  const slider = $('#testimonials-slider');
  if (!slider) return;

  const cards = $$('.testimonial-card', slider);
  if (!cards.length) return;

  if (sliderIndex >= cards.length) sliderIndex = 0;
  const cardW = cards[0].offsetWidth + 16; // gap
  slider.style.transform = `translateX(-${sliderIndex * cardW}px)`;

  $$('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === sliderIndex);
    dot.setAttribute('aria-selected', String(i === sliderIndex));
  });
}

function initSlider() {
  $('#slider-prev')?.addEventListener('click', () => {
    if (!approvedTestimonials.length) return;
    sliderIndex = (sliderIndex - 1 + approvedTestimonials.length) % approvedTestimonials.length;
    updateSlider();
  });

  $('#slider-next')?.addEventListener('click', () => {
    if (!approvedTestimonials.length) return;
    sliderIndex = (sliderIndex + 1) % approvedTestimonials.length;
    updateSlider();
  });

  // Auto-advance if multiple approved reviews exist
  setInterval(() => {
    if (approvedTestimonials.length > 1) {
      sliderIndex = (sliderIndex + 1) % approvedTestimonials.length;
      updateSlider();
    }
  }, 6000);
}

/* ─────────────────────────────────────────────────────────────────
   FEEDBACK QR CODE GENERATOR, VALIDATOR & HIGH-RES PNG DOWNLOAD
   - Auto-detects live URL or uses CONFIG.siteUrl if provided
   - Returns null on file://, localhost, 127.0.0.1, and private IPs
   - Displays clear local preview notice when null
   - Error correction level M, solid black on pure white, quiet zone >= 4 modules
   - Sizing: >= 220px on-screen, >= 1024x1024 crisp PNG export
   - In-page decoding verification via jsQR with console warning on difference
   - Displays exact encoded link under QR with Copy link button
   - Syncs getFeedbackUrl() with "Rate Us Online" and feedback buttons
───────────────────────────────────────────────────────────────── */
function isLocalOrPrivateHost(hostname) {
  if (!hostname) return true;
  const host = hostname.toLowerCase().trim();
  if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1') return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (host.endsWith('.local') || host.endsWith('.test') || host.endsWith('.internal')) return true;
  return false;
}

function getFeedbackUrl() {
  // 1. If CONFIG.siteUrl is a non-empty string, use it (remove any trailing slash)
  if (CONFIG.siteUrl && typeof CONFIG.siteUrl === 'string' && CONFIG.siteUrl.trim() !== '') {
    const raw = CONFIG.siteUrl.trim().replace(/\/+$/, '');
    try {
      const parsed = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
      if (parsed.protocol === 'file:' || isLocalOrPrivateHost(parsed.hostname)) {
        return null;
      }
      const pathname = parsed.pathname.replace(/\/+$/, '');
      return `${parsed.origin}${pathname}/feedback.html`;
    } catch (_) {
      return null;
    }
  }

  // 2. Return null if running from file://, localhost, 127.0.0.1, or private network address
  if (typeof window === 'undefined' || !window.location) return null;
  if (window.location.protocol === 'file:' || !window.location.origin || window.location.origin === 'null') {
    return null;
  }
  if (isLocalOrPrivateHost(window.location.hostname)) {
    return null;
  }

  // 3. Otherwise use window.location.origin plus folder path of current page
  const folder = (window.location.pathname || '/').replace(/\/[^/]*$/, '');
  const urlString = `${window.location.origin}${folder}/feedback.html`;
  try {
    const parsed = new URL(urlString);
    return parsed.href;
  } catch (_) {
    return null;
  }
}

function verifyQRWithJsQR(canvas, expectedUrl) {
  if (typeof jsQR === 'undefined') {
    console.warn('[QR Verification] jsQR library is not loaded');
    return false;
  }
  try {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const decoded = jsQR(imgData.data, imgData.width, imgData.height);
    if (!decoded || decoded.data !== expectedUrl) {
      console.warn('[QR Verification Warning] Decoded text differs from getFeedbackUrl()!', {
        expected: expectedUrl,
        decoded: decoded ? decoded.data : null
      });
      return false;
    }
    console.log('[QR Verification Passed] Decoded text matches getFeedbackUrl():', decoded.data);
    return true;
  } catch (err) {
    console.warn('[QR Verification Warning] Exception while decoding with jsQR:', err);
    return false;
  }
}

function initFeedbackQR() {
  const qrContainer = $('#testimonials-qr-box');
  const localNotice = $('#qr-local-notice');
  const linkBox = $('#qr-link-box');
  const encodedUrlEl = $('#qr-encoded-url');
  const copyBtn = $('#btn-copy-qr-link');
  const downloadBtn = $('#btn-download-qr');
  if (!qrContainer) return;

  const feedbackUrl = getFeedbackUrl();

  // 5. Apply the same getFeedbackUrl() logic to "Rate Us Online" and feedback buttons
  const feedbackTarget = feedbackUrl || 'feedback.html';
  $$('a[href*="feedback.html"]').forEach(link => {
    link.href = feedbackTarget;
  });

  // 3. QR behaviour:
  // If getFeedbackUrl() returns null (local preview), do NOT generate a scannable QR.
  // Show clear notice in place of QR: "QR will work after the website is deployed online.
  // Deploy to Netlify, then download the QR from the live site." in English and Tamil,
  // and disable the Download QR button.
  if (!feedbackUrl) {
    qrContainer.innerHTML = '';
    if (localNotice) localNotice.hidden = false;
    if (linkBox) linkBox.hidden = true;
    if (downloadBtn) {
      downloadBtn.disabled = true;
      downloadBtn.setAttribute('aria-disabled', 'true');
      downloadBtn.classList.add('btn-disabled');
      downloadBtn.onclick = (e) => {
        e.preventDefault();
      };
    }
    console.info('[QR Code] Running in local preview mode. QR generation paused until deployed online.');
    return;
  }

  // When live: hide local notice and enable download button
  if (localNotice) localNotice.hidden = true;
  if (downloadBtn) {
    downloadBtn.disabled = false;
    downloadBtn.removeAttribute('aria-disabled');
    downloadBtn.classList.remove('btn-disabled');
  }

  // Under the QR, show the exact link it encodes as small text, and add a "Copy link" button
  if (linkBox && encodedUrlEl) {
    linkBox.hidden = false;
    encodedUrlEl.textContent = feedbackUrl;
    encodedUrlEl.title = feedbackUrl;
  }
  if (copyBtn) {
    copyBtn.onclick = () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(feedbackUrl).then(() => {
          showCopiedFeedback(copyBtn);
        }).catch(() => {
          fallbackCopyText(feedbackUrl, copyBtn);
        });
      } else {
        fallbackCopyText(feedbackUrl, copyBtn);
      }
    };
  }

  function showCopiedFeedback(btn) {
    const textSpan = $('#copy-qr-link-text');
    const originalText = textSpan ? textSpan.textContent : 'Copy link';
    if (textSpan) textSpan.textContent = t('qr_copied') || 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      if (textSpan) textSpan.textContent = originalText;
      btn.classList.remove('copied');
    }, 2000);
  }

  function fallbackCopyText(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showCopiedFeedback(btn);
    } catch (_) {
      prompt('Copy this feedback link:', text);
    }
    document.body.removeChild(ta);
  }

  // Generate QR code using error correction level M
  if (typeof QRCode === 'undefined') {
    console.warn('[QR Code] QRCode library is not loaded');
    return;
  }

  const tempDiv = document.createElement('div');
  const qrObj = new QRCode(tempDiv, {
    text: feedbackUrl,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#FFFFFF',
    correctLevel: QRCode.CorrectLevel.M
  });

  const qrModel = qrObj._oQRCode;
  if (!qrModel) {
    console.warn('[QR Code] Failed to construct QR model');
    return;
  }

  const moduleCount = qrModel.getModuleCount();
  const isDark = (r, c) => qrModel.isDark(r, c);

  // Quality settings:
  // - Error correction level M (set above)
  // - Solid black on pure white background
  // - Quiet zone of at least 4 modules around the QR
  // - On-screen size at least 220px
  const quietModules = 4;
  const totalModules = moduleCount + (quietModules * 2);
  const modulePixelSize = Math.max(6, Math.ceil(220 / totalModules));
  const canvasSize = totalModules * modulePixelSize;

  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', `Feedback QR Code pointing to ${feedbackUrl}`);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // Pure white background + quiet zone
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  // Solid black modules
  ctx.fillStyle = '#000000';
  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      if (isDark(r, c)) {
        ctx.fillRect(
          (c + quietModules) * modulePixelSize,
          (r + quietModules) * modulePixelSize,
          modulePixelSize,
          modulePixelSize
        );
      }
    }
  }

  qrContainer.innerHTML = '';
  qrContainer.appendChild(canvas);

  // Requirement 6: Decode the QR with jsQR and log console warning if decoded differs from getFeedbackUrl()
  verifyQRWithJsQR(canvas, feedbackUrl);

  // Download handler
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      downloadPrintableQR(feedbackUrl, qrModel);
    };
  }
}

function downloadPrintableQR(targetUrl, qrModel) {
  // Export the PNG at 1024x1024 or larger with crisp (non-smoothed) pixels
  const exportW = 1024;
  const exportH = 1200; // >= 1024 on both dimensions

  const canvas = document.createElement('canvas');
  canvas.width = exportW;
  canvas.height = exportH;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Crisp pixel rendering without interpolation
  ctx.imageSmoothingEnabled = false;

  // Pure white canvas
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, exportW, exportH);

  // QR rendering parameters: at least 4 modules quiet zone
  const quietModules = 4;
  const moduleCount = qrModel.getModuleCount();
  const totalModules = moduleCount + (quietModules * 2);

  // Module size for high-res export
  const modulePixelSize = Math.max(16, Math.floor(740 / totalModules));
  const qrPixelSize = totalModules * modulePixelSize;
  const qrStartX = Math.round((exportW - qrPixelSize) / 2);
  const qrStartY = 60;

  // Draw pure white background for QR area
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(qrStartX, qrStartY, qrPixelSize, qrPixelSize);

  // Draw solid black modules
  ctx.fillStyle = '#000000';
  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      if (qrModel.isDark(r, c)) {
        ctx.fillRect(
          qrStartX + (c + quietModules) * modulePixelSize,
          qrStartY + (r + quietModules) * modulePixelSize,
          modulePixelSize,
          modulePixelSize
        );
      }
    }
  }

  // ── TEXT OUTSIDE THE QR AREA, BELOW IT ON A WHITE CANVAS ──
  const textStartY = qrStartY + qrPixelSize + 40;

  // Shop Name
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.font = 'bold 44px "Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('RAPHEL PRINTERS', exportW / 2, textStartY + 35);

  // "Scan to give feedback" text
  ctx.fillStyle = '#15120F';
  ctx.font = '600 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('Scan to give feedback', exportW / 2, textStartY + 85);

  // Tamil subtitle
  ctx.fillStyle = '#444444';
  ctx.font = '500 24px "Noto Sans Tamil", sans-serif';
  ctx.fillText('கருத்து தெரிவிக்க ஸ்கேன் செய்யவும்', exportW / 2, textStartY + 125);

  // Contact & Address
  ctx.fillStyle = '#666666';
  ctx.font = '400 20px sans-serif';
  ctx.fillText('41, Perumal Sannathi St, Meenakshipuram, Tirunelveli', exportW / 2, textStartY + 175);
  ctx.fillText('Phone / WhatsApp: +91 98421 77118', exportW / 2, textStartY + 205);

  // Verify the high-resolution export canvas with jsQR
  if (typeof jsQR !== 'undefined') {
    try {
      const expData = ctx.getImageData(qrStartX, qrStartY, qrPixelSize, qrPixelSize);
      const decodedExp = jsQR(expData.data, expData.width, expData.height);
      if (!decodedExp || decodedExp.data !== targetUrl) {
        console.warn('[Export QR Verification Warning] Decoded text differs from intended URL!', {
          expected: targetUrl,
          decoded: decodedExp ? decodedExp.data : null
        });
      }
    } catch (_) {}
  }

  // Trigger crisp PNG download
  const link = document.createElement('a');
  link.download = 'raphel-printers-feedback-qr.png';
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ─────────────────────────────────────────────────────────────────
   ANIMATED COUNTERS
───────────────────────────────────────────────────────────────── */
function animateCounters() {
  if (countersStarted) return;
  countersStarted = true;

  $$('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    const isLarge = target > 1000;

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = isLarge ? value.toLocaleString('en-IN') : value;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isLarge ? target.toLocaleString('en-IN') : target;
    }

    requestAnimationFrame(step);
  });
}

/* ─────────────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────────────── */
function observeReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (prefersReduced) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
        } else {
          entry.target.classList.add('revealed');
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('[data-reveal]').forEach(el => revealObserver.observe(el));

  // Counter observer
  const counterSection = $('#why-us');
  if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        counterObserver.unobserve(counterSection);
      }
    }, { threshold: 0.3 });
    counterObserver.observe(counterSection);
  }
}

/* ─────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────────────────────────── */
function initProgressBar() {
  const bar = $('#progress-bar');
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = docH > 0 ? Math.round((scrollTop / docH) * 100) : 0;
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', pct);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ─────────────────────────────────────────────────────────────────
   HEADER SCROLL EFFECT
───────────────────────────────────────────────────────────────── */
function initHeaderScroll() {
  const header = $('#site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────────
   HAMBURGER / MOBILE NAV
───────────────────────────────────────────────────────────────── */
function initMobileNav() {
  const toggle = $('#menu-toggle');
  const nav    = $('#main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav on link click
  $$('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
}

/* ─────────────────────────────────────────────────────────────────
   SMOOTH SCROLL for anchor links
───────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   QUOTE FORM → WhatsApp
───────────────────────────────────────────────────────────────── */
function initQuoteForm() {
  const form = $('#quote-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name     = form.querySelector('[name="name"]').value.trim();
    const service  = form.querySelector('[name="service"]').value;
    const qty      = form.querySelector('[name="quantity"]').value.trim();
    const lang     = form.querySelector('[name="language"]:checked')?.value || 'Tamil & English';
    const message  = form.querySelector('[name="message"]').value.trim();

    // Validate required
    if (!name) { form.querySelector('[name="name"]').focus(); return; }
    if (!service) { form.querySelector('[name="service"]').focus(); return; }

    // Build WhatsApp message
    const lines = [
      `Hello Raphel Printers! I'd like a quote for the following:`,
      ``,
      `👤 Name: ${name}`,
      `🖨️ Service: ${service}`,
      qty      ? `📦 Quantity: ${qty}` : '',
      `🔤 Language: ${lang}`,
      message  ? `📝 Details: ${message}` : '',
    ].filter(Boolean).join('\n');

    window.open(waLink(lines), '_blank', 'noopener,noreferrer');
  });
}

/* ─────────────────────────────────────────────────────────────────
   DESKTOP CALL NOW MODAL (ACCESSIBLE + FOCUS TRAP + CLIPBOARD)
───────────────────────────────────────────────────────────────── */
function initDesktopCallModal() {
  const modal = $('#call-modal');
  const closeBtn = $('#call-modal-close');
  const copyBtn = $('#call-modal-copy-btn');
  const copyText = $('#copy-btn-text');
  const copyIcon = $('#copy-btn-icon');
  if (!modal || !closeBtn || !copyBtn) return;

  const PHONE_NUMBER = '9842177118';
  let lastActiveElement = null;
  let copyResetTimer = null;

  // Detect devices with mouse/fine pointer and hover (desktop)
  function isDesktopWithFinePointer() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function openCallModal() {
    lastActiveElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    // Focus the copy button inside modal for instant keyboard interaction
    setTimeout(() => {
      copyBtn.focus();
    }, 50);
  }

  function closeCallModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (copyResetTimer) clearTimeout(copyResetTimer);
    resetCopyBtn();

    // Restore previously focused element
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function resetCopyBtn() {
    if (!copyText || !copyIcon) return;
    copyText.textContent = t('call_modal_copy');
    copyBtn.style.background = '';
    copyIcon.innerHTML = `
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    `;
  }

  // Intercept click on Call Now buttons ONLY on desktop
  // On mobile / touch devices, do not intercept; let tel: dial directly!
  document.addEventListener('click', e => {
    const callLink = e.target.closest('a[href^="tel:"]');
    if (!callLink) return;

    // Mobile / touch devices dial directly
    if (!isDesktopWithFinePointer()) {
      return;
    }

    // Desktop: prevent default action and open modal
    e.preventDefault();
    openCallModal();
  });

  // Copy number to clipboard with fallback
  copyBtn.addEventListener('click', async () => {
    let success = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PHONE_NUMBER);
        success = true;
      } else {
        // Fallback for older browsers or non-secure contexts
        const tempInput = document.createElement('textarea');
        tempInput.value = PHONE_NUMBER;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
    } catch (_) {
      success = false;
    }

    if (success) {
      copyText.textContent = t('call_modal_copied');
      copyBtn.style.background = '#25D366';
      copyIcon.innerHTML = `<polyline points="20 6 9 17 4 12" stroke-width="2.5"></polyline>`;

      if (copyResetTimer) clearTimeout(copyResetTimer);
      copyResetTimer = setTimeout(resetCopyBtn, 2500);
    }
  });

  // Close with close button
  closeBtn.addEventListener('click', closeCallModal);

  // Close on clicking outside the card (overlay backdrop)
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeCallModal();
    }
  });

  // Close on Escape & Accessibility Focus Trap
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;

    if (e.key === 'Escape') {
      closeCallModal();
      return;
    }

    // Trap focus inside modal
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });
}

/* ─────────────────────────────────────────────────────────────────
   FOOTER COPYRIGHT YEAR
───────────────────────────────────────────────────────────────── */
function setYear() {
  const el = $('#copy-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Restore language preference
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('raphel_lang') || 'en'; } catch (_) {}

  // Render dynamic content
  setLanguage(savedLang);

  // UI inits
  initProgressBar();
  initHeaderScroll();
  initMobileNav();
  initSmoothScroll();
  initLightbox();
  initSlider();
  initQuoteForm();
  initFeedbackQR();
  fetchApprovedTestimonials();
  initDesktopCallModal();
  observeReveal();
  setYear();
  updateOpenBadge();

  // Update open badge every minute
  setInterval(updateOpenBadge, 60000);

  // Language toggle button
  $('#lang-toggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ta' : 'en');
  });

  // Slider resize handler
  window.addEventListener('resize', () => {
    updateSlider();
  }, { passive: true });
});
