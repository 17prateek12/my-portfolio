'use client';
import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <Fab
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        backgroundColor: "#7B90FF", 
                        animation: "jump 1s ease-in-out infinite",
                        "@keyframes jump": {
                            "0%, 20%, 50%, 80%, 100%": {
                                transform: "translateY(0)",
                            },
                            "40%": {
                                transform: "translateY(-8px)",
                            },
                            "60%": {
                                transform: "translateY(-4px)",
                            },
                        },
                    }}
                    onClick={scrollToTop}
                    >
                    <FaArrowCircleUp className="text-3xl text-black"/>
                </Fab>
            )}    
        </>      
    );
}
export default ScrollToTop; 