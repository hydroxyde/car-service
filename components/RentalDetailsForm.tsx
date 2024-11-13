export default function RentalDetailsForm({ formData, onChange }) {
    return (
        <div>
            <h2>Rental Details</h2>
            <input
                type="date"
                name="rentalStartDate"
                value={formData.rentalStartDate}
                onChange={onChange}
            />
            <input
                type="date"
                name="rentalEndDate"
                value={formData.rentalEndDate}
                onChange={onChange}
            />
            <input
                type="number"
                name="rentalPrice"
                placeholder="Price"
                value={formData.rentalPrice}
                onChange={onChange}
            />
            <input
                type="number"
                name="deposit"
                placeholder="Deposit"
                value={formData.deposit}
                onChange={onChange}
            />
            {/* Add more fields as needed */}
        </div>
    );
}