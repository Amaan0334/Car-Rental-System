import { Plane, Building2, Map, Users, Clock, Shield } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: "Airport Transfers",
        description: "Reliable pickup and drop-off services for all major airports in Moscow and Kazakhstan. We track flights to ensure timely service.",
        icon: Plane,
        link: "/services#airport",
    },
    {
        id: 2,
        title: "Corporate Rental",
        description: "Professional transport solutions for business meetings, events, and staff mobility. Flexible long-term contracts available.",
        icon: Building2,
        link: "/services#corporate",
    },
    {
        id: 3,
        title: "City & Intercity Tours",
        description: "Explore the city or travel between cities in comfort. Customized tour packages for individuals and groups.",
        icon: Map,
        link: "/services#tours",
    },
    {
        id: 4,
        title: "Group Transportation",
        description: "Spacious buses and vans for large groups, schools, and delegations. Safe and comfortable travel for everyone.",
        icon: Users,
        link: "/services#group",
    },
    {
        id: 5,
        title: "24/7 Availability",
        description: "Our services are available round the clock. Whether it's an early morning flight or a late-night event, we are here.",
        icon: Clock,
        link: "/services#247",
    },
    {
        id: 6,
        title: "Safety First",
        description: "Our vehicles are regularly maintained and our drivers are professionally trained to ensure the highest safety standards.",
        icon: Shield,
        link: "/services#safety",
    },
];
