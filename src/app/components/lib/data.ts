// ============================================================
//  PORTFOLIO CONFIG  —  Edit this file to personalize your site
//  Bilingual: every text field supports { en, vi }
// ============================================================

export type Lang = "en" | "vi";

export type Bi = { en: string; vi: string };

export const bi = (en: string, vi: string): Bi => ({ en, vi });

export const profile = {
  name: "Hoàng Văn Duy",
  shortName: "Duy",
  initials: "HD",
  role: bi(
    "Full-Stack Software Engineer",
    "Kỹ sư Phần mềm Full-Stack"
  ),
  tagline: bi(
    "I craft fast, beautiful, and reliable web platforms end-to-end.",
    "Tôi chuyên thiết kế và phát triển các nền tảng web tốc độ cao, giao diện tối giản và vận hành tin cậy từ đầu đến cuối."
  ),
  birthYear: 2000,
  location: bi("Ha Noi, Vietnam", "Hà Nội, Việt Nam"),
  availability: bi(
    "Open to freelance & collaboration",
    "Sẵn sàng nhận dự án tự do & hợp tác"
  ),
  bio: bi(
    `I'm a 26-year-old full-stack engineer living in Ha Noi, Vietnam. By day I build a Hospital Information System (HIS) with Angular & .NET; in my free time I ship side projects — a province-wide GIS platform for agriculture and a beauty e-commerce store. I studied at VNUA and love Azure, Docker, and tinkering with AI agents.`,
    `Tôi là một kỹ sư Full-Stack 26 tuổi hiện đang sinh sống và làm việc tại Hà Nội. Công việc chính của tôi là phát triển Hệ thống Thông tin Bệnh viện (HIS) bằng Angular & .NET. Bên cạnh đó, tôi dành thời gian rảnh để xây dựng các dự án thực tế như hệ thống bản đồ GIS nông nghiệp cấp tỉnh và nền tảng thương mại điện tử mỹ phẩm. Tôi tốt nghiệp Học viện Nông nghiệp Việt Nam (VNUA), có niềm đam mê lớn với Azure, Docker và các giải pháp AI Agents.`
  ),
  longBio: bi(
    `My main focus is healthcare software — patient records, scheduling, pharmacy, and billing — where reliability and data integrity come first. Outside of that I keep my hands dirty with mapping (PostGIS), e-commerce, and the occasional AI agent experiment. I care deeply about performance, accessibility, and that "gorgeous CSS" feeling — the kind of interface that makes people stop and smile.`,
    `Lĩnh vực chuyên sâu của tôi là phát triển phần mềm Y tế (HIS) — bao gồm hồ sơ bệnh án điện tử, quản lý lịch hẹn, dược phẩm và thanh toán viện phí — nơi tính chính xác và an toàn dữ liệu được ưu tiên tuyệt đối. Ngoài ra, tôi cũng giàu kinh nghiệm lập trình bản đồ số (PostGIS), xây dựng hệ thống thương mại điện tử và thử nghiệm các mô hình AI Agents. Tôi luôn chú trọng tối ưu hóa hiệu năng, khả năng tiếp cận (Accessibility) và trau chuốt từng hiệu ứng giao diện để mang lại trải nghiệm mượt mà nhất.`
  ),
  email: "hoangduy5533@gmail.com",
  phone: "0348 495 041",
  socials: [
    { name: "GitHub", url: "https://github.com/hduy2000", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/duy-hoang-van-dev/",
      icon: "linkedin",
    },
    { name: "Email", url: "mailto:hoangduy5533@gmail.com", icon: "mail" },
  ],
  stats: [
    { label: bi("Years Coding", "Năm kinh nghiệm"), value: 8, suffix: "+" },
    { label: bi("Projects Shipped", "Dự án hoàn thành"), value: 30, suffix: "+" },
    { label: bi("Happy Clients", "Khách hàng hài lòng"), value: 18, suffix: "+" },
    { label: bi("Coffees / Week", "Cốc cà phê / tuần"), value: 21, suffix: "" },
  ],
};

export type SkillCategory = {
  category: Bi;
  icon: string;
  accent: string;
  skills: { name: string; level: number; note?: Bi }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: bi("Frontend", "Lập trình Frontend"),
    icon: "layout",
    accent: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Angular", level: 92, note: bi("RxJS · NgRx · Standalone", "RxJS · NgRx · Standalone") },
      { name: "Next.js", level: 90, note: bi("App Router · RSC", "App Router · RSC") },
      { name: "React", level: 90, note: bi("Hooks · Server Components", "Hooks · Server Components") },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 95, note: bi("shadcn/ui · Motion", "shadcn/ui · Motion") },
    ],
  },
  {
    category: bi("Backend", "Lập trình Backend"),
    icon: "server",
    accent: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: ".NET / ASP.NET Core", level: 90, note: bi("C# · EF Core · Web API", "C# · EF Core · Web API") },
      { name: "NestJS", level: 87, note: bi("Modules · Guards · DI", "Modules · Guards · DI") },
      { name: "Node.js", level: 88 },
      { name: "REST & GraphQL", level: 85 },
      { name: "SignalR / WebSockets", level: 82 },
    ],
  },
  {
    category: bi("Cloud & DevOps", "Cloud & DevOps"),
    icon: "database",
    accent: "from-sky-400 to-cyan-500",
    skills: [
      { name: "Microsoft Azure", level: 84, note: bi("App Services · Functions", "App Services · Functions") },
      { name: "Docker", level: 83, note: bi("Compose · CI/CD", "Compose · CI/CD") },
      { name: "Git & GitHub", level: 92, note: bi("Flow · Actions · PRs", "Flow · Actions · PRs") },
      { name: "SQL Server", level: 88, note: bi("HIS data layer", "Tầng dữ liệu hệ thống HIS") },
      { name: "PostgreSQL / Prisma", level: 86 },
    ],
  },
  {
    category: bi("Domain & AI", "Nghiệp vụ & AI"),
    icon: "compass",
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "Healthcare (HIS)", level: 88, note: bi("EMR · Pharmacy · Billing", "Hồ sơ bệnh án · Quản lý dược · Viện phí") },
      { name: "GIS / Mapping", level: 84, note: bi("Leaflet · PostGIS", "Leaflet · PostGIS") },
      { name: "E-Commerce", level: 85 },
      { name: "AI Agents", level: 78, note: bi("LLM · Tooling · RAG", "LLM · Tooling · RAG") },
      { name: "Figma → Code", level: 90 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "GIS" | "Healthcare" | "E-Commerce" | "Open Source";
  year: string;
  url?: string;
  description: Bi;
  highlights: Bi[];
  tags: string[];
  gradient: string;
  emoji: string;
  featured?: boolean;
  freetime?: boolean;
};

export const projects: Project[] = [
  {
    id: "his-hospital",
    title: "Hospital Information System",
    category: "Healthcare",
    year: "2023 — Present",
    description: bi(
      "The system I currently build at work — a full Hospital Information System (HIS) covering patient registration, scheduling, electronic medical records, pharmacy, billing, and reporting across departments.",
      "Hệ thống tôi phát triển chính tại công ty — giải pháp quản lý thông tin bệnh viện (HIS) toàn diện bao gồm quản lý tiếp đón bệnh nhân, lịch khám, hồ sơ bệnh án điện tử (EMR), quản lý dược, viện phí và báo cáo thống kê liên phòng ban."
    ),
    highlights: [
      bi("Patient registration & appointment scheduling", "Tiếp đón & Quản lý đặt lịch khám bệnh"),
      bi("Electronic Medical Records (EMR) workflows", "Quy trình bệnh án điện tử (EMR) khép kín"),
      bi("Pharmacy, lab, and billing modules", "Phân hệ quản lý kho dược, cận lâm sàng và viện phí"),
      bi("Role-based access for doctors, nurses & admins", "Phân quyền chặt chẽ theo vai trò (Bác sĩ, Điều dưỡng, Kế toán & Admin)"),
    ],
    tags: ["Angular", ".NET Core", "SQL Server", "SignalR", "EF Core"],
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    emoji: "🏥",
    featured: true,
  },
  {
    id: "nongnghiep-daklak",
    title: "Nông Nghiệp Đắk Lắk",
    category: "GIS",
    year: "2023 — Present",
    url: "https://nongnghiepdaklak.vn/",
    description: bi(
      "A freetime Geographic Information System platform for agriculture in Đắk Lắk province — mapping crops, monitoring weather, and visualizing farm data on interactive maps.",
      "Nền tảng Hệ thống thông tin địa lý (GIS) phục vụ ngành nông nghiệp tỉnh Đắk Lắk — hỗ trợ số hóa bản đồ cây trồng, giám sát thời tiết nông vụ và trực quan hóa dữ liệu canh tác trên bản đồ tương tác."
    ),
    highlights: [
      bi("Interactive layered maps with crop & soil data", "Bản đồ tương tác đa tầng dữ liệu cây trồng và thổ nhưỡng"),
      bi("Real-time weather & irrigation overlays", "Lớp phủ thông tin thời tiết & hệ thống tưới tiêu thời gian thực"),
      bi("Admin dashboard for agricultural officers", "Bảng điều khiển quản lý dành cho cán bộ nông nghiệp"),
      bi("Optimized tile rendering for large datasets", "Tối ưu hóa hiển thị bản đồ (Map Tiles rendering) với tập dữ liệu lớn"),
    ],
    tags: ["Angular", ".NET", "PostGIS", "Leaflet", "SQL Server"],
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    emoji: "🌾",
    featured: true,
    freetime: true,
  },
  {
    id: "xuanxinh-beauty",
    title: "Xuân Xinh Beauty Store",
    category: "E-Commerce",
    year: "2024",
    url: "https://xuanxinhbeauty.store/",
    description: bi(
      "A freetime e-commerce storefront for a beauty & cosmetics brand — fast product browsing, cart, checkout, and an elegant, conversion-focused design.",
      "Trang thương mại điện tử chuyên nghiệp cho thương hiệu mỹ phẩm Xuân Xinh — tối ưu tốc độ duyệt sản phẩm, tính năng giỏ hàng tiện lợi và giao diện hiện đại hướng tới tối đa hóa tỷ lệ chuyển đổi."
    ),
    highlights: [
      bi("Beautiful, mobile-first storefront", "Giao diện thiết kế chỉn chu, tối ưu trải nghiệm di động"),
      bi("Cart, coupon & secure checkout flow", "Hệ thống giỏ hàng, áp dụng mã giảm giá & cổng thanh toán bảo mật"),
      bi("Product search, filters & recommendations", "Bộ lọc tìm kiếm thông minh & công cụ gợi ý sản phẩm liên quan"),
      bi("Admin panel for inventory & orders", "Hệ thống quản lý kho hàng và xử lý đơn hàng dành cho Admin"),
    ],
    tags: ["Next.js", "NestJS", "Prisma", "Stripe", "Tailwind"],
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
    emoji: "💄",
    featured: true,
    freetime: true,
  },
  {
    id: "dashboard-analytics",
    title: "Realtime Analytics Dashboard",
    category: "Open Source",
    year: "2024",
    description: bi(
      "A plug-and-play realtime analytics dashboard with live charts, websocket streams, and customizable widgets for monitoring any metric stream.",
      "Trang quản trị phân tích số liệu thời gian thực tích hợp biểu đồ động, kết nối Websocket và các thẻ thông tin tùy biến cho phép giám sát dữ liệu trực quan."
    ),
    highlights: [
      bi("Live websocket-powered charts", "Biểu đồ trực quan cập nhật tự động qua Websocket"),
      bi("Drag-and-drop widget grid", "Bố cục dạng lưới cho phép kéo thả tùy biến widget"),
      bi("Dark mode & themable palettes", "Hỗ trợ giao diện sáng/tối & tùy chỉnh bảng màu đa dạng"),
      bi("Exportable reports (PDF / CSV)", "Xuất báo cáo dữ liệu định dạng PDF / CSV tiện lợi"),
    ],
    tags: ["Next.js", "NestJS", "Socket.io", "Recharts"],
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    emoji: "📊",
    freetime: true,
  },
  {
    id: "field-survey-app",
    title: "Field Survey Collector",
    category: "GIS",
    year: "2022",
    description: bi(
      "An offline-first mobile-friendly app for field agents to collect geotagged survey data, sync when online, and visualize on a central map.",
      "Ứng dụng di động hoạt động ngoại tuyến (Offline-First) hỗ trợ điều tra viên thu thập dữ liệu hiện trường định vị GPS, tự động đồng bộ hóa và hiển thị trên bản đồ trung tâm."
    ),
    highlights: [
      bi("Offline-first PWA with sync queue", "Ứng dụng PWA hoạt động ngoại tuyến với hàng đợi tự động đồng bộ"),
      bi("Geotagged photos & forms", "Chụp ảnh và điền biểu mẫu đính kèm tọa độ GPS"),
      bi("Central map review & export", "Quản lý và trích xuất dữ liệu tập trung trên bản đồ"),
    ],
    tags: ["Angular", "PWA", "IndexedDB", ".NET"],
    gradient: "from-lime-500 via-emerald-500 to-teal-600",
    emoji: "📍",
    freetime: true,
  },
  {
    id: "dev-portfolio-kit",
    title: "Gorgeous Dev Portfolio Kit",
    category: "Open Source",
    year: "2025",
    description: bi(
      "This very portfolio — an open-source, animated, glassmorphic Next.js template for developers who want their work to feel alive.",
      "Chính trang portfolio cá nhân này — một dự án mã nguồn mở sử dụng Next.js kết hợp hiệu ứng kính mờ (Glassmorphic UI) và hoạt ảnh mượt mà."
    ),
    highlights: [
      bi("Framer Motion page transitions", "Hiệu ứng chuyển trang mượt mà với Framer Motion"),
      bi("Aurora gradient + glassmorphism UI", "Nền gradient cực quang (Aurora) và giao diện kính mờ cao cấp"),
      bi("Working contact API with Prisma", "Hệ thống API nhận tin nhắn liên hệ tích hợp Prisma & SQLite"),
      bi("Fully responsive & dark mode", "Hỗ trợ Responsive tối đa và giao diện tối (Dark Mode) tự động"),
    ],
    tags: ["Next.js", "Tailwind", "Framer Motion", "Prisma"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    emoji: "✨",
    freetime: true,
  },
];

export const projectFilters = [
  bi("All", "Tất cả"),
  bi("GIS", "GIS"),
  bi("Healthcare", "Y tế"),
  bi("E-Commerce", "Thương mại"),
  bi("Open Source", "Mã nguồn mở"),
] as const;

export type ExperienceItem = {
  period: string;
  role: Bi;
  org: Bi;
  description: Bi;
  tags: string[];
  accent: string;
  kind?: "work" | "freetime" | "education";
};

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: bi("Full-Stack Engineer", "Kỹ sư Full-Stack"),
    org: bi("Hospital Information System (HIS)", "Hệ thống Thông tin Bệnh viện (HIS)"),
    description: bi(
      "My day job — building and maintaining a Hospital Information System. I work across the stack on EMR, scheduling, pharmacy, and billing modules, with a strict focus on data integrity and uptime.",
      "Đảm nhiệm vai trò kỹ sư Full-Stack chính phát triển hệ thống HIS của bệnh viện. Thiết kế và tối ưu các phân hệ EMR, lịch khám, quản lý kho dược và viện phí, đảm bảo độ chính xác dữ liệu và thời gian vận hành liên tục."
    ),
    tags: ["Angular", ".NET Core", "SQL Server", "Azure", "Docker"],
    accent: "from-sky-500 to-cyan-500",
    kind: "work",
  },
  {
    period: "2023 — Present",
    role: bi("Indie / Freetime Builder", "Lập trình viên thời gian rảnh"),
    org: bi("Nông Nghiệp Đắk Lắk (GIS)", "Nông Nghiệp Đắk Lắk (GIS)"),
    description: bi(
      "In my free time I build and run a province-wide GIS platform for agriculture — interactive maps, weather overlays, and admin tooling for agricultural officers.",
      "Phát triển giải pháp bản đồ số GIS ngành nông nghiệp cấp tỉnh — tích hợp bản đồ tương tác, các lớp dữ liệu thời tiết nông nghiệp và công cụ quản trị cho cán bộ chức năng."
    ),
    tags: ["Angular", ".NET", "PostGIS", "Leaflet"],
    accent: "from-emerald-500 to-teal-500",
    kind: "freetime",
  },
  {
    period: "2024",
    role: bi("Indie / Freetime Builder", "Lập trình viên thời gian rảnh"),
    org: bi("Xuân Xinh Beauty Store", "Cửa hàng Xuân Xinh Beauty"),
    description: bi(
      "Designed and shipped a complete e-commerce experience for a beauty brand — storefront, cart, checkout, and admin, end-to-end on Next.js + NestJS.",
      "Xây dựng nền tảng thương mại điện tử khép kín cho thương hiệu mỹ phẩm Xuân Xinh — xử lý thiết kế UI/UX, giỏ hàng, tích hợp cổng thanh toán và quản trị sản phẩm toàn diện trên stack Next.js & NestJS."
    ),
    tags: ["Next.js", "NestJS", "Prisma"],
    accent: "from-fuchsia-500 to-rose-500",
    kind: "freetime",
  },
  {
    period: "2018 — 2022",
    role: bi("BSc Student", "Sinh viên Cử nhân"),
    org: bi("VNUA — Vietnam National University of Agriculture", "VNUA — Học viện Nông nghiệp Việt Nam"),
    description: bi(
      "Studied at VNUA in Vietnam, where I built my engineering foundations and fell in love with clean architecture and gorgeous interfaces.",
      "Tốt nghiệp kỹ sư tại VNUA, nơi giúp tôi xây dựng nền tảng tư duy lập trình vững chắc và định hình phong cách thiết kế giao diện tinh tế kết hợp kiến trúc phần mềm sạch."
    ),
    tags: ["CS Foundations", ".NET", "Angular", "TypeScript"],
    accent: "from-amber-400 to-orange-500",
    kind: "education",
  },
];

export type ServiceItem = {
  title: Bi;
  description: Bi;
  icon: string;
};

export const services: ServiceItem[] = [
  {
    title: bi("Web App Development", "Phát triển Ứng dụng Web"),
    description: bi(
      "End-to-end web apps with Angular or Next.js frontends and .NET / NestJS backends — performant, tested, and maintainable.",
      "Phát triển ứng dụng Web toàn diện từ Frontend (Angular, Next.js) đến Backend (.NET, NestJS) — cam kết hiệu năng cao, viết test đầy đủ và dễ dàng mở rộng."
    ),
    icon: "globe",
  },
  {
    title: bi("GIS & Mapping Solutions", "Giải pháp GIS & Bản đồ"),
    description: bi(
      "Interactive maps, spatial data pipelines, and dashboards built on PostGIS, Leaflet, and modern web stacks.",
      "Tích hợp bản đồ tương tác, xử lý dữ liệu không gian và xây dựng dashboard dựa trên PostGIS, Leaflet cùng các công nghệ web hiện đại."
    ),
    icon: "map",
  },
  {
    title: bi("Enterprise Systems", "Hệ thống Doanh nghiệp"),
    description: bi(
      "Robust line-of-business systems like HIS, ERP, and inventory — secure, role-based, and built to scale on Azure.",
      "Thiết kế các hệ thống quản trị chuyên sâu như HIS, ERP, quản lý kho hàng — bảo mật phân quyền chặt chẽ, tối ưu hóa quy trình nghiệp vụ và triển khai trên đám mây Azure."
    ),
    icon: "building",
  },
  {
    title: bi("E-Commerce Stores", "Cửa hàng Thương mại Điện tử"),
    description: bi(
      "Conversion-focused storefronts with cart, checkout, payments, and powerful admin panels.",
      "Xây dựng trang bán hàng trực tuyến tập trung tối ưu tỷ lệ chuyển đổi, tích hợp giỏ hàng thông minh, cổng thanh toán trực tuyến và hệ thống quản trị thân thiện."
    ),
    icon: "shopping",
  },
];

export type Testimonial = {
  name: string;
  role: Bi;
  text: Bi;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hospital IT Lead",
    role: bi("HIS Deployment", "Trưởng nhóm triển khai HIS"),
    text: bi(
      "Reliable, detail-obsessed, and a great communicator. The HIS modules he works on are mission-critical for us.",
      "Tác phong làm việc chuyên nghiệp, chú trọng chi tiết và khả năng phối hợp rất tốt. Phân hệ HIS do Duy đảm nhận đóng vai trò then chốt trong hoạt động vận hành của bệnh viện."
    ),
    initials: "HI",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    name: "Project Stakeholder",
    role: bi("Agriculture Platform", "Đại diện ban dự án Nông nghiệp"),
    text: bi(
      "Delivered a complex GIS platform on time and made it genuinely beautiful. The maps are fast and the admin tools just work.",
      "Bàn giao hệ thống bản đồ GIS phức tạp đúng tiến độ và giao diện được chăm chút rất thẩm mỹ. Tốc độ hiển thị bản đồ nhanh và các công cụ quản trị hoạt động cực kỳ ổn định."
    ),
    initials: "PS",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Store Owner",
    role: bi("Xuân Xinh Beauty", "Chủ cửa hàng Xuân Xinh"),
    text: bi(
      "Our sales went up the week the new store launched. It looks stunning on mobile and the checkout is effortless.",
      "Doanh thu tăng trưởng rõ rệt ngay từ tuần đầu ra mắt website mới. Giao diện di động hiển thị cực kỳ đẹp mắt và quy trình thanh toán rất tiện lợi cho khách hàng."
    ),
    initials: "SO",
    accent: "from-fuchsia-500 to-rose-500",
  },
];
