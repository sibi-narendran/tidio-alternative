import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, BadgeDollarSign, Users, Server, ClipboardList, Headset } from "lucide-react";

const ValueGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI agents that act",
      description: "Agents tag chats, update orders, assign teammates, and escalate."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Predictable AI pricing",
      description: "One flat fee per active AI agent. No seat charges, no overages."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Unlimited human seats",
      description: "Invite every human for free—only AI agents count."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Runs on your infrastructure",
      description: "Run Chatwoot in your cloud or ours and keep full control."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Actionable playbooks",
      description: "Trigger macros, create tickets, post to Slack, and sync CRM updates."
    },
    {
      icon: <Headset className="w-6 h-6" />,
      title: "Founder-led success",
      description: "Direct founder access for tweaks, new channels, and quality checks."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Why teams leave Tidio
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            AI that handles customer work without surprise invoices or seat limits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
