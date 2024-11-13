export default function VehicleInfoForm({ formData, onChange }) {
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>

            {/* Vehicle Model Dropdown */}
            <select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled>Select a vehicle model</option>
                <option value="Mercedes C63">Mercedes C63</option>
                <option value="Audi RS6">Audi RS6</option>
                <option value="BMW M3">BMW M3</option>
                <option value="Porsche 911">Porsche 911</option>
                {/* Add more vehicle options here */}
            </select>

            {/* Additional inputs (e.g., year, color) can go here */}
        </div>
    );
}