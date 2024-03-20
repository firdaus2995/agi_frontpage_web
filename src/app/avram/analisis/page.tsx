export const dynamic = 'force-static';
interface SearchParams {
  tab?: string;
  detail?: string;
}

const Analisis: React.FC<{ searchParams: SearchParams }> = ({ searchParams }) => {
  try {
    const tab = (searchParams.tab && !searchParams.detail) ? searchParams.tab : (!searchParams.tab && !searchParams.detail) ? 'all' : null;
    const detail = (!searchParams.tab && searchParams.detail) ? searchParams.detail : null;
    
    return (
      <div className="flex flex-col items-center justify-center gap-6 bg-purple_dark/[.03]">
        INI ADALAH HALAMAN ANALISIS
        {
          detail && (
            <div>{detail}</div>
          )
        }
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
export default Analisis;
