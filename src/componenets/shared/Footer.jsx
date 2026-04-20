import React from 'react';
import fb from "../../assests/facebook.png"
import insta from "../../assests/instagram.png"
import X from "../../assests/twitter.png"

const Footer = () => {
    return (
        <footer className="bg-[#1a4a3a] text-white px-10 pt-16 pb-8 text-center">
            <div className="mb-10">
                <h2 className="text-5xl font-bold mb-3">KeenKeeper</h2>
                <p className="text-gray-300 text-sm">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>

            <div className="mb-10">
                <p className="font-semibold mb-3">Social Links</p>
                <div className="flex justify-center gap-3">
                    <div className="w-10 h-10 rounded-ful flex items-center justify-center cursor-pointer overflow-hidden">
                        <img src={fb} alt="Facebook" className="w-6 h-6 object-contain" />
                    </div>

                    <div className="w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer overflow-hidden">
                        <img src={insta} alt="Instagram" className="w-6 h-6 object-contain" />
                    </div>

                    <div className="w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer overflow-hidden">
                        <img src={X} alt="X" className="w-6 h-6 object-contain" />
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 pt-5 flex flex-wrap justify-between items-center gap-3 text-sm text-gray-400">
                <p className="m-0">© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-6">
                    {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                        <p key={item} className="m-0 cursor-pointer hover:text-white transition-colors">{item}</p>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;