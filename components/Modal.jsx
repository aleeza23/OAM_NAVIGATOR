import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, setIsOpen, children, modalWidth = "max-w-2xl", modalHeight }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShow(true), 50);
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            setShow(false);
            document.body.style.overflow = 'auto'; // Enable scroll
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className={`fixed inset-0 z-[995]  bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Modal Body */}
            <div
                className={`fixed  inset-0 z-[999] flex px-4 items-center justify-center transition-transform duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
                <div
                    className={`relative bg-white w-full text-start ${modalWidth} ${modalHeight} overflow-y-auto rounded-2xl md:rounded-l-none md:rounded-r-2xl  shadow-lg p-4 md:p-0`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <div className="flex absolute right-3 top-3 justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-white bg-gray-100 cursor-pointer hover:bg-[#8E44AD] rounded-full p-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Content */}
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
