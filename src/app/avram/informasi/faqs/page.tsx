export const dynamic = 'force-static';
interface SearchParams {
  detail?: string;
}

const FAQS: React.FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  try {
    const detail = searchParams.detail ?? null;
  
    return (
      <div className="flex flex-col items-center justify-center gap-6 bg-purple_dark/[.03]">
        {
          detail ? (
            <div>INI ADALAH HALAMAN FAQS</div>
          ) : (
            <div>INI ADALAH HALAMAN DETAIL FAQS</div>
          )
        }
      </div>
    )    
  } catch (error) {
    console.log(error);
  }
}

export default FAQS;
