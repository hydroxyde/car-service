import React from "react";
import { RentalDetailsFormProps } from "@/types";

export default function RentalDetailsForm({ formData, onChange }: RentalDetailsFormProps) {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === "rentalStartDate") {
            // Update the start date
            onChange(event);

            // Set the minimum end date to one day after the start date
            const startDate = new Date(value);
            startDate.setDate(startDate.getDate() + 1);

            document.querySelector<HTMLInputElement>('[name="rentalEndDate"]')!.min = startDate.toISOString().split("T")[0];
        } else if (name === "rentalEndDate") {
            onChange(event);

        };
    }
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Details location</h2>
            <div className="flex space-x-4 mb-4">
                <div className="flex items-center w-1/2">
                    <label className="w-32 text-gray-700" htmlFor="rentalStartDate">Debut</label>
                    <input
                        type="date"
                        name="rentalStartDate"
                        value={formData.rentalStartDate.split("T")[0]} // Display only the date portion
                        className="w-full p-2 border border-gray-300"
                        onChange={handleDateChange}
                    />
                </div>
                <div className="flex items-center w-1/2">
                    <label className="w-32 text-gray-700" htmlFor="rentalEndDate">Fin</label>
                    <input
                        type="date"
                        name="rentalEndDate"
                        value={formData.rentalEndDate.split("T")[0]} // Display only the date portion
                        className="w-full p-2 border border-gray-300"
                        onChange={handleDateChange}
                        min={new Date(formData.rentalStartDate || new Date()).toISOString().split("T")[0]}
                    />
                </div>
            </div>
            <div className="flex space-x-4 mb-4">
                {/* Rental Price (Tarif) */}
                <div className="flex items-center w-1/2">
                    <label className="w-32 text-gray-700" htmlFor="rentalPrice">Tarif (€)</label>
                    <input
                        type="number"
                        name="rentalPrice"
                        id="rentalPrice"
                        placeholder="Entrer tarif"
                        value={formData.rentalPrice}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Deposit (Caution) */}
                <div className="flex items-center w-1/2">
                    <label className="w-36 text-gray-700" htmlFor="deposit">Caution (€)</label>
                    <input
                        type="number"
                        name="deposit"
                        id="deposit"
                        placeholder="Entrer caution"
                        value={formData.deposit}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            {/* Remaining fields unchanged */}
            <div className="flex space-x-4 mb-4">
                <div className="flex items-center w-1/2">
                    <label className="w-32 text-gray-700" htmlFor="kmAllowed">Km autorisés</label>
                    <input
                        type="number"
                        name="kmAllowed"
                        id="kmAllowed"
                        placeholder="Entrer km alloues"
                        value={formData.kmAllowed}
                        onChange={onChange}
                        className="w-30 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center w-1/2">
                    <label className="w-32 text-gray-700" htmlFor="kmAtStart">Km au depart</label>
                    <input
                        type="number"
                        name="kmAtStart"
                        id="kmAtStart"
                        placeholder="Entrer km du vehicule"
                        value={formData.kmAtStart}
                        onChange={onChange}
                        className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="flex space-x-4 mb-4">
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="kmExceed">Km supplementaires (€)</label>
                    <input
                        type="number"
                        name="kmExceed"
                        id="kmExceed"
                        placeholder="1"
                        value={formData.kmExceed}
                        onChange={onChange}
                        className="w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="gasAtStart">Carburant depart (%)</label>
                    <input
                        type="number"
                        name="gasAtStart"
                        id="gasAtStart"
                        placeholder="Entrer carburant"
                        value={formData.gasAtStart}
                        onChange={onChange}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}