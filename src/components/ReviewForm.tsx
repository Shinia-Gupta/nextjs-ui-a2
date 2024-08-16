import React from 'react';

function ReviewForm() {
    return (
        <div className="bg-blue-950 p-6 w-full">
            <h2 className="text-white text-center text-lg md:text-2xl font-semibold mb-4">
                Just a Few Steps To Pull Free Website Revamp Review
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <input 
                    type="text" 
                    placeholder="Enter Name here" 
                    className="input-style m-0 px-6 py-4 md:border-r-2 border-b-2 md:border-b-0 border-slate-300 md:w-auto w-full max-w-md" 
                />
                <input 
                    type="email" 
                    placeholder="Enter email here" 
                    className="input-style m-0 px-6 py-4 md:border-r-2 border-b-2 md:border-b-0 border-slate-300 md:w-auto w-full max-w-md" 
                />
                <input 
                    type="text" 
                    placeholder="Enter phone here" 
                    className="input-style m-0 px-6 py-4 md:border-r-2 border-b-2 md:border-b-0 border-slate-300 md:w-auto w-full max-w-md" 
                />
                <input 
                    type="text" 
                    placeholder="Enter website" 
                    className="input-style m-0 px-6 py-4 md:border-r-2 md:border-b-0 border-b-2 border-slate-300 md:w-auto w-full max-w-md" 
                />
                <button 
                    className="bg-gradient-to-r from-pink-600 to-pink-950 text-white px-6 py-4 mt-2 md:mt-0 md:ml-2 uppercase font-bold rounded-lg md:w-auto max-w-md"
                >
                    Analyze
                </button>
            </div>
        </div>
    );
}

export default ReviewForm;
