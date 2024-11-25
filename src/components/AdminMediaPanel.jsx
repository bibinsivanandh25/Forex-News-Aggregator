import { useState } from 'react';
import MediaUploader from './MediaUploader';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AdminMediaPanel = () => {
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const navigate = useNavigate();
  const handleUpload = (file) => {
    const newMedia = {
      url: URL.createObjectURL(file),
      type: file.type,
    };

    setUploadedMedia([...uploadedMedia, newMedia]);
  };

  return (
    <div className="admin-panel py-8 w-full min-h-screen">
      <div
        className="absolute left-0 top-0 ml-6 mt-6 text-2xl cursor-pointer bg-[#3498db] px-3 py-2 text-white rounded-lg"
        onClick={() => navigate('/')}
      >
        <IoMdArrowBack />
      </div>
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Media Manager</h2>
        <MediaUploader onUpload={handleUpload} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {uploadedMedia.map((media, index) => (
            <div key={index} className="relative">
              {media.type.startsWith('image/') ? (
                <img
                  src={media.url}
                  alt={`media-${index}`}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video controls className="w-full h-auto rounded-lg">
                  <source src={media.url} type={media.type} />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMediaPanel;
