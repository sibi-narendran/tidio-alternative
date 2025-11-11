import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-20 bg-orange-500 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Urgency indicator */}
        <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
          ⏰ 6 setup calls left this month
        </div>
        
        <h2 
          className={`text-3xl md:text-5xl font-black text-white mb-6 transition-all duration-700 leading-tight ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Switch before your next Tidio bill
        </h2>
        
        <p 
          className={`text-xl text-orange-100 mb-8 font-semibold max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          We migrate history, plug every channel, and train AI that acts. No seat fees or surprise bills.
        </p>
        
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-50 px-10 py-4 text-xl font-black transition-all duration-300 hover:scale-105 shadow-2xl border-0"
              onClick={() => window.open("https://cal.com/sibinarendran/demo", "_blank")}
            >
              Book setup call →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300"
              onClick={() => navigate("/signup")}
            >
              Try for free
            </Button>
          </div>
          <p className="text-orange-100 text-sm">
            Live in one call • Unlimited human seats • Flat AI pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
