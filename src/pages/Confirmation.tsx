import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useToast } from "@/hooks/use-toast";

const CALENDLY_URL = "https://appt.link/meet-with-safa-bechchaa-vwWVoPRG/in-person-meeting"; // Updated Calendly URL

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const booking = location.state;

  // Updated Calendly event listeners
  useCalendlyEventListener({
    onEventScheduled: (event) => {
      toast({
        title: "Appointment Scheduled",
        description: "Your appointment has been successfully booked!",
      });
    },
    onEventTypeViewed: () => {
      // Optional: Add any logging or tracking for event type views
    }
  });

  if (!booking) {
    return (
      <div className="min-h-screen pt-20 pb-10 bg-barber-brown flex items-center justify-center">
        <Card className="glass p-6 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-barber-gold">
            No booking information found
          </h1>
          <Button
            onClick={() => navigate("/book")}
            className="bg-barber-gold hover:bg-barber-gold/90 text-black"
          >
            Make a Booking
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-barber-brown">
      <div className="container mx-auto px-4">
        <Card className="glass p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-barber-gold">
              Schedule Your Appointment
            </h1>
            <p className="text-gray-300">
              Choose your preferred date and time
            </p>
          </div>

          <div className="mb-8">
            <div className="calendly-container glass rounded-lg overflow-hidden">
              <InlineWidget
                url={CALENDLY_URL}
                styles={{
                  height: '650px',
                  width: '100%',
                }}
                prefill={{
                  name: booking.name,
                  email: booking.email,
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
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400">
              Need to make changes? You can always reschedule or cancel your appointment through the confirmation email you'll receive.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-black"
              >
                Return Home
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
