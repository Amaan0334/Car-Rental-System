import React from 'react';
import { ShieldCheck, SteeringWheel } from 'lucide-react';

const Logo = ({ className = "", iconSize = 32, textSize = "text-2xl" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-DEFAULT to-primary-dark rounded-lg shadow-lg text-white">
                <ShieldCheck size={iconSize * 0.7} className="absolute" />
            </div>
            <div className="flex flex-col leading-none">
                <span className={`${textSize} font-bold font-heading text-primary-DEFAULT tracking-tight`}>
                    PREMIUM
                </span>
                <span className="text-[0.65em] font-semibold text-secondary-DEFAULT tracking-widest uppercase ml-0.5">
                    RENTAL
                </span>
            </div>
        </div>
    );
};

export default Logo;
