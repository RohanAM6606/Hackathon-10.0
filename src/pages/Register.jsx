"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle, Loader2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { initiatePayment } from "../../service/razorpay";
import { saveRegistration } from "../../service/registrationservice";

const Registration = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const [formData, setFormData] = useState({
    teamName: "",
    track: "",
    members: Array(4).fill(null).map(() => ({
      name: "",
      registerNumber: "",
      year: "",
      college: "",
      email: "",
      phoneNumber: "",
    })),
  });

  const [errors, setErrors] = useState({
    teamName: "",
    track: "",
    members: Array(4).fill(null).map(() => ({
      name: "",
      registerNumber: "",
      year: "",
      college: "",
      email: "",
      phoneNumber: "",
    })),
  });

  useEffect(() => {
    let timer;
    if (isLoading && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (!isLoading) {
      setCountdown(60);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isLoading, countdown]);

  const getLoadingMessage = () => {
    if (countdown > 50) return "Initializing payment gateway...";
    if (countdown > 40) return "Securing your connection...";
    if (countdown > 30) return "Preparing checkout...";
    if (countdown > 20) return "Almost there...";
    if (countdown > 10) return "Finalizing setup...";
    return "Opening payment window...";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateRegisterNumber = (regNo) => {
    return /^[A-Z0-9]+$/i.test(regNo.trim()) && regNo.trim().length > 0;
  };

  const validateYear = (year) => {
    const validYears = ["1st", "2nd", "3rd", "4th", "1", "2", "3", "4", "first", "second", "third", "fourth"];
    return validYears.includes(year.toLowerCase().trim());
  };

  const validateName = (name) => {
    return /^[a-zA-Z\s]{2,}$/.test(name.trim());
  };

  const resetForm = () => {
    setFormData({
      teamName: "",
      track: "",
      members: Array(4).fill(null).map(() => ({
        name: "",
        registerNumber: "",
        year: "",
        college: "",
        email: "",
        phoneNumber: "",
      })),
    });

    setErrors({
      teamName: "",
      track: "",
      members: Array(4).fill(null).map(() => ({
        name: "",
        registerNumber: "",
        year: "",
        college: "",
        email: "",
        phoneNumber: "",
      })),
    });
  };

  const handleTeamChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData((prev) => ({ ...prev, members: updatedMembers }));

    if (errors.members[index][field]) {
      const updatedErrors = { ...errors };
      updatedErrors.members[index] = { ...updatedErrors.members[index], [field]: "" };
      setErrors(updatedErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {
      teamName: "",
      track: "",
      members: Array(4).fill(null).map(() => ({
        name: "",
        registerNumber: "",
        year: "",
        college: "",
        email: "",
        phoneNumber: "",
      })),
    };

    let isValid = true;

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
      isValid = false;
    } else if (formData.teamName.trim().length < 3) {
      newErrors.teamName = "Team name must be at least 3 characters";
      isValid = false;
    } else if (formData.teamName.trim().length > 50) {
      newErrors.teamName = "Team name must not exceed 50 characters";
      isValid = false;
    }

    if (!formData.track.trim()) {
      newErrors.track = "Domain is required";
      isValid = false;
    } else if (formData.track.trim().length < 2) {
      newErrors.track = "Domain must be at least 2 characters";
      isValid = false;
    }

    for (let i = 0; i < 2; i += 1) {
      const member = formData.members[i];

      if (!member.name.trim()) {
        newErrors.members[i].name = "Name is required";
        isValid = false;
      } else if (!validateName(member.name)) {
        newErrors.members[i].name = "Name should contain only letters (minimum 2 characters)";
        isValid = false;
      }

      if (!member.registerNumber.trim()) {
        newErrors.members[i].registerNumber = "Register number is required";
        isValid = false;
      } else if (!validateRegisterNumber(member.registerNumber)) {
        newErrors.members[i].registerNumber = "Register number must contain only letters and numbers";
        isValid = false;
      }

      if (!member.year.trim()) {
        newErrors.members[i].year = "Year is required";
        isValid = false;
      } else if (!validateYear(member.year)) {
        newErrors.members[i].year = "Enter valid year (1st, 2nd, 3rd, or 4th)";
        isValid = false;
      }

      if (!member.college.trim()) {
        newErrors.members[i].college = "College is required";
        isValid = false;
      } else if (member.college.trim().length < 3) {
        newErrors.members[i].college = "College name must be at least 3 characters";
        isValid = false;
      }

      if (!member.email.trim()) {
        newErrors.members[i].email = "Email is required";
        isValid = false;
      } else if (!validateEmail(member.email)) {
        newErrors.members[i].email = "Enter a valid email address";
        isValid = false;
      }

      if (!member.phoneNumber.trim()) {
        newErrors.members[i].phoneNumber = "Phone number is required";
        isValid = false;
      } else if (!validatePhone(member.phoneNumber)) {
        newErrors.members[i].phoneNumber = "Phone number must be exactly 10 digits";
        isValid = false;
      }

      if (Object.values(newErrors.members[i]).some((err) => err)) {
        isValid = false;
      }
    }

    for (let i = 2; i < 4; i += 1) {
      const member = formData.members[i];
      const hasAnyData = Object.values(member).some((val) => val.trim());

      if (hasAnyData) {
        if (!member.name.trim()) {
          newErrors.members[i].name = "Name is required";
        } else if (!validateName(member.name)) {
          newErrors.members[i].name = "Name should contain only letters (minimum 2 characters)";
        }

        if (!member.registerNumber.trim()) {
          newErrors.members[i].registerNumber = "Register number is required";
        } else if (!validateRegisterNumber(member.registerNumber)) {
          newErrors.members[i].registerNumber = "Register number must contain only letters and numbers";
        }

        if (!member.year.trim()) {
          newErrors.members[i].year = "Year is required";
        } else if (!validateYear(member.year)) {
          newErrors.members[i].year = "Enter valid year (1st, 2nd, 3rd, or 4th)";
        }

        if (!member.college.trim()) {
          newErrors.members[i].college = "College is required";
        } else if (member.college.trim().length < 3) {
          newErrors.members[i].college = "College name must be at least 3 characters";
        }

        if (!member.email.trim()) {
          newErrors.members[i].email = "Email is required";
        } else if (!validateEmail(member.email)) {
          newErrors.members[i].email = "Enter a valid email address";
        }

        if (!member.phoneNumber.trim()) {
          newErrors.members[i].phoneNumber = "Phone number is required";
        } else if (!validatePhone(member.phoneNumber)) {
          newErrors.members[i].phoneNumber = "Phone number must be exactly 10 digits";
        }

        if (Object.values(newErrors.members[i]).some((err) => err)) {
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setIsLoading(true);

    const filledMembers = formData.members.filter((member, index) => {
      if (index < 2) {
        return true;
      }
      return Object.values(member).some((val) => val.trim());
    });

    const submissionData = {
      ...formData,
      members: filledMembers,
    };

    try {
      initiatePayment({
        formData: {
          leaderName: submissionData.members[0].name,
          leaderEmail: submissionData.members[0].email,
          leaderPhone: submissionData.members[0].phoneNumber,
        },
        onOpen: () => {
          setIsLoading(false);
        },
        onDismiss: () => {
          setIsLoading(false);
        },
        onSuccess: async (paymentResponse) => {
          const finalDataWithPayment = {
            ...submissionData,
            payment: {
              paymentId: paymentResponse.razorpay_payment_id,
              orderId: paymentResponse.razorpay_order_id || null,
              signature: paymentResponse.razorpay_signature || null,
              amount: 293,
              currency: "INR",
              status: "success",
              timestamp: new Date().toISOString(),
            },
            registrationDate: new Date().toISOString(),
          };

          try {
            await saveRegistration(finalDataWithPayment);
            setShowSuccessModal(true);
            resetForm();
          } catch (firebaseError) {
            console.error("Firebase save failed:", firebaseError);
            alert(
              `Payment successful but failed to save registration data. Please contact support with payment ID: ${paymentResponse.razorpay_payment_id}`
            );
          } finally {
            setIsLoading(false);
          }
        },
      });
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Failed to open payment window. Please check console for details.");
      setIsLoading(false);
    }
  };

  const memberFields = [
    { field: "name", label: "Name", type: "text", placeholder: "Enter your name" },
    { field: "registerNumber", label: "Register Number", type: "text", placeholder: "e.g., RA12345" },
    { field: "year", label: "Year", type: "text", placeholder: "1st / 2nd / 3rd / 4th" },
    { field: "college", label: "College", type: "text", placeholder: "Your college name" },
    { field: "email", label: "Email", type: "email", placeholder: "yourname@example.com" },
    { field: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "10-digit number", maxLength: 10 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617] text-slate-100">
      <Navbar />

      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-8 sm:mb-10 md:mb-16 animate-fade-up">
          <p className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-100 text-[10px] sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-5">
            Registrations Open
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-200 via-sky-300 to-indigo-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] leading-tight">
            HACKATHON 10.0
          </h1>
          <p className="text-slate-300 mt-3 sm:mt-4 text-xs sm:text-base md:text-lg">
            Team Registration Portal
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="glass-card p-4 sm:p-8 animate-fade-up-delay">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-10 w-10 rounded-lg bg-cyan-300/15 border border-cyan-200/30 flex items-center justify-center">
                <Users className="text-cyan-200 h-5 w-5" />
              </div>
              <h2 className="section-title">
                Team Info
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="field-label">Team Name</label>
                <input
                  value={formData.teamName}
                  placeholder="Team Name"
                  className="input-glass"
                  onChange={(e) => handleTeamChange("teamName", e.target.value)}
                />
                {errors.teamName && <p className="text-red-300 text-sm mt-1">{errors.teamName}</p>}
              </div>
              <div>
                <label className="field-label">Domain / Track</label>
                <input
                  value={formData.track}
                  placeholder="Domain / Track"
                  className="input-glass"
                  onChange={(e) => handleTeamChange("track", e.target.value)}
                />
                {errors.track && <p className="text-red-300 text-sm mt-1">{errors.track}</p>}
              </div>
            </div>
          </div>

          <div className="glass-card p-4 sm:p-8 animate-fade-up-delay-2">
            <h2 className="section-title mb-6">
              Team Members
            </h2>

            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="member-card mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl border border-cyan-200/15">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h3 className="text-cyan-200 text-base sm:text-lg font-semibold tracking-wide">
                    Member {i + 1} {i === 0 && "(Leader)"}
                  </h3>
                  <span className={`text-[11px] px-3 py-1 rounded-full border ${i < 2 ? "bg-rose-400/15 border-rose-300/35 text-rose-200" : "bg-cyan-400/15 border-cyan-200/35 text-cyan-100"}`}>
                    {i < 2 ? "Mandatory" : "Optional"}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  {memberFields.map(({ field, label, type, placeholder, maxLength }) => (
                    <div key={field}>
                      <label className="field-label">{label}</label>
                      <input
                        type={type}
                        value={formData.members[i][field]}
                        placeholder={placeholder}
                        className="input-glass"
                        maxLength={maxLength}
                        onChange={(e) => {
                          let val = e.target.value;
                          if (field === "phoneNumber") {
                            val = val.replace(/\D/g, "");
                          } else if (field === "name") {
                            val = val.replace(/[^a-zA-Z\s]/g, "");
                          } else if (field === "registerNumber") {
                            val = val.toUpperCase();
                          }
                          handleMemberChange(i, field, val);
                        }}
                      />
                      {errors.members[i][field] && (
                        <p className="text-red-300 text-xs mt-1">{errors.members[i][field]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="group w-full relative overflow-hidden rounded-2xl border border-cyan-200/30 bg-linear-to-r from-cyan-500/70 via-sky-500/70 to-indigo-500/70 px-4 sm:px-8 py-3.5 sm:py-4 text-white font-semibold text-sm sm:text-lg shadow-[0_18px_45px_rgba(34,211,238,0.28)] hover:shadow-[0_20px_55px_rgba(56,189,248,0.38)] transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            {isLoading ? (
              <span className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 relative z-10 leading-tight text-center">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{getLoadingMessage()} ({countdown}s)</span>
              </span>
            ) : (
              <span className="tracking-wide relative z-10">REGISTER TEAM</span>
            )}
          </button>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative max-w-md w-full rounded-2xl border border-cyan-100/25 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_45px_rgba(56,189,248,0.28)]">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Thank You for Registering!</h2>
              <p className="text-slate-300">Your registration has been confirmed.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/");
              }}
              className="w-full rounded-xl border border-cyan-200/35 bg-cyan-400/15 px-6 py-3 text-cyan-100 font-semibold hover:bg-cyan-300/20 transition"
            >
              GO TO HOME PAGE
            </button>
          </div>
        </div>
      )}

      <style>{`
        .glass-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(8, 18, 38, 0.82) 0%, rgba(10, 32, 58, 0.72) 45%, rgba(18, 46, 76, 0.65) 100%);
          border: 1px solid rgba(125, 211, 252, 0.26);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          box-shadow: 0 22px 58px rgba(2, 8, 23, 0.52), inset 0 1px 0 rgba(186, 230, 253, 0.18), inset 0 -1px 0 rgba(14, 165, 233, 0.2);
        }

        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 12% 0%, rgba(103, 232, 249, 0.16), transparent 38%), radial-gradient(circle at 95% 85%, rgba(96, 165, 250, 0.14), transparent 44%);
        }

        .member-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(132deg, rgba(5, 16, 34, 0.78), rgba(9, 33, 57, 0.6));
          box-shadow: inset 0 1px 0 rgba(186, 230, 253, 0.14), 0 12px 32px rgba(7, 16, 33, 0.46), inset 0 -1px 0 rgba(56, 189, 248, 0.18);
        }

        .member-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 48%;
          height: 58%;
          pointer-events: none;
          background: radial-gradient(circle at top right, rgba(34, 211, 238, 0.12), transparent 72%);
        }

        .section-title {
          color: #ecfeff;
          font-size: clamp(1.35rem, 2.2vw, 1.85rem);
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .field-label {
          display: block;
          color: rgba(207, 250, 254, 0.88);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }

        .input-glass {
          width: 100%;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid rgba(125, 211, 252, 0.3);
          padding: 0.78rem 0.9rem;
          border-radius: 12px;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-glass::placeholder {
          color: rgba(186, 230, 253, 0.5);
        }

        .input-glass:focus {
          border-color: rgba(34, 211, 238, 0.88);
          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.18), 0 0 26px rgba(56, 189, 248, 0.16);
          background: rgba(2, 6, 23, 0.72);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.7s ease both;
        }

        .animate-fade-up-delay {
          animation: fadeUp 0.78s ease both;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.88s ease both;
        }

        @media (max-width: 640px) {
          .glass-card {
            border-radius: 16px;
            background: linear-gradient(140deg, rgba(9, 19, 39, 0.9) 0%, rgba(10, 31, 56, 0.78) 55%, rgba(18, 43, 70, 0.72) 100%);
            border-color: rgba(125, 211, 252, 0.24);
            box-shadow: 0 16px 34px rgba(2, 8, 23, 0.5), inset 0 1px 0 rgba(186, 230, 253, 0.15);
          }

          .member-card {
            border-radius: 14px;
            background: linear-gradient(140deg, rgba(7, 16, 33, 0.88), rgba(11, 29, 51, 0.72));
            box-shadow: inset 0 1px 0 rgba(186, 230, 253, 0.12), 0 10px 24px rgba(2, 8, 23, 0.45);
          }

          .section-title {
            font-size: 1.2rem;
          }

          .field-label {
            font-size: 0.64rem;
            letter-spacing: 0.1em;
            margin-bottom: 0.35rem;
          }

          .input-glass {
            padding: 0.7rem 0.78rem;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Registration;