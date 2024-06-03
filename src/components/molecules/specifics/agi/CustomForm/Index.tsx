'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CaptchaPicture from '@/assets/images/form-captcha.svg';
import Radio from '@/components/atoms/Radio';
import { Attribute } from '@/types/form.type';

interface CustomFormProps {
  title?: string;
  longTextArea?: boolean;
  type?: string;
  customFormClassname?: string;
  customFormButtonClassname?: string;
  dataForm?: Attribute[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  resultData?: (
    data: { name: string; value: string }[],
    isValid: boolean
  ) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({
  title,
  type,
  customFormClassname = 'border-b-purple_dark',
  customFormButtonClassname = 'border-purple_dark text-purple_dark',
  dataForm,
  resultData,
  longTextArea
}) => {
  const [formData, setFormData] = useState([{ name: '', value: '' }]);

  const updateFormDataByName = (name: string, value: string) => {
    setFormData((prevData) => {
      const newData = prevData?.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
      });
      return newData;
    });
  };

  useEffect(() => {
    if (dataForm) {
      setFormData(
        dataForm
          ?.filter((data) => data.fieldType !== 'LABEL')
          .map((item) => ({ name: item.name, value: '' }))
      );
    }
  }, [dataForm]);

  useEffect(() => {
    if (resultData) {
      const isValid = formData?.every((item) => {
        if (isRequired(item.name)) {
          return item.value.trim() !== '';
        }
        return true;
      });
      resultData(formData, isValid);
    }
  }, [formData, resultData]);

  const isRequired = (name: string): boolean => {
    const attribute = dataForm?.find((item) => item.name === name);
    return attribute?.config
      ? JSON.parse(attribute.config).required === 'true'
      : false;
  };

  const RenderFetchedForm = () => {
    if (!dataForm) return null;
    const attributeList = dataForm;
    const midIndex = Math.ceil(attributeList.length / 2);

    const leftSide = attributeList.slice(0, midIndex);
    const rightSide = attributeList.slice(midIndex);

    return (
      <div
        className={`${customFormClassname} flex flex-col self-stretch bg-white gap-[36px] border border-gray_light border-b-8 rounded-xl`}
      >
        <p className="font-karla font-bold text-[2.25rem] sm:text-[3.5rem] p-4">
          {title ? title : 'Saya berminat memiliki proteksi ini'}
        </p>
        {type === 'Hubungi Kami' ? (
          <div className="sm:grid sm:grid-cols-2 xs:flex xs:flex-col gap-[2rem]">
            {attributeList?.map((attribute: Attribute, idx) => (
              <div
                key={attribute.id}
                className={`pt-1 ${idx === 0 || attribute.fieldType === 'LABEL' ? 'col-span-2' : ''} ${longTextArea ? (attribute.fieldType === 'TEXT_AREA' ? 'col-span-2' : '') : ''}`}
              >
                {attribute.fieldType === 'LABEL' ? (
                  <p>{attribute.name}</p>
                ) : (
                  <div>
                    <p className="font-bold mb-2">
                      {attribute.name} <span className="text-reddist">*</span>
                    </p>
                    {attribute.fieldType === 'RADIO_BUTTON' ? (
                      <div className="flex flex-col gap-1">
                        {attribute.value
                          ?.split(';')
                          .map((option, optionIndex) => (
                            <Radio
                              key={optionIndex}
                              id={`${attribute.fieldId}_${optionIndex}`}
                              name={attribute.name}
                              label={option}
                              value={option}
                              onChange={(e) =>
                                updateFormDataByName(
                                  attribute.name,
                                  e.target.value
                                )
                              }
                            />
                          ))}
                      </div>
                    ) : attribute.fieldType === 'DROPDOWN' ? (
                      <select
                        onChange={(e) =>
                          updateFormDataByName(attribute.name, e.target.value)
                        }
                        className="w-full px-[1rem] py-[0.625rem] border border-purple_dark text-purple_dark rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option value={''}>Pilih</option>
                        {attribute.value?.split(';').map((option, idx) => (
                          <option
                            key={idx}
                            value={option}
                            selected={
                              option ===
                              formData?.find(
                                (item) => item.name === attribute.name
                              )?.value
                            }
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : attribute.fieldType === 'TEXT_AREA' ? (
                      <div className="flex flex-col justify-end items-end">
                        <textarea
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={JSON.parse(attribute.config).placeholder}
                          name={attribute.name}
                          rows={4}
                          maxLength={
                            JSON.parse(attribute.config).max_length === '0'
                              ? 500
                              : JSON.parse(attribute.config).max_length
                          }
                          onChange={(e) =>
                            updateFormDataByName(attribute.name, e.target.value)
                          }
                        />
                        {formData?.find((item) => item.name === attribute.name)
                          ?.value.length +
                          '/' +
                          (JSON.parse(attribute.config).max_length === '0'
                            ? 500
                            : JSON.parse(attribute.config).max_length)}
                      </div>
                    ) : attribute.name.includes('Telepon') ? (
                      <div className="flex justify-between gap-[0.5rem]">
                        <input
                          className="w-[3rem] sm:w-1/5 px-[0.625rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          defaultValue={'+62'}
                          readOnly
                        />
                        <input
                          className="w-4/5 sm:w-4/5 px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          type="number"
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.name,
                              '+62' + e.target.value
                            )
                          }
                        />
                      </div>
                    ) : (
                      <input
                        className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        placeholder={JSON.parse(attribute.config).placeholder}
                        name={attribute.name}
                        onChange={(e) =>
                          updateFormDataByName(attribute.name, e.target.value)
                        }
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : type === 'Form Saran' ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-[2rem]">
            {attributeList?.map((attribute: Attribute) => (
              <div key={attribute.id} className={`pt-1`}>
                {attribute.fieldType === 'LABEL' ? (
                  <p>{attribute.name}</p>
                ) : (
                  <div>
                    <p className="font-bold">
                      {attribute.name} <span className="text-reddist">*</span>
                    </p>
                    {attribute.fieldType === 'RADIO_BUTTON' ? (
                      <div className="flex flex-row gap-1">
                        {attribute.value
                          ?.split(';')
                          .map((option, optionIndex) => (
                            <Radio
                              key={optionIndex}
                              id={`${attribute.fieldId}_${optionIndex}`}
                              name={attribute.name}
                              label={option}
                              value={option}
                              onChange={(e) =>
                                updateFormDataByName(
                                  attribute.name,
                                  e.target.value
                                )
                              }
                            />
                          ))}
                      </div>
                    ) : attribute.fieldType === 'DROPDOWN' ? (
                      <select
                        onChange={(e) =>
                          updateFormDataByName(attribute.name, e.target.value)
                        }
                        className="w-full px-4 py-2 border border-purple_dark text-purple_dark rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option value={''}>Pilih</option>
                        {attribute.value?.split(/[,;]/).map((option, idx) => (
                          <option
                            key={idx}
                            value={option}
                            selected={
                              option ===
                              formData?.find(
                                (item) => item.name === attribute.name
                              )?.value
                            }
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : attribute.fieldType === 'TEXT_AREA' ? (
                      <div className="flex flex-col justify-end items-end">
                        <textarea
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={JSON.parse(attribute.config).placeholder}
                          name={attribute.name}
                          rows={4}
                          maxLength={
                            JSON.parse(attribute.config).max_length === '0'
                              ? 500
                              : JSON.parse(attribute.config).max_length
                          }
                          onChange={(e) =>
                            updateFormDataByName(attribute.name, e.target.value)
                          }
                        />
                        {formData?.find((item) => item.name === attribute.name)
                          ?.value.length +
                          '/' +
                          (JSON.parse(attribute.config).max_length === '0'
                            ? 500
                            : JSON.parse(attribute.config).max_length)}
                      </div>
                    ) : attribute.name.includes('Telepon') ? (
                      <div className="flex justify-between gap-[0.5rem]">
                        <input
                          className="w-[3rem] sm:w-1/5 px-[0.625rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          defaultValue={'+62'}
                          readOnly
                        />
                        <input
                          className="w-4/5 sm:w-4/5 px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          type="number"
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.name,
                              '+62' + e.target.value
                            )
                          }
                        />
                      </div>
                    ) : (
                      <input
                        className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        placeholder={JSON.parse(attribute.config).placeholder}
                        name={attribute.name}
                        onChange={(e) =>
                          updateFormDataByName(attribute.name, e.target.value)
                        }
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-[2rem] p-4">
            <div className="flex flex-col gap-[0.25rem]">
              {leftSide?.map((attribute: Attribute) => (
                <div key={attribute.id} className="pt-1">
                  <p className="font-bold">
                    {attribute.name} <span className="text-reddist">*</span>
                  </p>
                  {attribute.fieldType === 'RADIO_BUTTON' ? (
                    attribute.value
                      ?.split(';')
                      .map((option, optionIndex) => (
                        <Radio
                          key={optionIndex}
                          id={`${attribute.fieldId}_${optionIndex}`}
                          name={attribute.name}
                          label={option}
                          value={option}
                          onChange={(e) =>
                            updateFormDataByName(attribute.name, e.target.value)
                          }
                        />
                      ))
                  ) : (
                    <input
                      className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                      placeholder={JSON.parse(attribute.config).placeholder}
                      name={attribute.name}
                      onChange={(e) =>
                        updateFormDataByName(attribute.name, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[0.25rem]">
              {rightSide?.map((attribute: Attribute) => (
                <div key={attribute.id} className="pt-1">
                  <p className="font-bold">
                    {attribute.name} <span className="text-reddist">*</span>
                  </p>
                  {attribute.fieldType === 'RADIO_BUTTON' ? (
                    attribute.value?.split(';').map((option, optionIndex) => (
                      <div className="flex flex-col gap-1" key={optionIndex}>
                        <Radio
                          id={`${attribute.fieldId}_${optionIndex}`}
                          name={attribute.name}
                          label={option}
                          value={option}
                          onChange={(e) =>
                            updateFormDataByName(attribute.name, e.target.value)
                          }
                        />
                      </div>
                    ))
                  ) : attribute.fieldType === 'DROPDOWN' ? (
                    <select
                      onChange={(e) =>
                        updateFormDataByName(attribute.name, e.target.value)
                      }
                      className="w-full px-[1rem] py-[0.625rem] border border-purple_dark text-purple_dark rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value={''}>Pilih</option>
                      {attribute.value?.split(';').map((option, idx) => (
                        <option
                          key={idx}
                          value={option}
                          selected={
                            option ===
                            formData?.find(
                              (item) => item.name === attribute.name
                            )?.value
                          }
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : attribute.name.includes('Telepon') ? (
                    <div className="flex justify-between gap-[0.5rem]">
                      <input
                        className="w-[3rem] sm:w-1/5 px-[0.625rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        defaultValue={'+62'}
                        readOnly
                      />
                      <input
                        className="w-4/5 sm:w-4/5 px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        placeholder="Masukan nomor telepon"
                        name={attribute.name}
                        onChange={(e) =>
                          updateFormDataByName(attribute.name, e.target.value)
                        }
                      />
                    </div>
                  ) : (
                    <input
                      className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                      placeholder={JSON.parse(attribute.config).placeholder}
                      name={attribute.name}
                      onChange={(e) =>
                        updateFormDataByName(attribute.name, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return !dataForm ? (
    <>
      <div
        className={`${customFormClassname} flex flex-col self-stretch bg-white p-[2.25rem] gap-[2.25rem] border border-gray_light border-b-8 rounded-[0.75rem] rounded-b-[0.5rem]`}
      >
        <p className="font-karla font-bold text-[2.25rem] sm:text-[3.5rem]">
          Saya berminat memiliki proteksi ini
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              Saya adalah <span className="text-reddist">*</span>
            </p>
            <Radio
              id="calon_nasabah"
              name="tipe_nasabah"
              label="Calon Nasabah"
            />
            <Radio id="nasabah" name="tipe_nasabah" label="Nasabah" />
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              Bapak/Ibu <span className="text-reddist">*</span>
            </p>
            <Radio id="bapak" name="jenis_kelamin" label="Bapak" />
            <Radio id="ibu" name="jenis_kelamin" label="Ibu" />
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              Alamat Email <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
              placeholder="Masukan alamat e-mail Anda"
            />
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              Nama <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
              placeholder="Masukan nama Anda"
            />
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              Kota <span className="text-reddist">*</span>
            </p>
            <input
              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
              placeholder="Kota terdekat dari domisili Anda"
            />
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <p className="font-bold">
              No Telepon <span className="text-reddist">*</span>
            </p>
            <div className="flex justify-between gap-[0.5rem]">
              <input
                className="w-1/5 sm:w-1/5 px-[0.625rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                defaultValue="+62"
                readOnly
              />
              <input
                className="w-4/5 sm:w-4/5 px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                placeholder="Masukan nomor telepon"
              />
            </div>
          </div>
        </div>
        <div className="accent-purple_dark flex flex-row items-start gap-[0.75rem]">
          <input
            id="setuju"
            type="checkbox"
            value=""
            className="mt-[0.375rem] text-purple_dark border-gray_verylight rounded focus:purple_dark focus:ring-2 cursor-pointer"
          />
          <label className="cursor-pointer" htmlFor="setuju">
            Saya setuju memberikan data pribadi Saya kepada Avrist Life
            Insurance dan telah membaca{' '}
            <span className="text-purple_dark font-bold">Keamanan Online</span>{' '}
            Avrist Life Insurance. Selanjutnya, Saya bersedia untuk dihubungi
            oleh Avrist Life Insurance melalui media komunikasi pribadi Saya
            sesuai hari dan jam operasional yang berlaku di Avrist Life
            Insurance.
          </label>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[2rem]">
          <Image alt="captcha" src={CaptchaPicture} />
          <button
            type="button"
            className={`${customFormButtonClassname} text-[1.25rem] font-semibold h-[4rem] px-[2.5rem] py-[0.75rem] border-1 rounded-[0.5rem]`}
          >
            <p>Beli Sekarang</p>
          </button>
        </div>
      </div>
    </>
  ) : (
    dataForm && RenderFetchedForm()
  );
};

export default CustomForm;
