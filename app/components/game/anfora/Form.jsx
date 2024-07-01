import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useGameStore } from '@/lib/store'
import React from 'react'

const Form = ({ handleSubmit }) => {
    const selectedAnforaForm = useGameStore((state) => state.selectedAnforaForm)
    const readings = useGameStore((state) => state.readings)

    const readingSelected = readings[selectedAnforaForm - 1]

    return (
        <div className="fixed inset-0 bg-white m-auto p-10 w-[60vw] shadow-lg z-[1000] text-black rounded-xl h-[450px]">
            <h1 className="text-center font-[cursive] mb-6 font-semibold text-lg">{readingSelected.title}</h1>
            <p className="font-[cursive]">{readingSelected.text}</p>
            <Carousel orientation="vertical">
                <CarouselContent className="h-[240px]">
                    {readingSelected.questions.map((question, i) => (
                        <CarouselItem
                            key={i}
                            className="flex flex-col items-center justify-center">
                            <p className="font-[cursive] my-6 font-semibold">{question.text}</p>
                            <div className="flex gap-4">
                                {question.answers.map((answer) => (
                                    <button
                                        key={answer.id}
                                        onClick={handleSubmit}
                                        className="btn b-1 bg-purple-100 leading-5">
                                        {answer.text}
                                    </button>
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-transparent relative top-4 border-0" />
                <CarouselNext className="bg-transparent relative -bottom-4 border-0" />
            </Carousel>
        </div>
    )
}

export default Form
