import { BackgroundIcon } from "../assets/bg";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { DonationModal } from "./DonationModal/DonationModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    <div className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col items-center py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto my-8 md:my-12 animate-slideUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-brown mb-8 animate-slideFromRight">
            RSVP
          </h1>
          <p className="text-base sm:text-md md:text-lg font-medium text-brown leading-relaxed mb-8">
            {fullDescription}
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto text-left bg-white/50 p-6 md:p-8 rounded-lg relative z-10"
          >
            <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label htmlFor="firstName" className="block text-brown mb-2">
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
                <label htmlFor="lastName" className="block text-brown mb-2">
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
              <label htmlFor="email" className="block text-brown mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-neu-200 p-3 rounded focus:outline-none
                text-brown focus:ring-2 focus:ring-neu-300"
              />
            </div>
            <div className="mb-6">
              <p className="text-brown mb-2">
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
                        className="form-radio text-brown"
                      />
                      <span className="text-brown">{num}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-brown mb-2">
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
                          className="form-checkbox text-brown"
                        />
                        <span className="text-brown">{option}</span>
                      </label>
                    </div>
                  ),
                )}
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
        <div className="text-center space-y-4">
          <p className="text-brown text-center">
            Thank you for celebrating with us! Your presence is the perfect
            present. 💕
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 text-white
              rounded-lg transition-colors"
          >
            <p className="text-sm text-brown">
              Click this to view our account details for gifts 🎁
            </p>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-72 left-0 w-full h-64 sm:h-72 lg:h-44 opacity-5 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <div className="absolute bottom-44 -left-20 xl:left-80 transform translate-x-1/2 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80">
            <BackgroundIcon />
          </div>
        </div>
      </div>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brideDetails={{
          accountName: "Christabel Adams",
          bankName: "First Bank",
          accountNumber: "3121751534",
        }}
        groomDetails={{
          accountName: "Ayodeji Adeoti",
          bankName: "Zenith Bank",
          accountNumber: "1245787800",
        }}
      />
    </div>
  );
};

export default RSVPForm;
