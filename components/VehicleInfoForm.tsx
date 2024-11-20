

const VEHICLE_DATA = {
    "Audi RS6 grise": { plateNumber: "ABC1234", year: 2021, color: "Gray", scratch: 250, rim: 200, element: 300, sit: 1500, dirty: 100, pound: 250, rsv: 60000 },
    "Audi RS6 noir": { plateNumber: "DEF5678", year: 2021, color: "Black", scratch: 250, rim: 200, element: 300, sit: 1500, dirty: 100, pound: 250, rsv: 60000 },
    "Lamborghini Urus": { plateNumber: "GHI9101", year: 2022, color: "Gray", scratch: 250, rim: 200, element: 300, sit: 1500, dirty: 100, pound: 250, rsv: 60000 },
    "Mercedes G63": { plateNumber: "JKL2345", year: 2022, color: "Black", scratch: 250, rim: 200, element: 300, sit: 1500, dirty: 100, pound: 250, rsv: 60000 },
    "Mini Cooper S": { plateNumber: "MNO6789", year: 2020, color: "Green", scratch: 250, rim: 200, element: 300, sit: 1500, dirty: 100, pound: 250, rsv: 60000 },

};

export default function VehicleInfoForm({ formData, setFormData }) {
    const handleVehicleChange = (event) => {
        const selectedModel = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            vehicleModel: selectedModel,
            vehicleDetails: VEHICLE_DATA[selectedModel] || {},
        }));
    };
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Informations Vehicule</h2>

            {/* Vehicle Model Dropdown */}
            <select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleVehicleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled>Selectioner le model</option>
                {Object.keys(VEHICLE_DATA).map((model) => (
                    <option key={model} value={model}>{model}</option>
                ))}
            </select>

            {/* Additional inputs (e.g., year, color) can go here */}
        </div>
    );
}