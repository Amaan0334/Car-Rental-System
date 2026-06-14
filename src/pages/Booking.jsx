import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calendar, MapPin, User, Mail, Phone as PhoneIcon } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const API_BASE_URL = 'https://car-rental-backend-production-a37b.up.railway.app';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickup_date: '',
        return_date: '',
        pickup: '',
        dropoff: '',
        notes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Fetch vehicle from backend
    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_BASE_URL}/api/cars/${id}`);
                const json = await res.json();
                if (json.success) {
                    setVehicle(json.data);
                } else {
                    navigate('/fleet');
                }
            } catch {
                navigate('/fleet');
            } finally {
                setLoading(false);
            }
        };
        fetchVehicle();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const res = await fetch(`${API_BASE_URL}/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    car_id: vehicle.id,
                    customer_name: formData.name,
                    customer_email: formData.email,
                    customer_phone: formData.phone,
                    pickup_date: formData.pickup_date,
                    return_date: formData.return_date,
                    pickup_location: `${formData.pickup} → ${formData.dropoff}`,
                    notes: formData.notes,
                }),
            });

            const json = await res.json();

            if (json.success) {
                setIsSubmitted(true);
                window.scrollTo(0, 0);
            } else {
                setError(json.message || 'Booking failed. Please try again.');
            }
        } catch  {
            setError('Server error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            Loading...
        </div>
    );

    if (!vehicle) return null;

    if (isSubmitted) {
        return (
            <Section className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center max-w-lg mx-auto p-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"
                    >
                        <CheckCircle size={40} />
                    </motion.div>
                    <h2 className="text-3xl font-bold font-heading mb-4">Booking Request Received!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you, {formData.name}. We have received your request for the{' '}
                        <span className="font-semibold text-primary-DEFAULT">{vehicle.name}</span>.
                        Our team will contact you shortly at {formData.phone} to confirm the details.
                    </p>
                    <Button to="/fleet" variant="primary">
                        Browse More Vehicles
                    </Button>
                </div>
            </Section>
        );
    }

    return (
        <>
            <div className="bg-primary-dark text-white pt-28 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-300 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold font-heading">Complete Your Booking</h1>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Vehicle Summary Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden sticky top-24">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={vehicle.image_url}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-DEFAULT text-xs font-semibold rounded-full">
                                        {vehicle.category}
                                    </span>
                                    <span className="text-lg font-bold text-primary-DEFAULT">
                                        {vehicle.price_per_day ? (
                                            <>${parseFloat(vehicle.price_per_day).toLocaleString()} <span className="text-sm font-normal text-gray-500">/ day</span></>
                                        ) : (
                                            <span>Contact us for price</span>
                                        )}
                                    </span>
                                </div>
                                <div className="space-y-3 pt-4 border-t border-gray-100 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Passengers:</span>
                                        <span className="font-medium text-gray-900">{vehicle.seats}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Transmission:</span>
                                        <span className="font-medium text-gray-900">{vehicle.transmission}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Fuel:</span>
                                        <span className="font-medium text-gray-900">{vehicle.fuel_type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Service:</span>
                                        <span className="font-medium text-gray-900">With Driver</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Personal Details</h3>

                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                            placeholder="+92-300-1234567"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Trip Details</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="date"
                                            name="pickup_date"
                                            required
                                            value={formData.pickup_date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="date"
                                            name="return_date"
                                            required
                                            value={formData.return_date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="pickup"
                                            required
                                            value={formData.pickup}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                            placeholder="Airport, Hotel, or Address"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="dropoff"
                                            required
                                            value={formData.dropoff}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                            placeholder="Destination Address"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes / Special Requests</label>
                                <textarea
                                    name="notes"
                                    rows="3"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT outline-none transition-colors"
                                    placeholder="Flight number, child seat requirement, etc."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full py-4 text-lg shadow-lg"
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Confirm Booking Request'}
                            </Button>
                            <p className="text-center text-sm text-gray-500 mt-4">
                                No payment required now. You will pay upon confirmation.
                            </p>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Booking;