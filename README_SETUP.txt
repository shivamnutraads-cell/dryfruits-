NK FOOD AGRO - PREMIUM ECOMMERCE SETUP
======================================

WHAT'S INCLUDED
- Royal curtain opening + premium scroll/hover animations
- Detailed product pages with 2-image gallery
- Product-specific live reviews area
- Google account login UI through Supabase Auth
- Customer checkout form with full delivery details
- Orders saved to Supabase
- Order email integration through EmailJS
- Verified-purchase review logic
- Responsive mobile layout

IMPORTANT
A static GitHub website alone cannot securely provide Google login, a real live review database, or reliable order storage/email. This version is wired for Supabase + EmailJS. You must add your own project credentials in config.js.

1) SUPABASE
- Create a Supabase project.
- In Authentication > Providers, enable Google and configure Google's OAuth credentials/redirect URL as instructed by Supabase.
- Open SQL Editor and run SUPABASE_SETUP.sql.
- Copy your Project URL and anon key into config.js:
  supabaseUrl: "..."
  supabaseAnonKey: "..."
- Add your deployed website URL to Supabase Auth redirect URLs.

2) EMAILJS (ORDER EMAIL)
- Create an EmailJS account and an email service connected to the email inbox where you want orders.
- Create an order template with these variables:
  {{customer_name}}
  {{customer_email}}
  {{customer_phone}}
  {{address}}
  {{city}}
  {{state}}
  {{pincode}}
  {{landmark}}
  {{notes}}
  {{order_items}}
  {{order_total}}
  {{to_email}}
- Put the EmailJS public key, service id and template id in config.js.
- Set adminEmail to your real receiving email.

3) VERIFIED REVIEWS
- Customer must sign in with Google.
- Customer submits a review.
- Database checks whether that account has an order containing the product.
- New reviews are held with approved=false so you can moderate them.
- Approve genuine reviews in Supabase; then they appear live on the product page.

4) PRODUCT IMAGES
Keep exact filenames in assets/:
hero.jpg
benefits.png
makhana-250g.png
makhana-250g-2.png
makhana-500g.png
makhana-500g-2.png
makhana-combo.png
makhana-combo-2.png

Dry fruit/hamper products currently use placeholders. Replace those placeholder files with your real PNGs or update the paths in script.js.

5) DEPLOY
Upload the whole folder to GitHub Pages/your static hosting. Do not upload only index.html; config.js, script.js, style.css and assets are required.

SECURITY NOTE
Never put a Supabase service_role key in this website. Use only the anon/public key in config.js. Do not collect card/UPI passwords or other sensitive credentials in the checkout form.


6) SHEETDB ORDER SPREADSHEET
- The checkout sends each submitted order to the SheetDB API configured in config.js.
- In the connected Google Sheet, create a header row using these exact columns: order_ref, created_at, customer_name, phone, email, pincode, city, state, address, landmark, notes, items, total, payment_method, status, user_id.
- The configured endpoint is the one provided for this site. Keep the spreadsheet/API access restricted where possible because order rows contain customer contact and delivery information.
- An order confirmation page appears after the SheetDB or Supabase save succeeds.

7) CUSTOMER ORDER TRACKING
- Orders are also stored in Supabase for signed-in customers. Customer accounts show their order list and current status from public.orders.
- Run SUPABASE_SETUP.sql in the same Supabase project. Sign-in must be enabled for checkout as configured in this project.
- Update status for an order in Supabase Dashboard > Table Editor > orders (status values can include new, confirmed, processing, packed, shipped, out_for_delivery, delivered, cancelled). The customer sees the latest saved status after reopening My Account.
- The SheetDB spreadsheet is an order log; customer-facing live tracking is read from Supabase and requires the order row to have saved successfully there.

8) POLICY PAGES AND INTRO JAR
- Shipping Policy: shipping-policy.html
- Returns & Refunds: refund-policy.html
- Privacy Policy: privacy-policy.html
- The intro jar illustration is assets/dry-fruit-jar.svg. It is an SVG asset, so upload it as-is; no separate PNG conversion is needed.
