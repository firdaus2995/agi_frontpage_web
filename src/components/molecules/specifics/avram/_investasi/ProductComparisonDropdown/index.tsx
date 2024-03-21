'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Button from '@/components/atoms/Button/Button';
import { MultipleDropdown } from '@/components/atoms/Dropdown';

type ProductComparisonDropdownProps<T> = {
  options: T[];
};

const ProductComparisonDropdown = <T,>({
  options
}: ProductComparisonDropdownProps<T>) => {
  const currentSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const existingProducts = (() => {
    const result = currentSearchParams.getAll('product');
    if (!result || result.length < 1) return [];
    return result;
  })();

  const [values, setValues] = useState<T[]>(existingProducts as T[]);

  const handleChange = (newValues: T[]) => {
    if (newValues.length > 5) {
      return;
    }

    setValues([...newValues]);
  };

  const handleDelete = (targetedValue: T) => {
    setValues((prevState) => [
      ...prevState.filter((item) => item !== targetedValue)
    ]);
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (values.length < 1 || typeof values[0] !== 'string') return;
    for (const item of values) {
      searchParams.append('product', item as string);
    }
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex gap-2 md:flex-row flex-col w-full p-2 bg-purple_dark/10 rounded-xl">
      <MultipleDropdown<T>
        wrapperClassname="grow"
        values={values}
        options={options}
        onChange={handleChange}
        onDelete={handleDelete}
        displayPlaceholder="Klik tombol + untuk menambahkan produk"
      />
      <Button
        title="Bandingkan"
        onClick={handleSearch}
        customButtonClass="bg-white"
      />
    </div>
  );
};

export default ProductComparisonDropdown;
