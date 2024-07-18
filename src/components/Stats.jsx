import React from 'react';

const stats = [
    {
        data: "100+",
        title: "Distribution Channel"
    },
    {
        data: "2",
        title: "ISO Standard Warehouse"
    },
    {
        data: "40+",
        title: "Countries"
    },
    {
        data: "30M+",
        title: "Total revenue"
    },
];

const Stats = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Partner with us
                        </h3>
                        <p className="mt-3 max-w-xl">
                            Partner with fusion pharmaceuticals for seamless medical product import, export, marketing, and distribution solutions. We offer expertise in navigating global regulations, ensuring efficient logistics, and maximizing market reach. Join us in delivering superior healthcare solutions worldwide.
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Stats;