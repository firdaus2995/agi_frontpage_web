import VideoPlayer from '../../Klaim/VideoPlayer';

const VideoInformation = ({ url, type }: { url: string; type: string }) => {
  const item: VideoItem = {
    id: 'sample-vid-1', //https://youtu.be/uF7eT3nhyZ0?si=Cbt5uoPXbYS9__v_
    videoUrl: url,
    videoThumbnail: '',
    type: type,
    color: 'purple_dark'
  };

  return (
    <div className="w-full">
      <div className="w-full m-auto flex flex-col gap-4">
        <div
          className={`transition-all grid rounded-xl visible opacity-100 overflow-hidden`}
        >
          <div className="grid lg:grid-cols-2 rounded-lg border border-solid border-gray_bglightgray">
            <div className="w-full sm:min-h-[40.688rem] xs:h-[17.5rem] lg:col-span-2 rounded-lg border border-solid border-gray_bglightgray shadow-md">
              <VideoPlayer
                url={item.videoUrl}
                thumbnail={item.videoThumbnail}
                type={item.type}
                color={item.color}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInformation;

interface VideoItem {
  id: string;
  videoUrl: string;
  videoThumbnail: string;
  type: string;
  color: string;
}
