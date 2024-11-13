"use client";

import { useState } from 'react';
import RenterInfoForm from '@/components/RenterInfoForm';
import VehicleInfoForm from '@/components/VehicleInfoForm';
import RentalDetailsForm from '@/components/RentalDetailsForm';
import ContractPreview from '@/components/ContractPreview';

export default function ContractPage() {
    const [formData, setFormData] = useState({
        renterName: '',
        renterAddress: '',
        vehicleModel: '', // Initial empty value for the vehicle model
        rentalStartDate: '',
        rentalEndDate: '',
        rentalPrice: '',
        deposit: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Generate Rental Contract</h1>
            <RenterInfoForm formData={formData} onChange={handleChange} />
            <VehicleInfoForm formData={formData} onChange={handleChange} />
            <RentalDetailsForm formData={formData} onChange={handleChange} />
            <ContractPreview formData={formData} />
        </div>
    );

}