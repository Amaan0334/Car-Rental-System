import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <Logo className="text-white" />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Providing top-tier transport solutions across Russia & Kazakhstan.
                            Reliability, comfort, and professional service guaranteed 24/7.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary-DEFAULT inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary-light transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/fleet" className="text-gray-400 hover:text-primary-light transition-colors">Fleet</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary-light transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-primary-light transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary-light transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary-DEFAULT inline-block pb-1">Our Services</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Airport Transfers</li>
                            <li className="text-gray-400">Corporate Transport</li>
                            <li className="text-gray-400">Intercity Travel</li>
                            <li className="text-gray-400">Event Logistics</li>
                            <li className="text-gray-400">Employee Transportation</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary-DEFAULT inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mt-1 mr-3 text-secondary-DEFAULT flex-shrink-0" size={18} />
                                <span className="text-gray-400">123 Business Blvd, Moscow, Russia.</span>
                            </li>
                            <li className="flex items-center">
                                <a href="https://wa.me/971542991306" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors group">
                                    <Phone className="mr-3 text-secondary-DEFAULT flex-shrink-0 group-hover:text-green-500 transition-colors" size={18} />
                                    <span className="text-gray-400 group-hover:text-white transition-colors">+971 54 299 1306</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-secondary-DEFAULT flex-shrink-0" size={18} />
                                <span className="text-gray-400">ansarijawad811@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Premium Rental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
