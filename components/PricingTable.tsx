import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Wrench } from "lucide-react";
import { coursesData, servicesData } from "@/data/mockData";

export default function PricingTable() {
  // Format price into localized currency style
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(value)
      .replace("₫", "đ");
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-premium hover:shadow-premium-hover transition-all duration-500 overflow-hidden">
      
      {/* Table Header Wrapper (Custom responsive grid layout for maximum mobile compatibility) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider border-b border-slate-800">
              <th className="py-5 px-6 min-w-[250px] font-display">Khoản mục / Nội dung</th>
              <th className="py-5 px-6 min-w-[120px] font-display">Giá niêm yết</th>
              <th className="py-5 px-6 min-w-[150px] font-display">Thời lượng / Ghi chú</th>
              <th className="py-5 px-6 min-w-[120px] text-center font-display">Hành động</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            
            {/* --- SECTION 1: KHÓA HỌC TIN HỌC VĂN PHÒNG --- */}
            <tr className="bg-blue-50/30">
              <td colSpan={4} className="py-4 px-6 font-black text-blue-800 text-xs tracking-wider uppercase">
                <div className="flex items-center gap-2 font-display">
                  <BookOpen size={13} className="text-blue-600" />
                  KHÓA HỌC TIN HỌC VĂN PHÒNG CHUYÊN NGHIỆP
                </div>
              </td>
            </tr>
            {coursesData.map((course) => (
              <tr
                key={course.id}
                className={`group smooth-transition ${
                  course.popular
                    ? "bg-blue-50/10 hover:bg-blue-50/20 font-medium"
                    : "hover:bg-slate-50/60"
                }`}
              >
                {/* Title & Badge */}
                <td className="py-5 px-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-black text-slate-800 group-hover:text-blue-600 smooth-transition">
                      {course.title}
                    </span>
                    {course.popular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm shadow-blue-500/10">
                        <Sparkles size={8} /> Highly Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed line-clamp-1">{course.description}</p>
                </td>
                
                {/* Price */}
                <td className="py-5 px-6">
                  <div className="flex flex-col">
                    <span className="font-black text-slate-900 text-sm sm:text-base">
                      {formatPrice(course.price)}
                    </span>
                    {course.originalPrice && (
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 line-through mt-0.5">
                        {formatPrice(course.originalPrice)}
                      </span>
                    )}
                  </div>
                </td>
                
                {/* Duration */}
                <td className="py-5 px-6">
                  <span className="text-slate-600 font-bold text-[10px] sm:text-xs bg-slate-100 border border-slate-200/40 px-2.5 py-1.5 rounded-lg">
                    {course.duration}
                  </span>
                </td>
                
                {/* Action Link */}
                <td className="py-5 px-6 text-center">
                  <Link
                    href={`/lien-he?select=${course.id}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[10px] font-black tracking-wide uppercase transition-all duration-300 ${
                      course.popular
                        ? "btn-premium-primary"
                        : "btn-premium-secondary"
                    }`}
                  >
                    Đăng ký
                    <ArrowRight size={10} />
                  </Link>
                </td>
              </tr>
            ))}

            {/* --- SECTION 2: DỊCH VỤ CÀI ĐẶT HỆ ĐIỀU HÀNH & PHẦN MỀM --- */}
            <tr className="bg-slate-50/50">
              <td colSpan={4} className="py-4 px-6 font-black text-slate-800 text-xs tracking-wider uppercase">
                <div className="flex items-center gap-2 font-display">
                  <Wrench size={13} className="text-blue-500" />
                  DỊCH VỤ CÀI ĐẶT HỆ ĐIỀU HÀNH & PHẦN MỀM CHUYÊN NGHIỆP
                </div>
              </td>
            </tr>
            {servicesData.map((service) => (
              <tr key={service.id} className="hover:bg-slate-50/60 smooth-transition">
                {/* Name */}
                <td className="py-5 px-6">
                  <span className="font-bold text-slate-800 group-hover:text-blue-600 smooth-transition">{service.name}</span>
                  <p className="text-slate-400 text-[11px] mt-1.5 leading-relaxed line-clamp-1">{service.description}</p>
                </td>
                
                {/* Price */}
                <td className="py-5 px-6 font-black text-blue-600 text-sm sm:text-base">
                  {service.price}
                </td>
                
                {/* Features (Short notes) */}
                <td className="py-5 px-6 text-slate-500 text-xs font-semibold">
                  {service.features[0]}{service.features[1] ? ` & ${service.features[1].toLowerCase()}` : ""}
                </td>
                
                {/* Action Link */}
                <td className="py-5 px-6 text-center">
                  <Link
                    href={`/lien-he?select=${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[10px] font-black tracking-wide uppercase btn-premium-secondary"
                  >
                    Đặt lịch
                    <ArrowRight size={10} />
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      
      {/* Table Footer Helper */}
      <div className="bg-slate-50/70 px-6 py-4.5 border-t border-slate-100/60 text-[11px] sm:text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-medium">* Học viên đăng ký Combo từ 2 khóa học trở lên được giảm ngay 10% học phí tổng.</p>
        <p className="font-black text-slate-700">Hỗ trợ cài đặt phần mềm học tập miễn phí suốt khóa học!</p>
      </div>

    </div>
  );
}
