import Link from "next/link";
import { Check, Clock, Sparkles, FileSpreadsheet, FileText, Award, Laptop } from "lucide-react";
import { Course } from "@/data/mockData";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  // Format price into localized currency style (e.g. 1.500.000đ)
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(value)
      .replace("₫", "đ");
  };

  // Map icons and category tags dynamically based on course ID
  const getCourseMeta = (id: string) => {
    switch (id) {
      case "tin-hoc-co-ban":
        return {
          icon: <Laptop size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />,
          category: "Nền Tảng Vững Chắc",
          badgeColor: "bg-blue-50 text-blue-700 border-blue-100/50"
        };
      case "excel-nang-cao":
        return {
          icon: <FileSpreadsheet size={20} className="text-emerald-600 group-hover:text-white transition-colors duration-300" />,
          category: "Thực Chiến Chuyên Sâu",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100/50"
        };
      case "word-powerpoint":
        return {
          icon: <FileText size={20} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />,
          category: "Combo Kỹ Năng GenZ",
          badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100/50"
        };
      case "luyen-thi-mos":
        return {
          icon: <Award size={20} className="text-purple-600 group-hover:text-white transition-colors duration-300" />,
          category: "Chứng Chỉ Quốc Tế",
          badgeColor: "bg-purple-50 text-purple-700 border-purple-100/50"
        };
      default:
        return {
          icon: <Laptop size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />,
          category: "Khóa Học Tin Học",
          badgeColor: "bg-blue-50 text-blue-700 border-blue-100/50"
        };
    }
  };

  const meta = getCourseMeta(course.id);

  // Map index to stagger delay class
  const delayClass = index === 0 ? "delay-0" : index === 1 ? "delay-100" : index === 2 ? "delay-200" : "delay-300";

  return (
    <div
      className={`relative flex flex-col justify-between h-full bg-white rounded-3xl transition-all duration-500 animate-slide-up ${delayClass} ${
        course.popular
          ? "border-2 border-transparent border-gradient-featured shadow-featured shadow-premium hover:shadow-featured-hover hover:scale-[1.04] md:scale-[1.03] pulse-glow-blue z-10"
          : "border border-slate-200/80 hover:border-blue-500/30 hover:scale-[1.02] shadow-premium hover:shadow-premium-hover"
      } overflow-hidden group`}
    >
      {/* Dynamic Background Hover Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-cyan-500/0 to-cyan-500/[0.02] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Popular badge flag with soft subtle pulsing glow */}
      {course.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[9px] font-black px-3.5 py-1.5 rounded-bl-2xl flex items-center gap-1 z-10 shadow-md">
          <Sparkles size={10} className="animate-pulse text-cyan-300" />
          HOT COURSE
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col relative z-10">
        
        {/* 1 & 2. Icon + Category Tag Row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className={`inline-flex items-center border px-2.5 py-1 rounded-lg text-[9px] font-black tracking-wider uppercase ${meta.badgeColor}`}>
            {meta.category}
          </span>
          <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-blue-600 transition-all duration-500 shrink-0">
            {meta.icon}
          </div>
        </div>

        {/* 3. Bold Space Grotesk Title */}
        <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight leading-snug">
          {course.title}
        </h3>

        {/* Duration badge: subtle scale on card hover */}
        <div className="inline-flex items-center gap-1.5 mt-2.5 w-max px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold">
          <Clock size={11} className="text-blue-500" />
          {course.duration}
        </div>

        {/* 4. Short Description */}
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 flex-1">
          {course.description}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-slate-100" />

        {/* 5. Feature Checklist */}
        <ul className="space-y-2.5 mb-6">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex gap-2.5 text-slate-600 font-semibold text-xs leading-normal">
              {/* Checkmark icon: scales and brightens bg on card hover */}
              <div className="w-4.5 h-4.5 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                <Check size={10} className="stroke-[3.5]" />
              </div>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 6 & 7. Card Footer (Price + CTA Button) */}
      <div className="p-6 sm:p-7 pt-0 bg-slate-50/50 border-t border-slate-100/60 rounded-b-3xl relative z-10">
        <div className="flex flex-col gap-4">
          
          {/* Price display */}
          <div className="flex items-baseline gap-2 pt-4">
            <span className="text-xl font-black text-slate-900 tracking-tight">
              {formatPrice(course.price)}
            </span>
            {course.originalPrice && (
              <span className="text-xs font-bold text-slate-400 line-through">
                {formatPrice(course.originalPrice)}
              </span>
            )}
          </div>

          {/* Action Register Link */}
          <Link
            href={`/lien-he?select=${course.id}`}
            className={`w-full py-3.5 rounded-full text-xs font-black tracking-wide uppercase transition-all duration-300 text-center active:scale-[0.98] ${
              course.popular
                ? "btn-premium-primary"
                : "btn-premium-secondary"
            }`}
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
