# STREETKICKS — Website thương mại điện tử giày sneaker/streetwear

Xây dựng bằng **HTML5 + CSS3 + JavaScript thuần** (không framework).

## Cách chạy
1. Mở thư mục `streetkicks` trong VS Code.
2. Cài extension **Live Server** (nếu chưa có).
3. Chuột phải vào `index.html` → **Open with Live Server**.

## Cấu trúc
```
streetkicks/
├── index.html              # Trang chủ
├── gioi-thieu.html         # Giới thiệu (About)
├── cua-hang.html           # Cửa hàng (Shop)
├── san-pham-moi.html       # New Arrivals
├── chi-tiet-san-pham.html  # Chi tiết sản phẩm + giỏ hàng mini
├── tin-tuc.html            # Tin tức (tab lọc bài viết)
├── blog.html               # Blog
├── lookbook.html           # Lookbook (slideshow Shop The Look)
├── kham-pha.html           # Khám phá thế giới StreetKicks
├── danh-gia.html           # Đánh giá khách hàng
├── lien-he.html            # Liên hệ (form + map + FAQ accordion)
├── dang-nhap.html          # Đăng nhập
├── dang-ky.html            # Đăng ký
├── tai-khoan.html          # Chỉnh sửa hồ sơ
├── css/style.css           # Design system dùng chung
└── js/main.js              # JS dùng chung
```

## JS dùng chung (js/main.js)
- **Header/Footer chung**: mọi trang chỉ cần
  `<header id="site-header" data-page="...">` và
  `<footer id="site-footer" data-status="true|false">` — nav/footer được render
  tự động, tránh lặp code. `data-page` để tô đỏ menu đang active,
  `data-status="true"` hiển thị thêm khối "Trạng thái hệ thống" ở footer.
- **Giỏ hàng**: nút có `data-add-cart` sẽ tăng badge (lưu localStorage) + toast.
- **Accordion FAQ**, **tab lọc tin tức** (`data-filter` / `data-category`),
  **slideshow lookbook** (`data-slide-prev/next`), **đổi ảnh thumbnail** trang
  chi tiết sản phẩm, **chọn size**.
- **Validate form**: form có class `js-validate`; hỗ trợ `required`,
  `type="email"`, `data-min="6"` (độ dài tối thiểu), `data-match="#id"`
  (xác nhận mật khẩu), checkbox điều khoản `required`.

## Ghi chú
- Ảnh dùng placeholder từ `picsum.photos` (cần mạng); thay bằng ảnh thật bằng
  cách sửa `src`.
- Font Google: **Anton** (heading) + **Arima** (body).
- Màu: Đen `#111111` · Đỏ `#D62828` · Trắng `#FFFFFF` · Xám `#2A2A2A / #3A3A3A`.
