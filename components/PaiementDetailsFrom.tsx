import { PaiementDetailsFormProps } from '@/types';

export default function PaiementDetailsForm({ formData, onChange }: PaiementDetailsFormProps) {
    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        onChange({
            ...event,
            target: {
                ...event.target,
                name,
                value: name === "paiementState" ? value === "true" : value, // Convert to boolean if necessary
            },
        });
    };

    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Details paiement</h2>
            <div className="flex space-x-4 mb-4">
                {/* Payment Method */}
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="paiementMethod">
                        Mode de paiement
                    </label>
                    <select
                        name="paiementMethod"
                        value={formData.paiementMethod}
                        onChange={onChange} // Use the original onChange handler
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">
                            Non defini
                        </option>
                        <option value="CB">CB</option>
                        <option value="Cash">Espece</option>
                    </select>
                </div>

                {/* Payment State */}
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="paiementState">
                        Etat du paiement:
                    </label>
                    <select
                        name="paiementState"
                        value={formData.paiementState?.toString()} // Convert boolean to string for the select element
                        onChange={handleStateChange} // Use custom handler to ensure boolean conversion
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="false">En attente</option>
                        <option value="true">Payé</option>
                    </select>
                </div>
            </div>
        </div>
    );
}