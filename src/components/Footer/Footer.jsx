import { Calendar, Clock, Mail, MapPin, Phone, Trophy, Users } from "lucide-react";
import LightWavesBackground from "../ui/LightWavesBackground";

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white pt-12 pb-8 overflow-hidden border-t border-cyan-400/30">
      <LightWavesBackground />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400">Hackathon 10.0</h2>
            <p className="text-gray-300">
              Join us for the 10th edition of our hackathon, a 36-hour event where teams collaborate, build, and refine ideas into working projects.
            </p>
          </div>

          {/* Event Details Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-400">Event Details</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <span>Date: 17th-18th April 2026</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-cyan-400" />
                <span>Duration: 36 Hours</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Venue: Mini hall 2</span>
              </li>
              <li className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-cyan-400" />
                <span>Prize Pool: ₹1,00,000+</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="h-5 w-5 text-cyan-400" />
                <span>Team Size: 2-4 Members</span>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-400">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-1" />
                <a href="mailto:srmhackathon5@gmail.com" className="hover:text-cyan-400">
                  srmhackathon5@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+91 63819 49898</span>
              </li>
               <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+91 70675 85490</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>SRM Institute of Science & Technology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-blue-800/50 text-center text-gray-400">
          <p>&copy; 2026 Hackathon 10.0. All rights reserved.</p>
          <p className="text-sm">
            Built by{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              SRM Hackathon Tech Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
