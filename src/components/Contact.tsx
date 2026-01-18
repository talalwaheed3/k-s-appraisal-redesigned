import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import commercialBuilding from "@/assets/commercial-building.jpg";
import axios from "axios";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    "full name": "",
    email: "",
    phone: "",
    "appraisal type": "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;
      // await axios.post("http://localhost:5678/webhook/appraisal-request", {
      await axios.post(
        "https://reforms-developer-convertible-thinking.trycloudflare.com/webhook/appraisal-request",
        {
          "full name": formData["full name"],
          email: formData["email"],
          phone: formData["phone"],
          "appraisal type": formData["appraisal type"],
          message: formData["message"],
        }
      );
      alert("🎊🎊🎊 Your Appraisal Request was made Successfully 🎊🎊🎊");
      setFormData({
        "full name": "",
        email: "",
        phone: "",
        "appraisal type": "",
        message: "",
      });
    } catch (error) {
      alert("Self-Hosting timeOut 😪🥱💤")
      console.error("Axios Error is: ", error.message);
    }
  };

  return (
    <section id="contact" className="py-32 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={commercialBuilding}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-card" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium tracking-hero text-sm uppercase">
                Contact Us
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Discover Your{" "}
              <span className="gradient-text">Property's Value?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Contact us for a free quote today! Our team of expert appraisers
              is ready to help you with all your property valuation needs.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              <motion.a
                href="tel:4804647800"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Call us now
                  </div>
                  <div className="font-display text-2xl font-bold text-primary">
                    480.464.7800
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Service Area
                  </div>
                  <div className="font-semibold">
                    Phoenix Metropolitan Area & All of Arizona
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {["Licensed", "Certified", "Insured", "BBB Accredited"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground"
                  >
                    {badge}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                Get Your Free Quote
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData["full name"]}
                    onChange={(e) =>
                      setFormData({ ...formData, "full name": e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="+12 123456789"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Appraisal Type
                  </label>
                  <select
                    value={formData["appraisal type"]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        "appraisal type": e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="residential">Residential Appraisal</option>
                    <option value="commercial">Commercial Appraisal</option>
                    <option value="land">Land Appraisal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your property..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
