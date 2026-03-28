"use client";
import React, { useState } from "react";
import { Users, Trophy, Zap } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    track: "",
    members: Array(4)
      .fill(null)
      .map(() => ({
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
    members: Array(4)
      .fill(null)
      .map(() => ({
        name: "",
        registerNumber: "",
        year: "",
        college: "",
        email: "",
        phoneNumber: "",
      })),
  });

  // ---------------- VALIDATIONS ----------------
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const validateName = (name) =>
    /^[a-zA-Z\s]{2,}$/.test(name.trim());

  const validateForm = () => {
    let isValid = true;
    const newErrors = JSON.parse(JSON.stringify(errors));

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name required";
      isValid = false;
    }

    if (!formData.track.trim()) {
      newErrors.track = "Domain required";
      isValid = false;
    }

    for (let i = 0; i < 2; i++) {
      const m = formData.members[i];

      if (!validateName(m.name)) {
        newErrors.members[i].name = "Valid name required";
        isValid = false;
      }

      if (!validateEmail(m.email)) {
        newErrors.members[i].email = "Valid email required";
        isValid = false;
      }

      if (!validatePhone(m.phoneNumber)) {
        newErrors.members[i].phoneNumber = "10 digit phone required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // ---------------- HANDLERS ----------------
  const handleTeamChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...formData.members];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, members: updated }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("🚀 Registration Successful!");
      console.log(formData);
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#000511]">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Zap className="w-16 h-16 text-cyan-300 mx-auto animate-pulse mb-4" />

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            HACKATHON 10.0
          </h1>

          <p className="text-blue-200 mt-4 text-lg">
            Team Registration Portal
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-8">

          {/* TEAM INFO */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-300" />
              <h2 className="text-2xl text-white font-bold">
                Team Info
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Team Name"
                className="input"
                onChange={(e) =>
                  handleTeamChange("teamName", e.target.value)
                }
              />
              <input
                placeholder="Domain / Track"
                className="input"
                onChange={(e) =>
                  handleTeamChange("track", e.target.value)
                }
              />
            </div>
          </div>

          {/* MEMBERS */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl text-white mb-6 font-bold">
              Team Members
            </h2>

            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="mb-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-cyan-300 mb-4 font-semibold">
                  Member {i + 1} {i === 0 && "(Leader)"}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {["name", "email", "phoneNumber", "college"].map((field) => (
                    <input
                      key={field}
                      placeholder={field}
                      className="input"
                      onChange={(e) =>
                        handleMemberChange(i, field, e.target.value)
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full px-10 py-4 rounded-full 
            bg-white/10 backdrop-blur-xl border border-white/20
            text-white font-semibold text-lg
            shadow-[0_0_20px_rgba(56,189,248,0.6)]
            hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            REGISTER TEAM
          </button>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px;
          border-radius: 10px;
          color: white;
          outline: none;
          transition: 0.3s;
        }
        .input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(56,189,248,0.5);
        }
      `}</style>
    </div>
  );
};

export default Registration;
