export default function ContractPreview({ formData }) {
    return (
        <div className="border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-xl font-semibold mb-4">Contract Preview</h2>
            <p className="mb-2"><strong>Nom:</strong> {formData.renterLastName}</p>
            <p className="mb-2"><strong>Prenom:</strong> {formData.renterFirstName}</p>
            <p className="mb-2"><strong>Adresse:</strong> {formData.renterAddress}</p>
            <p className="mb-2"><strong>Vehicle Model:</strong> {formData.vehicleModel}</p>
            <p className="mb-2"><strong>Rental Start Date:</strong> {formData.rentalStartDate}</p>
            <p className="mb-2"><strong>Rental End Date:</strong> {formData.rentalEndDate}</p>
            <p className="mb-2"><strong>Rental Price:</strong> {formData.rentalPrice} €</p>
            <p className="mb-2"><strong>Deposit:</strong> {formData.deposit} €</p>
            <p className="mt-6 font-bold">Signatures:</p>
            <p>____________________ (Renter)</p>
            <p>____________________ (Owner)</p>
        </div>

    );
}

