export default function RenterInfoForm({ formData, onChange }) {
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Informations client</h2>
            <div className="flex space-x-4 mb-4">
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        name="renterFirstName"
                        placeholder="Prenom(s)"
                        value={formData.renterFirstName}
                        onChange={onChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        name="renterLastName"
                        placeholder="Nom"
                        value={formData.renterLastName}
                        onChange={onChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <input
                type="tel"
                name="renterPhone"
                placeholder="Telephone"
                pattern="[0-9]{10}"
                value={formData.renterPhone}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                name="renterAddress"
                placeholder="Adresse"
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
                type="number"
                name="renterPostalCode"
                placeholder="Code postal"
                value={formData.renterPostalCode}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="renterEmail"
                placeholder="Email"
                value={formData.renterEmail}
                onChange={onChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}