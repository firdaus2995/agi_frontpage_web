export const DividerPurple = () => {
  return <div className="h-[8px] bg-purple_dark" />;
};

export const DividerRainbow = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="h-[8px] bg-purple_dark" />
      <div className="h-[8px] bg-green_border" />
      <div className="h-[8px] bg-orange_border" />
      <div className="h-[8px] bg-grey_video_footer" />
    </div>
  );
};
