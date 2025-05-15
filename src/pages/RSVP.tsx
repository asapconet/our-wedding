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
  "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.";

const RSVP: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
  };

  return <RSVPForm onSubmit={handleSubmit} fullDescription={fullDescription} />;
};

export default RSVP;
