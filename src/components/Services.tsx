import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Building2, FileText, Shield, ArrowRight, Scale, Briefcase, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'For Sale By Owner',
    description: 'Selling your home? We can tell you how much your home is worth before you put it up for sale. We\'ll provide you with a comprehensive home appraisal that takes into account similar homes in your area.',
  },
  {
    icon: Shield,
    title: 'Remove PMI',
    description: 'Did you know an appraisal can help you get rid of your Private Mortgage Insurance? Contact us to see how we can help you save hundreds of dollars each month on your home loan.',
  },
  {
    icon: Building2,
    title: 'Commercial Appraisals',
    description: 'We offer commercial real estate appraisals throughout Arizona. Our commercial appraisers have over 25 years of experience and can help you identify the property value of your business.',
  },
  {
    icon: Scale,
    title: 'Estate & Divorce',
    description: 'Fair and accurate property valuations for estate settlements, divorce proceedings, and legal matters. Professional reports that stand up in court.',
  },
  {
    icon: Landmark,
    title: 'Bankruptcy Appraisals',
    description: 'Comprehensive property evaluations for bankruptcy proceedings, ensuring accurate asset valuation for all parties involved in the process.',
  },
  {
    icon: Briefcase,
    title: 'Full Range Services',
    description: 'KS Appraisal\'s expert team of real estate appraisers can help you with any property evaluation. Call us today to receive a free quote!',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-medium tracking-hero text-sm uppercase">Our Services</span>
            <span className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Discover Your Property's{' '}
            <span className="gradient-text">True Value</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Residential and commercial appraisals available throughout Arizona
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover-lift cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#contact" className="group">
              Order Your Appraisal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
