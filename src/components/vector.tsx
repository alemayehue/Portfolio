"use client";
import React, { useState, useEffect, useRef } from 'react';

type Vector = { x: number, y: number };

export default function recoilBox() {
    // Set to coordinates of the desired rectangle pos
    const [displayOffset, setDisplayOffset] = useState<Vector>({ x: 0, y: 0 });
    const vectorOffset = useRef<Vector>({ x: 0, y: 0 });
    const magnitude = 0.1;
    const damping = 0.05;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const rectCenterX = window.innerWidth / 2;
            const rectCenterY = window.innerHeight / 2;
            const vectorOffsetX = (rectCenterX - event.clientX) * magnitude;
            const vectorOffsetY = (rectCenterY - event.clientY) * magnitude;
            vectorOffset.current = { x: vectorOffsetX, y: vectorOffsetY };
        };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameID: number;

        const animate = () => {
            setDisplayOffset(prev => {
                const dx = vectorOffset.current.x - prev.x;
                const dy = vectorOffset.current.y - prev.y;

                return {
                    x: prev.x + dx * damping,
                    y: prev.y + dy * damping,
                };
            });
            animationFrameID = requestAnimationFrame(animate);
        };
        animate();

        return () => cancelAnimationFrame(animationFrameID);
    }, [])

    return (
        <div className="fixed flex items-center justify-center">
            <div
                className="w-16 h-16 bg-gray-500"
                style={{
                    transform: `translate(${displayOffset.x}px, ${displayOffset.y}px)`,
                }}
            />
        </div>
    );
}
