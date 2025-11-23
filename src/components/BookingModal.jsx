import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleCalEvent = (e) => {
            // Check for Cal.com booking successful event
            // Cal.com emits various events, we look for successful booking
            if (e.data.type === 'cal:bookingSuccessful' || e.data.type === 'bookingSuccessful') {
                if (window.gtag) {
                    window.gtag('event', 'conversion', { 'send_to': 'AW-10872232955' });
                    console.log('Conversion tracked: Booking Successful');
                }
            }
        };

        window.addEventListener('message', handleCalEvent);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('message', handleCalEvent);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white z-10">
                    <h3 className="text-lg font-semibold text-slate-900">Book a Demo</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 w-full bg-slate-50">
                    <iframe
                        src="https://cal.com/sibinarendran/demo"
                        className="w-full h-full border-0"
                        title="Book a demo"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
