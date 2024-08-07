import React, { useRef } from 'react';

interface IDocumentForm {
  attribute: any;
  filename: any;
  handleUploadChange: any;
}

const DocumentForm: React.FC<IDocumentForm> = ({
  attribute,
  filename,
  handleUploadChange
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getFilename = (name: string) => {
    if (name && name.length > 60) {
      return name.slice(0, 60) + '...';
    }
    return name;
  };

  return (
    <div className="w-full rounded-[0.875rem] text-[0.875rem] flex flex-row items-center justify-between border border-gray_light">
      <p
        className={`px-[1rem] line-clamp-1 truncate ${
          filename.find((item: any) => item.name === attribute.componentId)
            ?.value
            ? ''
            : 'text-dark-grey'
        }`}
      >
        {filename.find((item: any) => item.name === attribute.componentId)
          ?.value
          ? getFilename(
              filename.find((item: any) => item.name === attribute.componentId)
                .value ?? ''
            )
          : JSON.parse(attribute.config)?.placeholder ??
            'Klik Browse untuk mencari'}
      </p>
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        onChange={handleUploadChange}
        className="hidden"
      />
      <button
        className="bg-blue-100 h-full bg-purple_dark hover:bg-purple_light px-[1.25rem] py-[0.813rem] text-white rounded-r-[0.875rem]"
        onClick={handleUploadClick}
      >
        Browse
      </button>
    </div>
  );
};

export default DocumentForm;
