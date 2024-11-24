import { Truck, RefreshCw, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function ServiceFeatures() {
  const features = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      description: "BUY BDT 3000+ & GET FREE DELIVERY",
    },
    {
      icon: RefreshCw,
      title: "7 DAYS EXCHANGE",
      description: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
    },
    {
      icon: ShieldCheck,
      title: "100% PAYMENT SECURE",
      description: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/service.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-6 flex items-center justify-center h-full">
        <div className="flex flex-row items-center gap-6 text-white">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <feature.icon className="w-8 h-8  flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-xs text-white/90">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
