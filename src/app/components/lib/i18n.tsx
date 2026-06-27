"use client";

import * as React from "react";
import type { Lang, Bi } from "@/lib/data";

export type UI = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    services: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    greeting: (name: string, birthYear: number, location: string) => string;
    line1: string;
    line2: string;
    line3a: string;
    line3b: string;
    taglineTail: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
    badges: { frontend: string; backend: string; fullstack: string };
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    howIWork: string;
    traits: { title: string; desc: string }[];
    born: (year: number) => string;
  };
  skills: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    coreTech: string;
  };
  projects: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    featured: string;
    freetime: string;
    highlights: string;
    techStack: string;
    visitLive: string;
  };
  experience: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    kinds: { work: string; freetime: string; education: string };
  };
  services: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    testimonialsEyebrow: string;
    testimonialsTitleA: string;
    testimonialsTitleB: string;
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    description: string;
    getInTouch: string;
    getInTouchDesc: string;
    email: string;
    phone: string;
    location: string;
    currentlyAvailable: string;
    replyTime: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    budget: string;
    message: string;
    messagePlaceholder: string;
    optional: string;
    sending: string;
    sent: string;
    send: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    nameError: string;
    emailError: string;
    messageError: string;
  };
  footer: {
    navigate: string;
    getInTouch: string;
    backToTop: string;
    builtWith: string;
    using: string;
  };
  langToggle: { label: string };
};

const en: UI = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    services: "Services",
    contact: "Contact",
    letsTalk: "Let's talk",
  },
  hero: {
    greeting: (name, birthYear, location) =>
      `Hi, I'm ${name} — a full-stack engineer born in ${birthYear} based in ${location}`,
    line1: "I build",
    line2: "gorgeous web",
    line3a: "platforms",
    line3b: "end-to-end.",
    taglineTail:
      "Angular, .NET, Next.js & NestJS — from interactive maps and hospital systems to delightful e-commerce stores.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    scroll: "Scroll",
    badges: { frontend: "Frontend", backend: "Backend", fullstack: "Full-Stack" },
  },
  about: {
    eyebrow: "About me",
    titleA: "Engineer by craft,",
    titleB: "designer at heart",
    description: "A short story about who I am and how I work.",
    howIWork: "How I work",
    traits: [
      {
        title: "End-to-end ownership",
        desc: "From database schema to the final pixel — I own the whole journey.",
      },
      {
        title: "Ship fast, polish later",
        desc: "MVPs in days, then obsess over the details that make it feel premium.",
      },
      {
        title: "UX-obsessed",
        desc: "Function alone isn't enough. The interface should feel alive.",
      },
      {
        title: "Reliable partner",
        desc: "Clear communication, honest timelines, and zero ghosting.",
      },
    ],
    born: (year) => `Born in ${year}`,
  },
  skills: {
    eyebrow: "Skills & Stack",
    titleA: "My",
    titleB: "toolkit for shipping",
    description:
      "The technologies I reach for every day, organized by where they live in the stack.",
    coreTech: "core technologies",
  },
  projects: {
    eyebrow: "Selected work",
    titleA: "Projects I'm",
    titleB: "proud of",
    description:
      "A mix of production platforms and personal builds — GIS, healthcare, e-commerce, and more.",
    featured: "Featured",
    freetime: "Freetime",
    highlights: "Highlights",
    techStack: "Tech stack",
    visitLive: "Visit live site",
  },
  experience: {
    eyebrow: "Career",
    titleA: "The road",
    titleB: "so far",
    description: "A timeline of the teams and products I've helped build.",
    kinds: { work: "Work", freetime: "Freetime", education: "Education" },
  },
  services: {
    eyebrow: "What I do",
    titleA: "Services I",
    titleB: "offer",
    description:
      "From a single feature to a full platform — here's how I can help.",
    testimonialsEyebrow: "Kind words",
    testimonialsTitleA: "What people",
    testimonialsTitleB: "say",
  },
  contact: {
    eyebrow: "Contact",
    titleA: "Let's build something",
    titleB: "gorgeous",
    description:
      "Have a project in mind, or just want to say hi? My inbox is always open.",
    getInTouch: "Get in touch",
    getInTouchDesc:
      "Whether it's a GIS platform, an enterprise system, or a brand-new store — I'd love to hear about it.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    currentlyAvailable: "Currently available",
    replyTime: "Typical reply time: under 24 hours.",
    name: "Your name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email",
    emailPlaceholder: "jane@example.com",
    subject: "Subject",
    subjectPlaceholder: "What's this about?",
    budget: "Project budget",
    message: "Message",
    messagePlaceholder:
      "Tell me about your project, timeline, and goals...",
    optional: "optional",
    sending: "Sending...",
    sent: "Sent!",
    send: "Send message",
    successTitle: "Message sent! I'll get back to you soon.",
    successDesc: "Thanks for reaching out.",
    errorTitle: "Couldn't send your message",
    nameError: "Please enter your name",
    emailError: "Please enter a valid email",
    messageError: "Tell me a bit more (min 10 characters)",
  },
  footer: {
    navigate: "Navigate",
    getInTouch: "Get in touch",
    backToTop: "Back to top",
    builtWith: "Built with",
    using: "using Next.js & Tailwind.",
  },
  langToggle: { label: "Tiếng Việt" },
};

const vi: UI = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    skills: "Kỹ năng",
    projects: "Dự án",
    experience: "Kinh nghiệm",
    services: "Dịch vụ",
    contact: "Liên hệ",
    letsTalk: "Hợp tác ngay",
  },
  hero: {
    greeting: (name, birthYear, location) =>
      `Xin chào, tôi là ${name} — kỹ sư Full-Stack sinh năm ${birthYear} tại ${location}`,
    line1: "Tôi thiết kế &",
    line2: "phát triển",
    line3a: "nền tảng web",
    line3b: "chuyên nghiệp.",
    taglineTail:
      "sử dụng Angular, .NET, Next.js & NestJS — từ hệ thống bản đồ tương tác (GIS), phần mềm quản lý bệnh viện (HIS) đến trang thương mại điện tử mượt mà.",
    viewWork: "Xem các dự án",
    getInTouch: "Kết nối với tôi",
    scroll: "Cuộn xuống",
    badges: { frontend: "Frontend", backend: "Backend", fullstack: "Full-Stack" },
  },
  about: {
    eyebrow: "Về bản thân",
    titleA: "Kỹ sư lập trình,",
    titleB: "tư duy thiết kế",
    description: "Câu chuyện ngắn về con người và triết lý làm việc của tôi.",
    howIWork: "Triết lý làm việc",
    traits: [
      {
        title: "Làm chủ sản phẩm trọn gói",
        desc: "Từ cấu trúc cơ sở dữ liệu đến từng điểm ảnh cuối cùng — tôi chịu trách nhiệm toàn bộ hành trình phát triển.",
      },
      {
        title: "Triển khai nhanh, hoàn thiện liên tục",
        desc: "Tập trung ra mắt sản phẩm khả dụng (MVP) nhanh chóng, sau đó tinh chỉnh từng chi tiết để đạt trải nghiệm cao cấp nhất.",
      },
      {
        title: "Tối ưu hóa trải nghiệm người dùng",
        desc: "Sản phẩm không chỉ cần hoạt động tốt, mà giao diện phải mang lại cảm giác mượt mà và sống động.",
      },
      {
        title: "Đối tác đáng tin cậy",
        desc: "Giao tiếp minh bạch, tiến độ chuẩn xác và cam kết đồng hành dài lâu.",
      },
    ],
    born: (year) => `Sinh năm ${year}`,
  },
  skills: {
    eyebrow: "Kỹ năng & Stack",
    titleA: "Bộ",
    titleB: "công cụ công nghệ",
    description:
      "Những công nghệ và công cụ tôi sử dụng hàng ngày để xây dựng sản phẩm.",
    coreTech: "công nghệ cốt lõi",
  },
  projects: {
    eyebrow: "Dự án tiêu biểu",
    titleA: "Những sản phẩm tôi",
    titleB: "tự hào",
    description:
      "Tổng hợp các dự án thực tế và sản phẩm cá nhân nổi bật — từ GIS, Y tế đến Thương mại điện tử.",
    featured: "Nổi bật",
    freetime: "Dự án cá nhân",
    highlights: "Tính năng nổi bật",
    techStack: "Công nghệ sử dụng",
    visitLive: "Xem trang trực tiếp",
  },
  experience: {
    eyebrow: "Sự nghiệp",
    titleA: "Hành trình",
    titleB: "phát triển",
    description: "Quá trình làm việc tại các doanh nghiệp và các sản phẩm tôi từng tham gia xây dựng.",
    kinds: { work: "Công việc", freetime: "Dự án cá nhân", education: "Học vấn" },
  },
  services: {
    eyebrow: "Dịch vụ cung cấp",
    titleA: "Giải pháp &",
    titleB: "Dịch vụ",
    description:
      "Từ việc nâng cấp tính năng nhỏ đến phát triển toàn bộ hệ thống lớn.",
    testimonialsEyebrow: "Đánh giá từ đối tác",
    testimonialsTitleA: "Khách hàng",
    testimonialsTitleB: "nói gì",
  },
  contact: {
    eyebrow: "Liên hệ",
    titleA: "Cùng nhau xây dựng",
    titleB: "sản phẩm tuyệt vời",
    description:
      "Bạn đang có ý tưởng dự án hoặc chỉ muốn kết nối? Hãy gửi tin nhắn cho tôi.",
    getInTouch: "Kết nối với tôi",
    getInTouchDesc:
      "Sẵn sàng trao đổi về các giải pháp GIS, hệ thống quản lý doanh nghiệp hoặc ứng dụng thương mại điện tử.",
    email: "Email",
    phone: "Điện thoại",
    location: "Địa điểm",
    currentlyAvailable: "Sẵn sàng hợp tác",
    replyTime: "Tôi thường phản hồi tin nhắn trong vòng 24 giờ.",
    name: "Tên của bạn",
    namePlaceholder: "Nguyễn Văn A",
    emailLabel: "Email",
    emailPlaceholder: "email@vi-du.com",
    subject: "Chủ đề",
    subjectPlaceholder: "Chủ đề bạn quan tâm",
    budget: "Ngân sách dự án",
    message: "Nội dung",
    messagePlaceholder: "Chi tiết về yêu cầu dự án, tiến độ mong muốn và mục tiêu của bạn...",
    optional: "không bắt buộc",
    sending: "Đang gửi...",
    sent: "Đã gửi!",
    send: "Gửi tin nhắn",
    successTitle: "Gửi tin nhắn thành công! Tôi sẽ liên hệ lại sớm nhất.",
    successDesc: "Cảm ơn bạn đã quan tâm.",
    errorTitle: "Lỗi gửi tin nhắn",
    nameError: "Vui lòng nhập tên của bạn",
    emailError: "Vui lòng nhập email hợp lệ",
    messageError: "Nội dung quá ngắn (tối thiểu 10 ký tự)",
  },
  footer: {
    navigate: "Điều hướng",
    getInTouch: "Kết nối",
    backToTop: "Lên đầu trang",
    builtWith: "Thiết kế & phát triển bằng",
    using: "Next.js & Tailwind.",
  },
  langToggle: { label: "English" },
};

const dict: Record<Lang, UI> = { en, vi };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: UI;
  pick: (b: Bi) => string;
};

const LanguageContext = React.createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("portfolio-lang")) as Lang | null;
    if (saved === "en" || saved === "vi") setLangState(saved);
  }, []);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio-lang", l);
    } catch {}
  }, []);

  const toggle = React.useCallback(() => {
    setLang(lang === "en" ? "vi" : "en");
  }, [lang, setLang]);

  const value = React.useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle,
      t: dict[lang],
      pick: (b: Bi) => b[lang],
    }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
