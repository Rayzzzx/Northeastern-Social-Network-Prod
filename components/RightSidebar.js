import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

/**
 * RightSidebar component displays the contacts section with various interaction options.
 */
const RightSidebar = () => {
  const AcademicAdvisorList = [
    { id: 1, name: "Tori Bowser", email: "t.bowser@northeastern.edu" },
    { id: 2, name: "Vivian Guerrero", email: "v.guerrero@northeastern.edu" },
    { id: 2, name: "Sweeny Youkhane", email: "s.youkhane@northeastern.edu" },
    // Add more contacts as needed
  ];

  const studentServicesList = [
    { id: 1, name: "Northeastern OGS Department", phone: "+1 617-373-2310", email: "OGS@northeastern.edu" },
    { id: 2, name: "Global Learner Support", email: "globallearnersupport@northeastern.edu" },
    // Add more student services as needed
  ];

  // Contact rendering function
  const renderContacts = (contacts) => {
    return (
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 bg-blue-200 rounded-lg shadow-md mb-4"
          >
            <p className="text-lg font-semibold">{contact.name}</p>
            {/* Check if the phone number exists before rendering */}
            {contact.phone && (
              <p className="text-gray-600">
                Phone number:{" "}
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
            )}
            {/* Make the email clickable */}
            <p className="text-blue-600">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px] h-screen overflow-y-auto max-h-screen">
      {/* Header section with title and interaction icons */}
      <div className="flex items-center text-white bg-red-500">
        <div className="flex space-x-1 px-2"></div>
      </div>

      {/* Contacts section */}
      <div className="contacts-section p-4 bg-gradient-to-r from-red-400 to-blue-600 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold mb-2 text-white"> Academic Advisors Contacts</h2>
        {renderContacts(AcademicAdvisorList)}
      </div>

      {/* Student services section */}
      <div className="student-services-section p-4 bg-gradient-to-r from-red-400 to-blue-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-white">Student Services</h2>
        {renderContacts(studentServicesList)}
      </div>
    </div>

  );
};

export default RightSidebar;
