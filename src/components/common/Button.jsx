import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary-DEFAULT hover:bg-primary-dark text-white shadow-lg shadow-primary-DEFAULT/30 focus:ring-primary-DEFAULT",
        secondary: "bg-secondary-DEFAULT hover:bg-secondary-dark text-white shadow-lg shadow-secondary-DEFAULT/30 focus:ring-secondary-DEFAULT",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT focus:ring-white",
        ghost: "bg-transparent text-primary-DEFAULT hover:bg-primary-50 focus:ring-primary-DEFAULT",
    };

    const Component = to ? Link : href ? 'a' : 'button';

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
        >
            <Component
                to={to}
                href={href}
                onClick={onClick}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </Component>
        </motion.div>
    );
};

export default Button;
