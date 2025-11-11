import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return <section className="min-h-[70vh] flex items-center justify-center bg-white pt-32 relative overflow-hidden border-b-4 border-orange-500">
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 animate-fade-up leading-tight text-gray-900">
            Move to Dooza <span className="text-orange-500">Desk</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 animate-fade-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            AI which takes action, costs less, at free human seats.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-10 animate-fade-up [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
            Flat pricing per AI agent. No seat fees or surprise bills. Just agents that reply and act.
          </p>
          <div className="animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-xl font-black rounded-lg shadow-2xl hover:shadow-orange-200 transition-all duration-300 hover:scale-105 border-0"
              onClick={() => {
                if (typeof gtag !== "undefined") {
                  gtag("event", "click", {
                    event_category: "engagement",
                    event_label: "book_setup_call_hero",
                    value: 1,
                  });
                }
                window.open("https://cal.com/sibinarendran/demo", "_blank");
              }}
            >
              book a free setup call →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300"
              onClick={() => {
                if (typeof gtag !== "undefined") {
                  gtag("event", "click", {
                    event_category: "engagement",
                    event_label: "try_for_free_hero",
                    value: 1,
                  });
                }
                navigate("/signup");
              }}
            >
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;