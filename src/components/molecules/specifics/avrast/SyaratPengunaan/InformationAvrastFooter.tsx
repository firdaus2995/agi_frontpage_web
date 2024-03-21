const contact =
  'https://s3-alpha-sig.figma.com/img/5260/ea4a/914dbb2af0d279a74a31a3804a4cf91a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=js4dfNiEsmu5ixfpJ3rCx6GQylAuVnxxIHJZFDEMw1Xjo5dbdw-fDjPWdFpGjNYUfpqsa76kYXh5bhosrL-md2Zm3PW-2Xj8JMuU5vTyfujHayBqIZkBRhdar14gy4C95hjipr9~j51i2ftjJ9Wt~bEALB5eIVU3zjCz3Q5SZVMMzwm-t8ZuhHpDmWGXS8Z-bonwCczcIX0Y5aviauyqMyRnJFTUxnDicni1hhl7nTPsWb3JqHNvSsTyyyfMECiYfm8OmDTlLgNR1Po40KAxsa2VcUawtnJf~F-Dp1J1zEncxqpWFAvIH9fx1UZNCTyoy~6OkPbhgk~KDKu3P2o81g__';
const ask =
  'https://s3-alpha-sig.figma.com/img/8863/ccea/0bfe3743ae069a852d5d6a4e856ff5d0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Exg1X3Kag72Gnwi675jBehM5Uot2z4OutfzzjyQDpL1VncNcmY11BHTh-1dHFTVmcU-GUMmCVhwajR9sqZ8JSEbMVoIMVEIMnUsNrbEvT9EW2HpPWAumPwhqdyO9Way3IJwa61XdxXXxi5VzINzqu~qeGTiUV8WVJAMamuvBB7v-5yyr2QwIMn4V2APKoFYgtdXGNlKzbkE6259AIuAhQwfcrHLhpwhXPVwwVAB3FdXg1-5xG8YvmJUe0T~a~-yP7MS9UpauUGHMtoqFL3BCT92BQRIfokIB1gp7lQmbwbCkPXAJFQLNgapRQY4T9r2ljuEX4IMwFSGJSAE~hee4Yg__';
const paper =
  'https://s3-alpha-sig.figma.com/img/d3a2/23f9/e3d93fda903b61ac51e663c5a8f4db71?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=esbEQ83J6dVq3TskdumOO-4zF~1xxSwR7eGUsZ25ETLCM~VZB7RXLfnj-nUZ3zXehexeajYxqQJwxhIZMZGtkwjQJ7wgdIXXnLSaMMbaoRDV0G6ojLWK5S7ac96cK34DLcSFseVfMbaspSKtivNCc39B4o-q7japbpXDN5BmrOk7uzh6wmr1KvhoACabbq918bMwGk6NQ~LHtaKNDBatVM~LkWAbUHHp56LWAYwbzv0diSzN4tOYzh9ZjAJ5V-desWNMhFMszHcb6f-UhfG05pBRleYVfzpai0I7kKuJO9iNR9V-L1IsCQtKvEYn4209g1UMeCj-ZIyDAkEJHl7H3g__';
const hospital =
  'https://s3-alpha-sig.figma.com/img/bb3b/78e7/94c6025536ddf7763a59b3c7cc70de1e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgGe6sjuyBwY24zZUBo80vvstwqn9gQjvRF~kcjIlg-PRmc4Kk5AL~LftHcbrMh9E5UXqkNNY56bfujLLCtNT1xu7SG9FRkKZz4IafEXPx9UBJ2l1wocZfv-xOo3LDQWZzaP7Gb-ECmjwH~8MVetD-XbVdnub39lVdNc0hfTyQmatpo~lpzLtrcZlu03sJBlHfLjGYheXDshkbUw2lXT1t65Y4LD9ykjcSyHCRyPcXnzttcPVLOGoC60bA~Fp0AL3BGeEb5uREfYXV3EYsG9gYQlRyzaLvQLG-9nJX94ho3Ze8ePELdlyykw7gNUPJYgL8tr2C7wNofCVN7EOEGllw__';

export const InformationAvrastFooter = () => {
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
        <div className="bg-white p-[24px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={contact} alt="contact" height={100} width={100} />
          <p className="mt-[24px]">Kelola Polis</p>
          <p className="text-purple_dark">Pengkinian Data</p>
        </div>
        <div className="bg-white p-[24px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={hospital} alt="hospital" height={100} width={100} />
          <p className="mt-[24px]">Rumah Sakit</p>
          <p>Rekanan</p>
        </div>
        <div className="bg-white p-[24px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={ask} alt="ask" height={100} width={100} />
          <p className="mt-[24px]">Tanya Avrista</p>
          <p className="text-purple_dark">Lebih Lanjut</p>
        </div>
        <div className="bg-white p-[24px] rounded-3xl border border-gray_light font-opensans font-bold text-[24px] text-center flex flex-col justify-center items-center cursor-pointer">
          <img src={paper} alt="paper" height={100} width={100} />
          <p className="mt-[24px]">Prosedur Pengaduan</p>
          <p className="text-purple_dark">Lihat Prosedur</p>
        </div>
      </div>
    </div>
  );
};
