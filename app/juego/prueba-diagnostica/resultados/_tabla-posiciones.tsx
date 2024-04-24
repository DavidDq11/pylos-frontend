'use client'

import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function TablaPosiciones() {
    const { data: resultadosPruebaDiagnostica } = useSWR<[]>(`${process.env.NEXT_PUBLIC_NESTJS_API_URL}/respuesta-prueba-diagnostica/obtener/tabla-de-posiciones`, fetcher)
    

    return (
        <Table className="bg-white max-w-screen-xl mx-auto rounded shadow-lg text-black my-10 table-fixed">
            <TableCaption className="text-white">Tabla de posiciones.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px] text-center">Posición</TableHead>
                    <TableHead>Estudiante</TableHead>
                    <TableHead>Puntaje</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {resultadosPruebaDiagnostica?.map((resultado: any, index: number) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell className="font-medium">
                            <div className="flex items-center">
                                <Avatar className="size-10 mr-4">
                                    <AvatarImage src={`${process.env.NEXT_PUBLIC_NESTJS_ASSETS}/${resultado.mascotaFoto}`} />
                                    <AvatarFallback>MASCOTA</AvatarFallback>
                                </Avatar>
                                {resultado.nombre}
                            </div>
                        </TableCell>
                        <TableCell className="font-medium">
                            <div className={`flex items-center bg-pylos-400 text-white rounded-full p-2 justify-center`}>
                                {resultado.puntaje}

                                <span
                                    className={`bg-[url('/estados.png')] size-10 inline-block bg-no-repeat ${
                                        resultado.puntaje >= 8 ? 'bg-[-77px_-2px]' : resultado.puntaje < 8 && resultado.puntaje >= 6 ? 'bg-[1px_-45px]' : 'bg-[-38px_-45px]'
                                    }  bg-[length:123px] ml-6`}></span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}