/* ==========================================================================
   STREETKICKS — main.js (dùng chung cho mọi trang)
   ========================================================================== */

const NAV_LINKS = [
  { href: 'index.html',       label: 'Trang chủ',  key: 'home' },
  { href: 'gioi-thieu.html',  label: 'Giới thiệu', key: 'about' },
  { href: 'cua-hang.html',    label: 'Cửa hàng',   key: 'shop' },
  { href: 'tin-tuc.html',     label: 'Tin tức',    key: 'news' },
  { href: 'blog.html',        label: 'Blog',       key: 'blog' },
  { href: 'danh-gia.html',    label: 'Đánh giá',   key: 'reviews' },
  { href: 'lien-he.html',     label: 'Liên hệ',    key: 'contact' },
];

function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const active = header.dataset.page || '';

  header.className = 'header';
  
  header.innerHTML = `
    <div class="header__inner">
      <a class="logo" href="index.html">
        Streetkicks 
        <img src="logo WED-01.png" alt="Logo" class="logo-img">
      </a>
      <button class="nav-toggle" aria-label="Mở menu" aria-expanded="false">☰</button>
      
      <nav class="nav" aria-label="Menu chính">
        <ul>
          ${NAV_LINKS.map(l => {
            if (l.key === 'shop') {
              return `
                <li class="nav-item">
                  <a href="${l.href}" class="${l.key === active ? 'active' : ''}">${l.label}</a>
                  <ul class="dropdown-menu">
                    <li><a href="lookbook.html">Lookbook</a></li>
                    <li><a href="new.html">New Arrivals</a></li>
                    <li><a href="kham-pha.html">Khám phá</a></li>
                    <li><a href="nikenike.html">NIKE SNEAKER COLLECTION</a></li>
                  </ul>
                </li>
              `;
            }
            return `<li><a href="${l.href}" class="${l.key === active ? 'active' : ''}">${l.label}</a></li>`;
          }).join('')}
        </ul>
      </nav>

      <div class="header__icons icon-group" style="display: flex; gap: 22px; align-items: center;">
        
        <div class="nav-item">
          <button type="button" aria-label="Tìm kiếm" title="Tìm kiếm" style="background:none; border:none; cursor:pointer; padding:0; display:flex; align-items:center;">
            <img src="icon tìm kiếm.png" alt="Tìm kiếm" class="custom-icon">
          </button>
          
          <div class="dropdown-menu search-dropdown">
            <form action="cua-hang.html" class="search-box" style="padding: 20px 20px 0 20px;">
              <input type="text" placeholder="Tìm kiếm giày..." style="width:100%">
              <button type="submit">TÌM</button>
            </form>

            <div class="filter-wrapper">
              <div class="filter-title">TÌM KIẾM SẢN PHẨM</div>
              
              <div class="filter-section">
                <h3>LOẠI SẢN PHẨM</h3>
                <!-- Thêm data-type để nhận diện -->
                <label><input type="checkbox" data-type="sneakers" class="filter-cb"> Sneakers</label>
                <label><input type="checkbox" data-type="boots" class="filter-cb"> Boots</label>
                <label><input type="checkbox" data-type="deps" class="filter-cb"> Deps</label>
              </div>

              <div class="filter-section">
                <h3>KÍCH THƯỚC</h3>
                <div class="size-list">
                  <!-- Đặt class filter-cb để bắt sự kiện -->
                  <input type="checkbox" id="s39" class="filter-cb"><label for="s39">39</label>
                  <input type="checkbox" id="s40" class="filter-cb"><label for="s40">40</label>
                  <input type="checkbox" id="s41" class="filter-cb"><label for="s41">41</label>
                  <input type="checkbox" id="s42" class="filter-cb"><label for="s42">42</label>
                  <input type="checkbox" id="s43" class="filter-cb"><label for="s43">43</label>
                  <input type="checkbox" id="s44" class="filter-cb"><label for="s44">44</label>
                  <input type="checkbox" id="s45" class="filter-cb"><label for="s45">45</label>
                  <input type="checkbox" id="s46" class="filter-cb"><label for="s46">46</label>
                </div>
              </div>

              <div class="filter-section">
                <h3>KHOẢNG GIÁ</h3>
                <input class="price-range" type="range" min="1000000" max="15000000" value="15000000" id="priceFilter">
                <div class="range-text">
                  <span>1.000.000đ</span>
                  <span id="priceValue">15.000.000đ</span>
                </div>
              </div>

              <div class="filter-section" style="border-bottom:none;">
                <h3>MÀU SẮC</h3>
                <div class="color-list">
                  <!-- Thêm data-color để nhận diện -->
                  <input type="checkbox" id="cblack" data-color="black" class="filter-cb"><label for="cblack" class="c-black"></label>
                  <input type="checkbox" id="cwhite" data-color="white" class="filter-cb"><label for="cwhite" class="c-white"></label>
                  <input type="checkbox" id="cred" data-color="red" class="filter-cb"><label for="cred" class="c-red"></label>
                  <input type="checkbox" id="cyellow" data-color="yellow" class="filter-cb"><label for="cyellow" class="c-yellow"></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <a href="tai-khoan.html" aria-label="Tài khoản" title="Tài khoản" style="display:flex; align-items:center;">
            <img src="icon personal trắng.png" alt="Tài khoản" class="custom-icon">
          </a>
          <ul class="dropdown-menu">
            <li><a href="dang-nhap.html">Đăng nhập</a></li>
            <li><a href="dang-ky.html">Đăng ký</a></li>
            <li><a href="tai-khoan.html">Tài khoản của tôi</a></li>
          </ul>
        </div>

        <div class="nav-item">
          <a href="thanhtoan.html" aria-label="Giỏ hàng" title="Giỏ hàng" style="display:flex; align-items:center; position:relative; text-decoration:none;">
            <img src="icon giỏ hàng trắng.png" alt="Giỏ hàng" class="custom-icon">
            <span class="cart-badge" id="cart-badge" style="position:absolute; top:-6px; right:-10px; background:#D62828; color:#fff; font-size:0.75rem; font-family:'Anton', sans-serif; width:18px; height:18px; display:flex; justify-content:center; align-items:center; border-radius:50%;">0</span>
          </a>
        </div>

      </div>
    </div>`;

  const toggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  const withStatus = footer.dataset.status === 'true';

  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__grid">
      <div>
        <p class="logo">Streetkicks</p>
        <p class="footer__addr">10 Phan Văn Trị, Phường An Phú, Quận Ninh Kiều, TP Cần Thơ.</p>
      </div>
      <div>
        <h4>Điều hướng</h4>
        <ul>
          <li><a href="lien-he.html">Vị trí</a></li>
          <li><a href="tin-tuc.html">Bản tin</a></li>
          <li><a href="#">Điều khoản</a></li>
          <li><a href="#">Vận chuyển</a></li>
        </ul>
      </div>
      <div>
        <h4>Mạng xã hội</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter / X</a></li>
          <li><a href="#">Discord</a></li>
        </ul>
      </div>
      <div>
        <h4>Thanh toán</h4>
        <ul><li>Visa</li><li>Momo</li><li>VNPay</li></ul>
      </div>
      <div>
        <h4>Dịch vụ</h4>
        <ul>
          <li>Đổi trả 30 ngày</li>
          <li>Miễn phí vận chuyển</li>
          <li>Bảo hành sản phẩm</li>
        </ul>
      </div>
    </div>`;
}

const CART_KEY = 'streetkicks_cart_count';
function getCartCount() { return parseInt(localStorage.getItem(CART_KEY) || '0', 10); }
function setCartCount(n) {
  localStorage.setItem(CART_KEY, n);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = n;
}
function initCart() {
  setCartCount(getCartCount());
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setCartCount(getCartCount() + 1);
      showToast('Đã thêm vào giỏ hàng!');
    });
  });
}

let toastTimer;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function initProductDetail() {
  const mainImg = document.querySelector('.pd-main-img img');
  const thumbs = document.querySelectorAll('.pd-thumbs img');
  if(thumbs.length > 0) {
    thumbs.forEach(t => {
      t.addEventListener('click', () => {
        thumbs.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        if (mainImg) mainImg.src = t.src;
      });
    });
  }
}

/* ==========================================================================
   CHỨC NĂNG LỌC SẢN PHẨM TOÀN DIỆN (GIÁ, LOẠI, KÍCH THƯỚC, MÀU)
   ========================================================================== */
function initFilters() {
  const priceSlider = document.getElementById('priceFilter');
  const priceValue = document.getElementById('priceValue');
  const checkboxes = document.querySelectorAll('.filter-cb');
  
  if (!priceSlider) return;

  // Lọc khi kéo giá
  priceSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value).toLocaleString('vi-VN');
    priceValue.textContent = val + 'đ';
    applyFilters(); 
  });

  // Lọc khi tích vào bất kỳ ô checkbox nào
  checkboxes.forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
}

function applyFilters() {
  const products = document.querySelectorAll('.simple-card, .slide');
  if (products.length === 0) return;

  // 1. Lấy mức giá tối đa hiện tại
  const maxPrice = parseInt(document.getElementById('priceFilter').value);

  // 2. Lấy danh sách các Loại đang được tích chọn (sneakers, boots...)
  const checkedTypes = Array.from(document.querySelectorAll('input[data-type]:checked')).map(cb => cb.dataset.type);

  // 3. Lấy danh sách Size đang được tích chọn (39, 40, 41...)
  const checkedSizes = Array.from(document.querySelectorAll('.size-list input:checked')).map(cb => cb.id.replace('s', ''));

  // 4. Lấy danh sách Màu sắc đang được tích chọn (black, white, red...)
  const checkedColors = Array.from(document.querySelectorAll('input[data-color]:checked')).map(cb => cb.dataset.color);

  // 5. Quét qua từng đôi giày để kiểm tra
  products.forEach(card => {
    let isShow = true;

    // ----- KIỂM TRA GIÁ -----
    const priceElement = card.querySelector('.price-red, .price-pill');
    if (priceElement) {
      const priceText = priceElement.textContent.replace(/[^0-9]/g, '');
      if (parseInt(priceText) > maxPrice) isShow = false;
    }

    // ----- KIỂM TRA LOẠI -----
    if (isShow && checkedTypes.length > 0) {
      const cardType = card.dataset.itemType || '';
      if (!checkedTypes.includes(cardType)) isShow = false;
    }

    // ----- KIỂM TRA MÀU SẮC -----
    if (isShow && checkedColors.length > 0) {
      const cardColor = card.dataset.itemColor || '';
      if (!checkedColors.includes(cardColor)) isShow = false;
    }

    // ----- KIỂM TRA SIZE -----
    if (isShow && checkedSizes.length > 0) {
      const cardSizes = (card.dataset.itemSizes || '').split(','); // VD: "39,40,41"
      // Trả về true nếu đôi giày có chứa ít nhất 1 size đang được tích chọn
      const hasSize = checkedSizes.some(size => cardSizes.includes(size));
      if (!hasSize) isShow = false;
    }

    // Kết quả cuối cùng: Ẩn hoặc Hiện
    card.style.display = isShow ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initCart();
  initProductDetail();
  initFilters(); 
});