// src/components/NotFound.js
import React from 'react'; 

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-500">Sorry, the page you are looking for does not exist.</p>
            <img src="your-404-image.png" alt="Page Not Found" className="mt-6 w-64 h-auto" />
        </div>
    );
};

export default NotFound;
