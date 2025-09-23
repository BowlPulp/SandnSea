import React from 'react';
import { Shield, AlertCircle, BookOpen, Scale, Users, MessageCircle } from 'lucide-react';

const TermsAndServicePage = () => {
  const sections = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Website Ownership",
      content: "This site is owned and operated by Sand N Sea Realty, an authorized RERA-registered channel partner. This is not the official website of any developer unless specifically stated."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Handling",
      content: "All enquiries received through this site will be handled solely by Sand N Sea Realty in-house real estate team. We are your dedicated point of contact for all property-related matters."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Accuracy",
      content: "All content (images, prices, floor plans) is provided for informational purposes only. Information is subject to change by the developer without prior notice. Users should verify all details directly."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: "All text, design, and layout used on this site are the intellectual property of Sand N Sea Realty. Unauthorized reproduction is strictly prohibited under applicable laws."
    }
  ];

  const detailedTerms = [
    {
      title: "Acceptance of Terms",
      points: [
        "By accessing and using this website, you agree to be bound by these terms and conditions",
        "If you do not agree to any part of these terms, please refrain from using this website",
        "Continued use of the website constitutes acceptance of any updated terms",
        "These terms apply to all visitors, users, and others who access the service"
      ]
    },
    {
      title: "Use of Information & Liability",
      points: [
        "All content is provided for informational purposes only and subject to change",
        "Sand N Sea Realty strives to provide accurate information but is not liable for inaccuracies",
        "Users are advised to verify all project details with the developer directly",
        "We are not responsible for any decisions made based on website information"
      ]
    },
    {
      title: "Third-Party Links & External Content",
      points: [
        "Our website may contain links to other third-party websites",
        "We are not responsible for the content or practices of these external sites",
        "External links are provided for convenience and do not constitute endorsement",
        "Users access third-party sites at their own risk and discretion"
      ]
    },
    {
      title: "Legal Jurisdiction & Modifications",
      points: [
        "Any disputes shall be subject to the jurisdiction of courts located in Mumbai, Maharashtra",
        "Sand N Sea Realty reserves the right to change these terms at any time",
        "Users are advised to review terms periodically for updates",
        "All legal matters will be governed by Indian laws and regulations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the official website of Sand N Sea Realty. These terms and conditions govern your use of our website and services as a RERA-registered channel partner.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <AlertCircle className="w-4 h-4" />
            <span>Last updated: September 2025</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Terms Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              Key Terms Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-[#d2ab67] mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{section.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {detailedTerms.slice(0, 2).map((term, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                    {term.title}
                  </h3>
                  <ul className="space-y-3">
                    {term.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#d2ab67] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {detailedTerms.slice(2, 4).map((term, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                    {term.title}
                  </h3>
                  <ul className="space-y-3">
                    {term.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#d2ab67] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Terms */}
          <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
              Additional Important Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">RERA Registration</h4>
                <p className="text-gray-700 mb-6">
                  Sand N Sea Realty is an authorized RERA-registered channel partner. We maintain full compliance with Real Estate Regulatory Authority guidelines and regulations.
                </p>
                
                <h4 className="text-xl font-bold text-slate-800 mb-4">Developer Relations</h4>
                <p className="text-gray-700">
                  This is not the official website of any developer unless specifically stated. We act as authorized channel partners for various real estate projects and developments.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Information Updates</h4>
                <p className="text-gray-700 mb-6">
                  All project information, pricing, and specifications are subject to change by developers without prior notice. Always verify current details before making decisions.
                </p>
                
                <h4 className="text-xl font-bold text-slate-800 mb-4">Contact for Clarifications</h4>
                <p className="text-gray-700">
                  For any clarifications regarding these terms or our services, contact us at support@sandnsearealty.com or call +91 98330 33233 during business hours.
                </p>
              </div>
            </div>
          </div>

       
        </div>
      </div>

    </div>
  );
};

export default TermsAndServicePage;