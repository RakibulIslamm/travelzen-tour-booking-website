import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="p-20 text-white grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-5 sm:gap-8">
            <div>
                <h3 className="text-xl font-semibold">NEED HELP?</h3>
                <p>Call Us: +881234567890</p>
                <p>Email for Us: contact@travelzen.com</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold">COMPANY</h3>
                <p>About Us</p>
                <p>Rewards</p>
                <p>Work with Us</p>
                <p>Meet the Team</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold">SUPPORT</h3>
                <p>Account</p>
                <p>Legal</p>
                <p>Contact</p>
                <p>Affiliate Program</p>
                <p>Privacy Policy</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold">FOLLOW US</h3>
                <div className="flex items-center gap-3 mt-2">
                    <FaFacebook className="text-2xl" />
                    <FaInstagram className="text-2xl" />
                    <FaTwitter className="text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Footer;