import { Plus, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export const UploadCover = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdditionalImages([...additionalImages, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex gap-3 mb-1">
      <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden bg-secondary">
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverUpload}
          className="hidden"
          id="cover-upload"
        />
        <label
          htmlFor="cover-upload"
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          {coverImage ? (
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageIcon className="w-8 h-8 text-foreground/80" />
          )}
        </label>
        <div className="absolute top-0 left-0 bg-black/60 text-white text-sm px-2 py-1 rounded">
          Cover
        </div>
      </div>

      <div className="w-[120px] h-[120px] rounded-lg flex items-center justify-center bg-secondary">
        <input
          type="file"
          accept="image/*"
          onChange={handleAdditionalUpload}
          className="hidden"
          id="additional-upload"
        />
        <label
          htmlFor="additional-upload"
          className="w-full h-full flex items-center justify-center cursor-pointer"
        >
          <Plus className="w-8 h-8 text-foreground/80" strokeWidth={2} />
        </label>
      </div>
    </div>
  );
};

// import { Plus, Image as ImageIcon } from "lucide-react";
// import { useState } from "react";

// export const UploadCover = () => {
//   const [coverImage, setCoverImage] = useState<string | null>(null);
//   const [additionalImages, setAdditionalImages] = useState<string[]>([]);

//   const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setCoverImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAdditionalUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setAdditionalImages([...additionalImages, reader.result as string]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex gap-3 mb-4">
//       <div className="relative w-[120px] h-[160px] rounded-lg overflow-hidden bg-muted">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleCoverUpload}
//           className="hidden"
//           id="cover-upload"
//         />
//         <label
//           htmlFor="cover-upload"
//           className="w-full h-full flex items-center justify-center cursor-pointer"
//         >
//           {coverImage ? (
//             <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
//           ) : (
//             <ImageIcon className="w-8 h-8 text-muted-foreground" />
//           )}
//         </label>
//         <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
//           Cover
//         </div>
//       </div>

//       <div className="w-[120px] h-[160px] rounded-lg bg-muted flex items-center justify-center">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleAdditionalUpload}
//           className="hidden"
//           id="additional-upload"
//         />
//         <label
//           htmlFor="additional-upload"
//           className="w-full h-full flex items-center justify-center cursor-pointer"
//         >
//           <Plus className="w-8 h-8 text-foreground" strokeWidth={2} />
//         </label>
//       </div>
//     </div>
//   );
// };
