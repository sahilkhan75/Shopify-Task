import React from "react";

export default function Sizechart({ isOpen, onClose }) {
    if (!isOpen) return null; // if modal is closed, return nothing

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 max-w-3xl w-full shadow-lg relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
                >
                    ✕
                </button>

                {/* Image */}
                <img
                    src="Screenshot 2025-09-25 113912.png"
                    alt="Size Chart"
                    className="w-full h-auto rounded"
                />
            </div>
        </div>
    );
}