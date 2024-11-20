import { PaiementDetailsFormProps } from '@/types'

export default function PaiementDetailsForm({ formData, onChange }: PaiementDetailsFormProps) {
    return (
        <div className="form-section mb-6">
            <h2 className="text-xl font-semibold mb-4">Details paiement</h2>
            <div className="flex space-x-4 mb-4">
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="fromDate">Mode de paiement</label>

                    <select
                        name="PaiementMethod"
                        value={formData.paiementMethod}
                        onChange={onChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Non defini </option>
                        <option value="Card">CB</option>
                        <option value="Cash">Espece</option>
                    </select>
                </div>
                <div className="flex items-center w-1/2">
                    <label className="w-full text-gray-700" htmlFor="ToDate">Etat du paiement: </label>
                    <select
                        name="PaiementMethod"
                        value={formData.paiementMethod}
                        onChange={onChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Unpaid">En attente</option>
                        <option value="Paid">paye</option>

                    </select>
                </div>
            </div>
        </div >
    );
}
