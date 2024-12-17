import { InlineWidget } from "react-calendly";
import { Card } from "@/components/ui/card";

const CALENDLY_URL = "https://appt.link/meet-with-safa-bechchaa-vwWVoPRG/in-person-meeting";

const Book = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-barber-brown">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-barber-gold">
          Book Your Appointment
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass p-6">
            <div className="calendly-container glass rounded-lg overflow-hidden">
              <InlineWidget
                url={CALENDLY_URL}
                styles={{
                  height: '650px',
                  width: '100%',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: 'D4AF37',
                  textColor: '4d5055'
                }}
              />
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Need to make changes? You can always reschedule or cancel your appointment through the confirmation email you'll receive.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Book;
