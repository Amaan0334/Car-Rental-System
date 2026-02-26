import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Award, Users } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import FleetCard from '../components/features/FleetCard';
import ServiceCard from '../components/features/ServiceCard';
import { fleet } from '../data/fleet';
import { services } from '../data/services';

const Home = () => {
    const featuredFleet = fleet.slice(0, 3);
    const featuredServices = services.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Car Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
                    >
                        Premium Car, Van & Bus Rental <br />
                        <span className="text-primary-light">24/7 Service</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                    >
                        Reliable transport solutions for individuals and corporate clients in Russia & Kazakhstan.
                        Experience comfort, safety, and professionalism.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Button to="/fleet" variant="primary">
                            Book Now
                        </Button>
                        <Button to="/fleet" variant="outline">
                            View Fleet
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Fleet Preview Section */}
            <Section background="gray" id="fleet-preview">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">Our Premium Fleet</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our diverse range of high-end vehicles, maintained to the highest standards for your comfort and safety.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featuredFleet.map((vehicle) => (
                        <motion.div key={vehicle.id} variants={itemVariants}>
                            <FleetCard vehicle={vehicle} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <Button to="/fleet" variant="ghost" className="text-lg">
                        View All Vehicles <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section background="white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">Why Choose Us?</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We pride ourselves on delivering exceptional service. Whether you need a luxury car for a business meeting or a bus for a group tour, we've got you covered.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support and service." },
                                { icon: Shield, title: "Safety First", desc: "Professionally trained drivers and insured vehicles." },
                                { icon: Award, title: "Best Price Guarantee", desc: "Competitive rates without compromising quality." },
                                { icon: Users, title: "Corporate Experts", desc: "Specialized solutions for business clients." }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-DEFAULT">
                                            <item.icon size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary-DEFAULT/10 rounded-3xl transform rotate-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Professional Driver"
                            className="relative rounded-2xl shadow-premium w-full object-cover h-[500px]"
                        />
                    </div>
                </div>
            </Section>

            {/* Services Section */}
            <Section background="gray">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive transport solutions tailored to meet your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredServices.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </Section>

            {/* Testimonials */}
            <Section background="dark" className="text-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Client Testimonials</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say about our service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Alexei V.", role: "Corporate Client", text: "Excellent service! The driver was punctual and the car was immaculate. Highly recommended for business travel in Moscow." },
                        { name: "Svetlana K.", role: "Event Manager", text: "We rented a bus for our company retreat. The process was smooth, and the bus was very comfortable for the long journey." },
                        { name: "Dmitry R.", role: "Tourist", text: "Great experience. Booking was easy, and the airport transfer was seamless. Will definitely use again." }
                    ].map((review, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                            <div className="flex text-accent mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                            <div>
                                <h4 className="font-semibold text-white">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-DEFAULT relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need Reliable Transport?</h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Book your vehicle today and experience the difference. 24/7 service across Russia & Kazakhstan.
                    </p>
                    <Button to="/contact" variant="secondary" className="text-lg px-8 py-4 shadow-xl">
                        Book Your Vehicle Today
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Home;
