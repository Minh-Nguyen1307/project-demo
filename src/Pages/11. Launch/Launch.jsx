import React from 'react';

export default function Launch() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 mx-5 h-[1000px]">
            <div className="w-full max-w-screen-2xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-blue-500 h-20 flex items-center justify-center">
                    <h1 className="text-white text-2xl font-semibold">Launch Your UX Design Journey</h1>
                </div>
                <div className="flex flex-col lg:flex-row p-6 h-[900px]">
                    {/* Left Section */}
                    <div className="lg:w-2/3 space-y-6">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                className="w-full h-[500px] rounded-lg "
                                src="https://www.youtube.com/embed/L_XeFvUAeQg" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="course-overview">
                            <h3 className="text-2xl font-semibold mb-2">Course Overview</h3>
                            <p className="text-gray-700">
                                Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our comprehensive course.
                            </p>
                        </div>
                        <div className="key-learning-objectives">
                            <h4 className="text-xl font-semibold mb-2">Key Learning Objectives</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Gain a clear understanding of what User Experience (UX) Design entails.</li>
                                <li>Explore the fundamental principles of user-centered design.</li>
                                <li>Learn about the elements that contribute to a positive user experience.</li>
                            </ul>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="lg:w-1/3 lg:ml-6 mt-6 lg:mt-0 space-y-6">
                        <div className="course-completion bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4">Course Completion</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>1. What is User Experience (UX) Design? ✔️</li>
                                <li>2. Historical Overview of UX Design ✔️</li>
                                <li>3. Understanding User-Centered Design</li>
                                <li>4. The Role of UX in Digital Products</li>
                                <li>5. Introduction to UX Design Tools and Techniques</li>
                            </ul>
                        </div>
                        <div className="action-buttons flex flex-wrap gap-3">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full lg:w-auto">
                                Details
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full lg:w-auto">
                                Instructor
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full lg:w-auto">
                                Courses
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full lg:w-auto">
                                Reviews
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
