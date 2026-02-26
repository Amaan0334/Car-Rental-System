import React from 'react';
import Section from '../components/common/Section';
import { Award, Shield, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <>
            <div className="bg-primary-dark text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Premium Rental</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your trusted partner in luxury transportation across Russia & Kazakhstan.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 font-heading mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Premium Rental, our mission is to provide safe, reliable, and comfortable transportation solutions that exceed our clients' expectations.
                            We strive to set the standard for excellence in the ground transportation industry in Russia and Kazakhstan.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Whether it's a corporate event, airport transfer, or a city tour, we are dedicated to ensuring a seamless travel experience for every passenger.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-96">
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Business Meeting"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-premium"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Years Experience", value: "10+", icon: Award },
                        { label: "Vehicles in Fleet", value: "50+", icon: Shield },
                        { label: "Happy Clients", value: "5000+", icon: Users },
                        { label: "Cities Served", value: "15+", icon: Globe }
                    ].map((stat, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-card hover:shadow-premium transition-shadow border border-gray-100">
                            <div className="w-12 h-12 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-primary-DEFAULT mb-4">
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="gray">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 font-heading mb-8">Professional Driver Statement</h2>
                    <blockquote className="text-xl text-gray-600 italic mb-8">
                        "We don't just drive cars; we provide a service. Every journey is an opportunity to demonstrate our commitment to safety, punctuality, and professionalism."
                    </blockquote>
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Head Driver" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900">Mikhail Ivanov</div>
                            <div className="text-sm text-primary-DEFAULT">Head of Fleet Operations</div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
