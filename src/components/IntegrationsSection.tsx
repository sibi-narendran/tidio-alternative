import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  SiShopify,
  SiWoocommerce,
  SiBigcommerce,
  SiMagento,
  SiAmazon,
  SiWhatsapp,
  SiMessenger,
  SiInstagram,
  SiSlack,
  SiTelegram,
} from "react-icons/si";
import { FaEnvelope, FaComments, FaSms, FaUsers } from "react-icons/fa";

const IntegrationsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const integrations = [
    // E-commerce first
    { name: "Shopify Orders", icon: <SiShopify className="w-5 h-5" />, color: "text-green-600" },
    { name: "WooCommerce", icon: <SiWoocommerce className="w-5 h-5" />, color: "text-purple-600" },
    { name: "BigCommerce", icon: <SiBigcommerce className="w-5 h-5" />, color: "text-blue-600" },
    { name: "Magento", icon: <SiMagento className="w-5 h-5" />, color: "text-orange-600" },
    { name: "Amazon Seller", icon: <SiAmazon className="w-5 h-5" />, color: "text-amber-600" },
    // Core channels
    { name: "WhatsApp", icon: <SiWhatsapp className="w-5 h-5" />, color: "text-green-500" },
    { name: "Messenger", icon: <SiMessenger className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Instagram DMs", icon: <SiInstagram className="w-5 h-5" />, color: "text-pink-500" },
    { name: "Email Inbox", icon: <FaEnvelope className="w-5 h-5" />, color: "text-red-500" },
    { name: "Live chat widget", icon: <FaComments className="w-5 h-5" />, color: "text-gray-700" },
    // Internal tooling
    { name: "Slack Alerts", icon: <SiSlack className="w-5 h-5" />, color: "text-purple-600" },
    { name: "Microsoft Teams", icon: <FaUsers className="w-5 h-5" />, color: "text-indigo-600" },
    { name: "Telegram", icon: <SiTelegram className="w-5 h-5" />, color: "text-sky-500" },
    { name: "SMS", icon: <FaSms className="w-5 h-5" />, color: "text-lime-600" },
  ];

  // Duplicate the array for seamless loop
  const allIntegrations = [...integrations, ...integrations];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Channels we connect
        </h2>
        
        <div 
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Sliding container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {allIntegrations.map((app, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 px-6 py-4 bg-card border border-border rounded-xl hover:border-highlight hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center ${app.color} group-hover:scale-110 transition-transform shadow-sm`}>
                      {app.icon}
                    </div>
                    <span className="text-foreground font-semibold whitespace-nowrap">
                      {app.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
