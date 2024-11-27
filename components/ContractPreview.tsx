import { ContractPreviewProps } from '@/types'
import Footer from '@/components/ContractFooter'

export default function ContractPreview({ formData }: ContractPreviewProps) {
    const {
        renterName,
        renterFirstName,
        renterPhone,
        renterAddress,
        renterCity,
        renterPostalCode,
        renterEmail,
        rentalStartDate,
        rentalEndDate,
        rentalPrice,
        deposit,
        kmAllowed,
        kmAtStart,
        kmExceed,
        vehicleModel,
        vehicleDetails,
        paiementMethod,
        paiementState,
        gasAtStart
    } = formData;

    const departureDate = rentalStartDate ? new Date(rentalStartDate) : new Date();
    const returnDate = rentalEndDate ? new Date(rentalEndDate) : new Date(departureDate);
    return (
        <div className="p-8 bg-white border rounded-lg shadow-md max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">RS AGENCY</h1>
                <h2 className="text-xl font-bold mt-2">Contrat de location</h2>
                <p className="mt-2">N° de contrat : 1730831409978580</p>
                <p>N° de siret : 88362732500011</p>
            </div>

            {/* Introduction Text */}
            <p className="mb-6 text-justify">
                Le présent contrat est établi au moment de la prise en charge du véhicule. Ce dernier fait foi entre les deux parties.
                Le loueur met à disposition le véhicule mentionné ci-dessus au locataire préalablement identifié. Ce contrat est fait en
                deux exemplaires remis à chacune des parties. Le loueur : Hammami Yassine demeurant 2 bis rue boyer à Nice.
            </p>

            {/* Renter Identification and General Information Tables */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left Table - Renter Info */}
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                className="bg-gray-200 border border-gray-300 text-left px-4 py-2 font-semibold"
                            >
                                Identification du locataire
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Nom :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{renterName || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Prénom :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{renterFirstName || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Téléphone :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{renterPhone || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Adresse :</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-normal break-words">{renterAddress || 'N/A'}</td>
                            {/* <td className="border border-gray-300 px-4 py-2 truncate"></td> */}
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Ville :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{renterCity || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Code postal :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{renterPostalCode || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Email :</td>
                            <td className="border border-gray-300 px-4 py-2 whitespace-normal break-words">{renterEmail || 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Right Table - Rental Details */}
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                className="bg-gray-200 border border-gray-300 text-left px-4 py-2 font-semibold"
                            >
                                Informations générales
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Départ :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">
                                {rentalStartDate ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short' }).format(new Date(rentalStartDate)) : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Retour :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">
                                {rentalEndDate ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short' }).format(new Date(rentalEndDate)) : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Caution :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{deposit ? `${deposit} euros` : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Jours de location :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">
                                {rentalStartDate && rentalEndDate
                                    ? `${calculateRentalDays(rentalStartDate, rentalEndDate)} jours`
                                    : 'N/A'}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Kilomètres autorisés :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{kmAllowed ? `${kmAllowed} km` : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Tarif :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{rentalPrice ? `${rentalPrice} euros` : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Kilomètre au départ :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{kmAtStart ? `${kmAtStart} Km` : 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 py-4 gap-4 md:grid-cols-2">
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                className="bg-gray-200 border border-gray-300 text-left px-4 py-2 font-semibold"
                            >
                                Informations du véhicule
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Marque :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleModel.split(" ")[0] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Model :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleModel.split(" ")[1] || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Immatriculation:</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.plateNumber || 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Carburant au depart :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{gasAtStart ? `${gasAtStart} %` : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Km supplémentaire :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{kmExceed ? `${kmExceed} €` : '1€'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Mode du Paiement :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{paiementMethod || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Etat du Paiement :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{paiementState ? 'Payé' : 'En attente' || 'N/A'}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <Footer />
            {/* Page Break */}
            <div className="page-break"></div>

            <div>
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th
                                colSpan={2}
                                className="bg-gray-200 border border-gray-300 px-4 py-2 font-semibold text-center"
                            >
                                Frais déductibles sur la caution
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Rayure :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.scratch + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Jantes rayées :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.rim + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Élément touché :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.element + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Siège abimé:</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.sit + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Retour véhicule sale :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.dirty + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Mise en fourrière :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.pound + ' euros' || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Dégat RSV :</td>
                            <td className="border border-gray-300 px-4 py-2 truncate">{vehicleDetails?.rsv + ' euros' || 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-sm leading-relaxed">
                    <p>
                        Au moment de la prise du véhicule par le client, le taux de remplissage du carburant
                        est de 100%. Par conséquent, le client s'engage à rendre le véhicule avec un taux de
                        remplissage au moins équivalent. Par ailleurs, le prix du km supplémentaire est de 1
                        euros.
                    </p>
                    <p>
                        La caution est basée sur la somme de {deposit} euros. Si les frais dépassent
                        cette somme, le client s'engage à régler la totalité des réparations du véhicule.
                    </p>
                    <p>
                        Les frais déductibles sur la caution sont à titres indicatifs et peuvent varier en
                        fonction de la gravité des dégâts constatés à la fin de la période de location,
                        conformément à une évaluation objective effectuée par le propriétaire ou son
                        représentant désigné.
                    </p>
                    <p>
                        Le montant de la franchise applicable en cas de dommages est défini par l'assurance
                        du véhicule de location. En cas de vol, accident responsable ou non, la franchise
                        reste acquise au loueur. Le client déclare louer sous son entière responsabilité le
                        véhicule et n'est pas autorisé à le prêter. Le véhicule est assuré tout risques. Le
                        client utilisera le véhicule loué avec soins, réglera tous frais, amendes et
                        dépenses pour toutes infractions à la circulation, ou stationnement, etc. Le client
                        n'est pas autorisé à effectuer de réparations sur le véhicule à l'exception des
                        frais consécutifs à : crevaisons, pannes d'électricité.
                    </p>
                    <p>
                        Heure de départ: {departureDate.toLocaleString('fr-FR')}. Le locataire s'engage à
                        rendre le véhicule au plus tard le {returnDate.toLocaleString('fr-FR')}. Tout retard
                        entraînera des frais supplémentaires.
                    </p>
                </div>
                <Footer />
            </div>
        </div>

    );
}

function calculateRentalDays(startDate: string | number | Date, endDate: string | number | Date) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end.getTime() - start.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
}