const PRODUCTS = [
  {
    id: 1,
    category: "Makhana",
    name: "Premium Makhana 250g",
    price: 299,
    mrp: 399,
    discount: "25% OFF",
    weight: "250g",
    short: "Light, crunchy premium fox nuts for everyday snacking.",
    description: "Carefully selected makhana with a clean, crunchy bite. Packed hygienically for home, office and mindful snacking moments.",
    details: [
      "Premium selected fox nuts",
      "250g retail pack",
      "Hygienically packed",
      "COD available"
    ],
    images: [
      "assets/makhana-250g.png",
      "assets/makhana-250g-2.png"
    ]
  },

  {
    id: 2,
    category: "Makhana",
    name: "Premium Makhana Family Pack",
    price: 549,
    mrp: 798,
    discount: "31% OFF",
    weight: "500g",
    short: "A bigger family pack for regular snacking.",
    description: "A generous 500g pack of premium makhana, made for families who want a convenient pantry staple with a satisfying crunch.",
    details: [
      "Premium selected fox nuts",
      "500g family pack",
      "Freshness-focused packing",
      "COD available"
    ],
    images: [
      "assets/makhana-500g.png",
      "assets/makhana-500g-2.png"
    ]
  },

  {
    id: 3,
    category: "Makhana",
    name: "Healthy Makhana Combo",
    price: 499,
    mrp: 598,
    discount: "17% OFF",
    weight: "500g total",
    short: "A convenient combo for stocking up.",
    description: "A value-focused makhana combo for your home pantry, gifting or regular snack routine.",
    details: [
      "Makhana combo pack",
      "500g total",
      "Premium presentation",
      "COD available"
    ],
    images: [
      "assets/makhana-combo.png",
      "assets/makhana-combo-2.png"
    ]
  },

  {
    id: 4,
    category: "Dry Fruits",
    name: "Premium Almonds",
    price: 499,
    mrp: 599,
    discount: "17% OFF",
    weight: "250g",
    short: "Premium almonds for snacking and recipes.",
    description: "Selected almonds with a satisfying crunch. Great for direct snacking, breakfast bowls, desserts and everyday recipes.",
    details: [
      "250g pack",
      "Premium grade selection",
      "Resealable-style storage recommended",
      "COD available"
    ],
    images: [
      "assets/almonds.png",
      "assets/almonds-2.png"
    ]
  },

  {
    id: 5,
    category: "Dry Fruits",
    name: "Premium Cashews",
    price: 549,
    mrp: 699,
    discount: "21% OFF",
    weight: "250g",
    short: "Creamy, crunchy cashews for home and gifting.",
    description: "Premium cashews chosen for their creamy bite and crunch. A versatile pantry favourite for snacking and cooking.",
    details: [
      "250g pack",
      "Premium selection",
      "Ideal for snacking and cooking",
      "COD available"
    ],
    images: [
      "assets/cashews.png",
      "assets/cashews-2.png"
    ]
  },

  {
    id: 6,
    category: "Dry Fruits",
    name: "Dry Fruits Premium Mix",
    price: 699,
    mrp: 849,
    discount: "18% OFF",
    weight: "250g",
    short: "A curated mix of assorted dry fruits.",
    description: "A convenient assortment for those who like variety in one pack. Suitable for snacking, breakfast bowls and gifting.",
    details: [
      "250g assorted mix",
      "Curated assortment",
      "Gift-friendly",
      "COD available"
    ],
    images: [
      "assets/dry-fruits-mix.png",
      "assets/dry-fruits-mix-2.png"
    ]
  },

  {
    id: 7,
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
      "assets/royal-hamper-2.png"
    ]
  },

  {
    id: 8,
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
      "assets/festive-hamper-2.png"
    ]
  },

  {
    id: 9,
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
      "assets/celebration-hamper-2.png"
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
  el.src = 'assets/makhana.png';
}

document.addEventListener('error', e => {
  if (e.target.tagName === 'IMG') {
    imgFallback(e.target);
  }
}, true);

function productCard(p, i) {
  return `
    <article class="product-card" style="--delay:${i * 0.06}s">
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
  const list =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);

  document.getElementById('productGrid').innerHTML =
    list.map(productCard).join('');

  document.querySelectorAll('.filter').forEach(b => {
    b.classList.toggle(
      'active',
      b.dataset.category === activeCategory
    );
  });

  loadReviewCounts();
}

function filterProducts(cat) {
  activeCategory = cat;
  renderProducts();

  document.getElementById('shop').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

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

  const form = new FormData(ev.target);
  const data = Object.fromEntries(form.entries());

  const total = cart.reduce(
    (s, x) => s + x.price * x.qty,
    0
  );

  const order = {
    ...data,
    total,
    items: cart.map(x => ({
      id: x.id,
      name: x.name,
      qty: x.qty,
      price: x.price
    })),
    user_id: currentUser?.id || null
  };

  if (configured && sb) {
    try {
      const { error } = await sb
        .from('orders')
        .insert({
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
          items: order.items,
          total: order.total,
          status: 'new'
        });

      if (error) throw error;

    } catch (err) {
      console.warn(
        'Supabase order save failed',
        err
      );
    }
  }

  await sendOrderEmail(order);

  cart = [];
  saveCart();
  renderCart();

  closeCheckout();
  closeCart();

  toast(
    'Order received! We will contact you shortly.'
  );

  ev.target.reset();
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
    ? `<span>●</span> ${
        escapeHtml(
          currentUser.user_metadata?.name ||
          currentUser.email?.split('@')[0] ||
          'Account'
        )
      }`
    : '<span>G</span> Google Login';

  document.getElementById('accountStatus').innerHTML =
    currentUser
      ? `
        <b>Signed in</b>
        <small>${escapeHtml(currentUser.email || '')}</small>
        <button
          class="btn secondary full"
          onclick="logout()"
        >
          Log Out
        </button>
      `
      : `
        <p>
          Sign in with Google to submit reviews and keep
          your customer account connected to your orders.
        </p>

        <button
          class="btn google full"
          onclick="googleLogin()"
        >
          Continue with Google
        </button>
      `;
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

  setTimeout(
    () => document.getElementById('royalIntro')?.remove(),
    4200
  );

  const io = new IntersectionObserver(
    es =>
      es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      }),
    {
      threshold: 0.12
    }
  );

  document
    .querySelectorAll('.reveal')
    .forEach(x => io.observe(x));
});
