export interface Course {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface TechService {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  courseOrService: string;
  avatarUrl?: string;
  content: string;
  rating: number;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const coursesData: Course[] = [
  {
    id: "tin-hoc-co-ban",
    title: "Tin học văn phòng Cơ bản",
    price: 1500000,
    originalPrice: 1800000,
    duration: "10 buổi (20 giờ)",
    description: "Làm chủ máy tính, hệ điều hành, soạn thảo văn bản quy chuẩn và xây dựng bảng tính cơ bản. Hoàn hảo cho người mới bắt đầu.",
    features: [
      "Quản lý file & Sử dụng Windows tối ưu",
      "Soạn thảo văn bản quy chuẩn hành chính",
      "Kỹ năng tạo slide PowerPoint cơ bản",
      "Sử dụng Excel cơ bản trong quản lý dữ liệu",
      "Chứng chỉ hoàn thành khóa học & Hỗ trợ 1-1"
    ]
  },
  {
    id: "excel-nang-cao",
    title: "Excel Thực Chiến Nâng Cao",
    price: 2000000,
    originalPrice: 2500000,
    duration: "12 buổi (24 giờ)",
    description: "Bứt phá kỹ năng xử lý dữ liệu lớn, lập báo cáo động, vẽ biểu đồ dashboard chuyên nghiệp và tự động hóa công việc.",
    popular: true,
    features: [
      "Làm chủ 30+ hàm xử lý chuỗi, ngày, logic nâng cao",
      "Pivot Table & Pivot Chart nâng cao từ A-Z",
      "Tự động hóa tác vụ với Power Query cơ bản",
      "Thiết kế Dashboard báo cáo động chuẩn doanh nghiệp",
      "Tặng kho templates báo cáo & Support trọn đời"
    ]
  },
  {
    id: "word-powerpoint",
    title: "Combo Word + PowerPoint GenZ Style",
    price: 1800000,
    originalPrice: 2200000,
    duration: "10 buổi (20 giờ)",
    description: "Soạn thảo văn bản hành chính thần tốc kết hợp thiết kế slide thuyết trình ấn tượng, cuốn hút người nghe theo phong cách hiện đại.",
    features: [
      "Trình bày báo cáo, hợp đồng chuẩn ISO",
      "Mẹo soạn thảo, trộn thư, phím tắt nhanh 3x",
      "Tư duy bố cục, màu sắc & typography trong thiết kế",
      "Kỹ thuật hiệu ứng Morph & Zoom chuyển động mượt mà",
      "Tặng kho slide premium thiết kế sẵn cực đẹp"
    ]
  },
  {
    id: "luyen-thi-mos",
    title: "Luyện Thi Chứng Chỉ MOS (Excel/Word/PPT)",
    price: 2500000,
    originalPrice: 3000000,
    duration: "12 buổi + Luyện đề không giới hạn",
    description: "Lộ trình ôn thi tinh gọn giúp bạn đạt chứng chỉ Tin học văn phòng quốc tế Microsoft Office Specialist (MOS) điểm tuyệt đối.",
    features: [
      "Học sát theo đề thi thật cập nhật mới nhất",
      "Phần mềm thi thử bản quyền giống 99% thực tế",
      "Thầy giáo chữa đề chi tiết từng lỗi sai thường gặp",
      "Cam kết đỗ 100% - Học lại miễn phí nếu không đạt",
      "Tối ưu CV, tăng lợi thế cạnh tranh khi xin việc"
    ]
  }
];

export const servicesData: TechService[] = [
  {
    id: "cai-windows",
    name: "Cài Hệ Điều Hành Windows",
    price: "150.000đ",
    priceValue: 150000,
    description: "Cài đặt Windows 10/11 Pro sạch, kích hoạt bản quyền vĩnh viễn, tối ưu hóa hệ thống chạy siêu mượt mà.",
    features: ["Cài đầy đủ driver chuẩn hãng", "Hỗ trợ sao lưu dữ liệu an toàn", "Tối ưu hóa tốc độ khởi động", "Tặng cài phần mềm giải nén, PDF"]
  },
  {
    id: "cai-office",
    name: "Cài Đặt Microsoft Office",
    price: "100.000đ",
    priceValue: 100000,
    description: "Cài đặt các phiên bản Office 2019/2021/365 kích hoạt đầy đủ tính năng, ổn định, không lỗi font.",
    features: ["Bao gồm Word, Excel, PowerPoint, Outlook", "Cài đặt bộ font tiếng Việt đầy đủ nhất", "Hỗ trợ trọn đời, không lo bị khóa", "Cài đặt nhanh qua Ultraview/Teamview"]
  },
  {
    id: "cai-do-hoa",
    name: "Cài Đặt Phần Mềm Đồ Họa",
    price: "từ 80.000đ",
    priceValue: 80000,
    description: "Cài đặt trọn bộ phần mềm đồ họa, thiết kế chuyên nghiệp như Photoshop, Illustrator, AutoCAD, Premiere, Lightroom...",
    features: ["Kích hoạt vĩnh viễn, đầy đủ tính năng", "Hỗ trợ cài đặt từ xa qua UltraView", "Tương thích tốt, chạy mượt mà ổn định", "Đa dạng phiên bản theo cấu hình máy"]
  },
  {
    id: "cai-theo-yeu-cau",
    name: "Cài Phần Mềm Theo Yêu Cầu",
    price: "từ 50.000đ",
    priceValue: 50000,
    description: "Cài đặt các phần mềm học tập, làm việc chuyên ngành khác theo yêu cầu như SPSS, Matlab, Solidworks, các công cụ lập trình...",
    features: ["Cài đặt và cấu hình hoàn chỉnh", "Hỗ trợ kiểm tra lỗi trước khi dùng", "UltraView nhanh gọn, không cần ra tiệm", "Tư vấn phần mềm tối ưu cho cấu hình"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "testi-1",
    name: "Nguyễn Minh Anh",
    role: "Nhân viên Hành chính Nhân sự",
    courseOrService: "Học viên Excel Thực Chiến Nâng Cao",
    avatarUrl: "/avatars/avatar-1.png",
    content: "Thầy giáo dạy siêu dễ hiểu, thực hành thực tế, học xong áp dụng được ngay vào các báo cáo ở công ty! Trước đây mình mất cả ngày làm báo cáo, giờ chỉ cần 1 tiếng là xong nhờ ứng dụng Pivot Table động.",
    rating: 5
  },
  {
    id: "testi-2",
    name: "Trần Hoàng Nam",
    role: "Sinh viên Đại học Kinh tế Quốc dân",
    courseOrService: "Học viên Luyện thi MOS Excel",
    avatarUrl: "/avatars/avatar-2.png",
    content: "Phương pháp dạy rất GenZ, tràn đầy năng lượng, không bị nhàm chán như đi học ở các trung tâm truyền thống. Mình đã ôn thi rất tự tin và đạt chứng chỉ MOS Excel với số điểm 980/1000 ngay từ lần thi đầu tiên!",
    rating: 5
  },
  {
    id: "testi-3",
    name: "Phạm Thu Thủy",
    role: "Kế toán viên tự do",
    courseOrService: "Khách hàng Cài Win & Phần mềm đồ họa",
    avatarUrl: "/avatars/avatar-3.png",
    content: "Dịch vụ nhanh gọn, uy tín, thầy giáo hỗ trợ rất nhiệt tình. Máy tính của mình bị chậm đơ suốt 2 tháng nay, sau khi được cài lại Windows và cài đặt thêm trọn bộ phần mềm đồ họa thiết kế thì máy chạy cực nhanh, mượt mà!",
    rating: 5
  },
  {
    id: "testi-4",
    name: "Lê Quốc Bảo",
    role: "Trưởng phòng Kinh doanh",
    courseOrService: "Học viên Combo Word + PowerPoint",
    avatarUrl: "/avatars/avatar-4.png",
    content: "Khóa học cực kỳ chất lượng. Các mẫu PowerPoint được chia sẻ rất đẹp và hợp xu thế. Mình học xong tự tay thiết kế slide báo cáo kinh doanh cho ban giám đốc, ai cũng khen bố cục trực quan và chuyên nghiệp.",
    rating: 5
  }
];

export const valuesData: ValueCard[] = [
  {
    id: "val-1",
    title: "Phương Pháp Học Vibe GenZ",
    description: "Nói không với giáo điều, lý thuyết suông. Học bằng ngôn ngữ dí dỏm, thực hành trực quan, cuốn hút từ giây đầu tiên.",
    iconName: "Zap"
  },
  {
    id: "val-2",
    title: "Thực Chiến 100% Doanh Nghiệp",
    description: "Học qua các case study thực tế từ văn phòng làm việc. Cam kết làm được việc ngay sau mỗi buổi học.",
    iconName: "Target"
  },
  {
    id: "val-3",
    title: "Support 24/7 Trọn Đời",
    description: "Được hỗ trợ giải đáp thắc mắc học tập, công việc trọn đời thông qua nhóm Zalo kín. Thầy giáo luôn đồng hành sát sao.",
    iconName: "MessageCircle"
  },
  {
    id: "val-4",
    title: "Học Phí Tối Ưu, Cam Kết Đầu Ra",
    description: "Học phí siêu tốt phù hợp học sinh sinh viên và người mới đi làm. Hoàn tiền hoặc học lại miễn phí nếu không làm được việc.",
    iconName: "ShieldCheck"
  }
];

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "500+",
    label: "Học viên",
    description: "Đã tốt nghiệp và đang làm việc hiệu quả"
  },
  {
    id: "stat-2",
    value: "50+",
    label: "Lớp học",
    description: "Đã và đang được khai giảng liên tục"
  },
  {
    id: "stat-3",
    value: "95%",
    label: "Hài lòng",
    description: "Đánh giá 5 sao về chất lượng giảng dạy"
  }
];
