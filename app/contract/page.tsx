"use client";

import { useState } from 'react';
import RenterInfoForm from '@/components/RenterInfoForm';
import VehicleInfoForm from '@/components/VehicleInfoForm';
import RentalDetailsForm from '@/components/RentalDetailsForm';
import ContractPreview from '@/components/ContractPreview';
import PaiementDetailsForm from '@/components/PaiementDetailsFrom';

export default function ContractPage() {
    const [formData, setFormData] = useState({
        renterName: '',
        renterAddress: '',
        vehicleModel: '',
        vehicleDetails: {},
        rentalStartDate: '',
        rentalEndDate: '',
        rentalPrice: '',
        deposit: ''
    });
    // To Do: add states of all fields

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Contrat de location</h1>
            <RenterInfoForm formData={formData} onChange={handleChange} />
            <VehicleInfoForm formData={formData} setFormData={setFormData} />
            <RentalDetailsForm formData={formData} onChange={handleChange} />
            <PaiementDetailsForm formData={formData} onChange={handleChange} />
            <ContractPreview formData={formData} />
        </div>
    );

}