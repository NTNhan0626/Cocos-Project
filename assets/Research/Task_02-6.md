#  Singleton Pattern
## 1. Singleton là gì?

**Singleton** là một *design pattern* thuộc nhóm **Creational Pattern**, đảm bảo rằng:
- Một lớp chỉ có duy nhất một thể hiện (instance) trong suốt vòng đời của chương trình.
- Cung cấp một điểm truy cập toàn cục đến thể hiện duy nhất đó.
---
## 2. Lý do sử dụng

Trong nhiều hệ thống phần mềm, có những thành phần:
- Không nên tồn tại nhiều bản sao.
- Cần được chia sẻ và truy cập ở nhiều nơi trong chương trình.
Các ví dụ điển hình:
- `AudioManager` quản lý âm thanh trong game.
- `GameSettings` lưu trữ cấu hình toàn cục.
- `Logger` ghi log hệ thống.
- `DatabaseConnection` kết nối cơ sở dữ liệu.
Nếu không sử dụng Singleton, sẽ có nguy cơ:
- Tạo ra nhiều bản sao dư thừa.
- Gây xung đột dữ liệu hoặc tăng chi phí bộ nhớ.
- Khó kiểm soát trạng thái và logic chung.
---
## 3. Khi nào nên dùng ?

Sử dụng Singleton khi bạn:
- Chỉ cần **duy nhất một đối tượng** của lớp trong suốt vòng đời chương trình.
- Muốn **quản lý trạng thái chung** như config, kết nối, âm thanh,…
- Cần **truy cập từ bất kỳ đâu** mà không muốn truyền object qua nhiều lớp.
## 4. Ưu điểm và Nhược điểm

### Ưu điểm
- Đảm bảo duy nhất một instance tránh lỗi logic hoặc xung đột dữ liệu.
- Quản lý trạng thái toàn cục dùng cho config, logger, audio…
- Truy cập đơn giản từ bất kỳ đâu mà không cần truyền đối tượng qua nhiều lớp.
- Hỗ trợ lazy initialization chỉ tạo khi cần thiết, tiết kiệm tài nguyên.
### Nhược điểm
- Tạo phụ thuộc toàn cục (global coupling) khó bảo trì và test.
- Không phù hợp với unit test khó mock hoặc inject phụ thuộc.
- Gây lỗi trong môi trường đa luồng nếu không xử lý đúng cách.
- Vi phạm nguyên lý SOLID (Dependency Inversion) khó mở rộng hoặc thay thế.
# Observer Pattern
## 1. Observer là gì?

Observer là một design pattern thuộc nhóm Behavioral Pattern, cho phép thiết lập mối quan hệ phụ thuộc một-nhiều giữa các đối tượng, để khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc sẽ tự động được thông báo và cập nhật.
## 2. Lý do sử dụng

Trong các hệ thống tương tác (UI, sự kiện, dữ liệu thay đổi), bạn thường cần:
- Tự động cập nhật giao diện hoặc trạng thái khi một giá trị thay đổi.
- Tách rời đối tượng quản lý dữ liệu và đối tượng hiển thị hoặc phản ứng.
- Tăng tính mở rộng, giảm phụ thuộc trực tiếp giữa các đối tượng.
---
## 3. Khi nào nên dùng ?

Dùng khi:
- Có một đối tượng **Subject (Publisher)** thay đổi trạng thái, và cần nhiều đối tượng **Observer (Subscriber)** phản hồi lại sự thay đổi đó.
- **Thiết kế hệ thống theo hướng sự kiện (event-driven)**.
- Cần **liên kết dữ liệu với UI** mà không làm rối code logic.
---
## 4. Ưu điểm và Nhược điểm

### Ưu điểm
- **Tăng tính mở rộng**  Dễ dàng thêm hoặc gỡ Observer mà không cần sửa Subject.
- **Giảm phụ thuộc giữa các thành phần**  Subject không cần biết chi tiết Observer.
- **Hỗ trợ mô hình sự kiện (event system)** Phù hợp trong GUI, hệ thống game, reactive programming.
### Nhược điểm
- **Khó debug** Do việc cập nhật được thực hiện tự động và ẩn sau hậu trường.
- **Có thể gây hiệu suất thấp** nếu số lượng Observer quá nhiều.
- **Khó kiểm soát thứ tự cập nhật** Nếu Observer phụ thuộc nhau.
- **Gây memory leak nếu quên unregister** Nhất là khi Observer không còn tồn tại.
#  Command Pattern

## 1. Command là gì 

**Command Pattern** là một mẫu thiết kế thuộc nhóm **Behavioral Pattern**, dùng để **đóng gói một yêu cầu (command)** thành một đối tượng. Mục tiêu nhằm **tách rời logic gọi lệnh và logic thực thi**, đồng thời hỗ trợ các thao tác như xếp hàng, lưu trữ, hoàn tác (undo), làm lại (redo), hoặc thực hiện hàng loạt (macro).
## 2. Lý do sử dụng

Command Pattern giải quyết vấn đề phụ thuộc trực tiếp giữa đối tượng gửi lệnh và đối tượng thực thi lệnh. Mẫu thiết kế này cung cấp giải pháp để:
- Tách biệt phần gọi và phần xử lý hành động.
- Quản lý lịch sử các hành động (undo/redo).
- Tạo hàng đợi lệnh hoặc tổ hợp các hành động.
---
## 3. Khi nào nên dùng ?

Áp dụng khi:
- Cần xử lý các thao tác người dùng theo dạng lệnh có thể hoàn tác.
- Cần lưu trữ, xếp hàng hoặc xử lý đồng bộ các hành động.
- Cần xây dựng hệ thống plugin hoặc macro.
- Giao diện điều khiển và logic xử lý cần được phân tách rõ ràng.
---
## 4. Ưu điểm và Nhược điểm

### Ưu điểm
- Tách biệt phần gọi lệnh và phần thực thi.
- Dễ dàng hỗ trợ tính năng undo/redo.
- Mở rộng linh hoạt bằng cách thêm các lớp lệnh mới.
- Hỗ trợ ghi log, hàng đợi, hoặc thực thi lệnh theo lịch trình.
### Nhược điểm
- Tăng số lượng lớp trong hệ thống (mỗi lệnh cần một lớp riêng).
- Logic quản lý lịch sử hoặc hàng đợi cần viết thủ công.
- Cấu trúc hệ thống có thể phức tạp hơn trong các ứng dụng đơn giản.
---
#  Flyweight Pattern

## 1. Flyweight là gì?

**Flyweight Pattern** là một mẫu thiết kế thuộc nhóm **Structural Pattern**, nhằm **tối ưu hóa việc sử dụng bộ nhớ** bằng cách **chia sẻ dữ liệu dùng chung giữa nhiều đối tượng tương tự nhau**.
Mẫu này phân tách trạng thái thành:
- **Intrinsic state**: Phần dữ liệu dùng chung, không thay đổi.
- **Extrinsic state**: Phần dữ liệu riêng biệt, được truyền từ bên ngoài khi sử dụng.
---
## 2. Lý do sử dụng

Trong các hệ thống có hàng ngàn đối tượng tương tự nhau, việc lưu trữ toàn bộ dữ liệu cho từng đối tượng có thể gây lãng phí bộ nhớ. Flyweight Pattern cung cấp cơ chế chia sẻ dữ liệu dùng chung để:
- Tiết kiệm tài nguyên hệ thống.
- Giảm số lượng đối tượng vật lý được khởi tạo.
- Dễ quản lý dữ liệu cấu trúc lặp lại.
---
## 3. Khi nào nên dùng ?

Áp dụng khi:
- Hệ thống cần tạo ra **số lượng lớn đối tượng tương tự nhau**, chẳng hạn như ký tự văn bản, quân lính trong game, tiles trong bản đồ.
- Nhiều đối tượng chia sẻ chung một phần trạng thái (texture, mesh, màu sắc, logic...).
- Cần tối ưu bộ nhớ hoặc hiệu năng trong môi trường hạn chế tài nguyên.
---
## 4. Ưu điểm và Nhược điểm

###  Ưu điểm
- Tiết kiệm bộ nhớ bằng cách chia sẻ dữ liệu dùng chung.
- Tăng hiệu suất ứng dụng khi làm việc với số lượng lớn đối tượng.
- Giảm chi phí khởi tạo đối tượng.
###  Nhược điểm
- Tăng độ phức tạp khi phân tách trạng thái nội tại và trạng thái bên ngoài.
- Cần quản lý bộ dữ liệu chia sẻ một cách chính xác.
- Không phù hợp trong trường hợp phần lớn dữ liệu là duy nhất cho mỗi đối tượng.

---
# State Pattern

## 1. State là gì?

**State Pattern** là một mẫu thiết kế thuộc nhóm **Behavioral Pattern**, cho phép một đối tượng thay đổi hành vi của nó khi trạng thái nội tại thay đổi, làm cho đối tượng dường như thay đổi lớp của nó tại thời điểm chạy.

Mỗi trạng thái được thể hiện bằng một lớp riêng biệt và được quản lý bởi đối tượng ngữ cảnh (context).
---
## 2. Lý do sử dụng

Mẫu thiết kế này hỗ trợ:
- Tách riêng logic hành vi theo từng trạng thái cụ thể.
- Giảm độ phức tạp của cấu trúc `if-else` hoặc `switch-case`.
- Cho phép mở rộng các trạng thái mà không thay đổi logic của lớp chính.
---
## 3. Khi nào nên dùng ?

Áp dụng khi:
- Đối tượng có **nhiều trạng thái**, mỗi trạng thái có hành vi riêng biệt.
- Cần thay đổi hành vi của đối tượng trong thời gian chạy mà không dùng `if-else` lặp lại.
- Hành vi phức tạp và cần tổ chức lại cho rõ ràng, dễ bảo trì, mở rộng.
Ví dụ phổ biến:
- Trạng thái nhân vật trong game: `Idle`, `Running`, `Jumping`, `Attacking`.
- Máy bán hàng tự động: `Đợi tiền`, `Có tiền`, `Đang trả hàng`.
- Giao tiếp mạng: `Kết nối`, `Ngắt kết nối`, `Đang gửi dữ liệu`.
---
## 4. Ưu điểm và Nhược điểm

### Ưu điểm
- Tách biệt hành vi theo trạng thái dễ tổ chức và bảo trì.
- Loại bỏ các cấu trúc điều kiện lồng nhau (if/switch).
- Dễ mở rộng trạng thái mới mà không ảnh hưởng đến logic chính.
- Cung cấp khả năng đóng gói hành vi theo từng trạng thái.
### Nhược điểm
- Tăng số lượng lớp trong hệ thống (mỗi trạng thái là một lớp riêng).
- Việc chuyển đổi trạng thái cần được kiểm soát chặt để tránh lỗi logic.
- Không phù hợp với các hệ thống đơn giản có ít trạng thái.

---
