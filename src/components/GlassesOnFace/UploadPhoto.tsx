import React, { useState } from 'react';

const UploadPhoto: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="upload-photo-container">
            <input type="file" onChange={handleImageUpload} accept="image/*" className="hidden" id="upload-input" />
            <label htmlFor="upload-input" className="cursor-pointer bg-orange-500 text-white p-2 rounded">
                آپلود عکس
            </label>
            {image && <img src={image} alt="Uploaded Face" className="uploaded-image mt-4" />}
        </div>
    );
};

export default UploadPhoto;
