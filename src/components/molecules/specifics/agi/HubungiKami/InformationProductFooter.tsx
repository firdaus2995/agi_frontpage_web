const love =
  'https://s3-alpha-sig.figma.com/img/1863/8789/188cc071a4af19e98d9944767dd4d007?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Liof28gA2rZdoSxlEYE4W1WVLY0fd6DV4HUIyxcqTVbnG5B6mgDn7GX0kLHjWnIP9LJXypaxxBnZ1VyMZpDvQTX02UeEAVHIcj8Ni~MwXjLaPqmV8m8C-H6TfWNkTKqL9aAZovR3d2JEL2Djqxx6mVs1lj2Nn7V9Pv~A7gp3fRYZLG0sQ8QGPMsq1u-gnr47pnQz37e9HV6gwiLTDwcWW~z33OooF9~KhtVv1eCjXgITe-T4RwJdpA-dtq43eoDiipDMFqPBj-Ce1P5Ihwy8HF7VlvkoyFzw~tOU078eqXhVJ17uOq-cXBCK1lIWuJVaiNBucinrLhHAJaS5Vp2W2g__';
const home =
  'https://s3-alpha-sig.figma.com/img/c9d5/0f5f/aae395678dddfb4a5439c49a90015ca7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nx5u3z7vKZzpH5EO9jP3D1CsMta-P-Gfk6vYjyaAht0i2PmGmaQus6XlDdAMaE-H487hP9ILXhm7O~oEIFO98AG1hwCkWFAt0Mp9pbqg3yl4m0x4t3UJimwtSf3ewaA0OLMUqZczMJ8vokfUSskOby~NgmiwT2I3ExF-zPUCC9t6ydTiV9uEzCfR~u3A2qi8c7U-K6Bcp2f-poHdXpWtuZbNHV7h0DEDlpX46SMpBE9tDCtL9AwhZCdBN6b47b9vOPlQqmB-J7JqSniiWPCLzvUl6xmqQEJq3M~r~Dy7JkUqqvt7C3Lak4m2hRUkWhg3QwT4n6B3BIx~N~MAonDNCw__';
const homeYellow =
  'https://s3-alpha-sig.figma.com/img/d3fa/efaa/52d00e2061bc0b33a7ef052a669419ec?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLgrcUHCri1j1LhJE3snhOMtgRmhaDhP1iyEtyNPtSQY7~Dch1SItIpbpAtzyxXVvJBXkPMe5spF3L4JhWKo~TfGamlKIwnctDNvjV~EkU3dRJplhKqroL67cZ7jbcqibDyJxiEU4IDalAuYXvS8jNjUYhJfiMcjHRXolVoRsdHCv2nD4r8ITtY1pEIb-LVTxFFIAMIeuXqksk5eNcAJ8R8cfZilr9wxrD5xJZUf7sM3vN4u~bn76JaOr0mZY6jWF5RV4PVdxPVQFL3-wFrZb8Z-KrZ~9RFRluTX~489Zh0kXSmXFM6OhRKW9gPR3yVFPbb0mZ-N9cWLqr01rwDnJQ__';
const hospital =
  'https://s3-alpha-sig.figma.com/img/bb3b/78e7/94c6025536ddf7763a59b3c7cc70de1e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgGe6sjuyBwY24zZUBo80vvstwqn9gQjvRF~kcjIlg-PRmc4Kk5AL~LftHcbrMh9E5UXqkNNY56bfujLLCtNT1xu7SG9FRkKZz4IafEXPx9UBJ2l1wocZfv-xOo3LDQWZzaP7Gb-ECmjwH~8MVetD-XbVdnub39lVdNc0hfTyQmatpo~lpzLtrcZlu03sJBlHfLjGYheXDshkbUw2lXT1t65Y4LD9ykjcSyHCRyPcXnzttcPVLOGoC60bA~Fp0AL3BGeEb5uREfYXV3EYsG9gYQlRyzaLvQLG-9nJX94ho3Ze8ePELdlyykw7gNUPJYgL8tr2C7wNofCVN7EOEGllw__';

export const InformationProductFooter = () => {
  return (
    <div className="flex flex-col self-stretch items-center justify-center py-24 gap-16 bg-purple_superlight rounded-t-[65px] relative">
      <div className="w-full absolute z-20 top-2 h-20 bg-purple_superlight rounded-t-[65px]"></div>
      <div className="w-full flex flex-row absolute z-10 top-0 h-20 rounded-t-[65px]">
        <div className="w-1/4 h-full bg-purple_light rounded-tl-[65px]"></div>
        <div className="w-1/4 h-full bg-green_border"></div>
        <div className="w-1/4 h-full bg-orange_border"></div>
        <div className="w-1/4 h-full bg-agi_grey rounded-tr-[65px]"></div>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full px-[136px]">
        <div className="bg-white h-[248px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={love} alt="love" height={100} width={100} />
          <p className="mt-[24px]">Asuransi Individu</p>
          <p className="text-purple_dark">Lihat Produk</p>
        </div>
        <div className="bg-white h-[248px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={home} alt="home" height={100} width={100} />
          <p className="mt-[24px]">Asuransi Korporasi</p>
          <p className="text-purple_dark">Lihat Produk</p>
        </div>
        <div className="bg-white h-[248px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={homeYellow} alt="home" height={100} width={100} />
          <p className="mt-[24px]">AVRIST DPLK</p>
          <p className="text-orange_border">Lihat Produk</p>
        </div>
        <div className="bg-white h-[248px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={hospital} alt="hospital" height={100} width={100} />
          <p className="mt-[24px]">Rumah Sakit</p>
          <p>Rekanan</p>
        </div>
      </div>
    </div>
  );
};
