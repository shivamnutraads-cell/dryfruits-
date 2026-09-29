let cart = [];
function addToCart(name, price){
  const item = cart.find(x => x.name === name);
  if(item) item.qty++;
  else cart.push({name,price,qty:1});
  renderCart();
  openCart();
}
function removeItem(name){ cart = cart.filter(x=>x.name!==name); renderCart(); }
function changeQty(name, delta){
  const item=cart.find(x=>x.name===name);
  if(!item)return;
  item.qty += delta;
  if(item.qty<=0) removeItem(name);
  else renderCart();
}
function renderCart(){
  const box=document.getElementById('cartItems');
  const count=cart.reduce((s,x)=>s+x.qty,0);
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartTotal').textContent='₹'+total.toLocaleString('en-IN');
  if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';return;}
  box.innerHTML=cart.map(x=>`<div class="cart-row"><div><b>${x.name}</b><small>₹${x.price.toLocaleString('en-IN')} each</small><div style="margin-top:8px"><button onclick="changeQty('${x.name}',-1)">−</button> ${x.qty} <button onclick="changeQty('${x.name}',1)">+</button></div></div><div><b>₹${(x.price*x.qty).toLocaleString('en-IN')}</b><br><button class="remove" onclick="removeItem('${x.name}')">Remove</button></div></div>`).join('');
}
function openCart(){document.getElementById('cartOverlay').classList.add('open')}
function closeCart(e){if(!e || e.target===document.getElementById('cartOverlay'))document.getElementById('cartOverlay').classList.remove('open')}
function checkout(){
  if(!cart.length){alert('Please add a product to your cart first.');return;}
  alert('Checkout demo: connect Razorpay/Stripe or your preferred payment gateway here.');
}
renderCart();
