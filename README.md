# Raphel Printers — Website

A production-ready, single-page advertisement website for **Raphel Printers**, Tirunelveli.  
Built with plain HTML, CSS, and vanilla JavaScript — zero dependencies, zero build step.

---

## 📁 File Structure

```
Raphel/
├── index.html          ← Main website (all sections)
├── feedback.html       ← Customer feedback & review page (5-star rating + spam protection)
├── firebase-config.js  ← Firebase credentials (TODO: paste your Firebase keys here)
├── firestore.rules     ← Security rules for Firestore (copy & paste to Firebase Console)
├── style.css           ← Full stylesheet (design system)
├── script.js           ← All JS + CONFIG object (edit content here)
├── sitemap.xml         ← For Google Search Console
├── robots.txt          ← For search engine crawlers
├── README.md           ← This file
└── images/
    ├── logo.png        ← TODO: Replace with your actual logo
    ├── shop-front.jpg  ← TODO: Replace with a real shop photo
    ├── owner.jpg       ← TODO: Replace with a real owner photo
    ├── hero-stack.jpg  ← Hero section visual (auto-used in CSS)
    ├── gallery-1.jpg   ← Wedding invitations sample
    ├── gallery-2.jpg   ← Visiting cards sample
    ├── gallery-3.jpg   ← Brochures sample
    ├── gallery-4.jpg   ← Stickers sample
    ├── gallery-5.jpg   ← Menu cards sample
    ├── gallery-6.jpg   ← Notebooks sample
    ├── gallery-7.jpg   ← Additional gallery image
    ├── gallery-8.jpg   ← Additional gallery image
    └── gallery-9.jpg to gallery-12.jpg  ← TODO: Add more photos here
```

---

## ✏️ How to Edit Content

All editable content lives in the **`CONFIG` object** at the top of `script.js`.

### Change Phone Number / WhatsApp
```js
phone:    '+919842177118',
whatsapp: '919842177118',   // No '+' prefix, used in wa.me links
```

### Change Address / Instagram
```js
address:   '41, Perumal Sannathi St...',
instagram: 'https://www.instagram.com/raphel_printers',
```

### Change Business Hours
```js
openHour:  10,   // 10 AM (24h)
closeHour: 20,   // 8 PM (24h)
```

### Add / Edit a Service
In the `services` array, each object has:
```js
{
  icon:   '💌',                       // Emoji icon
  nameEn: 'Wedding Invitations',      // English name
  nameTa: 'திருமண அழைப்பிதழ்கள்',   // Tamil name
  descEn: 'English description',
  descTa: 'Tamil description',
}
```

### Add Gallery Photos
Simply add a new line to the `gallery` array:
```js
{ src: 'images/gallery-9.jpg', altEn: 'Photo description', altTa: 'தமிழ் விளக்கம்' },
```
Then drop the image file into the `/images/` folder.

### Add / Edit Testimonials (Real Customer Feedback System)
Fake testimonials have been completely removed. Customer reviews are now managed through Firebase Firestore:
- Customers rate and review via `feedback.html` or by scanning the on-site QR code.
- Submitted reviews are stored with `approved: false`.
- Only reviews you approve (`approved: true`) are displayed on the website.
- If there are no reviews yet, a friendly empty-state card invite is shown.

---

## 🔥 Step-by-Step Firebase Feedback System Setup

Follow these simple steps to connect your website to your own free Firebase account:

### Step 1: Create a Free Firebase Project
1. Open [console.firebase.google.com](https://console.firebase.google.com/) and sign in with your Google Account.
2. Click **"Add project"** (or "Create a project").
3. Name it **"Raphel Printers"** (or anything you prefer) and click **Continue**.
4. Disable or enable Google Analytics (optional) and click **Create project**.

### Step 2: Enable Cloud Firestore Database
1. In the left navigation menu, click **Build → Firestore Database**.
2. Click **"Create database"**.
3. Choose a location closest to your customers (e.g. `asia-south1` Mumbai).
4. For security rules, select **"Start in production mode"** and click **Create**.

### Step 3: Register Web App & Get Config Keys
1. In project overview, click the Web icon (**`</>`**) to register a web app.
2. App nickname: **"Raphel Printers Web"** → click **Register app**.
3. You will see a `firebaseConfig` object like:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "raphel-printers.firebaseapp.com",
     projectId: "raphel-printers",
     storageBucket: "raphel-printers.appspot.com",
     messagingSenderId: "123456789...",
     appId: "1:123456789:web:..."
   };
   ```
4. Open `firebase-config.js` in your project folder and replace the `TODO` placeholders with your real values.

### Step 4: Publish Firestore Security Rules
1. In Firebase Console, go to **Firestore Database → Rules** tab.
2. Replace all existing text with the exact contents of `firestore.rules` (included in your project):
   - Allows public creation of feedback with validation (`approved: false`, rating 1–5, name ≤ 60 chars, comment ≤ 500 chars).
   - Allows public read ONLY for documents where `approved == true`.
   - Denies all public edit and delete.
3. Click **"Publish"**.

### Step 5: How to Approve Customer Feedback (Make it appear on the website)
1. Go to **Firebase Console → Firestore Database → Data**.
2. Click on the **`feedback`** collection.
3. You will see customer submissions as individual documents.
4. Click on any review document:
   - Find the field named **`approved`** (currently `false`).
   - Click the pencil edit icon next to `false` and change it to **`true`**.
   - Click **Update**.
5. Hard-refresh your website — that customer's review will now instantly appear in the "What Our Clients Say" section!

### Step 6: Google Review Link (Optional)
When customers leave a 4-star or 5-star rating on `feedback.html`, a prompt invites them to also review Raphel Printers on Google.
To link your Google Business profile:
1. Open `script.js` and `feedback.html`.
2. Replace `CONFIG.googleReviewUrl` with your Google Business review link (e.g. `https://g.page/r/YOUR_ID/review` or your Google Maps Place review URL).

---

## 📱 QR Code for Counter Displays & Invoices
- The website automatically generates a QR code pointing directly to `feedback.html`.
- Click **"Download QR (PNG)"** in the testimonials section to download a high-resolution 1024×1200px printable card featuring the Raphel Printers branding, phone number, and scan prompt. Ready to print and place on your counter!
- **Important:** After deploying, open the live site, then download the QR from there. Do not print QR codes made from a local preview. If you later move to a custom domain, download and print a new QR.

---

## 🖼️ Replacing Images

1. Drop your new image into the `/images/` folder.
2. Name it according to the slot:
   - `logo.png` — Your shop logo (transparent background recommended, min 200×200)
   - `shop-front.jpg` — Shop exterior photo
   - `owner.jpg` — Photo of M. Ramakrishnan
   - `gallery-1.jpg` to `gallery-12.jpg` — Work samples
3. Images with broken paths show a clean fallback — no broken-image icons.

---

## 🚀 Deploying to Netlify (Recommended — Free)

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub.
2. Click **"Add new site" → "Deploy manually"**.
3. Drag and drop your entire `Raphel/` folder onto the Netlify UI.
4. Netlify gives you a free URL like `https://raphel-printers.netlify.app`.
5. To set a custom domain (e.g. `raphelprinters.com`):
   - Go to **Site Settings → Domain Management → Add custom domain**.
   - Update DNS records as directed.
6. **After deployment**, update `TODO` lines in:
   - `index.html` — `og:url` and `canonical` meta tags
   - `sitemap.xml` — `<loc>` URL
   - `robots.txt` — Sitemap URL
   - `script.js` → `CONFIG.siteUrl` (Optional. Leave empty to auto-detect your live Netlify domain automatically. Set only if using a custom domain.)
7. **Download Your Live QR:** After deploying, open the live site, then download the QR from there. Do not print QR codes made from a local preview. If you later move to a custom domain, download and print a new QR.

---

## 🚀 Deploying to GitHub Pages (Also Free)

1. Create a repository on [github.com](https://github.com).
2. Upload all files (including the `images/` folder) to the repo.
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site will be live at `https://yourusername.github.io/repo-name/`.

---

## 🔧 Google Maps Embed (TODO)

The contact section uses a generic map. To show your exact shop location:

1. Go to [maps.google.com](https://maps.google.com) and search:  
   **"41 Perumal Sannathi St Meenakshipuram Tirunelveli"**
2. Click **Share → Embed a map → Copy HTML**.
3. In `index.html`, find the `<iframe>` inside `<div class="contact-map">` and replace it with the copied code.

---

## 🌐 Adding to Google Search Console

1. Deploy the site and get your live URL.
2. Go to [search.google.com/search-console](https://search.google.com/search-console).
3. Add your property (URL prefix).
4. Submit your `sitemap.xml` URL: `https://yourdomain.com/sitemap.xml`.

---

## ✅ Features Checklist

- [x] Mobile-first, responsive (tested at 360px–1440px)
- [x] `tel:` links for click-to-call
- [x] `wa.me` links with pre-filled messages per service
- [x] Mobile sticky Call + WhatsApp bar
- [x] Desktop floating Call + WhatsApp buttons
- [x] EN / தமிழ் language toggle (stored in localStorage)
- [x] Live Open/Closed badge (10 AM – 8 PM IST)
- [x] Animated stat counters
- [x] Scroll-reveal animations
- [x] Testimonial slider loaded from verified Firebase customer reviews
- [x] Real customer feedback page (`feedback.html`) with 5-star rating & spam defense
- [x] On-site QR code generation & high-res printable PNG export
- [x] Firestore security rules with validation (`firestore.rules`)
- [x] Quote form → WhatsApp (no backend)
- [x] Lightbox gallery
- [x] Scroll progress bar (press roller effect)
- [x] Halftone dot pattern + CMYK crop marks
- [x] JSON-LD LocalBusiness schema
- [x] Open Graph + Twitter card meta
- [x] Lazy-load images
- [x] WCAG AA colour contrast
- [x] Keyboard navigation
- [x] Reduced motion support
- [x] `sitemap.xml` and `robots.txt`

---

## 📞 Business Details (Quick Reference)

| Field | Value |
|---|---|
| Name | Raphel Printers |
| Owner | M. Ramakrishnan |
| Phone / WA | +91 9842177118 |
| Address | 41, Perumal Sannathi St, Meenakshipuram, Tirunelveli – 627001 |
| Hours | 9 AM – 8 PM, Mon–Sat (Sunday: Closed) |
| Instagram | [@raphel_printers](https://www.instagram.com/raphel_printers) |
