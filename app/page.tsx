'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Logo } from './components/Logo'
import { Isotipo } from './components/Isotipo'
import { HOME_ROUTE, EMPEZAR_AVENTURA_ROUTE } from '@/utils/routes'

import { Loading } from '@/components/ui/loading'
import { Button } from '@/components/ui/button'
import { useReloadButton } from '@/hooks/useReloadButton'

export default function Home() {
    const [showReloadButton, mascotas] = useReloadButton(10000) // Show button after 10 seconds

    if (mascotas == undefined) {
        return (
            <div className="absolute bg-pylos-800 w-full h-[100vh] z-[99] text-white flex flex-col gap-y-10 items-center justify-center text-4xl font-medium">
                <Loading />
                {showReloadButton && <Button onClick={() => window.location.reload()}>Recargar la página</Button>}
            </div>
        )
    }

    return (
        <main className="flex min-h-screen flex-col justify-between pb-22 px-0 fondo z-[1]">
            <div className="lg:max-w-5xl w-full mx-auto lg:flex items-center">
                <div className="flex justify-center gap-x-4 relative top-12 lg:top-0">
                    <Isotipo className="w-14 dark:drop-shadow-[255_255_255.3rem_#ffffff70]" />
                    <Logo className="w-52 dark:drop-shadow-[255_255_255.3rem_#ffffff70] text-white" />
                </div>
                <nav
                    id="header-nav"
                    className="flex flex-1 items-center justify-around lg:ml-20 fixed inset-x-0 top-4 lg:top-0 lg:relative text-xs lg:text-lg">
                    <Link
                        className="text-white hover:text-white/90 font-bold"
                        href={HOME_ROUTE}>
                        Inicio
                    </Link>

                    <Link
                        className="text-white hidden hover:text-white/90 font-bold sm:inline-block"
                        href={EMPEZAR_AVENTURA_ROUTE}>
                        Empezar la aventura
                    </Link>

                    <Link
                        className="text-white hover:text-white/90 font-bold"
                        href="#">
                        Soporte
                    </Link>

                    <Link
                        className="text-white hover:text-white/90 font-bold border-2 py-1 px-8 rounded-full border-secondary hover:border-secondary/90"
                        href={EMPEZAR_AVENTURA_ROUTE}>
                        Ingresar
                    </Link>
                </nav>
            </div>

            <div className="lg:max-w-5xl w-full mx-auto text-left mt-20 lg:mt-0">
                <div className="grid lg:grid-cols-3 items-center">
                    <div className="col-span-2 flex flex-col text-center lg:text-left gap-y-10 lg:gap-y-4">
                        <h1 className="text-7xl font-bold text-white">Aprender</h1>
                        <h2 className="text-5xl text-sky-300 font-light">Nunca fue tan divertido</h2>

                        <p className="lg:mr-48 text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="col-span-2 lg:col-auto hidden lg:block">
                        <Isotipo className="w-54 dark:drop-shadow-[255_255_255.3rem_#ffffff70] mx-auto" />
                    </div>
                </div>

                <div className="flex gap-x-4 items-center justify-center lg:justify-start my-10 lg:my-0">
                    <Link
                        href={EMPEZAR_AVENTURA_ROUTE}
                        className="py-4 px-8 font-bold text-white uppercase rounded-full bg-secondary hover:bg-secondary/90">
                        Empezar la aventura
                    </Link>
                </div>
            </div>

            <div className="text-center lg:max-w-5xl w-full mx-auto flex lg:justify-end flex-wrap lg:flex-nowrap justify-center mt-6 mb-10 sm:mt-16 lg:mt-0">
                <div>
                    <Image
                        src="/anfora.webp"
                        alt="Planeta Ánfora"
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                    <h2 className="text-white">ÁNFORA</h2>
                </div>

                <div>
                    <Image
                        src="/planeta2.webp"
                        alt=""
                        width={140}
                        height={40}
                        className="object-contain"
                    />

                    {/* <h2>VISUAL</h2> */}
                </div>

                <div>
                    <Image
                        src="/planeta3.webp"
                        alt=""
                        width={140}
                        height={40}
                        className="object-contain"
                    />

                    {/* <h2>ESCUCHA</h2> */}
                </div>

                <div>
                    <Image
                        src="/planeta4.webp"
                        alt=""
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                    {/* <h2>SOCIOEMOCIONAL</h2> */}
                </div>

                <div>
                    <Image
                        src="/planeta5.webp"
                        alt=""
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                    {/* <h2>SOCIOEMOCIONAL</h2> */}
                </div>
            </div>
        </main>
    )
}
