import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <div className="bg-primary-dark text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get in touch for bookings, quotes, or any inquiries. We are available 24/7.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 font-heading mb-8">Get In Touch</h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-DEFAULT flex-shrink-0 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                                    <a href="https://wa.me/971542991306" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                                        +971 54 299 1306
                                    </a>
                                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent bookings</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-DEFAULT flex-shrink-0 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">ansarijawad811@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-DEFAULT flex-shrink-0 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Office Location</h4>
                                    <p className="text-gray-600">123 Business Blvd, Moscow City</p>
                                    <p className="text-gray-600">Moscow, Russia, 123456</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-DEFAULT flex-shrink-0 mr-4">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h4>
                                    <p className="text-gray-600">Mon - Sun: 24 Hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.568390772091!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sen!2sru!4v1625680000000!5m2!1sen!2sru"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Moscow Office Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors" placeholder="+7 (999) 000-00-00" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                                    <input type="date" id="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                                    <select id="vehicle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors">
                                        <option>Standard Car</option>
                                        <option>SUV</option>
                                        <option>Van</option>
                                        <option>Mini Bus</option>
                                        <option>Bus</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors" placeholder="Tell us more about your trip..."></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full py-4 text-lg shadow-lg">
                                Send Request
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
