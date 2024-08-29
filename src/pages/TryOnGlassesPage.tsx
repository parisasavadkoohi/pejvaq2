// TryOnGlassesPage.tsx
import React, { useState, useEffect, useRef } from 'react';
// Import the GlassesOnFace component
import * as faceapi from '@vladmandic/face-api/dist/face-api.esm.js';// Use appropriate face-api library
import GlassesOnFace from '../components/GlassesOnFace/GlassesOnFace';

const TryOnGlassesPage: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedGlasses, setSelectedGlasses] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      setLoading(false);
    };

    loadModels();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      setImage(file);
    }
  };

  const handleGlassesSelection = (glassesUrl: string) => {
    setSelectedGlasses(glassesUrl);
  };

  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">تست عینک روی تصویر صورت</h1>
      <input type="file" onChange={handleImageUpload} />
      <div className="mt-4">
        {image && (
          <>
            <div className="mb-4">
              {/* Provide some options for selecting glasses */}
              <button onClick={() => handleGlassesSelection('/path-to-images4_11zon.png')}>Glasses 1</button>
              <button onClick={() => handleGlassesSelection('/path-to-glasses2.png')}>Glasses 2</button>
              {/* Add more glasses options here */}
            </div>
            {image && selectedGlasses && <GlassesOnFace image={image} glasses={selectedGlasses} />}
          </>
        )}
      </div>
    </div>
  );
};

export default TryOnGlassesPage;
