"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Users } from "lucide-react";

const Registration = () => {
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

  const handleTeamChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...formData.members];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, members: updated }));
  };

  return (
    <div className="min-h-screen bg-[#000511]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-cyan-300">
            HACKATHON 10.0
          </h1>
          <p className="text-blue-200 mt-4">
            Team Registration Portal
          </p>
        </div>

        <div className="space-y-8">
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

          <button
            className="w-full px-10 py-4 rounded-full 
            bg-white/10 backdrop-blur-xl border border-white/20
            text-white font-semibold text-lg
            hover:scale-105 hover:bg-white/20 transition-all duration-300"
          >
            REGISTER TEAM
          </button>
        </div>
      </div>

      <style>{`
        .input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px;
          border-radius: 10px;
          color: white;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Registration;