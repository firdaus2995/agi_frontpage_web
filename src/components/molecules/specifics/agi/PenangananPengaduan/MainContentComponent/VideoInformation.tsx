'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainCard from '../../Klaim/PanduanKlaim/components/VideoCards/MainCard';

const MOCK_VIDEO = {
  id: 'sample-vid-1',
  videoUrl: '',
  videoThumbnail:
    'https://s3-alpha-sig.figma.com/img/f04c/749c/ee026aac0f0cc04facaf2f5029f0daa0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKnBo7IrUYcp2ft6qP9SJwfgo9RkSAIFtwb35ups7ivue2NMnUikpSKS1IXCwJ6sRHBrV2veUk7AidcYsmmTycQH~ZcYvX139bULXNnk~XvAAb2r-5fZSkzBFg5pk18NuFOZ~UR6n5~30k27RsX3ITshpKDo~6Y07jae0j-Sj3Z9q06-vgs6E9UV7o5Piv67Yu4qCcLGumdbu5aogVGJaVuBXeYaV1VXCkket0JJuUdtRxh6QmQ66xppumqpHUp2b13XTZSIjTPd1X5nmnvKjtYbkZxMN-UDzHbR8rnhPJuB1WLMHcHt28DJ5ZIJaSsLdUSFWepKHMnTtv1yTFa34A__',
  type: 'Penanganan Pengaduan',
  color: 'purple_dark'
};

export const VideoInformation = () => {
  return (
    <div className="w-full">
      <div className="w-full m-auto flex flex-col gap-4 mt-[64px]">
        <div
          className={`transition-all hidden md:grid rounded-xl visible opacity-100 overflow-hidden`}
        >
          <MainCard item={MOCK_VIDEO} />
        </div>
      </div>
    </div>
  );
};
