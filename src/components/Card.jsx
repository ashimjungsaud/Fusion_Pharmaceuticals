import React from 'react';

const Card = ({ image, title, deliveryTime, features, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <div className="flex items-center space-x-2">
                    <img src={icon} alt={title} className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-500">{deliveryTime}</p>
                <ul className="mt-4 space-y-2 text-gray-600">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <span className="mt-1">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
