import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showMessageError, setShowMessageError] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
       formErrors.email = "Enter a valid email";
      toast.error("Invalid email format! Please check your email address.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
        style: { zIndex: 99999 },
      });
    }
    if (!message) {
      formErrors.message = "Message is required";
      setShowMessageError(true);
    } else if (message.trim().length < 10) {
      formErrors.message = "Message must be at least 10 characters";
      setShowMessageError(true);
    } else {
      setShowMessageError(false);
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
            style: { zIndex: 99999 },
          });
          setEmail("");
          setMessage("");
          setErrors({});
          setShowMessageError(false);
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "bottom-right",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
            style: { zIndex: 99999 },
          });
          console.error(error);
          setLoading(false);
        }
      );
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    
    if (e.target.value.trim().length >= 10 && showMessageError) {
      setShowMessageError(false);
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="md:min-h-screen h-190  flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-43 md:mb-69 bg-slate-950 relative z-30 "
    >
      <div
        className="w-full  max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-6xl 
        min-h-[500px] sm:min-h-[450px] md:min-h-[450px] 
        rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 
        relative overflow-hidden 
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl 
        bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full items-center mt-5 md:mt-0">
          {/* Left Side - Mobile Optimized */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
            font-bold text-white mb-4 sm:mb-6 drop-shadow-md tracking-wide leading-tight">
              Let&apos;s create great things
              <span className="block">together</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg px-2 sm:px-0">
              Drop your email and I&apos;ll contact you soon ;)
            </p>
          </div>

          {/* Right Side - Form - Mobile First */}
          <div className="flex flex-col space-y-4 sm:space-y-4 mt-4 sm:mt-6 lg:mt-7">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-4">
              {/* Email Input - Mobile Responsive */}
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`bg-white/40 backdrop-blur-lg border ${
                  errors.email ? "border-red-500" : "border-white/30"
                } rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-lg text-white placeholder-white/70 
                outline-none focus:border-white/50 transition text-sm sm:text-base
                w-full touch-manipulation`}
              />
              {errors.email && (
                <span className="text-black text-xs sm:text-sm ml-2 px-2">{errors.email}</span>
              )}

              {/* Message Input - Mobile Responsive */}
              <textarea
                placeholder="Enter your message..."
                value={message}
                onChange={handleMessageChange}
                rows={3}
                className={`bg-white/40 backdrop-blur-lg border ${
                  errors.message && showMessageError ? "border-red-500" : "border-white/30"
                } rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg text-white placeholder-white/70 
                outline-none focus:border-white/50 transition resize-none text-sm sm:text-base
                w-full touch-manipulation min-h-[80px] sm:min-h-[100px]`}
              />
              {errors.message && showMessageError && (
                <span className="text-black text-xs sm:text-sm ml-2 px-2">{errors.message}</span>
              )}

              {/* Button - Mobile & Desktop Water Effect */}
              <button
                type="submit"
                disabled={loading}
                className="water-button relative overflow-hidden bg-white/15 border border-white/30 
                backdrop-blur-lg text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg 
                hover:scale-105 active:scale-95 transition-all duration-200 
                self-center sm:self-start lg:self-start
                flex items-center justify-center gap-2 sm:gap-3 group 
                disabled:opacity-50 disabled:cursor-not-allowed
                w-full sm:w-auto min-w-[160px] sm:min-w-[180px]
                touch-manipulation text-sm sm:text-base"
              >
                {/* Base water fill */}
                <div className="water-fill absolute inset-0 bg-gradient-to-br from-blue-600/70 via-cyan-500/60 to-teal-300/40 rounded-full translate-x-[-100%] rotate-[-2deg] transition-all duration-[1500ms] ease-out"></div>
                
                {/* Water surface ripple */}
                <div className="water-ripple absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent rounded-full translate-x-[-120%] transition-transform duration-[1300ms] ease-out delay-200"></div>
                
                {/* Light reflection on water */}
                <div className="water-reflection absolute top-2 left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-sm translate-x-[-200%] transition-transform duration-[2000ms] ease-out delay-500"></div>
                
                {/* Bubble effects */}
                <div className="water-bubbles absolute inset-0 opacity-0 transition-opacity duration-1000 delay-700">
                  <div className="absolute top-2 sm:top-3 left-6 sm:left-8 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full animate-bounce delay-75"></div>
                  <div className="absolute top-3 sm:top-4 right-8 sm:right-12 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce delay-150"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-12 sm:left-16 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-cyan-200/50 rounded-full animate-bounce delay-300"></div>
                </div>
                
                {/* Button text */}
                <span className="relative z-20 drop-shadow-lg flex items-center gap-1 sm:gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </span>
                
                {/* Arrow icon */}
                {!loading && (
                  <span className="relative z-20 text-lg sm:text-2xl hover:scale-110 transition-transform duration-200 drop-shadow-lg">
                    &gt;
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ zIndex: 99999 }}
        toastClassName={() =>
          "relative flex items-center p-2 sm:p-4 min-h-10 sm:min-h-12 w-[90vw] sm:w-auto max-w-sm sm:max-w-md bg-white text-black rounded-lg shadow-lg"
        }
        bodyClassName={() => "text-xs sm:text-sm font-medium"}
      />

      {/* Water Button Styles */}
      <style jsx>{`
        /* Desktop hover effects - only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          .water-button:hover .water-fill {
            translate: 0;
            rotate: 0deg;
          }
          .water-button:hover .water-ripple {
            translate: 20%;
          }
          .water-button:hover .water-reflection {
            translate: 200%;
          }
          .water-button:hover .water-bubbles {
            opacity: 1;
          }
        }

        /* Mobile/Touch effects - for devices without hover capability */
        @media (hover: none) and (pointer: coarse) {
          .water-button:active .water-fill {
            translate: 0 !important;
            rotate: 0deg !important;
          }
          .water-button:active .water-ripple {
            translate: 20% !important;
          }
          .water-button:active .water-reflection {
            translate: 200% !important;
          }
          .water-button:active .water-bubbles {
            opacity: 1 !important;
          }
          
          /* Ensure touch feedback */
          .water-button:active {
            transform: scale(0.95);
          }
        }

        /* Fallback for all devices - covers edge cases */
        .water-button:focus .water-fill {
          translate: 0;
          rotate: 0deg;
        }
        .water-button:focus .water-ripple {
          translate: 20%;
        }
        .water-button:focus .water-reflection {
          translate: 200%;
        }
        .water-button:focus .water-bubbles {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;
