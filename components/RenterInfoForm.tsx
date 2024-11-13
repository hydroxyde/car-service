export default function RenterInfoForm({ formData, onChange }) {
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Renter Information</h2>
            <input
                type="text"
                name="renterFirstName"
                placeholder="Prenom"
                value={formData.renterFirstName}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="renterLastName"
                placeholder="Nom"
                value={formData.renterLastName}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="renterAddress"
                placeholder="Address"
                value={formData.renterAddress}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="renterCity"
                placeholder="Ville"
                value={formData.renterCity}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="renterNpa"
                placeholder="Nom"
                value={formData.renterLastName}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}