import React from 'react';

export default function Footer() {
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('fr-FR')
    const formattedTime = currentDate.toLocaleTimeString('fr-FR')

    return (
        <div className="mt-8">
            <p className="text-sm mb-6">
                Fait le {formattedDate}, {formattedTime} à Nice
            </p>
            <div className="flex justify-between items-center">
                <div className="text-center">
                    <p className="font-bold">Signature du locataire :</p>
                    <div className="mt-4 border-t-2 border-black w-40 mx-auto"></div>
                </div>
                <div className="text-center">
                    <p className="font-bold">Signature du loueur :</p>
                    <div className="mt-4 border-t-2 border-black w-40 mx-auto"></div>
                </div>
            </div>
        </div>
    );
}