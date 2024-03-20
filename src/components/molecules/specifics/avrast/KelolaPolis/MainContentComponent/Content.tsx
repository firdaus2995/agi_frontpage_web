export const Content = () => {
  return (
    <div className="mt-[64px]">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-purple_dark font-karla font-medium text-[56px]">
          Panduan Polis Anda
        </span>
        <span className="font-karla font-normal text-[36px] text-gray_bold">
          {' Bacalah dengan seksama semua '}
          <span className="font-bold text-purple_dark">syarat</span>
          {' dan '}
          <span className="font-bold text-purple_dark">ketentuan</span>
          {' yang tercantum di dalam Polis Anda'}
        </span>
      </div>
    </div>
  );
};
