import Link from 'next/link';
import Icon from '@/components/atoms/Icon';
import Radio from '@/components/atoms/Radio';

export function Modal() {
  return (
    <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-10 border shadow-lg rounded-md bg-white overflow-y-auto h-[80%] px-24">
        <div className="text-left flex flex-col gap-10">
          <div className="flex flex-row justify-between gap-20">
            <h3 className="text-[56px] font-bold text-gray-900">
              Job Application Form
            </h3>
            <Link href="/tentang-avrist-life/tentang-avrist-life/tabs/karir/detail">
              <Icon name="close" width={24} height={24} color="black" />
            </Link>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              First Name <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukkan nama depan Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Last Name <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukkan nama belakang Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Email Address <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukkan alamat e-mail Anda"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">What position are you applying for?</p>
            <Radio id="manager" name="manager" label="Manager" />
            <Radio id="supervisor" name="supervisor" label="Supervisor" />
            <Radio id="admin" name="admin" label="Admin" />
            <Radio id="other" name="other" label="Other" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">Education</p>
            <Radio id="manager" name="manager" label="Manager" />
            <Radio id="high_school" name="high_school" label="High School" />
            <Radio id="associates" name="associates" label="associates" />
            <Radio id="bachelors" name="bachelors" label="Bachelor’s" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">What is your current employment status?</p>
            <Radio id="employed" name="employed" label="Employed" />
            <Radio
              id="self_employed"
              name="self_employed"
              label="Self-Employed"
            />
            <Radio id="unemployed" name="unemployed" label="Unemployed" />
            <Radio id="student" name="student" label="Student" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">Work Experience</p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">References</p>
            <input
              className="w-full px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]"
              placeholder="Masukkan referensi"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">Availability to start work:</p>
            <div className="w-full flex flex-row items-center gap-4 px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px]">
              <Icon name="calendarIcon" width={24} height={24} color="black" />
              <input className="w-full" placeholder="dd/mm/yyyy" />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="font-bold">
              Submit your resume by providing your resume
            </p>
            <div className=" flex flex-row items-center gap-4 px-[16px] py-[10px] border border-gray_light rounded-[14px] text-[14px] relative">
              <input className="w-full" placeholder="dd/mm/yyyy" />
              <div className="h-full flex items-center justify-center text-white font-semibold px-10 bg-purple_dark absolute right-0 rounded-r-[14px]">
                Kirim
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="/tentang-avrist-life/tentang-avrist-life/tabs/karir/detail"
              className="px-8 py-4 bg-purple_dark text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Kirim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
