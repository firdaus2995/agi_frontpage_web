interface BannerFooterProps {
  imageUrlSrc?: string;
}

const imageUrl =
  'https://s3-alpha-sig.figma.com/img/699a/49ff/827a82f93d05acc3ba9c12a898fd2e85?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bo1Wtp7zUaSgOZYP15TlI-VVr03wFjwIkxXhiyDVQeOIxW4qBrABoGTBtv5FchUYg6cocZbkgCsrpl~IJNO4RegGHz-UxgGfYk4D1UJl1Gh2dXPpVTK5EKEhwIthYvSRKfcodP~wnSXgC~~9eqY82F~s1hO1yhac2Z6kmYIQWSlXrXIT96CBVcvNIvEUnyUsXqXXG7KkWSh57i2qdsKGNdjMFb7Uez~QCKyYrFr2CDEuNKvjJOuMrQlBRaocF3EMtA5exbgldLbmov2EJmDQQ6cbtAPUm868O82rWaTS0eWnRZEsECpwhaMq4R3x1GW8WkB9uMgLqzd9S2ILm-PN~g__';
export const BannerFooter: React.FC<BannerFooterProps> = (props) => {
  const { imageUrlSrc = imageUrl } = props;
  return (
    <div className="flex flex-col self-stretch items-center justify-center py-32 gap-16 bg-avrast_product_bg">
      <div className="w-full flex items-center justify-center gap-4 px-[136px]">
        <div
          className={`w-full md:h-[35vh] xs:h-[65vh] flex mb-10 md:flex-row xs:flex-col gap-4 rounded-xl bg-white items-center justify-center text-center`}
        >
          <div
            className={`md:w-1/2 xs:w-full p-5 flex h-full flex-col md:items-start xs:items-center justify-center gap-10`}
          >
            <p className="md:text-4xl xs:text-2xl md:text-left xs:text-center">
              <span className="font-bold text-purple_dark">Komitmen</span> Kami,
              proses klaim yang{' '}
              <span className="font-bold text-purple_dark">efisien</span> dan{' '}
              <span className="font-bold text-purple_dark">solusi</span>
            </p>
            <div
              role="button"
              className="p-4 bg-purple_dark rounded-xl text-sm font-semibold text-white flex flex-row gap-2"
            >
              Panduan Klaim
            </div>
          </div>
          <div
            className={`md:w-1/2 xs:w-full h-full md:rounded-r-xl md:rounded-bl-none xs:rounded-b-xl flex flex-col items-end justify-end overflow-hidden relative`}
          >
            <img
              className="bg-purple_dark w-full h-full object-cover absolute md:top-0 xs:bottom-0 object-bottom"
              src={imageUrlSrc}
              alt="banner-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
