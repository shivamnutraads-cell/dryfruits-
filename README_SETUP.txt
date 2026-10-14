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
