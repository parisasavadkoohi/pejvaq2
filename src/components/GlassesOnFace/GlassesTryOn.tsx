import React, { useState } from 'react';
import UploadPhoto from './UploadPhoto';
import GlassesOnFace from './GlassesOnFace';

const GlassesTryOn: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const selectedGlasses = '/path/to/glasses-image.png'; // مسیر تصویر عینک انتخاب شده

    return (
        <div className="glasses-try-on-container">
            <UploadPhoto />
            {image && <GlassesOnFace image={image} glasses={selectedGlasses} />}
        </div>
    );
};

export default GlassesTryOn;
