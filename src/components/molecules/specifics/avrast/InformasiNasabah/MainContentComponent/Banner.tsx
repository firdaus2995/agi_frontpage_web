type BannerProps = {
  url: string;
  alt: string;
};
export const Banner = (props: BannerProps) => {
  const { alt, url } = props;
  return (
    <img
      alt={alt}
      src={url}
      className="rounded-t-[80px] h-[640px] object-cover relative bottom-[71px]"
    />
  );
};
