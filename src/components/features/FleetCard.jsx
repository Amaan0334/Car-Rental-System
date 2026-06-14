import React from 'react';
import { Users, Fuel, Settings } from 'lucide-react';
import Button from '../common/Button';
import { motion as Motion } from 'framer-motion';

const FleetCard = ({ vehicle }) => {
    const { 
        name, 
        image_url,      // was: image
        category, 
        seats,          // was: passengers
        transmission, 
        fuel_type,      // was: fuel
        price_per_day,  // was: price
    } = vehicle;

    return (
        <Motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-card hover:shadow-premium overflow-hidden transition-all duration-300 border border-gray-100 group"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                    src={image_url}
                    alt={name}
                      onError={(e) => console.log('Image failed:', e.target.src)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-DEFAULT shadow-sm">
                    {category}
                </div>
                <div className="absolute top-4 left-4 bg-secondary-DEFAULT/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                    With Driver
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{name}</h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Users size={16} className="mr-2 text-primary-light" />
                        <span>{seats} Seats</span>
                    </div>
                    <div className="flex items-center">
                        <Settings size={16} className="mr-2 text-primary-light" />
                        <span>{transmission}</span>
                    </div>
                    <div className="flex items-center">
                        <Fuel size={16} className="mr-2 text-primary-light" />
                        <span>{fuel_type}</span>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-xs text-gray-500 block">Starting from</span>
                        <div className="text-lg font-bold text-primary-DEFAULT">
                            {price_per_day ? (
                                <>
                                    ${parseFloat(price_per_day).toLocaleString()} 
                                    <span className="text-sm font-normal text-gray-500"> / day</span>
                                </>
                            ) : (
                                <span>Contact us for price</span>
                            )}
                        </div>
                    </div>
                    <Button to={`/booking/${vehicle.id}`} variant="primary" className="px-4 py-2 text-sm">
                        Book Now
                    </Button>
                </div>
            </div>
        </Motion.div>
    );
};

export default FleetCard;