import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Bell, Send, User, Mail, MapPin, MessageSquare } from "lucide-react";

/**
 * Props:
 *  - autoShow (bool) default true → show automatically after delay
 *  - delay (ms) default 3000 → auto-show delay
 *  - storageKey (string) default 'propertyPromptDismissed'
 *  - open (bool) → controlled open/close from parent
 *  - onClose (fn) → called when modal closes
 */
const PropertyPrompt = ({
  autoShow = true,
  delay = 3000,
  storageKey = "propertyPromptDismissed",
  open = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ensure client-side rendering (for portals + localStorage)
  useEffect(() => {
    setMounted(true);
  }, []);

  // sync with parent `open` prop
  useEffect(() => {
    if (open) setIsVisible(true);
  }, [open]);

  // auto-show once per day
  useEffect(() => {
    if (!mounted || !autoShow) return;

    const timer = setTimeout(() => {
      try {
        const dismissed = localStorage.getItem(storageKey);
        const today = new Date().toDateString();
        if (dismissed !== today) setIsVisible(true);
      } catch (err) {
        setIsVisible(true); // fallback
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [autoShow, delay, storageKey, mounted]);

  const handleClose = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(storageKey, new Date().toDateString());
    } catch (e) {}
    if (onClose) onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => {
      handleClose();
    }, 1800);
  };

  if (!mounted || !isVisible) return null;

  const modal = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.48)", backdropFilter: "blur(6px)" }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#d2ab67] to-amber-600 rounded-t-3xl p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Stay Updated!</h3>
              <p className="text-white/90 text-sm">Get latest property updates</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                We'll keep you updated with the latest properties.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 text-center">
                Be the first to know about exclusive coastal properties and luxury
                developments.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d2ab67] text-sm"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d2ab67] text-sm"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Your Location (Optional)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d2ab67] text-sm"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Brief message about your property interests..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d2ab67] resize-none text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 text-sm font-medium"
                  >
                    Maybe Later
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#d2ab67] text-white px-4 py-3 rounded-xl hover:bg-amber-700 disabled:opacity-70 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Updates <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default PropertyPrompt;
