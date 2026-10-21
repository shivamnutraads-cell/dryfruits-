const PRODUCTS = [
  {
    id: 1,
    category: "Makhana",
    name: "Premium Makhana 100gm",
    price: 145,
    mrp: 299,
    discount: "25% OFF",
    weight: "100g",
    short: "Light, crunchy premium fox nuts for everyday snacking.",
    description: "Carefully selected makhana with a clean, crunchy bite. Packed hygienically for home, office and mindful snacking moments.",
    details: [
      "Premium selected fox nuts",
      "100g retail pack",
      "Hygienically packed",
      "COD available"
    ],
    images: [
      "assets/makhana-250g.png",
      "assets/makhana-250g-2.png",
      "assets/makhana-250g-3.png"
    ]
  },

  {
    id: 2,
    category: "Makhana",
    name: "Black Pepper & Saleted Makhana",
    price: 160,
    mrp: 299,
    discount: "31% OFF",
    weight: "65g",
    short: "A bigger family pack for regular snacking.",
    description: "A generous 200g pack of premium makhana, made for families who want a convenient pantry staple with a satisfying crunch.",
    details: [
      "Premium selected fox nuts",
      "65g family pack",
      "Freshness-focused packing",
      "COD available"
    ],
    images: [
      "assets/makhana-500g.png",
      "assets/makhana-500g-2.png",
      "assets/makhana-500g-3.png"
    ]
  },

  {
    id: 3,
    category: "Makhana",
    name: "Punjabi Tadka Makhana",
    price: 160,
    mrp: 499,
    discount: "17% OFF",
    weight: "65g total",
    short: "A convenient for stocking up.",
    description: "A value-focused makhana combo for your home pantry, gifting or regular snack routine.",
    details: [
      "Makhana pack",
      "65g total",
      "Premium presentation",
      "COD available"
    ],
    images: [
      "assets/makhana-combo.png",
      "assets/makhana-combo-2.png",
      "assets/makhana-combo-3.png"
    ]
  },

  {
    id: 4,
    category: "Makhana",
    name: "Peri Peri makhana",
    price: 160,
    mrp: 499,
    discount: "17% OFF",
    weight: "65g total",
    short: "A convenient for stocking up.",
    description: "A value-focused makhana combo for your home pantry, gifting or regular snack routine.",
    details: [
      "Makhana pack",
      "65g total",
      "Premium presentation",
      "COD available"
    ],
    images: [
      "assets/makhana-peri.png",
      "assets/makhana-peri-2.png",
      "assets/makhana-peri-3.png"
    ]
  },

  {
    id: 5,
    category: "Makhana",
    name: "Cream n Onion Makhna",
    price: 160,
    mrp: 499,
    discount: "17% OFF",
    weight: "65g total",
    short: "A convenient for stocking up.",
    description: "A value-focused makhana combo for your home pantry, gifting or regular snack routine.",
    details: [
      "Makhana pack",
      "65g total",
      "Premium presentation",
      "COD available"
    ],
    images: [
      "assets/makhana-cream.png",
      "assets/makhana-cream-2.png",
      "assets/makhana-cream-3.png"
    ]
  },

  {
    id: 6,
    category: "Dry Fruits",
    name: "Premium Almonds",
    price: 199,
    mrp: 499,
    discount: "17% OFF",
    weight: "100gm",
    short: "Premium almonds for snacking and recipes.",
    description: "Selected almonds with a satisfying crunch. Great for direct snacking, breakfast bowls, desserts and everyday recipes.",
    details: [
      "100g pack",
      "Premium grade selection",
      "Resealable-style storage recommended",
      "COD available"
    ],
    images: [
      "assets/almonds.png",
      "assets/almonds-2.png",
      "assets/almonds-3.png"
    ]
  },

  {
    id: 7,
    category: "Dry Fruits",
    name: "Premium Cashews",
    price: 175,
    mrp: 399,
    discount: "21% OFF",
    weight: "100g",
    short: "Creamy, crunchy cashews for home and gifting.",
    description: "Premium cashews chosen for their creamy bite and crunch. A versatile pantry favourite for snacking and cooking.",
    details: [
      "100g pack",
      "Premium selection",
      "Ideal for snacking and cooking",
      "COD available"
    ],
    images: [
      "assets/cashews.png",
      "assets/cashews-2.png",
      "assets/cashews-3.png"
    ]
  },

  {
    id: 8,
    category: "Dry Fruits",
    name: "Dry Fruits Premium Mix",
    price: 168,
    mrp: 399,
    discount: "18% OFF",
    weight: "100g",
    short: "A curated mix of assorted dry fruits.",
    description: "A convenient assortment for those who like variety in one pack. Suitable for snacking, breakfast bowls and gifting.",
    details: [
      "100g assorted mix",
      "Curated assortment",
      "Gift-friendly",
      "COD available"
    ],
    images: [
      "assets/dry-fruits-mix.png",
      "assets/dry-fruits-mix-2.png",
      "assets/dry-fruits-mix-3.png"
    ]
  },

  {
    id: 9,
    category: "Dry Fruits",
    name: "Premium walnuts",
    price: 199,
    mrp: 499,
    discount: "17% OFF",
    weight: "200gm",
    short: "Premium walnuts for snacking and recipes.",
    description: "Selected walnuts with a satisfying crunch. Great for direct snacking, breakfast bowls, desserts and everyday recipes.",
    details: [
      "200gm pack",
      "Premium grade selection",
      "Resealable-style storage recommended",
      "COD available"
    ],
    images: [
      "assets/walnuts.png",
      "assets/walnuts-2.png",
      "assets/walnuts-3.png"
    ]
  },

  {
    id: 10,
    category: "Gift Hampers",
    name: "Royal Dry Fruit Hamper",
    price: 999,
    mrp: 1299,
    discount: "23% OFF",
    weight: "Premium Gift Box",
    short: "A premium hamper for celebrations and thoughtful gifting.",
    description: "A beautifully presented dry-fruit hamper designed for festive occasions, family celebrations and corporate-style gifting.",
    details: [
      "Premium gift presentation",
      "Curated dry-fruit assortment",
      "Occasion-ready packaging",
      "COD available"
    ],
    images: [
      "assets/royal-hamper.png",
      "assets/royal-hamper-2.png",
      "assets/royal-hamper-3.png"
    ]
  },

  {
    id: 11,
    category: "Gift Hampers",
    name: "Festive Makhana Hamper",
    price: 799,
    mrp: 999,
    discount: "20% OFF",
    weight: "Gift Pack",
    short: "A thoughtful makhana gift for festive moments.",
    description: "A festive hamper concept built around premium makhana, presented to make gifting simple, warm and memorable.",
    details: [
      "Makhana-focused gift pack",
      "Festive presentation",
      "Ready-to-gift concept",
      "COD available"
    ],
    images: [
      "assets/festive-hamper.png",
      "assets/festive-hamper-2.png",
      "assets/festive-hamper-3.png"
    ]
  },

  {
    id: 12,
    category: "Gift Hampers",
    name: "Premium Celebration Hamper",
    price: 1499,
    mrp: 1899,
    discount: "21% OFF",
    weight: "Luxury Gift Box",
    short: "A larger luxury-style assortment for special occasions.",
    description: "A premium assortment curated for birthdays, festivals, family occasions and special thank-you gifts.",
    details: [
      "Luxury-style gift box",
      "Curated assortment",
      "Celebration-ready",
      "COD available"
    ],
    images: [
      "assets/celebration-hamper.png",
      "assets/celebration-hamper-2.png",
      "assets/celebration-hamper-3.png"
    ]
  }
];

const DEMO_REVIEWS = [
  {
    product_id: 1,
    rating: 5,
    review: "Fresh, crunchy and nicely packed. Really liked the quality.",
    customer_name: "Aarav",
    verified_purchase: true
  },
  {
    product_id: 2,
    rating: 5,
    review: "Good quantity and the packaging was neat.",
    customer_name: "Neha",
    verified_purchase: true
  },
  {
    product_id: 4,
    rating: 4,
    review: "Almonds were fresh and arrived well packed.",
    customer_name: "Riya",
    verified_purchase: true
  }
];

let cart = JSON.parse(localStorage.getItem('nk_cart') || '[]');
let activeCategory = 'All';
let currentProduct = null;
let currentUser = null;
let sb = null;

const cfg = window.NK_CONFIG || {};

const configured =
  cfg.supabaseUrl &&
  !cfg.supabaseUrl.includes('YOUR_') &&
  cfg.supabaseAnonKey &&
  !cfg.supabaseAnonKey.includes('YOUR_');

function money(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

function escapeHtml(s = '') {
  return String(s).replace(/[&<>'"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c]));
}

function imgFallback(el) {
  if (el.dataset.fallbackDone) return;
  el.dataset.fallbackDone = '1';
  el.src = 'assets/makhana-500g.png';
}

document.addEventListener('error', e => {
  if (e.target.tagName === 'IMG') {
    imgFallback(e.target);
  }
}, true);

function productCard(p, i) {
  return `
    <article class="product-card scroll-reveal" style="--delay:${i * 0.06}s">
      <div class="product-image">
        <span class="tag">${escapeHtml(p.category.toUpperCase())}</span>
        <span class="quick-glow"></span>

        <img
          src="${p.images[0]}"
          alt="${escapeHtml(p.name)}"
          loading="lazy"
        >
      </div>

      <div class="product-info">
        <div class="stars">
          ★★★★★
          <span class="review-count" data-product="${p.id}"></span>
        </div>

        <h3>${escapeHtml(p.name)}</h3>

        <p>${escapeHtml(p.short)}</p>

        <div class="price">
          <strong>${money(p.price)}</strong>
          <del>${money(p.mrp)}</del>
          <b>${p.discount}</b>
        </div>

        <div class="card-actions">
          <button
            class="btn primary"
            onclick="openProduct(${p.id})"
          >
            View Details
          </button>

          <button
            class="mini-cart"
            onclick="addToCart(${p.id})"
            aria-label="Add to cart"
          >
            ＋
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const normalizedCategory = String(activeCategory || 'All').trim().toLowerCase();
  const list = normalizedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => String(p.category || '').trim().toLowerCase() === normalizedCategory);

  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(productCard).join('')
    : '<p class="empty category-empty">No products found in this category. Please choose another category.</p>';

  document.querySelectorAll('.filter[data-category]').forEach(b => {
    b.classList.toggle('active', String(b.dataset.category || '').trim().toLowerCase() === normalizedCategory);
  });

  // Register newly rendered cards so scroll-reveal CSS cannot leave them invisible.
  if (typeof setupScrollAnimations === 'function') setupScrollAnimations();
  try {
    if (typeof loadReviewCounts === 'function') loadReviewCounts();
  } catch (error) {
    console.warn('Review counts unavailable; products are still displayed.', error);
  }
}

function filterProducts(cat) {
  const valid = ['All', 'Makhana', 'Dry Fruits', 'Gift Hampers'];
  const requested = String(cat || 'All').trim().toLowerCase();
  activeCategory = valid.find(item => item.toLowerCase() === requested) || 'All';

  // Render the selected category first; reviews are optional and must not break filtering.
  const normalizedCategory = activeCategory.toLowerCase();
  const list = normalizedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => String(p.category || '').trim().toLowerCase() === normalizedCategory);
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : '<p class="empty category-empty">No products found in this category. Please choose another category.</p>';
  }
  // Re-observe the new product cards after every category change.
  if (typeof setupScrollAnimations === 'function') setupScrollAnimations();
  document.querySelectorAll('.filter[data-category]').forEach(button => {
    button.classList.toggle('active', String(button.dataset.category || '').trim().toLowerCase() === normalizedCategory);
  });
  try { if (typeof loadReviewCounts === 'function') loadReviewCounts(); } catch (error) { console.warn('Review counts unavailable; category filter still works.', error); }

  const shop = document.getElementById('shop');
  if (shop) shop.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return false;
}
window.filterProducts = filterProducts;

// Capture category clicks before other page handlers so the category UI always filters products.
document.addEventListener('click', event => {
  const button = event.target.closest('.category-card[data-category], .filter[data-category]');
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  filterProducts(button.dataset.category);
}, true);

function openProduct(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);

  if (!currentProduct) return;

  const p = currentProduct;

  document.getElementById('detailCategory').textContent = p.category;
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailPrice').textContent = money(p.price);
  document.getElementById('detailMrp').textContent = money(p.mrp);
  document.getElementById('detailDiscount').textContent = p.discount;
  document.getElementById('detailDescription').textContent = p.description;
  document.getElementById('detailWeight').textContent = p.weight;

  document.getElementById('detailPoints').innerHTML =
    p.details.map(x => `<li>✓ ${escapeHtml(x)}</li>`).join('');

  document.getElementById('detailImage').src = p.images[0];
  document.getElementById('detailImage').alt = p.name;

  document.getElementById('detailThumbs').innerHTML =
    p.images.map((src, i) => `
      <button
        class="thumb ${i ? '' : 'active'}"
        onclick="selectGallery('${src}',this)"
      >
        <img
          src="${src}"
          alt="${escapeHtml(p.name)} image ${i + 1}"
        >
      </button>
    `).join('');

  document.getElementById('detailCartBtn').onclick = () => {
    addToCart(p.id);
    closeProduct();
  };

  document.getElementById('productModal').classList.add('open');
  document.body.classList.add('locked');

  loadProductReviews(p.id);
}

function selectGallery(src, b) {
  document.getElementById('detailImage').src = src;

  document.querySelectorAll('.thumb').forEach(x => {
    x.classList.remove('active');
  });

  b.classList.add('active');
}

function closeProduct(e) {
  if (!e || e.target.id === 'productModal') {
    document.getElementById('productModal').classList.remove('open');
    document.body.classList.remove('locked');
  }
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) return;

  const x = cart.find(i => i.id === id);

  if (x) {
    x.qty++;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  toast('Added to cart ✓');
}

function saveCart() {
  localStorage.setItem('nk_cart', JSON.stringify(cart));
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function changeQty(id, d) {
  const x = cart.find(i => i.id === id);

  if (!x) return;

  x.qty += d;

  if (x.qty <= 0) {
    removeItem(id);
  } else {
    saveCart();
    renderCart();
  }
}

function renderCart() {
  const box = document.getElementById('cartItems');

  const count = cart.reduce(
    (s, x) => s + x.qty,
    0
  );

  const total = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = money(total);

  const ct = document.getElementById('checkoutTotal');

  if (ct) {
    ct.textContent = money(total);
  }

  box.innerHTML = cart.length
    ? cart.map(x => `
        <div class="cart-row">
          <div>
            <b>${escapeHtml(x.name)}</b>
            <small>${money(x.price)} each</small>

            <div class="qty">
              <button onclick="changeQty(${x.id},-1)">−</button>
              <span>${x.qty}</span>
              <button onclick="changeQty(${x.id},1)">+</button>
            </div>
          </div>

          <div>
            <b>${money(x.price * x.qty)}</b>
            <button
              class="remove"
              onclick="removeItem(${x.id})"
            >
              Remove
            </button>
          </div>
        </div>
      `).join('')
    : '<p class="empty">Your cart is empty.</p>';
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.body.classList.add('locked');
}

function closeCart(e) {
  if (!e || e.target.id === 'cartOverlay') {
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.classList.remove('locked');
  }
}

function checkout() {
  if (!cart.length) {
    toast('Add a product first');
    return;
  }

  if (configured && !currentUser) {
    toast('Please sign in with Google before checkout');
    openAccount();
    return;
  }

  document.getElementById('checkoutModal').classList.add('open');
  document.body.classList.add('locked');

  if (currentUser) {
    document.getElementById('orderEmail').value =
      currentUser.email || '';

    document.getElementById('orderName').value =
      currentUser.user_metadata?.full_name ||
      currentUser.user_metadata?.name ||
      '';
  }
}

function closeCheckout(e) {
  if (!e || e.target.id === 'checkoutModal') {
    document.getElementById('checkoutModal').classList.remove('open');
    document.body.classList.remove('locked');
  }
}

async function placeOrder(ev) {
  ev.preventDefault();
  const submitButton = ev.target.querySelector('[type="submit"]');
  if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Submitting order…'; }
  const form = new FormData(ev.target);
  const data = Object.fromEntries(form.entries());
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderRef = 'NK' + Date.now().toString().slice(-9) + Math.floor(Math.random() * 90 + 10);
  const items = cart.map(item => ({ id: item.id, name: item.name, qty: item.qty, price: item.price }));
  const order = { ...data, order_ref: orderRef, total, items, user_id: currentUser?.id || null };
  let sheetSaved = false;
  let supabaseSaved = false;
  let supabaseOrderId = null;

  try {
    if (cfg.sheetdbUrl) {
      const sheetRow = {
        order_ref: orderRef,
        created_at: new Date().toISOString(),
        customer_name: data.name,
        phone: data.phone,
        email: data.email,
        pincode: data.pincode,
        city: data.city,
        state: data.state,
        address: data.address,
        landmark: data.landmark || '',
        notes: data.notes || '',
        items: items.map(x => `${x.name} x${x.qty} (₹${x.price})`).join(' | '),
        total: total,
        payment_method: 'Cash on Delivery',
        status: 'new',
        user_id: order.user_id || ''
      };
      const response = await fetch(cfg.sheetdbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ data: [sheetRow] })
      });
      if (!response.ok) throw new Error('SheetDB returned HTTP ' + response.status);
      const result = await response.json();
      sheetSaved = Number(result?.created || result?.updated || 0) > 0 || result?.message === 'Created';
      if (!sheetSaved) throw new Error('SheetDB did not confirm the row was created');
    }
  } catch (err) {
    console.error('SheetDB order save failed', err);
  }

  if (configured && sb && currentUser) {
    try {
      const { data: saved, error } = await sb.from('orders').insert({
        user_id: order.user_id,
        customer_name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        landmark: data.landmark || '',
        notes: data.notes || '',
        items,
        total,
        status: 'new'
      }).select('id,created_at,status').single();
      if (error) throw error;
      supabaseSaved = true;
      supabaseOrderId = saved?.id || null;
    } catch (err) {
      console.error('Supabase order save failed', err);
    }
  }

  if (!sheetSaved && !supabaseSaved) {
    toast('Order save nahi hua. Please internet/connection check karke dobara try karein.');
    if (submitButton) { submitButton.disabled = false; submitButton.textContent = 'Place Order →'; }
    return;
  }

  order.supabase_order_id = supabaseOrderId;
  await sendOrderEmail(order);
  try {
    sessionStorage.setItem('nk_last_order', JSON.stringify({
      order_ref: orderRef, total, items, created_at: new Date().toISOString(),
      status: 'new', customer_name: data.name, email: data.email,
      tracking_available: supabaseSaved
    }));
  } catch (_) {}
  cart = [];
  saveCart();
  renderCart();
  ev.target.reset();
  window.location.href = 'thank-you.html';
}

async function sendOrderEmail(o) {
  if (!window.emailjs) return;

  const ready =
    cfg.emailjsPublicKey &&
    !cfg.emailjsPublicKey.includes('YOUR_') &&
    cfg.emailjsServiceId &&
    !cfg.emailjsServiceId.includes('YOUR_') &&
    cfg.emailjsOrderTemplateId &&
    !cfg.emailjsOrderTemplateId.includes('YOUR_');

  if (!ready) return;

  const items = o.items
    .map(
      i =>
        `${i.name} × ${i.qty} = ${money(i.price * i.qty)}`
    )
    .join('\n');

  try {
    await emailjs.send(
      cfg.emailjsServiceId,
      cfg.emailjsOrderTemplateId,
      {
        to_email: cfg.adminEmail,
        customer_name: o.name,
        customer_email: o.email,
        customer_phone: o.phone,
        address: o.address,
        city: o.city,
        state: o.state,
        pincode: o.pincode,
        landmark: o.landmark || '',
        notes: o.notes || '',
        order_items: items,
        order_total: money(o.total)
      }
    );
  } catch (e) {
    console.warn('Order email failed', e);
  }
}

async function initSupabase() {
  if (
    window.emailjs &&
    cfg.emailjsPublicKey &&
    !cfg.emailjsPublicKey.includes('YOUR_')
  ) {
    try {
      emailjs.init({
        publicKey: cfg.emailjsPublicKey
      });
    } catch (e) {
      console.warn(e);
    }
  }

  if (!configured || !window.supabase) return;

  sb = window.supabase.createClient(
    cfg.supabaseUrl,
    cfg.supabaseAnonKey
  );

  const { data } = await sb.auth.getSession();

  currentUser = data.session?.user || null;

  updateAuthUI();

  sb.auth.onAuthStateChange((_e, s) => {
    currentUser = s?.user || null;
    updateAuthUI();
  });
}

async function googleLogin() {
  if (!sb) {
    toast('Google login setup is not connected yet');
    openAccount();
    return;
  }

  const { error } =
    await sb.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo:
          location.origin + location.pathname
      }
    });

  if (error) toast(error.message);
}

async function logout() {
  if (sb) await sb.auth.signOut();

  currentUser = null;

  updateAuthUI();

  toast('Logged out');
}

function openAccount() {
  document.getElementById('accountModal').classList.add('open');
  document.body.classList.add('locked');
}

function closeAccount(e) {
  if (!e || e.target.id === 'accountModal') {
    document.getElementById('accountModal').classList.remove('open');
    document.body.classList.remove('locked');
  }
}

function updateAuthUI() {
  const b = document.getElementById('accountBtn');
  if (!b) return;
  b.innerHTML = currentUser
    ? `<span>●</span> ${escapeHtml(currentUser.user_metadata?.name || currentUser.email?.split('@')[0] || 'Account')}`
    : '<span>G</span> Google Login';
  const status = document.getElementById('accountStatus');
  status.innerHTML = currentUser
    ? `<b>Signed in</b><small>${escapeHtml(currentUser.email || '')}</small>
       <div id="myOrders" class="my-orders"><p>Loading your orders…</p></div>
       <button class="btn secondary full" onclick="logout()">Log Out</button>`
    : `<p>Sign in with Google to keep your account connected to your orders and track their status.</p>
       <button class="btn google full" onclick="googleLogin()">Continue with Google</button>`;
  if (currentUser) loadMyOrders();
}

function orderStatusLabel(status) {
  const labels = { new: 'Order received', pending: 'Order received', confirmed: 'Confirmed', processing: 'Processing', packed: 'Packed', shipped: 'Shipped', out_for_delivery: 'Out for delivery', delivered: 'Delivered', cancelled: 'Cancelled', returned: 'Returned' };
  return labels[String(status || 'new').toLowerCase()] || String(status || 'Order received').replace(/_/g, ' ');
}

async function loadMyOrders() {
  const box = document.getElementById('myOrders');
  if (!box) return;
  if (!sb || !currentUser) {
    box.innerHTML = '<p>Order tracking is unavailable until Supabase is connected.</p>';
    return;
  }
  const { data, error } = await sb.from('orders')
    .select('id,created_at,items,total,status')
    .eq('user_id', currentUser.id)
    .order('created_at', { ascending: false })
    .limit(25);
  if (error) {
    console.warn('Could not load customer orders', error);
    box.innerHTML = '<p>Orders abhi load nahi ho paaye. Please thodi der baad try karein.</p>';
    return;
  }
  if (!data?.length) {
    box.innerHTML = '<h3>My Orders</h3><p>Abhi aapka koi order nahi hai. Aapke next orders yahan track honge.</p>';
    return;
  }
  box.innerHTML = '<h3>My Orders & Tracking</h3>' + data.map(o => {
    const names = Array.isArray(o.items) ? o.items.map(i => `${escapeHtml(i.name || 'Product')} × ${Number(i.qty || 1)}`).join(', ') : 'Order items';
    const date = o.created_at ? new Date(o.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    return `<article class="my-order"><div class="my-order-top"><b>Order #${escapeHtml(o.id)}</b><span class="order-status">${escapeHtml(orderStatusLabel(o.status))}</span></div><small>${escapeHtml(date)}</small><p>${names}</p><strong>${money(o.total)}</strong><div class="order-steps"><span class="${['new','pending','confirmed','processing','packed','shipped','out_for_delivery','delivered'].includes(String(o.status).toLowerCase())?'done':''}">Received</span><span class="${['confirmed','processing','packed','shipped','out_for_delivery','delivered'].includes(String(o.status).toLowerCase())?'done':''}">Processing</span><span class="${['shipped','out_for_delivery','delivered'].includes(String(o.status).toLowerCase())?'done':''}">Shipped</span><span class="${String(o.status).toLowerCase()==='delivered'?'done':''}">Delivered</span></div></article>`;
  }).join('');
}

async function loadProductReviews(pid) {
  const box = document.getElementById('productReviews');

  let rows = DEMO_REVIEWS.filter(
    r => r.product_id === pid
  );

  if (configured && sb) {
    const {
      data,
      error
    } = await sb
      .from('reviews')
      .select(
        'rating,review,customer_name,verified_purchase,created_at'
      )
      .eq('product_id', pid)
      .eq('approved', true)
      .order('created_at', {
        ascending: false
      })
      .limit(20);

    if (!error && data?.length) {
      rows = data;
    }
  }

  box.innerHTML = rows.length
    ? rows.map(reviewHtml).join('')
    : '<div class="no-reviews">No reviews yet. Be the first verified customer to review this product.</div>';

  updateAverage(rows);
}

function reviewHtml(r) {
  return `
    <article class="live-review">
      <div class="review-top">
        <span>
          ${'★'.repeat(r.rating)}
          ${'☆'.repeat(5 - r.rating)}
        </span>

        <small>
          ${
            r.verified_purchase
              ? '✓ Verified Purchase'
              : 'Customer'
          }
        </small>
      </div>

      <p>“${escapeHtml(r.review)}”</p>

      <b>
        ${escapeHtml(r.customer_name || 'Customer')}
      </b>
    </article>
  `;
}

function updateAverage(rows) {
  const avg = rows.length
    ? rows.reduce((s, r) => s + r.rating, 0) /
      rows.length
    : 0;

  document.getElementById('reviewSummary').textContent =
    rows.length
      ? `${avg.toFixed(1)}/5 · ${rows.length} review${
          rows.length > 1 ? 's' : ''
        }`
      : 'No reviews yet';
}

async function loadReviewCounts() {
  for (const p of PRODUCTS) {
    let count = DEMO_REVIEWS.filter(
      r => r.product_id === p.id
    ).length;

    if (configured && sb) {
      const { count: c } = await sb
        .from('reviews')
        .select('*', {
          count: 'exact',
          head: true
        })
        .eq('product_id', p.id)
        .eq('approved', true);

      if (typeof c === 'number') count = c;
    }

    document
      .querySelectorAll(
        `.review-count[data-product="${p.id}"]`
      )
      .forEach(
        x => (x.textContent = count ? `(${count})` : '')
      );
  }
}

function openReviewForm() {
  if (!currentProduct) return;

  if (!currentUser) {
    openAccount();
    toast('Please sign in with Google first');
    return;
  }

  document.getElementById('reviewModal').classList.add('open');
  document.body.classList.add('locked');

  document.getElementById(
    'reviewProductName'
  ).textContent = currentProduct.name;
}

function closeReview(e) {
  if (!e || e.target.id === 'reviewModal') {
    document.getElementById('reviewModal').classList.remove('open');
    document.body.classList.remove('locked');
  }
}

async function submitReview(ev) {
  ev.preventDefault();

  if (!currentUser || !currentProduct) {
    toast('Please sign in first');
    return;
  }

  const fd = new FormData(ev.target);

  const review = {
    product_id: currentProduct.id,
    rating: Number(fd.get('rating')),
    review: String(fd.get('review')).trim(),
    customer_name:
      currentUser.user_metadata?.full_name ||
      currentUser.user_metadata?.name ||
      currentUser.email?.split('@')[0] ||
      'Customer',
    user_id: currentUser.id
  };

  if (review.review.length < 8) {
    toast('Please write a little more about the product');
    return;
  }

  if (!configured || !sb) {
    toast(
      'Reviews need the website database connection. Add Supabase settings first.'
    );
    return;
  }

  const { error } = await sb
    .from('reviews')
    .insert({
      ...review,
      approved: false,
      verified_purchase: false
    });

  if (error) {
    toast(error.message);
    return;
  }

  closeReview();
  ev.target.reset();

  toast('Review submitted for verification ✓');

  loadProductReviews(currentProduct.id);
}

function toast(msg) {
  const t = document.getElementById('toast');

  t.textContent = msg;
  t.classList.add('show');

  clearTimeout(window._toast);

  window._toast = setTimeout(
    () => t.classList.remove('show'),
    3200
  );
}

function scrollTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
  document.body.classList.toggle(
    'scrolled',
    scrollY > 20
  );
});

let scrollRevealObserver;

function setupScrollAnimations() {
  if (scrollRevealObserver) scrollRevealObserver.disconnect();

  scrollRevealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -6% 0px' }
  );

  document
    .querySelectorAll('.reveal, .scroll-reveal, .category-card, .benefit-list > div, .review-grid blockquote')
    .forEach((el, index) => {
      el.style.setProperty('--scroll-delay', `${Math.min(index * 0.055, 0.38)}s`);
      scrollRevealObserver.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  initSupabase();

  document.getElementById('checkoutTotal').textContent =
    money(
      cart.reduce(
        (s, x) => s + x.price * x.qty,
        0
      )
    );

  const fruitIntro = document.getElementById('nkFruitIntro');
  // Create a shower of dedicated dry-fruit illustrations (never product-packaging photos).
  const rainLayer = document.getElementById('nkfiRain');
  if (rainLayer && !rainLayer.dataset.ready) {
    rainLayer.dataset.ready = '1';
    const fruitAssets = ['assets/falling-almond.png', 'assets/falling-cashew.png', 'assets/falling-pistachio.png', 'assets/falling-walnut.png', 'assets/falling-raisins.png', 'assets/falling-makhana.png', 'assets/falling-fig.png', 'assets/falling-dates.png'];
    for (let i = 0; i < 64; i++) {
      const item = document.createElement('img');
      item.className = 'nkfi-rain-item';
      const seed = (i * 37 + 13) % 100;
      item.style.setProperty('--left', seed + '%');
      item.style.setProperty('--size', (i % 4 === 0 ? 17 : 22 + (i % 3) * 7) + 'px');
      item.style.setProperty('--delay', (-((i * 0.19) % 3.8)) + 's');
      item.style.setProperty('--duration', (3.1 + (i % 6) * 0.42) + 's');
      item.style.setProperty('--drift', (((i % 7) - 3) * 5) + 'vw');
      item.style.setProperty('--rot', ((i * 43) % 360) + 'deg');
      item.style.setProperty('--spin', (((i * 43) % 360) + 260) + 'deg');
      item.src = fruitAssets[i % fruitAssets.length];
      item.alt = '';
      item.loading = 'eager';
      rainLayer.appendChild(item);
    }
  }
  const hideFruitIntro = () => {
    if (!fruitIntro) return;
    fruitIntro.classList.add('nkfi-hidden');
    fruitIntro.style.animation = 'none';
    fruitIntro.style.opacity = '0';
    fruitIntro.style.visibility = 'hidden';
    setTimeout(() => fruitIntro.remove(), 750);
  };
  document.getElementById('nkFruitSkip')?.addEventListener('click', hideFruitIntro);
  setTimeout(hideFruitIntro, 4200);

  setupScrollAnimations();
});
