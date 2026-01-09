import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  'Phoenix', 'Mesa', 'Chandler', 'Gilbert', 'Queen Creek', 'San Tan Valley',
  'Globe', 'Apache Junction', 'Maricopa', 'Florence', 'Buckeye', 'Casa Grande',
  'Glendale', 'Gold Canyon', 'Fountain Hills', 'Laveen', 'Litchfield Park',
  'Paradise Valley', 'Scottsdale', 'Peoria', 'Sun City', 'Surprise', 'Tempe',
  'Sun Lakes', 'Avondale', 'Goodyear', 'Cave Creek'
];

const Locations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 80%, hsl(68 100% 50%), transparent 40%)' }} />
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
            <span className="text-primary font-medium tracking-hero text-sm uppercase">Service Areas</span>
            <span className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Local{' '}
            <span className="gradient-text">Real Estate Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Residential property appraisals across the Phoenix metropolitan area. 
            Commercial appraisals available throughout Arizona.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {locations.map((location, index) => (
            <motion.div
              key={location}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.02 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <MapPin className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {location}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Commercial Property Appraisals Available Throughout Arizona
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact" className="group">
              <MapPin className="w-4 h-4" />
              View All Locations
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-24 overflow-hidden border-y border-border bg-card/30"
      >
        <div className="marquee-track flex whitespace-nowrap py-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Phoenix Metro', 'Residential', 'Commercial', 'Land Appraisals', 'Estate Valuations', '25+ Years Experience', 'Licensed Appraisers'].map((text, idx) => (
                <span key={idx} className="text-2xl md:text-3xl font-display font-bold text-foreground/10">
                  {text}
                  <span className="mx-12 text-primary">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Locations;
