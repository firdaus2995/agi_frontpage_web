export const dynamic = 'force-static';
interface SearchParams {
  tab?: string;
}

const MediaDanPromosi: React.FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  try {
    const tab = searchParams.tab ?? "FIRST_INDEX"; // NEED LOGIC TO RENDER THE ACTIVE TAB

    return (
      <div className="flex flex-col items-center justify-center gap-6 bg-purple_dark/[.03]">
        INI ADALAH HALAMAN MEDIA DAN PROMOSI
        {
          tab && (
            <div>{tab}</div>
          )
        }
      </div>
    )      
  } catch (error) {
    console.log(error); 
  }
}

export default MediaDanPromosi;
