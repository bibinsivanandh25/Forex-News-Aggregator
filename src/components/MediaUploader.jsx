import { useState } from 'react';

const MediaUploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div className="border p-4 border-dashed border-[#0d8b8b] rounded-lg text-center">
      <input
        type="file"
        accept="image/*, video/*"
        id="media-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="media-upload" className="cursor-pointer">
        <p className="text-gray-500">Click or Drag to Upload</p>
        {preview && (
          <div className="mt-4">
            {selectedFile.type.startsWith('image/') ? (
              <img
                src={preview}
                alt="Preview"
                className="lg:max-w-xs max-w-40 h-auto rounded-lg"
              />
            ) : (
              <video
                controls
                className="lg:max-w-xs max-w-40 h-auto rounded-lg"
              >
                <source src={preview} type={selectedFile.type} />
              </video>
            )}
          </div>
        )}
      </label>
    </div>
  );
};

export default MediaUploader;
