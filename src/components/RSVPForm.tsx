import { useState,  type ChangeEvent, type FormEvent,  } from "react";

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

interface RSVPFormProps {
  onSubmit: (formData: FormData) => void;
  fullDescription: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  guests: "",
  attendance: "",
  events: {
    rehearsalDinner: false,
    ceremony: false,
    reception: false,
  },
};

const RSVPForm: React.FC<RSVPFormProps> = ({ onSubmit, fullDescription }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [name]: checked,
      },
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto my-8 md:my-12 animate-slideUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-8 animate-slideFromRight">
            RSVP
          </h1>
          <p className="text-base sm:text-md md:text-lg font-medium text-neu-400 leading-relaxed mb-8">
            {fullDescription}
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto text-left bg-white/50 p-6 md:p-8 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label htmlFor="firstName" className="block text-neu-400 mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-neu-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-neu-300"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-neu-400 mb-2">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-neu-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-neu-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-neu-400 mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-neu-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-neu-300"
              />
            </div>
            <div className="mb-6">
              <p className="text-neu-400 mb-2">
                Number of Guests<span className="text-red-500">*</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["One", "Two", "Three", "Four"].map((num) => (
                  <div key={num} className="border border-neu-200 p-3 rounded">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="guests"
                        value={num}
                        checked={formData.guests === num}
                        onChange={handleRadioChange}
                        className="form-radio"
                      />
                      <span className="text-neu-400">{num}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-neu-400 mb-2">
                Attendance<span className="text-red-500">*</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["Accept with pleasure", "Regretfully Decline"].map(
                  (option) => (
                    <div
                      key={option}
                      className="border border-neu-200 p-3 rounded"
                    >
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          checked={formData.attendance === option}
                          onChange={handleRadioChange}
                          className="form-checkbox"
                        />
                        <span className="text-neu-400">{option}</span>
                      </label>
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "rehearsalDinner", label: "Rehearsal Dinner" },
                  { name: "ceremony", label: "Ceremony" },
                  { name: "reception", label: "Reception" },
                ].map(({ name, label }) => (
                  <div key={name} className="border border-neu-200 p-3 rounded">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name={name}
                        checked={
                          formData.events[name as keyof FormData["events"]]
                        }
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                      />
                      <span className="text-neu-400">{label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-neu-400 text-white px-8 py-3 rounded hover:bg-neu-500 transition duration-300"
              >
                Submit RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-64 opacity-10 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#CCCCCC"
                d="M37.9,-48.2C49.1,-39.2,58.5,-27.7,63.2,-14C67.9,-0.4,67.8,15.4,61.9,29.5C55.9,43.7,44.1,56,29.6,64.2C15.1,72.3,-2.1,76.3,-18.8,73.6C-35.4,70.9,-51.7,61.5,-63.5,47.4C-75.4,33.4,-82.9,14.7,-81.5,-3.1C-80.1,-20.9,-69.9,-37.8,-56.2,-47.5C-42.6,-57.1,-25.5,-59.5,-10.8,-57.2C3.9,-54.9,26.7,-57.1,37.9,-48.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
