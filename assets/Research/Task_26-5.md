# Size Mode

**Size Mode** là cách Sprite xác định kích thước của Node chứa nó.
---

## Các chế độ Size Mode

### 1. TRIMMED
**Dựa vào kích thước của ảnh sau khi cắt bỏ các pixel trong suốt**

- Nếu ảnh có nhiều vùng trong suốt (transparent), thì Sprite sẽ tự động **cắt (trim)** vùng đó đi, và chỉ dùng vùng có nội dung.
- **Kích thước Node = kích thước ảnh đã được trim.**

Thường dùng khi ảnh từ **Sprite Atlas** hoặc đã qua công đoạn **optimize**.

**Ví dụ:**
Ảnh gốc 256x256, nhưng chỉ có vùng vẽ là 100x100 → Node sẽ có size 100x100.

---

### 2. RAW
**Dựa vào kích thước gốc của ảnh (không cắt gì hết)**

- Node sẽ lấy kích thước **đúng như file ảnh gốc**  (kể cả vùng trong suốt).

**Ví dụ:**
Ảnh kích thước 512x512 dù vùng vẽ chỉ là một vòng tròn nhỏ → Node vẫn giữ nguyên size 512x512.

Dùng khi muốn giữ đúng kích cỡ gốc để dễ canh layout hoặc thiết kế pixel-perfect.

---

### 3. CUSTOM
**Bạn tự set kích thước của Node thủ công**

- Khi bạn thay đổi `node.width` hoặc `node.height` bằng tay (trên Editor hoặc bằng code), thì Sprite sẽ **tự động chuyển về CUSTOM**.
- Nó sẽ **không còn phụ thuộc vào ảnh nữa.**

Đây là chế độ được dùng phổ biến khi bạn muốn tùy biến theo logic game.

---

## Trim

`Trim` là một checkbox cho phép **cắt bỏ vùng trong suốt (transparent)** của ảnh sprite.

### Khi Trim bật:
- Sprite sẽ **cắt gọn ảnh**, bỏ phần trong suốt, chỉ giữ phần có nội dung.

### Khi Trim tắt:
- Sprite giữ nguyên toàn bộ ảnh, kể cả khoảng trống xung quanh.

### Mối liên hệ với Size Mode:

| Size Mode | Trim có ảnh hưởng? | Ghi chú |
|-----------|---------------------|--------|
| **TRIMMED** |  Có | Dựa vào Trim để tính kích thước node |
| **RAW**     | Không | Luôn dùng full ảnh gốc, không cắt |
| **CUSTOM**  | Có thể có | Tự set size node, Trim chỉ ảnh hưởng hiển thị hình ảnh bên trong node |

---

