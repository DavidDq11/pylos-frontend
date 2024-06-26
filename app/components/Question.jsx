import { useGameStore } from '@/lib/store'
import { Sphere, Text } from '@react-three/drei'
import { BallCollider, CuboidCollider, CylinderCollider, RigidBody } from '@react-three/rapier'
import StoneButton from './StoneButton'
import Column from './Column'

import React, { useState } from 'react'

export default function Question() {
    const currentQuestionIndex = useGameStore((state) => state.currentQuestionIndex)
    const setCurrentQuestionIndex = useGameStore((state) => state.setCurrentQuestionIndex)
    const setCurrentReadingIndex = useGameStore((state) => state.setCurrentReadingIndex)
    const setReadingTextVisible = useGameStore((state) => state.setReadingTextVisible)
    const currentReadingIndex = useGameStore((state) => state.currentReadingIndex)
    const reading = useGameStore((state) => state.readings[currentReadingIndex])
    const readingTextVisible = useGameStore((state) => state.readingTextVisible)
    const setCameraText = useGameStore((state) => state.setCameraText)
    const cameraText = useGameStore((state) => state.cameraText)

    const handleAnswer = useGameStore((state) => state.handleAnswer)

    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const handleAnswerCollision = (answer) => {
        if (selectedAnswer === answer) {
            setSelectedAnswer(null)
        } else {
            setSelectedAnswer(answer)
            handleAnswer(answer)
        }
    }

    const question = reading.questions[currentQuestionIndex]

    if (!question || !readingTextVisible) return null

    return (
        <group position={[0, 0.4, 12]}>
            {/* <group position={[0, -0.2, 0]}> */}
            <RigidBody
                type="fixed"
                colliders={false}
                position={[0, -0.58, 3]}
                enabledRotations={[false, false, false]}
                onCollisionEnter={() => {
                    setCameraText(false)
                }}>
                <CuboidCollider args={[6, 0.4, 6]} />
            </RigidBody>

            <RigidBody
                type="fixed"
                colliders={false}
                position={[0, -0.6, 18]}
                enabledRotations={[false, false, false]}
                onCollisionEnter={() => {
                    setCameraText(true)
                }}>
                <CuboidCollider args={[10, 0.4, 8]} />
            </RigidBody>
            {/* </group> */}

            <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                textAlign="center"
                position-z={-4}
                font={'/fonts/Enwallowify-Regular.ttf'}
                rotation={[-Math.PI / 2, 0, 0]}
                maxWidth={22}
                fontSize={0.6}>
                {question.text}
            </Text>

            {question.answers.map((answer, index) => (
                <React.Fragment key={answer.id}>
                    <RigidBody
                        type="fixed"
                        colliders={false}
                        enabledRotations={[false, false, false]}
                        position={[-4, 0.2, index * 2.5]}
                        onCollisionEnter={() => {
                            handleAnswerCollision(answer)
                            handleAnswer(answer)
                        }}>
                        <BallCollider args={[0.3, 0]} />
                        <group>
                            <StoneButton selected={selectedAnswer === answer} />
                        </group>
                    </RigidBody>

                    <Text
                        color="black"
                        textAlign="left"
                        position={[0, 0.4, index * 2.5]}
                        font={'/fonts/Enwallowify-Regular.ttf'}
                        rotation={[-Math.PI / 2, 0, 0]}
                        maxWidth={5}
                        fontSize={0.4}>
                        {answer.text}
                    </Text>
                </React.Fragment>
            ))}

            {/* Enviar respuesta */}
            <RigidBody
                type="fixed"
                colliders={false}
                enabledRotations={[false, false, false]}
                position={[0, 0, -4]}
                onCollisionEnter={() => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                    if (reading.questions.length == currentQuestionIndex + 1) {
                        setReadingTextVisible(false)
                        setCurrentReadingIndex(currentReadingIndex + 1)
                    }
                    // handleAnswer(answer)
                }}>
                <CylinderCollider args={[0.4, 0.4]} />
                <group>
                    <Column />
                </group>
            </RigidBody>
        </group>
    )
}
