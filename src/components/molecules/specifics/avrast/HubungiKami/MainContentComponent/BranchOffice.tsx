import { Card } from './Card';
import { CardAddress } from './CardAddress';
import { SearchInput } from './form/Input';
import { Paginate } from './Paginate';

export const BranchOffice = () => {
  return (
    <Card className="mt-[24px] bg-white mx-[136px] p-[24px]">
      <div className="grid grid-cols-2 gap-6">
        <span className="font-opensans font-bold text-[24px]">
          Kantor Cabang
        </span>
        <SearchInput placeholder="Cari Lokasi Kantor Cabang" />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-[12px] gap-y-[24px] mt-[24px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CardAddress
            key={i.toString()}
            title="RSIA Bunda Jakarta"
            address="Jl. Teuku Cik Ditiro No.28, Menteng, Jakarta Pusat"
            contact="(021) 5789 8188"
          />
        ))}
      </div>
      <Paginate className="mt-[24px]" />
    </Card>
  );
};
