import React from 'react';

import Image from 'next/image';
import Icon1 from '@/assets/images/avrast/component/informasi-klaim/bantuan.svg';
import Icon2 from '@/assets/images/avrast/component/proses-klaim/step-4-icon-4.svg';
import BlankImage from '@/assets/images/blank-image.svg';
import Icon3 from '@/assets/images/common/email.svg';
import Phone from '@/assets/images/common/phone.svg';
import Icon4 from '@/assets/images/common/procedure.svg';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icon';
import RoundedFrameBottom from '@/components/atoms/RoundedFrameBottom';
import RoundedFrameTop from '@/components/atoms/RoundedFrameTop';
import FooterCards from '@/components/molecules/specifics/avrast/FooterCards';
import FooterInformation from '@/components/molecules/specifics/avrast/FooterInformation';
import Hero from '@/components/molecules/specifics/avrast/Hero';

export const generateStaticParams = () => {
  return [{ detail: 'detail' }];
};

const DetailKarir = ({ params }: { params: { detail: string } }) => {
  console.log(params);
  return (
    <>
      <Hero
        title="Karir Bersama Avrist"
        breadcrumbsData={[
          { title: 'Beranda', href: '/avrast' },
          {
            title: 'Karir Bersama Avrist',
            href: '/avrast/tentang-avrist-life/tentang-avrist-life?tab=Karir'
          }
        ]}
      />

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-5 w-2/3 p-10">
          <div className="flex flex-col gap-5">
            <p className="font-semibold text-[48px]">Marketing Manager</p>
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
            <Button
              title="Apply For This Job"
              customButtonClass="rounded-xl bg-purple_dark"
              customTextClass="text-white"
            />
          </div>
          <div className="w-full flex flex-row justify-between items-center p-4 border rounded-xl">
            <div className="flex flex-row gap-2 items-center">
              <p className="font-bold text-purple_dark">
                Belum tertarik dengan lowongan ini?
              </p>
            </div>
            <Button
              title="List Lowongan"
              customButtonClass="rounded-xl bg-purple_dark"
              customTextClass="text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <RoundedFrameBottom />
        <FooterInformation
          bgColor="bg-gray_bglightgray"
          title={
            <div className="flex flex-col items-center justify-center gap-4 bg-gray_bglightgray">
              <p className="text-[56px] font-bold">Hubungi Kami</p>
              <div
                role="button"
                className="p-4 border border-purple_dark rounded-xl w-full flex flex-row items-center justify-center gap-2 text-purple_dark text-2xl font-bold bg-white"
              >
                <Image src={Phone} alt="phone" className="w-10" />
                <p>021 5789 8188</p>
              </div>
              <p>
                <span className="font-bold">Waktu Operasional:</span> Senin -
                Jumat, 08.00 - 17.00 WIB
              </p>
            </div>
          }
          image={BlankImage}
        />
        <RoundedFrameTop />
      </div>
      <div className="w-full h-full bg-purple_superlight pb-20">
        <FooterCards
          cards={[
            {
              title: 'Hubungi Kami',
              icon: Icon1,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Tanya Avrista',
              icon: Icon2,
              subtitle: 'Lebih Lanjut'
            },
            {
              title: 'Tanya Lewat Email',
              icon: Icon3,
              subtitle: 'Kirim Email'
            },
            {
              title: 'Prosedur Pengaduan',
              icon: Icon4,
              subtitle: 'Lihat Prosedur'
            }
          ]}
        />
      </div>
    </>
  );
};

export default DetailKarir;
