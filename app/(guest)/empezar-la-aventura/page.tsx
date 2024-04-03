import Link from 'next/link'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/utils/routes'

export default function EmpezarAventuraPage() {
    return (
        <>
            <h1 className="text-6xl xl:text-6xl 2xl:text-8xl text-center font-bold uppercase text-white">Empezar la aventura</h1>

            <div className="flex flex-col gap-y-4 items-center justify-center lg:justify-start">
                <Link
                    href={REGISTER_ROUTE}
                    className="py-4 px-16 font-bold uppercase rounded-full bg-primary hover:bg-primary/90 text-white">
                    Registro
                </Link>

                <Link
                    href={LOGIN_ROUTE}
                    className="py-4 px-16 font-bold uppercase rounded-full bg-secondary hover:bg-secondary/90 text-white">
                    Ingreso
                </Link>
            </div>
        </>
    )
}
