import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps>= ({ visible } ) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                
                <div className="px-3 text-center text-white hover:underline">
                    Accueil
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Films
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Pour vous
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Tendances
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Favoris
                </div>
                <div className="px-3 text-center text-white hover:underline">
                    Rechercher par langue
                </div>
                
            </div>
        </div>
    )
};


export default MobileMenu;