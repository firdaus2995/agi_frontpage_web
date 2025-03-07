import React from 'react';
import Image from 'next/image';
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton
} from 'react-share';
import { PopoverBody, UncontrolledPopover } from 'reactstrap';
import Email from '@/assets/images/common/email_color.svg';
import Facebook from '@/assets/images/common/facebook_color.svg';
import Linkedin from '@/assets/images/common/linkedin_color.svg';
import Whatsapp from '@/assets/images/common/wa.svg';
import Icon from '@/components/atoms/Icon';

interface ContentPopoverProps {
  isOpenPopover: boolean;
  setIsOpenPopover?: any;
}

const ContentPopover: React.FC<ContentPopoverProps> = ({
  isOpenPopover,
  setIsOpenPopover
}) => {
  // Ensure window is accessed only in the browser
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const shareWa = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window?.open(shareUrl, '_blank');
  };

  return (
    <UncontrolledPopover
      placement="right"
      target="PopoverFocus"
      trigger="focus"
      isOpen={isOpenPopover}
      toggle={() => setIsOpenPopover(false)}
    >
      <PopoverBody className="absolute right-0 mt-[30px] z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 lg:min-w-[350px]">
        <div
          className="py-1 flex flex-row gap-5 xs:max-lg:flex-wrap"
          role="none"
        >
          <div
            className="flex flex-col gap-1 items-center xs:max-lg:m-auto"
            onClick={shareWa}
          >
            <Image
              role="button"
              className="h-auto w-5"
              src={Whatsapp}
              alt="whatsapp"
            />
            <div className="text-xs font-bold cursor-pointer">Whatsapp</div>
          </div>

          <EmailShareButton
            className="flex flex-col gap-1 items-center xs:max-lg:m-auto"
            url={url}
          >
            <Image
              role="button"
              className="h-auto w-5"
              src={Email}
              alt="email"
            />
            <div className="text-xs font-bold cursor-pointer">Email</div>
          </EmailShareButton>

          <LinkedinShareButton
            className="flex flex-col gap-1 items-center xs:max-lg:m-auto"
            url={url}
          >
            <Image
              role="button"
              className="h-auto w-5"
              src={Linkedin}
              alt="linkedin"
            />
            <div className="text-xs font-bold cursor-pointer">LinkedIn</div>
          </LinkedinShareButton>

          <FacebookShareButton
            className="flex flex-col gap-1 items-center xs:max-lg:m-auto"
            url={url}
          >
            <Image
              role="button"
              className="h-auto w-5"
              src={Facebook}
              alt="facebook"
            />
            <div className="text-xs font-bold cursor-pointer">Facebook</div>
          </FacebookShareButton>

          <div className="flex flex-col gap-1 items-center xs:max-lg:m-auto">
            <div
              role="button"
              className="items-center"
              onClick={() => {
                navigator.clipboard.writeText(url);
              }}
            >
              <Icon
                width={18}
                height={18}
                name="copyUrl"
                color="purple_verylight"
              />
            </div>
            <div className="text-xs font-bold cursor-pointer">Copy URL</div>
          </div>
        </div>
      </PopoverBody>
    </UncontrolledPopover>
  );
};

export default ContentPopover;
