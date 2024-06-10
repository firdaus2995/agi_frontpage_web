import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '../component/modal/modal';
import Icon1 from '@/assets/images/agi/component/informasi-klaim/bantuan.svg';
import Icon2 from '@/assets/images/agi/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon3 from '@/assets/images/common/email.svg';
import Icon4 from '@/assets/images/common/procedure.svg';
import WHATSAPP from '@/assets/images/wa.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';

export const generateStaticParams = () => {
  return [{ detail: 'detail', show: true }];
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const DetailKarir = ({ searchParams }: SearchParamProps) => {
  console.log(searchParams);
  const show = searchParams?.show;
  return (
    <>
      <Hero
        title="Karir"
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: 'Karir',
            href: '/hubungi-kami?tab=Karir'
          }
        ]}
      />

      <div className="flex items-center justify-center w-full px-[2rem] md:px-[8.5rem] xs:pt-[2.5rem] md:pt-[5rem] xs:pb-[3.125rem] md:[6.25rem]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-semibold xs:text-[2.5rem] md:text-[5rem]">
              Marketing Manager
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4 text-nowrap text-md">
                <div className="flex w-full flex-row items-center gap-2">
                  <Icon
                    name="mapsPin"
                    color="purple_verylight"
                    width={24}
                    isSquare
                  />
                  <p>Jakarta, Indonesia</p>
                </div>
                <div className="flex w-full flex-row items-center gap-2">
                  <Icon
                    name="briefcase"
                    color="purple_verylight"
                    width={24}
                    isSquare
                  />
                  <p>Full time</p>
                </div>
                <div className="flex w-full flex-row items-center gap-2">
                  <Icon
                    name="clock"
                    color="purple_verylight"
                    width={24}
                    isSquare
                  />
                  <p>6 hari lalu</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div className="flex items-center" role="button">
                  <Icon
                    width={16}
                    height={16}
                    name="share"
                    color="purple_verylight"
                  />
                </div>

                <div className="text-xs font-bold">Share</div>
              </div>
            </div>
          </div>
          <p className="text-[32px] font-bold text-purple_dark pt-5 w-full">
            Deskripsi Pekerjaan
          </p>
          <p>
            We are currently seeking an experienced and dedicated IT Project
            Manager to join our team. As an IT Project Manager, you will be
            responsible for the planning, management, and execution of IT
            projects to ensure successful achievement of business and technical
            goals. You will collaborate with various functional teams and
            possess strong leadership skills to ensure project smoothness.
          </p>
          <p className="text-[32px] font-bold text-purple_dark pt-5 w-full">
            Responsibilities
          </p>
          <div>
            <ul className="list-inside list-disc">
              <li>
                Develop a comprehensive project plan, including goals, schedule,
                budget, resources, and risks.
              </li>
              <li>
                Assess project needs and resources, identifying critical success
                factors.
              </li>
              <li>
                Manage the project team to ensure timely and quality
                deliverables.
              </li>
              <li>
                Coordinate with internal and external stakeholders to ensure
                project implementation flows seamlessly.
              </li>
              <li>
                Compile regular project progress reports for relevant
                stakeholders.
              </li>
              <li>
                Identify and evaluate project risks, developing mitigation
                strategies.
              </li>
              <li>
                Responsible for change management and project scope changes.
              </li>
              <li>
                Foster and develop team members to enhance skills and work
                efficiency.
              </li>
              <li>
                Provide guidance and motivation to ensure optimal team
                performance.
              </li>
              <li>
                Communicate effectively with stakeholders, including the project
                team, senior management, and other relevant parties.
              </li>
              <li>
                Address project questions, issues, or roadblocks promptly and
                efficiently.
              </li>
            </ul>
          </div>
          <p className="text-[32px] font-bold text-purple_dark pt-5 w-full">
            Kualifikasi
          </p>
          <div>
            <ul className="list-inside list-disc">
              <li>
                Minimum of a Bachelor`s degree in Information Technology,
                Project Management, or a related field.
              </li>
              <li>
                Minimum of 5 years of experience as an IT Project Manager or in
                a related role.
              </li>
              <li>
                In-depth understanding of project life cycles and best project
                management practices.
              </li>
              <li>
                Strong leadership skills, excellent communication abilities, and
                adaptability in a dynamic environment.
              </li>
              <li>
                PMP (Project Management Professional) certification is
                considered an advantage.
              </li>
              <li>Strong analytical and problem-solving skills.</li>
            </ul>
          </div>
          <div className="py-10">
            <Link href="/hubungi-kami/tabs/karir/detail?show=true">
              <Button
                title="Apply For This Job"
                customButtonClass="rounded-xl white"
                customTextClass="text-purple_dark"
              />
            </Link>
          </div>
        </div>
      </div>

      <FooterInformation
        bgColor="bg-gray_bglightgray"
        title={
          <div className="flex flex-col xs:items-center md:items-start xs:justify-center md:justify-start gap-4">
            <p className="xs:text-[2.25rem] md:text-[3.5rem] font-karla md:w-[80%]">
              <span className="font-light">Kami ada untuk membantu Anda.</span>
              <br />
              <span className="font-bold text-purple_dark">Hubungi Kami</span>
            </p>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <Link
                href="tel:02157898188"
                role="button"
                className="py-4 px-[3.25rem] border border-purple_dark rounded-xl flex flex-row items-center justify-center gap-2 text-purple_dark xs:text-[1.25rem] md:text-[2.25rem] font-bold bg-white font-karla"
              >
                <Image src={WHATSAPP} alt="phone" className="w-10" />
                <p>021 5789 8188</p>
              </Link>
              <p className="text-sm font-opensans">
                <span className="font-bold">Waktu Operasional:</span> Senin -
                Jumat, 08.00 - 17.00 WIB
              </p>
            </div>
          </div>
        }
        image={BlankImage}
      />
      <div className="w-full h-full bg-purple_superlight">
        <FooterCards
          bgColor="bg-purple_superlight"
          cards={[
            {
              title: 'Layanan Nasabah',
              subtitle: '021 5789 8188',
              icon: Icon1
            },
            {
              title: 'Tanya Avrista',
              subtitle: 'Lebih Lanjut',
              icon: Icon2
            },
            {
              title: 'Tanya Lewat Email',
              subtitle: 'Kirim Email',
              icon: Icon3
            },
            {
              title: 'Prosedur Pengaduan',
              subtitle: 'Lihat Prosedur',
              icon: Icon4
            }
          ]}
        />
      </div>
      {show && <Modal />}
    </>
  );
};

export default DetailKarir;
