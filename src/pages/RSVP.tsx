import RSVPForm from "@components/RSVPForm";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  guests: string;
  attendance: string;
  events: {
    rehearsalDinner: boolean;
    ceremony: boolean;
    reception: boolean;
  };
}

const fullDescription =
  "We are excited to share this special day with you. Please let us know if you will be able to attend!";

const RSVP: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return <RSVPForm onSubmit={handleSubmit} fullDescription={fullDescription} />;
};

export default RSVP;
