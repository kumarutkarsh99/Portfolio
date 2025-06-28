"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => setSuccess("Failed to send message. Please try again.")
      )
      .finally(() => setSending(false));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, exciting projects,
            or simply connecting over technology.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — I'd love to hear from you. Feel free to reach
              out through any of the channels below.
            </p>
            <div className="space-y-4">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "kumar.cs01032@gmail.com",
                },
                { Icon: Phone, label: "Phone", value: "+91 88103 07117" },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Bhubaneswar, India",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <item.Icon className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.label}
                    </h4>
                    <p className="text-slate-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 },
            }}
          >
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-slate-300 focus:border-slate-500"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-slate-300 focus:border-slate-500"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-slate-300 focus:border-slate-500 resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white flex items-center justify-center"
                    disabled={sending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                  {success && (
                    <p className="text-sm mt-4 text-center text-slate-700">
                      {success}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
