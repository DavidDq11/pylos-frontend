import { Button } from '@/app/components/Button'
import Image from 'next/image'

export default function LoginPage() {
    return (
        <>
            <div className="lg:max-w-5xl w-full mx-auto text-left mt-20 lg:mt-0 grow flex flex-col items-center justify-center gap-y-10 relative mb-20">
                <form className="flex flex-col gap-y-6 w-5/12">
                    <input type="text" placeholder="Nombre" className="uppercase py-4 px-8 rounded-full text-center font-semibold text-black" required />
                    <input type="text" placeholder="¿Cuál es tu animal favorito?" className="uppercase py-4 px-8 rounded-full text-center font-semibold text-black" disabled readOnly />
                    <input type="text" placeholder="Respuesta" className="uppercase py-4 px-8 rounded-full text-center font-semibold text-black" required />

                    <Button>Ingresar</Button>
                </form>
            </div>

            <div>
                <Image src="/anfora.webp" alt="Planeta Ánfora" width={240} height={40} className="object-contain absolute md:bottom-40 md:left-[20%] 2xl:bottom-40 2xl:left-[30%] -z-[1]" />
                <Image src="/planeta2.webp" alt="" width={240} height={40} className="object-contain absolute md:top-16 md:right-[25%] 2xl:top-32 2xl:right-[38%] -z-[1]" />
                <Image src="/planeta3.webp" alt="" width={240} height={40} className="object-contain absolute md:bottom-60 md:right-[18%] 2xl:bottom-60 2xl:right-[30%] -z-[1]" />
                <Image src="/planeta4.webp" alt="" width={240} height={40} className="object-contain absolute md:bottom-10 md:left-[41%] 2xl:bottom-10 2xl:left-[45%] -z-[1]" />
                <Image src="/planeta5.webp" alt="" width={240} height={40} className="object-contain absolute md:top-12 md:left-[22%] 2xl:top-40 2xl:left-[30%] -z-[1]" />
            </div>
        </>
    )
}
