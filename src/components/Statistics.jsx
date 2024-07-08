import React from 'react';
import { PiWarehouse } from "react-icons/pi";

const stats = [
    {
        icon: <PiWarehouse className="h-12 w-12 mx-auto text-emerald-400" />,
        value: '7+',
        label: 'Warehouse',
    },
    {
        icon: <PiWarehouse className="h-12 w-12 mx-auto text-emerald-400" />,
        value: '15+',
        label: 'Products Trading',
    },
    {
        icon: <PiWarehouse className="h-12 w-12 mx-auto text-emerald-400" />,
        value: '2+',
        label: 'License',
    },
    {
        icon: <PiWarehouse className="h-12 w-12 mx-auto text-emerald-400" />,
        value: '1000+',
        label: 'Delivery',
    },
];

 {
    return (
        <div className="relative bg-cover bg-center text-white py-12 object-cover" style={{ backgroundImage: "url('/images/formula.webp')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better readability */}
            <div className="container mx-auto flex justify-around relative z-10">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        {stat.icon}
                        <div className="text-4xl font-bold mt-2">{stat.value}</div>
                        <div className="text-lg mt-1">{stat.label}</div>
                        <div className="mt-2 w-16 mx-auto border-b-4 border-emerald-400"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
