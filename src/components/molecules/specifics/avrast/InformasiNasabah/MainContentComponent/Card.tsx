import React from 'react';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardPurple } from '../../HubungiKami/MainContentComponent/Card';

const mockData = [
  {
    id: '1',
    title: 'Kelola Polis',
    desc: 'Perkembangan informasi dan keputusan secara jelas, efektif dan transparansi.',
    icon: 'https://s3-alpha-sig.figma.com/img/5260/ea4a/914dbb2af0d279a74a31a3804a4cf91a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqtdbFUnX4ckY9ZX8zeWE6sy6iyeXAYpM8DH3B2PPwYHyHSsHAMpzY3EWvRlsBPHKpISeqmNbj2YYQ0xSBLYyHxPUQmMo5cKPpJO05YU9d50sh3tInedgfll3lXw6SshJAVameHQd4H4ptiZaCCg9QVM02bsl-GbpHiIDoaILylMIdRvdWqZYeygDm79aW6OuKmJKFxAt05iqliDYExw7Y~1elgRs6se0T5Nsr6EPjrJ~0VMZibnTEo5LMVRUdSw7zePSDVYaZxyBI622Zbfh9vEIR2QjOcRCoqN3aZe2AYYg8ttBiqOOmjVQlRhvGwuShtfY6pqmaMbIXOQeajS~A__',
    btn: 'Lihat Panduan',
    link: 'layanan/kelola-polis'
  },
  {
    id: '2',
    title: 'Penanganan Pengaduan',
    desc: 'Kami menghargai dan mendengarkan saran dan keluhan dari nasabah Kami.',
    icon: 'https://s3-alpha-sig.figma.com/img/d3a2/23f9/e3d93fda903b61ac51e663c5a8f4db71?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HjMZbWMx0tqoNGQ-jEnnhJq-0YYpQ6wLODxqJ7w6dssdoo5gmauXs~Eqvkqc90QpRxsH594am6Bua0jkctEA13Ew9vKRH9vLprA4baxh8~-1uPb-q0S8T4duo~Qs~d3DgnklN1Wa6WYsvs0rVVqJeAPW4VPXM1sbAZCw-7Wt15tV8UKxHx2MaPUFM-OV1Lr3eIPxVmeoRInj~QAF7giyrKKCh9GagJfK7QIxx3~mQ-ULxnzABW0V-t5QRRqe2TuNsc30jHknTfa7zAaaHDz8pTSaOoLlBFpnrK6KEujVGGk-1DOCMymA8uyGJONhDkdCg1LOhhalJeyNpIGr0PRxFA__',
    btn: 'Lihat Prosedur',
    link: ''
  },
  {
    id: '3',
    title: 'Agen Aktif',
    desc: 'Temukan agen asuransi dan dapatkan layanan asuransi sesuai kebutuhan Anda',
    icon: 'https://s3-alpha-sig.figma.com/img/2d19/93f8/cad8af77a2490ca0844f0cfc3936ae82?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d-Ao3hxpG-YwbtK5slxlWAF0OmvlobRA3E0TAcfdFr8VkDUZ~ZIA-CQOueM2GWxIGKbRFXEQ4a~RIMbvRjEKjMHLmMMKnMtnSjHXRoJ0psjoPw0zd4pJZVa79pkg~63f~YpFuXDQd27S66V9LNQEahHKTLPeo38TfmJn4~VC5nLS8Lfw0gvvzBHyo0yCBVINqGV3xc~Vd09YGoDPMu934KIE3kojuOE7YGlkSSSlhlRW9O8w5uKqwNnW~3owCx8ZnBYymxHoWIZh4kFtS1GXwlcEK7JDBKj-EqXeKmaLgo179gRhpUjwrN0y4RQlZ~f3JRUVXnBQAlyn4z~Ph0Ki8w__',
    btn: 'Lihat Agen',
    link: ''
  }
];

export const ContentCard = () => {
  return (
    <div className="mt-[64px] grid grid-cols-3 gap-6">
      {mockData.map((i) => (
        <CardPurple key={i.id}>
          <div className="flex flex-col items-center m-[24px]">
            <img src={i.icon} height={100} width={100} alt="icon" />
            <p className="text-center font-bold text-[32px] font-karla mt-[24px]">
              {i.title}
            </p>
            <p className="font-opensans text-[16px] text-center mt-[12px]">
              {i.desc}
            </p>
            <Link
              href={i.link}
              className="mt-[24px] bg-purple_dark max-w-[260px] w-full text-white rounded-md flex items-center justify-center py-[8px]"
            >
              {i.btn}
            </Link>
          </div>
        </CardPurple>
      ))}
    </div>
  );
};
