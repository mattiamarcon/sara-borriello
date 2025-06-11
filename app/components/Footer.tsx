import Link from "next/link"
import Image from "next/image"
import { Instagram} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100  pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Sara Personal Training"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600  mb-4">
              Trasforma il tuo corpo e la tua vita con programmi di allenamento personalizzati.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/_sbpersonaltrainer/" className="text-gray-500 hover:text-primary-dark">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-dark">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600  hover:text-primary-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#chi-sono" className="text-gray-600  hover:text-primary-dark">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="#servizi" className="text-gray-600 hover:text-primary-dark">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="#recensioni" className="text-gray-600  hover:text-primary-dark">
                  Recensioni
                </Link>
              </li>
              <li>
                <Link href="#ems" className="text-gray-600  hover:text-primary-dark">
                  EMS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-dark">Contatti</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Via Antonio Durante, 11</p>
              <p>33080, Prata di Pordenone</p>
              <p>Tel: +39 3409539298</p>
              <p>Email: sara.borriello2405@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500  text-sm">
            &copy; {new Date().getFullYear()} Sara Borello Trainer. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
