import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plan = {
    name: "AI Agent License",
    price: "$25",
    period: "/month per active AI agent",
    description: "Replace Tidio with action-ready Chatwoot AI.",
    features: [
      "Founder-led 90-minute migration",
      "Unlimited human seats, no seat fees",
      "WhatsApp, Messenger, Instagram, email, live chat included",
      "AI updates Shopify, WooCommerce, BigCommerce, Magento, and Amazon orders",
      "Slack, Teams, Telegram, and SMS alerts baked in",
      "Host in your cloud or ours with full control",
      "Playbooks that tag, assign, escalate, and fire webhooks",
      "Weekly QA and prompt tuning with the founder"
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pay only for AI that acts.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlimited human seats, no surprise bills, founder-led migration.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="relative bg-white border-orange-500 border-2 rounded-3xl p-10 shadow-2xl ring-2 ring-orange-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  Tidio replacement plan
                </span>
              </div>

              <div className="text-center mb-10 mt-4">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black text-orange-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2 text-base">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-lg">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full rounded-full py-4 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl"
                  onClick={() => window.open("https://cal.com/sibinarendran/demo", "_blank")}
                >
                  book a free setup call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full py-4 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl"
                  onClick={() => navigate("/signup")}
                >
                  Try for free
                </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Pricing;
