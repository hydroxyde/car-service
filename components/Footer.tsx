import Image from "next/image"
import Link from "next/link"
import { footerLinks } from '@/constants'
const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col items-start justify-start gap-6">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118} height={18}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        Riviera Services Agency 2023<br />
                        Tous droits réservés &copy;
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title}
                            className="footer__link">
                            <h3 className="font-bold">
                                {link.title}
                            </h3>
                            {link.links.map((item) => (
                                <Link key={item.title}
                                    href={item.url}
                                    className="text-gray-500">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                <p className="whitespace-normal max-w-[50vw]">
                    @2023 Riviera Services Agency. Tous droits réservés
                </p>
                <div className="footer__copyrights-link">
                    <Link href="/"
                        className="text-gray-500">
                        Politique de confidentialité
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-500">
                        C.G.U
                    </Link>

                </div>
            </div>
        </footer>
    )
}

export default Footer