import { Dispatch, SetStateAction } from 'react';

interface IParams {
  yearFilter: string;
  monthFilter: string;
  searchFilter: string;
}

export const yearDropdown = (
  startYear: number,
  params: IParams,
  setParams: Dispatch<SetStateAction<IParams>>
) => {
  const currentYear = new Date().getFullYear();

  const years = [
    {
      label: 'Pilih Tahun',
      value: '',
      onClick: () => setParams({ ...params, yearFilter: '' })
    }
  ];

  for (let year = currentYear; year >= startYear; year--) {
    years.push({
      label: year.toString(),
      value: year.toString(),
      onClick: () => setParams({ ...params, yearFilter: year.toString() })
    });
  }

  return years;
};

export const monthDropdown = (
  params: IParams,
  setParams: Dispatch<SetStateAction<IParams>>
) => {
  const month = [
    {
      label: 'Pilih Bulan',
      value: '',
      onClick: () => setParams({ ...params, monthFilter: '' })
    },
    {
      label: 'Januari',
      value: '01',
      onClick: () => setParams({ ...params, monthFilter: '01' })
    },
    {
      label: 'Februari',
      value: '02',
      onClick: () => setParams({ ...params, monthFilter: '02' })
    },
    {
      label: 'Maret',
      value: '03',
      onClick: () => setParams({ ...params, monthFilter: '03' })
    },
    {
      label: 'April',
      value: '04',
      onClick: () => setParams({ ...params, monthFilter: '04' })
    },
    {
      label: 'Mei',
      value: '05',
      onClick: () => setParams({ ...params, monthFilter: '05' })
    },
    {
      label: 'Juni',
      value: '06',
      onClick: () => setParams({ ...params, monthFilter: '06' })
    },
    {
      label: 'Juli',
      value: '07',
      onClick: () => setParams({ ...params, monthFilter: '07' })
    },
    {
      label: 'Agustus',
      value: '08',
      onClick: () => setParams({ ...params, monthFilter: '08' })
    },
    {
      label: 'September',
      value: '09',
      onClick: () => setParams({ ...params, monthFilter: '09' })
    },
    {
      label: 'Oktober',
      value: '10',
      onClick: () => setParams({ ...params, monthFilter: '10' })
    },
    {
      label: 'November',
      value: '11',
      onClick: () => setParams({ ...params, monthFilter: '11' })
    },
    {
      label: 'Desember',
      value: '12',
      onClick: () => setParams({ ...params, monthFilter: '12' })
    }
  ];

  return month;
};
