# Task 1 Wrap mode, Filter Mode and Premultiply Alpha.
## Wrap Mode
**Wrap Mode** xác định cách texture hiển thị khi vùng cần hiển thị lớn hơn kích thước ảnh.
Wrap mode có 2 chế độ chính:
### Clamp
- Không lặp ảnh.
- Kéo giãn màu ở viền ảnh để lấp đầy vùng trống.
- Dùng cho ảnh đơn, không tile.
### Repeat
- Ảnh sẽ lặp lại nhiều lần như gạch.
- Dùng cho tile nền, đất, background.

## Filter Mode 
**Filter Mode** là cách mà Cocos (và GPU) quyết định lấy màu từ các pixel gốc như thế nào để vẽ lên màn hình khi ảnh bị scale.
Filter mod có 3 chế độ chính trong Cocos

### Point
Khi phóng to ảnh, mỗi pixel mới sẽ lấy màu của pixel gần nhất gốc, không pha trộn gì cả.
-> Ảnh bị **răng cưa**, **vuông ô**, nhưng **rất sắc nét và rõ ràng** nếu bạn dùng pixel art.
Dùng để Làm game 8-bit, retro, pixel art như Mario, Megaman,...
### Bilinear
Khi scale ảnh, Cocos sẽ nội suy (pha trộn) màu của 4 pixel gần nhất để tính màu mới. ->
Ảnh trông **mịn hơn**, **không bị răng cưa**.  
Nhưng nếu dùng cho pixel art thì sẽ **bị mờ và mất nét**.
Dùng khi làm Game 2D thông thường, UI, icon. Khi không cần giữ nét từng pixel mà muốn ảnh mượt.
### Trilinear
Giống Bilinear nhưng phức tạp hơn: dùng nhiều cấp ảnh nhỏ hơn gọi là mipmap và trộn giữa chúng khi ảnh ở xa.-> Ảnh hiển thị **mịn và đều** khi camera **zoom xa/gần** hoặc trong **không gian 3D**. Dùng trong Game 3D, hoặc game có camera phóng xa gần liên tục. Khi dùng Gen Mipmap kèm theo.
### Premultiply Alpha
# Task 2 make a small research about Auto Atlas.
Auto Atlas là một tính năng tự động tạo Texture Atlas – tức là gom nhiều hình ảnh nhỏ (như icon, nhân vật, button, background...) lại thành một ảnh lớn duy nhất.

Cách tạo Auto Atlas: 

Trong panel Assets, click chuột phải → Create → Auto Atlas.
Cocos tạo một file .auto đại diện cho atlas đó. Kéo các hình ảnh bạn muốn gộp vào thư mục chứa Auto Atlas. Cocos sẽ tự động nhóm và xây dựng một atlas khi bạn build hoặc chạy preview.

Một số tùy chỉnh của Auto Atlas:

Trong file .auto, có thể chỉnh:
- Max Size: Kích thước tối đa của ảnh atlas (ví dụ: 2048x2048).
- Padding: Khoảng cách giữa các hình ảnh (tránh viền bị răng cưa).
- Allow Rotation: Cho phép xoay ảnh để tiết kiệm không gian.
- Trim: Cắt bỏ vùng trong suốt thừa.



