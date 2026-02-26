import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-gray-100 h-full flex flex-col"
        >
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-DEFAULT group-hover:bg-primary-DEFAULT group-hover:text-white transition-colors duration-300">
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>

            <Link
                to={link || '/services'}
                className="inline-flex items-center text-secondary-DEFAULT font-semibold hover:text-secondary-dark transition-colors"
            >
                Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
