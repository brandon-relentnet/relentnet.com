"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  TicketIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import ParallaxBackground from "@/components/ParallaxBackground";

const assistanceSteps = {
  start: {
    title: "How can we help you today?",
    description: "Select the category that best describes your inquiry",
    options: [
      {
        id: "billing",
        title: "Billing & Account Questions",
        icon: CreditCardIcon,
        description: "Invoices, subscriptions, payments",
      },
      {
        id: "technical",
        title: "Technical Issues",
        icon: WrenchScrewdriverIcon,
        description: "Website not working, hosting issues",
      },
      {
        id: "updates",
        title: "Website Updates",
        icon: PencilSquareIcon,
        description: "Design changes, content updates",
      },
      {
        id: "sales",
        title: "New Services Inquiry",
        icon: ShoppingBagIcon,
        description: "Explore our services and solutions",
      },
      {
        id: "other",
        title: "General Questions",
        icon: QuestionMarkCircleIcon,
        description: "Other inquiries and support",
      },
    ],
  },
  billing: {
    title: "Billing & Account Support",
    description: "We'll help you with your billing questions and account management",
    info: "Our billing team can assist with invoices, subscription changes, payment issues, and account updates.",
    nextStep: "agent_check",
  },
  technical: {
    title: "Technical Support",
    description: "Let's get your technical issues resolved quickly",
    info: "Our technical team handles hosting issues, website downtime, login problems, and troubleshooting guides.",
    nextStep: "agent_check",
  },
  updates: {
    title: "Website Updates & Changes",
    description: "Ready to update your website? We're here to help",
    info: "You can submit changes via BugHerd for visual feedback or describe your needs here. Our team will handle updates promptly.",
    nextStep: "agent_check",
  },
  sales: {
    title: "Explore Our Services",
    description: "Discover how we can help grow your business",
    services: [
      { name: "Custom Websites", description: "Professional web development" },
      { name: "SEO & Marketing", description: "Drive traffic and conversions" },
      { name: "Hosting Solutions", description: "Reliable web hosting" },
      { name: "E-Commerce Stores", description: "Online store development" },
      { name: "Branding & Graphics", description: "Visual identity design" },
    ],
    nextStep: "agent_check",
  },
  other: {
    title: "General Support",
    description: "We're here to answer any questions you might have",
    info: "Our support team can provide general information, answer FAQs, and direct you to the right resources.",
    nextStep: "agent_check",
  },
};

export default function AssistancePage() {
  const [currentStep, setCurrentStep] = useState("start");
  const [isAgentOnline] = useState(Math.random() > 0.5); // Simulate agent availability

  const handleOptionSelect = (optionId) => {
    setCurrentStep(optionId);
  };

  const handleBackToStart = () => {
    setCurrentStep("start");
  };

  const renderStep = () => {
    const step = assistanceSteps[currentStep];

    if (currentStep === "start") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center bg-base-100/60 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-primary/30">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{step.title}</h1>
            <p className="text-xl text-gray-100 font-medium">{step.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {step.options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleOptionSelect(option.id)}
                className="bg-base-100/80 backdrop-blur-md border-2 border-primary/40 rounded-xl p-6 cursor-pointer hover:bg-base-100/90 hover:border-primary/60 transition-all duration-300 group shadow-xl"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/40 rounded-lg group-hover:bg-primary/60 transition-colors shadow-lg">
                    <option.icon className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">{option.title}</h3>
                  <p className="text-gray-200 text-sm font-medium">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <button
          onClick={handleBackToStart}
          className="bg-base-100/70 backdrop-blur-md text-white hover:bg-base-100/90 transition-all px-4 py-2 rounded-lg flex items-center space-x-2 border border-primary/40 shadow-lg"
        >
          <span>←</span>
          <span className="font-semibold">Back to options</span>
        </button>

        <div className="text-center bg-base-100/60 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-primary/30">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{step.title}</h1>
          <p className="text-xl text-gray-100 font-medium">{step.description}</p>
        </div>

        {step.info && (
          <div className="bg-base-100/70 backdrop-blur-md border-2 border-primary/40 rounded-xl p-6 shadow-xl">
            <p className="text-gray-100 font-medium">{step.info}</p>
          </div>
        )}

        {step.services && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-base-100/70 backdrop-blur-md border-2 border-primary/40 rounded-lg p-4 shadow-lg"
              >
                <h4 className="font-bold text-white drop-shadow-md">{service.name}</h4>
                <p className="text-gray-100 text-sm font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="bg-base-100/80 backdrop-blur-md border-2 border-primary/40 rounded-xl p-6 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">Next Steps</h3>
          
          {isAgentOnline ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Support agent is online</span>
              </div>
              <button className="btn btn-primary w-full">
                <PhoneIcon className="w-5 h-5" />
                Connect to Support Agent
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-yellow-400">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="font-medium">No agents available right now</span>
              </div>
              <button className="btn btn-primary w-full">
                <TicketIcon className="w-5 h-5" />
                Submit Support Ticket
              </button>
              <p className="text-gray-400 text-sm text-center">
                {"We'll get back to you within 24 hours"}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden !bg-primary">
      <ParallaxBackground
        src="/images/software-35.webp"
        className="absolute inset-0 z-0"
        opacity="opacity-20"
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {renderStep()}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 mx-auto mb-2 text-primary" />
          <p className="font-semibold bg-base-100/60 backdrop-blur-sm px-4 py-2 rounded-lg">Need immediate help? Our live chat is always available</p>
        </motion.div>
      </div>
    </div>
  );
}