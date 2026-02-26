import React from 'react';
import Section from '../components/common/Section';
import ServiceCard from '../components/features/ServiceCard';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';

const Services = () => {
    return (
        <>
            <div className="bg-primary-dark text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Premium Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive transport solutions designed for comfort, reliability, and efficiency.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </Section>

            <Section background="gray">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">Tailored for Your Needs</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We understand that every client has unique requirements. That's why we offer customizable packages for individuals, corporate clients, and large groups.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Professional, English-speaking drivers",
                                "Real-time flight tracking for airport transfers",
                                "Flexible hourly and daily booking options",
                                "Comprehensive insurance coverage for all passengers",
                                "24/7 customer support via phone and WhatsApp"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="text-secondary-DEFAULT mr-3 flex-shrink-0" size={20} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 relative h-80 lg:h-full min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Customer Service"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-premium"
                        />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Services;
