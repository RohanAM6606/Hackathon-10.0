import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Who can participate in Hackathon 10.0?',
    a: 'Open to all SRMIST students passionate about coding. Whether you’re a beginner or an experienced coder, everyone is welcome to participate.'
  },
  {
    q: 'What should I bring to Hackathon 10.0?',
    a: "Bring your laptop, charger, student ID, and enthusiasm for building. We'll provide the workspace, internet, and refreshments."
  },
  {
    q: 'Can I participate individually or in a team?',
    a: 'This is a team-based hackathon. Teams typically consist of 2–4 members.'
  },
  {
    q: 'Is there any registration fee?',
    a: 'Yes, there is a registration fee of ₹300 for all participants.'
  },
  {
    q: "What if I'm a beginner?",
    a: 'Perfect! We welcome beginners and provide mentorship and support throughout the hackathon to help you learn and build.'
  },
  {
    q: 'How are projects judged?',
    a: 'Projects are evaluated based on innovation, technical implementation, impact, and presentation during the final pitch to judges.'
  }
]

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section
      className="relative overflow-hidden pb-24 sm:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.14) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto pt-24 sm:pt-32 px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 text-center flex flex-col items-center">
          <p className="inline-flex px-4 py-1.5 rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 text-[11px] sm:text-xs tracking-[0.24em] uppercase mb-4">
            Need Help?
          </p>
          <h2 className="
            text-4xl md:text-5xl font-black
            tracking-tight
          bg-linear-to-r from-cyan-200 via-sky-300 to-indigo-300
          bg-clip-text text-transparent
          ">
            Frequently Asked Questions
          </h2>

          <p className="
            mt-3 max-w-2xl
            text-sm md:text-base
            text-slate-300
            leading-relaxed
          ">
            Everything you need to know before entering Hackathon 10.0
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-card ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="faq-question">
                  {faq.q}
                </h3>

                <ChevronDown
                  className={`h-5 w-5 text-cyan-200/80 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <p className="faq-answer">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default FaqSection
