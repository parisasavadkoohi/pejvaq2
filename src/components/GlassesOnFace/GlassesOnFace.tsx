import React, { useEffect, useRef } from 'react';
import * as faceapi from '@vladmandic/face-api/dist/face-api.esm.js';




interface Props {
    image: string;
    glasses: string; // Image URL of selected glasses
}

const GlassesOnFace: React.FC<Props> = ({ image, glasses }) => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/images');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/images');
        };

        const detectFace = async () => {
            if (imageRef.current && canvasRef.current) {
                const detections = await faceapi.detectSingleFace(imageRef.current, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks();
                
                if (detections) {
                    const { landmarks } = detections;
                    const leftEye = landmarks.getLeftEye();
                    const rightEye = landmarks.getRightEye();

                    const glassesImage = new Image();
                    glassesImage.src = glasses;

                    const ctx = canvasRef.current.getContext('2d');
                    if (ctx) {
                        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        ctx.drawImage(imageRef.current, 0, 0);

                        // Calculate the position and size of the glasses
                        const eyeWidth = rightEye[0].x - leftEye[0].x;
                        const glassesWidth = eyeWidth * 2; // Adjust as needed
                        const glassesHeight = glassesWidth / 2; // Adjust based on aspect ratio

                        ctx.drawImage(glassesImage, leftEye[0].x - eyeWidth / 2, leftEye[0].y - glassesHeight / 2, glassesWidth, glassesHeight);
                    }
                }
            }
        };

        loadModels().then(detectFace);
    }, [image, glasses]);

    return (
        <div className="relative">
            <img ref={imageRef} src={image} alt="Face" className="hidden" />
            <canvas ref={canvasRef} className="w-full h-auto"></canvas>
        </div>
    );
};

export default GlassesOnFace;
