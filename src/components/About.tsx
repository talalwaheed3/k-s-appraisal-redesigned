import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import homeInterior from '@/assets/home-interior.jpg';

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Award, text: 'Licensed & Certified Appraisers' },
    { icon: Clock, text: 'Fast Turnaround Times' },
    { icon: Users, text: 'Thousands of Satisfied Clients' },
    { icon: CheckCircle, text: 'Accurate & Reliable Reports' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, hsl(68 100% 50%), transparent 50%)' }} />
      </div>

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={homeInterior} 
                alt="Beautiful home interior" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl glow-effect"
            >
              <div className="font-display text-5xl font-bold text-primary mb-2">
                <AnimatedCounter target={25} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Years of Trusted Service</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium tracking-hero text-sm uppercase">About Us</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Arizona's Real Estate{' '}
              <span className="gradient-text">Appraisal Experts</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Over the past 25 years, KS Appraisal has performed thousands of residential 
              appraisals across the Phoenix metropolitan area and commercial appraisals 
              throughout Arizona. We have provided reliable, accurate, and timely evaluations 
              to countless local and nation-wide mortgage providers, banks, private individuals, 
              businesses, and real estate agents.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in many types of property evaluations: home appraisals, for sale 
              by owner, appraisals to remove private mortgage insurance (PMI), bankruptcy 
              appraisals, date of death appraisals, foreclosure appraisals, estate appraisals, 
              divorce appraisals, business appraisals, land appraisals, and more.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/90 text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
