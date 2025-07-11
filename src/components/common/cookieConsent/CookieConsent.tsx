'use client';

import { CookieContext } from "@/Context/CookieContext";
import React, { useContext } from 'react'
import Link from "next/link";

const CookieConsent = () => {
    let { cookieOptInOption, showContent, setShowContent } = useContext(CookieContext);

    if (showContent) {
        return null;
    }

    return (
        <div>
            <div className='fixed bottom-10 left-0 md:left-10 z-50 w-full'>
                <div className="bg-gradient-to-b from-blue-600 to-purple-700 p-0.5 rounded-xl w-11/12 mx-auto md:mx-0 md:w-1/4 h-full">
                <div className="bg-black p-6 rounded-xl h-full flex items-center text-center justify-center">
                    <div className='flex flex-col gap-2 items-center justify-center h-full'>
                        <h1 className="text-white text-center text-[2rem] font-bold my-2">Cookie Consent</h1>
                        <p className="text-gray-400 text-[1.5rem] w-11/12 md:w-[400px] leading-relaxed">
                            Not everybody likes cookies. Do you? <span className='block text-lg'>See our <Link href="/privacy-policy" className="underline">privacy policy.</Link></span>
                        </p>
                        <div className="flex items-center gap-8 mt-8">
                            <button
                                onClick={() => {
                                    cookieOptInOption(true);
                                    setShowContent && setShowContent(true);
                                }}
                                className="cursor-pointer w-24 h-12 text-black rounded-xl py-2 px-4 bg-white hover:bg-slate-300 transition-all duration-300 ease-in-out">Accept</button>
                            <button
                                onClick={() => {
                                    cookieOptInOption(false);
                                    setShowContent && setShowContent(true);
                                }}
                                className="curson-pointer w-24 h-12 text-white hover:text-red-500 py-2 px-4 transition-all duration-300 ease-in-out">Decline</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CookieConsent