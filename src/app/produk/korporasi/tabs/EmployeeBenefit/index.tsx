import React from 'react';
import HeartSymbol from '@/assets/symbols/heart-symbol.svg';
import CardCategoryA from '@/components/molecules/specifics/avrast/Cards/CategoryA';

function EmployeeBenefit() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
      {[...Array(9)].map((_, index) => (
        <CardCategoryA
          key={index}
          symbol={HeartSymbol}
          title="Employee Benefit"
          summary="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet"
          tags={['Employee Benefit', 'Premi Tetap', 'Premi Berkala']}
          href={`/produk/korporasi/produk-employee-benefit-` + index}
        />
      ))}
    </div>
  );
}

export default EmployeeBenefit;
