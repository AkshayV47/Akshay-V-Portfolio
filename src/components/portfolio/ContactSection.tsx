import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "itzakshay2005@gmail.com", href: "mailto:itzakshay2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9150255738", href: "tel:+919150255738" },
  { icon: Github, label: "GitHub", value: "AkshayV47", href: "https://github.com/AkshayV47" },
  { icon: Linkedin, label: "LinkedIn", value: "Akshay V", href: "https://www.linkedin.com/in/akshay-v-3b589b28a/" },
  { icon: MapPin, label: "Location", value: "Salem, Tamil Nadu, India", href: null },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-3">Misc. 📬</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to connect with me on LinkedIn or shoot me an email! I swear I don't bite. :)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
          {contacts.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            const props = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Wrapper
                  {...(props as any)}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm text-foreground">{c.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 pb-8" />
      </motion.div>
    </section>
  );
};

export default ContactSection;
