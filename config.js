/* NK Food Agro - connect these services for production features.
   1) Create a Supabase project and put the Project URL + anon key below.
   2) For order emails, create an EmailJS email service/template and fill the three fields.
   The website still works as a catalog/cart without these values. */
window.NK_CONFIG = {
  supabaseUrl: "YOUR_SUPABASE_PROJECT_URL",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
  emailjsPublicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  emailjsServiceId: "YOUR_EMAILJS_SERVICE_ID",
  emailjsOrderTemplateId: "YOUR_EMAILJS_ORDER_TEMPLATE_ID",
  adminEmail: "care@nkfoodagro.com"
};
