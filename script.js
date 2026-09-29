const PRODUCTS = [
 {id:1,category:"Makhana",name:"Premium Makhana 250g",price:299,mrp:399,discount:"25% OFF",weight:"250g",description:"Carefully selected premium makhana for a light, crunchy everyday snack.",images:["assets/makhana-250g.png","assets/makhana-250g-2.png"]},
 {id:2,category:"Makhana",name:"Premium Makhana Family Pack",price:549,mrp:798,discount:"31% OFF",weight:"500g",description:"A larger family pack of premium fox nuts, packed for everyday snacking.",images:["assets/makhana-500g.png","assets/makhana-500g-2.png"]},
 {id:3,category:"Makhana",name:"Healthy Makhana Combo",price:499,mrp:598,discount:"17% OFF",weight:"500g total",description:"A convenient combo for stocking up on your favourite crunchy snack.",images:["assets/makhana-combo.png","assets/makhana-combo-2.png"]},
 {id:4,category:"Dry Fruits",name:"Premium Almonds",price:499,mrp:599,discount:"17% OFF",weight:"250g",description:"Premium almonds selected for quality and everyday snacking.",images:["assets/dry-fruits-placeholder.png","assets/dry-fruits-placeholder.png"]},
 {id:5,category:"Dry Fruits",name:"Premium Cashews",price:549,mrp:699,discount:"21% OFF",weight:"250g",description:"Creamy, crunchy cashews for snacking, cooking and gifting.",images:["assets/dry-fruits-placeholder.png","assets/dry-fruits-placeholder.png"]},
 {id:6,category:"Dry Fruits",name:"Dry Fruits Premium Mix",price:699,mrp:849,discount:"18% OFF",weight:"250g",description:"A premium mix of assorted dry fruits for everyday enjoyment.",images:["assets/dry-fruits-placeholder.png","assets/dry-fruits-placeholder.png"]},
 {id:7,category:"Gift Hampers",name:"Royal Dry Fruit Hamper",price:999,mrp:1299,discount:"23% OFF",weight:"Premium Gift Box",description:"A beautifully curated dry fruit hamper for celebrations and special occasions.",images:["assets/gift-hampers-placeholder.png","assets/gift-hampers-placeholder.png"]},
 {id:8,category:"Gift Hampers",name:"Festive Makhana Hamper",price:799,mrp:999,discount:"20% OFF",weight:"Gift Pack",description:"A thoughtful makhana gift hamper designed for festive moments.",images:["assets/gift-hampers-placeholder.png","assets/gift-hampers-placeholder.png"]},
 {id:9,category:"Gift Hampers",name:"Premium Celebration Hamper",price:1499,mrp:1899,discount:"21% OFF",weight:"Luxury Gift Box",description:"A premium assortment curated to make gifting memorable.",images:["assets/gift-hampers-placeholder.png","assets/gift-hampers-placeholder.png"]}
];

let cart=[];
let activeCategory="All";

function resolveImage(img){
  if(!img) return "assets/makhana.png";
  return img;
}
function imageFallback(el){
  const fallback=el.dataset.fallback || "assets/makhana.png";
  if(el.src.endsWith(fallback)) return;
  el.src=fallback;
  el.onerror=()=>{el.onerror=null; el.src="assets/makhana.png";};
}
document.addEventListener("error",e=>{
  if(e.target.matches("img.smart-image")) imageFallback(e.target);
  if(e.target.matches(".product-image img,.thumb img,#detailImage")){
    const img=e.target;
    if(img.dataset.fallbackTried!=="1"){img.dataset.fallbackTried="1";img.src="assets/makhana.png";}
  }
},true);

function productCard(p,index){
  return `<article class="product-card" style="animation-delay:${index*.05}s">
    <div class="product-image"><span class="tag">${p.category.toUpperCase()}</span>
      <img src="${resolveImage(p.images[0])}" data-fallback="assets/makhana.png" loading="lazy" alt="${p.name}">
    </div>
    <div class="product-info">
      <div class="stars">★★★★★ <span>Premium quality</span></div>
      <h3>${p.name}</h3><p>${p.weight}</p>
      <div class="price"><strong>₹${p.price.toLocaleString("en-IN")}</strong><del>₹${p.mrp.toLocaleString("en-IN")}</del><b>${p.discount}</b></div>
      <button class="btn primary full" onclick="openProduct(${p.id})">View Details</button>
    </div>
  </article>`;
}
function renderProducts(){
  const list=activeCategory==="All"?PRODUCTS:PRODUCTS.filter(p=>p.category===activeCategory);
  document.getElementById("productGrid").innerHTML=list.map((p,i)=>productCard(p,i)).join("");
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));
}
function filterProducts(category){
  activeCategory=category;
  renderProducts();
  const shop=document.getElementById("shop");
  if(shop) shop.scrollIntoView({behavior:"smooth",block:"start"});
}
function openProduct(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  document.getElementById("detailCategory").textContent=p.category;
  document.getElementById("detailName").textContent=p.name;
  document.getElementById("detailPrice").textContent="₹"+p.price.toLocaleString("en-IN");
  document.getElementById("detailMrp").textContent="₹"+p.mrp.toLocaleString("en-IN");
  document.getElementById("detailDiscount").textContent=p.discount;
  document.getElementById("detailDescription").textContent=p.description;
  document.getElementById("detailWeight").textContent=p.weight;
  const main=document.getElementById("detailImage");
  main.src=p.images[0]; main.alt=p.name; main.dataset.fallback="assets/makhana.png";
  const thumbs=document.getElementById("detailThumbs");
  thumbs.innerHTML=p.images.map((src,i)=>`<button class="thumb ${i===0?"active":""}" onclick="selectGallery('${src}',this)"><img src="${src}" alt="${p.name} image ${i+1}"></button>`).join("");
  document.getElementById("detailCartBtn").onclick=()=>{addToCart(p.name,p.price);closeProduct();};
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow="hidden";
}
function selectGallery(src,btn){
  const main=document.getElementById("detailImage"); main.src=src; main.dataset.fallback="assets/makhana.png";
  document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
}
function closeProduct(e){
  if(!e || e.target===document.getElementById("productModal")){
    document.getElementById("productModal").classList.remove("open");document.body.style.overflow="";
  }
}

function addToCart(name,price){
 const item=cart.find(x=>x.name===name); if(item)item.qty++; else cart.push({name,price,qty:1});
 renderCart(); openCart();
}
function removeItem(name){cart=cart.filter(x=>x.name!==name);renderCart();}
function changeQty(name,delta){const x=cart.find(x=>x.name===name);if(!x)return;x.qty+=delta;if(x.qty<=0)removeItem(name);else renderCart();}
function renderCart(){
 const box=document.getElementById("cartItems"),count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent="₹"+total.toLocaleString("en-IN");
 if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';return;}
 box.innerHTML=cart.map(x=>`<div class="cart-row"><div><b>${x.name}</b><small>₹${x.price.toLocaleString("en-IN")} each</small><div style="margin-top:8px"><button onclick="changeQty('${x.name}',-1)">−</button> ${x.qty} <button onclick="changeQty('${x.name}',1)">+</button></div></div><div><b>₹${(x.price*x.qty).toLocaleString("en-IN")}</b><br><button class="remove" onclick="removeItem('${x.name}')">Remove</button></div></div>`).join("");
}
function openCart(){document.getElementById("cartOverlay").classList.add("open");document.body.style.overflow="hidden";}
function closeCart(e){if(!e||e.target===document.getElementById("cartOverlay")){document.getElementById("cartOverlay").classList.remove("open");document.body.style.overflow="";}}
function checkout(){if(!cart.length){alert("Please add a product to your cart first.");return;}alert("Checkout demo: connect your payment/order system here.");}

document.addEventListener("DOMContentLoaded",()=>{
 renderProducts();renderCart();
 setTimeout(()=>{const intro=document.getElementById("royalIntro");if(intro)intro.remove();},4000);
});
