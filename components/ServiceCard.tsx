import Link from "next/link";
import { Monitor, Cpu, Wrench, Shield, Check } from "lucide-react";
import { TechService } from "@/data/mockData";

interface ServiceCardProps {
  service: TechService;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  // Map icons dynamically
  const getIcon = (id: string) => {
    switch (id) {
      case "cai-windows":
        return <Monitor size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />;
      case "cai-office":
        return <Cpu size={22} className="text-cyan-500 group-hover:text-white transition-colors duration-300" />;
      case "sua-may-tinh":
        return <Wrench size={22} className="text-indigo-500 group-hover:text-white transition-colors duration-300" />;
      case "ve-sinh-laptop":
        return <Shield size={22} className="text-emerald-500 group-hover:text-white transition-colors duration-300" />;
      default:
        return <Monitor size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />;
    }
  };

  // Map index to stagger delay class
  const delayClass = index === 0 ? "delay-0" : index === 1 ? "delay-100" : index === 2 ? "delay-200" : "delay-300";

  return (
    <div className={`flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 hover:border-blue-500/30 shadow-premium hover:shadow-premium-hover transition-all duration-500 animate-slide-up ${delayClass} p-5 sm:p-6 group relative overflow-hidden`}>
      
      {/* Dynamic Background Hover Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-cyan-500/0 to-cyan-500/[0.015] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Decorative hover gradient border overlay */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 smooth-transition" />

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Icon + Name */}
          <div className="flex items-start gap-4">
            {/* Icon wrapper: rotates slightly and scales up on hover */}
            <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-blue-600 group-hover:rotate-6 group-hover:scale-110 shrink-0 transition-all duration-500 ease-out text-slate-800">
              {getIcon(service.id)}
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                {service.name}
              </h3>
              <span className="text-blue-600 font-black text-xs mt-1 bg-blue-50/50 px-2 py-0.5 rounded-md border border-blue-100/30 w-fit">
                Giá: {service.price}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4">
            {service.description}
          </p>
        </div>

        <div>
          {/* Divider */}
          <div className="my-4.5 border-t border-slate-100" />

          {/* Key Features */}
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2 text-slate-600 font-semibold text-[11px] sm:text-xs">
                <Check size={13} className="text-cyan-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button Link */}
      <div className="mt-5 relative z-10">
        <Link
          href={`/lien-he?select=${service.id}`}
          className="w-full py-3.5 rounded-full text-xs font-black tracking-wide uppercase transition-all duration-300 text-center active:scale-[0.98] btn-premium-secondary block"
        >
          Đặt dịch vụ ngay
        </Link>
      </div>

    </div>
  );
}
