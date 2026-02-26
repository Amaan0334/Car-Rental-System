import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const MainLayout = () => {
    return (
        <HelmetProvider>
            <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
                <Navbar />
                <main className="flex-grow pt-20">
                    <Outlet />
                </main>
                <Footer />

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/971542991306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center"
                    aria-label="Contact on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-message-circle"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </a>
            </div>
        </HelmetProvider>
    );
};

export default MainLayout;
