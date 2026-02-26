import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-primary-DEFAULT font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section (Contact & Language) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://wa.me/971542991306" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                            <Phone size={18} className="mr-2 text-secondary-DEFAULT" />
                            <span className="font-semibold">+971 54 299 1306</span>
                        </a>
                        <button className="flex items-center px-3 py-1 rounded-full border border-gray-200 hover:border-primary-DEFAULT transition-colors">
                            <Globe size={16} className="mr-1 text-gray-500" />
                            <span className="text-sm font-medium">EN</span>
                        </button>
                        <Link
                            to="/fleet"
                            className="bg-primary-DEFAULT hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-primary-DEFAULT/30"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-DEFAULT focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-DEFAULT hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100 mt-4">
                                <a href="https://wa.me/971542991306" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 mb-4 hover:text-green-600">
                                    <Phone size={18} className="mr-2 text-secondary-DEFAULT" />
                                    <span className="font-semibold">+971 54 299 1306</span>
                                </a>
                                <Link
                                    to="/fleet"
                                    className="block w-full text-center bg-primary-DEFAULT text-white px-4 py-3 rounded-lg font-medium shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Your Ride
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
