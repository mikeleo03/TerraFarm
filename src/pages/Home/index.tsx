import React from "react";
import cloudy from '@/assets/images/cloudy.png'
import rainfall from '@/assets/images/rain.png'
import wind from '@/assets/images/wind.png'
import humidity from '@/assets/images/humidity.png'
import logoSquare from '@/assets/logos/logo_colored.svg'

const Home: React.FC = () => {
    return (
        <div className="w-screen h-screen bg-white flex flex-col px-10 py-8 items-center">
            <div className="flex flex-row w-full mb-4 justify-end">
                <img src={logoSquare} className="h-8" />
            </div>
            <p className="w-full mb-6 items-start font-figtree font-bold text-3xl text-black">Hello, Farmer Name!</p>
            <div className="flex flex-row w-full px-5 py-4 mb-6 gap-3 bg-weather-custom-gradient rounded-lg drop-shadow-md items-center">
                <img src={cloudy} className="w-20 drop-shadow-md" />
                <p className="mr-2 font-figtree font-medium text-5xl text-black">25°</p>
                <div className="flex flex-col items-start">
                    <p className="font-figtree font-medium text-sm text-black">05/10/2024</p>
                    <p className="font-figtree font-semibold text-2xl text-black">Bandung</p>
                </div>
            </div>
            <div className="flex flex-row gap-1.5 w-full">
                <div className="flex-1 flex flex-col items-center px-4 pt-4 pb-7 gap-0 bg-rain-custom-gradient rounded-lg drop-shadow-sm items-center">
                    <img src={rainfall} className="h-6 mb-0.5" />
                    <p className="mb-3 font-figtree font-bold text-sm text-gray-100">Rainfall</p>
                    <p className="font-figtree font-medium text-4xl text-white">1.88</p>
                    <p className="font-figtree font-medium text-sm text-white text-center">mm / day</p>
                </div>
                <div className="flex-1 flex flex-col items-center px-4 pt-4 pb-7 gap-0 bg-rain-custom-gradient rounded-lg drop-shadow-sm items-center">
                    <img src={wind} className="h-4 mb-2.5" />
                    <p className="mb-3 font-figtree font-bold text-sm text-gray-100">Wind</p>
                    <p className="font-figtree font-medium text-4xl text-white">1.3</p>
                    <p className="font-figtree font-medium text-sm text-white text-center">m / s</p>
                </div>
                <div className="flex-1 flex flex-col items-center px-4 pt-4 pb-7 gap-0 bg-rain-custom-gradient rounded-lg drop-shadow-sm items-center">
                    <img src={humidity} className="h-6 mb-0.5" />
                    <p className="mb-3 font-figtree font-bold text-sm text-gray-100">Humidity</p>
                    <p className="font-figtree font-medium text-4xl text-white">50.4</p>
                    <p className="font-figtree font-medium text-sm text-white text-center">percent</p>
                </div>
            </div>
        </div>
    );
};

export default Home;