import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import FleetCard from '../components/features/FleetCard';
import Section from '../components/common/Section';

const API_BASE_URL = 'https://car-rental-backend-production-a37b.up.railway.app';

const Fleet = () => {
    const [fleet, setFleet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Standard', 'SUV', 'Van', 'Mini Bus', 'Bus'];

    // Fetch cars from backend
    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_BASE_URL}/api/cars`);
                const json = await res.json();
                setFleet(json.data);
            } catch  {
                setError('Failed to load fleet. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    const filteredFleet = filter === 'All'
        ? fleet
        : fleet.filter(vehicle => vehicle.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <>
            {/* Page Header */}
            <div className="bg-primary-dark text-white pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Premium Fleet</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our wide selection of vehicles tailored for every need, from executive sedans to large coaches.
                    </p>
                </div>
            </div>

            <Section>
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                filter === category
                                    ? 'bg-primary-DEFAULT text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-20 text-gray-500">
                        Loading fleet...
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-20 text-red-500">
                        {error}
                    </div>
                )}

                {/* Vehicle Grid */}
                {!loading && !error && (
                    <Motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={filter}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredFleet.length > 0 ? (
                            filteredFleet.map((vehicle) => (
                                <Motion.div
                                    key={vehicle.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <FleetCard vehicle={vehicle} />
                                </Motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                No vehicles found in this category.
                            </div>
                        )}
                    </Motion.div>
                )}
            </Section>
        </>
    );
};

export default Fleet;