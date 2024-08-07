'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DocumentForm from './Components/Document';
import CaptchaPicture from '@/assets/images/form-captcha.svg';
import Radio from '@/components/atoms/Radio';
import { handleUploadDocument } from '@/services/upload-document-service.api';
import { Attribute } from '@/types/form.type';
import { isNumber, validateEmail } from '@/utils/validation';

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
  selectedProduct?: string;
  dataRekomendasi?: any;
}

const CustomForm: React.FC<CustomFormProps> = ({
  title,
  type,
  customFormClassname = 'border-b-purple_dark',
  customFormButtonClassname = 'border-purple_dark text-purple_dark',
  dataForm,
  resultData,
  longTextArea,
  selectedProduct,
  dataRekomendasi
}) => {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const [formData, setFormData] = useState([{ name: '', value: '' }]);
  const [filename, setFilename] = useState([{ name: '', value: '' }]);
  const [dateValue, setDateValue] = useState([{ name: '', value: '' }]);
  const [rangeDateValue, setRangeDateValue] = useState([
    {
      name: '',
      dateFrom: '',
      dateTo: ''
    }
  ]);
  const [currencyValue, setCurrencyValue] = useState([{ name: '', value: '' }]);
  const [validPhoneNumber, setValidPhoneNumber] = useState<
    { name: string; value: boolean | string }[]
  >([{ name: '', value: '' }]);

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

  const updateCurrencyValue = (name: string, value: string) => {
    setCurrencyValue((prevData) => {
      const newData = prevData?.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
      });
      return newData;
    });
  };

  const updateDateValue = (name: string, value: string) => {
    setDateValue((prevData) => {
      const newData = prevData?.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
      });
      return newData;
    });
  };

  const updateRangeDateValue = (
    name: string,
    dateFrom: string,
    dateTo: string
  ) => {
    setRangeDateValue((prevData) => {
      const newData = prevData?.map((item) => {
        if (item.name === name) {
          return { ...item, dateFrom: dateFrom, dateTo: dateTo };
        }
        return item;
      });
      return newData;
    });
  };

  const updatePhoneNumberValidation = (
    name: string,
    value: boolean | string
  ) => {
    setValidPhoneNumber((prevData) => {
      const newData = prevData?.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
      });
      return newData;
    });
  };

  const handleFileChange = async (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      formData.append('fileType', 'DOCUMENT');
      formData.append('fileName', files[0].name);

      try {
        const response = await handleUploadDocument(formData);
        setFilename((prevData) => {
          const newData = prevData?.map((item) => {
            if (item.name === name) {
              return { ...item, value: files[0].name };
            }
            return item;
          });
          return newData;
        });
        return response.data;
      } catch (error) {
        console.error('Error uploading document:', error);
        return null;
      }
    }
    return null;
  };

  const handleUploadChange = async (
    attributeName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const data = await handleFileChange(attributeName, event);
    if (data) {
      updateFormDataByName(attributeName, data);
    } else {
      console.error('Upload failed or no file selected');
    }
  };

  const handleInputChange = async (
    e: any,
    name: string,
    currency: string,
    maxDecimal: number
  ) => {
    const inputValue = e.target.value;
    // Prevent '0' as the first character
    if (inputValue.startsWith('0') && inputValue.length === 1) {
      updateCurrencyValue(name, '');
      return;
    }
    const formattedValue = await formatCurrency(inputValue, currency);
    updateCurrencyValue(name, `${currency.toUpperCase()} ${formattedValue}`);
    setTimeout(() => {
      if (maxDecimal > 0) {
        if (currency.toLowerCase() === 'idr') {
          const integer = formattedValue.split(',')[0];
          const decimal = formattedValue.split(',')[1];
          formattedValue.includes(',') &&
            decimal.length > maxDecimal &&
            updateCurrencyValue(
              name,
              `${currency.toUpperCase()} ${integer},${decimal.replace('.', '').slice(0, maxDecimal)}`
            );
        } else {
          const integer = formattedValue.split('.')[0];
          const decimal = formattedValue.split('.')[1];
          formattedValue.includes('.') &&
            decimal.length > maxDecimal &&
            updateCurrencyValue(
              name,
              `${currency.toUpperCase()} ${integer}.${decimal.replace(',', '').slice(0, 2)}`
            );
        }
      } else {
        updateCurrencyValue(
          name,
          `${currency.toUpperCase()} ${formattedValue}`
        );
      }
    }, 10);
  };

  const formatCurrency = (value: any, currency: string) => {
    if (currency === 'idr') {
      // Allow only digits and commas
      value = value.replace(/[^\d,]/g, '');

      // Split the input value into integer and decimal parts
      const parts = value.split('.');

      // Format the integer part with thousand separators
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      return integerPart;
    } else {
      // Allow only digits and period
      value = value.replace(/[^\d.]/g, '');

      // Split the input value into integer and decimal parts
      const parts = value.split(',');

      // Format the integer part with thousand separators
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return integerPart;
    }
  };

  useEffect(() => {
    if (dataForm) {
      const visibleFields = dataForm
        ?.filter(
          (data) =>
            data.fieldType !== 'LABEL' &&
            !data.config.includes('"hidden": "true"')
        )
        .map((item) => ({
          name: item.componentId,
          value: item.value ? item.value : ''
        }));

      const hiddenFields = dataForm
        ?.filter((data) => data.config.includes('"hidden": "true"'))
        .map((item) => ({
          name: item.componentId,
          value: '-'
        }));

      const combinedFields = [...visibleFields, ...hiddenFields];

      setFilename(
        dataForm
          ?.filter((data) => data.fieldType === 'DOCUMENT')
          .map((item) => ({
            name: item.componentId,
            value: item.value ? item.value : ''
          }))
      );

      setFormData(combinedFields);

      setDateValue(
        dataForm
          ?.filter((data) => data.fieldType === 'DATE_PICKER')
          .map((item) => ({
            name: item.componentId,
            value: item.value ? item.value : ''
          }))
      );

      setRangeDateValue(
        dataForm
          ?.filter((data) => data.fieldType === 'RANGE_DATE_PICKER')
          .map((item) => ({
            name: item.componentId,
            dateFrom: '',
            dateTo: ''
          }))
      );

      setCurrencyValue(
        dataForm
          ?.filter((data) => data.fieldType === 'TEXT_CURRENCY')
          .map((item) => ({
            name: item.componentId,
            value: item.value ? item.value : ''
          }))
      );

      setValidPhoneNumber(
        dataForm
          ?.filter((data) => data.fieldType === 'PHONE_NUMBER')
          .map((item) => ({
            name: item.componentId,
            value: ''
          }))
      );
    }
  }, [dataForm]);

  useEffect(() => {
    if (resultData) {
      const isNotEmpty = formData?.every((item) => {
        if (
          isRequired(item.name) &&
          !item.name?.toLocaleLowerCase().includes('produk')
        ) {
          return item.value.trim() !== '';
        }
        return true;
      });

      const isEmailValid = validateEmail(
        formData.find((i) => i?.name?.toLowerCase()?.includes('email'))
          ?.value ?? ''
      );

      // if there contains ';', then it means the value is still multiple and needs to be select 1 value
      const isMultipleChoiceValid = formData?.every((item) => {
        if (isRequired(item.name) && isMultipleChoice(item.name)) {
          return !item.value.includes(';');
        }
        return true;
      });

      const isDateValid =
        dateValue?.every((item) => {
          if (isRequired(item.name)) {
            return item.value.trim() !== '';
          }
          return true;
        }) &&
        dateValue?.every((item) => {
          const configString =
            dataForm?.find((i) => i.componentId === item.name)?.config ?? '{}';
          let config;
          try {
            config = JSON.parse(configString);
          } catch (error) {
            return false; // If JSON parsing fails, return false
          }
          const validationResult = dateValidation(
            config.date_validation,
            item.value
          );
          return typeof validationResult === 'boolean';
        });

      const isRangeDateValid = rangeDateValue?.every((item) => {
        if (isRequired(item.name)) {
          return item.dateFrom.trim() !== '' && item.dateTo.trim() !== '';
        }
        return true;
      });

      const isCurrencyValid =
        currencyValue?.every((item) => {
          if (isRequired(item.name)) {
            return item.value.trim() !== '';
          }
          return true;
        }) &&
        currencyValue?.every((item) => {
          const configString =
            dataForm?.find((i) => i.componentId === item.name)?.config ?? '{}';
          let config;
          try {
            config = JSON.parse(configString);
          } catch (error) {
            return false; // If JSON parsing fails, return false
          }

          const currValue = parseInt(
            currencyValue
              .find((j) => j.name === item.name)
              ?.value.replace(/[^0-9]/g, '') ?? '0'
          );

          const minValue = parseInt(config.min_value);

          return currValue >= minValue;
        });

      const isPhoneNumberValid = validPhoneNumber.every((item) => {
        if (isRequired(item.name)) {
          return typeof item.value === 'boolean' && item.value;
        }
        return true;
      });

      resultData(
        formData,
        isNotEmpty &&
          isEmailValid &&
          isMultipleChoiceValid &&
          isDateValid &&
          isRangeDateValid &&
          isCurrencyValid &&
          isPhoneNumberValid
      );
    }
  }, [formData, resultData]);

  // function for updating date picker
  useEffect(() => {
    dateValue.forEach((item) => {
      updateFormDataByName(item.name, `${item.value}`);
    });
  }, [dateValue]);

  // function for updating range date picker
  useEffect(() => {
    rangeDateValue.forEach((item) => {
      updateFormDataByName(item.name, `${item.dateFrom} - ${item.dateTo}`);
    });
  }, [rangeDateValue]);

  // function for updating currency
  useEffect(() => {
    currencyValue.forEach((item) => {
      updateFormDataByName(item.name, `${item.value}`);
    });
  }, [currencyValue]);

  const isRequired = (name: string): boolean => {
    const attribute = dataForm?.find((item) => item.componentId === name);
    return attribute?.config
      ? JSON.parse(attribute.config).required === 'true'
      : false;
  };

  const isMultipleChoice = (name: string): boolean => {
    const attribute = dataForm?.find((item) => item.componentId === name);
    return attribute?.config
      ? (attribute?.fieldType === 'RADIO_BUTTON' ||
          attribute?.fieldType === 'DROPDOWN') &&
          !attribute.name.includes('produk')
      : false;
  };

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  const isText = (name: string) => {
    return (
      name.toLowerCase().includes('kota') ||
      name.toLowerCase().includes('nama') ||
      name.toLowerCase().includes('domisili') ||
      name.toLowerCase().includes('agama')
    );
  };

  const isNumeric = (name: string) => {
    return (
      name.toLowerCase().includes('handphone') ||
      name.toLowerCase().includes('ktp')
    );
  };

  const isAlphaNumeric = (name: string) => {
    return name.toLowerCase().includes('pendidikan');
  };

  const dateValidation = (
    date_validation: string,
    value: string
  ): string | boolean => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
    const currentDate = `${year}-${month}-${day}`;

    if (date_validation === 'incoming_date_with_today') {
      if (value >= currentDate) {
        return true;
      } else {
        return 'Tidak dapat memilih tanggal sebelum hari ini!';
      }
    } else if (date_validation === 'incoming_date') {
      if (value > currentDate) {
        return true;
      } else {
        return 'Tidak dapat memilih hari ini dan tanggal sebelumnya!';
      }
    } else if (date_validation === 'past_date_with_today') {
      if (value <= currentDate) {
        return true;
      } else {
        return 'Tidak dapat memilih tanggal setelah hari ini!';
      }
    } else if (date_validation === 'past_date') {
      if (value < currentDate) {
        return true;
      } else {
        return 'Tidak dapat memilih hari ini dan tanggal kedepan!';
      }
    } else {
      return true;
    }
  };

  const RenderFetchedForm = () => {
    if (!dataForm) return null;
    const attributeList = dataForm.filter(
      (data) => !data.config.includes('"hidden": "true"')
    );
    const formType = type === 'Hubungi Kami' ? 2 : 0;
    const midIndex = Math.ceil(attributeList.length / 2) + formType;

    const leftSide = attributeList.slice(0, midIndex);
    const rightSide = attributeList.slice(midIndex);

    return (
      <div
        className={`${customFormClassname} flex flex-col self-stretch bg-white ${type === 'Karir' ? '' : 'gap-[20px] border border-gray_light '} border-b-8 rounded-[12px]`}
      >
        {title !== ' ' && (
          <p className="font-karla font-bold text-[2.25rem] sm:text-[3.5rem] pt-4 px-4 sm:pb-4 -tracking-[3px] sm:-tracking-[2.24px] xs:leading-[2.5rem] md:leading-[67.2px]">
            {title ? title : 'Saya berminat memiliki proteksi ini'}
          </p>
        )}
        {type === 'Hubungi Kami' ? (
          <div className="sm:grid sm:grid-cols-2 xs:flex xs:flex-col xs:gap-[1.5rem] sm:gap-[2.25rem]">
            {leftSide?.map((attribute: Attribute, idx) => {
              if (attribute.name.includes('produk')) {
                return null;
              }
              return (
                <div
                  key={attribute.id}
                  className={`pt-1 ${idx === 0 || attribute.fieldType === 'LABEL' ? 'col-span-2' : ''} ${longTextArea ? (attribute.fieldType === 'TEXT_AREA' ? 'col-span-2' : '') : ''}`}
                >
                  {attribute.fieldType === 'LABEL' ? (
                    <p className="leading-[23.68px]">{attribute.name}</p>
                  ) : (
                    <div>
                      <p className="font-bold">
                        {attribute.name}{' '}
                        <span
                          className={`text-reddist ${!isRequired(attribute.componentId) ? 'hidden' : ''}`}
                        >
                          *
                        </span>
                      </p>
                      {attribute.fieldType === 'RADIO_BUTTON' ? (
                        <div className="flex flex-row gap-9">
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
                                    attribute.componentId,
                                    e.target.value
                                  )
                                }
                              />
                            ))}
                        </div>
                      ) : attribute.fieldType === 'DROPDOWN' ? (
                        <select
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light text-other-grey rounded-[14px] focus:outline-none focus:border-blue-500"
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
                        <div className="flex flex-col justify-end items-end gap-2 text-[0.875rem]">
                          <textarea
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            rows={4}
                            maxLength={
                              JSON.parse(attribute.config).max_length === '0'
                                ? 500
                                : JSON.parse(attribute.config).max_length
                            }
                            onChange={(e) =>
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              )
                            }
                          />
                          {formData?.find(
                            (item) => item.name === attribute.componentId
                          )?.value.length +
                            '/' +
                            (JSON.parse(attribute.config).max_length === '0'
                              ? 500
                              : JSON.parse(attribute.config).max_length)}
                        </div>
                      ) : attribute.name.includes('Telepon') ? (
                        <div className="flex grow shrink-0">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder="Masukan nomor telepon"
                            name={attribute.name}
                            maxLength={JSON.parse(attribute.config).max_length}
                            type="text"
                            onChange={(e) => {
                              if (
                                isNumber(e.target.value) ||
                                e.target.value === ''
                              ) {
                                updateFormDataByName(
                                  attribute.componentId,
                                  e.target.value
                                );
                              }
                            }}
                            onInput={handleInput}
                            pattern="[0-9]*"
                          />
                          {!attribute.value ||
                            (JSON.parse(attribute.config).min_length >
                              attribute.value && (
                              <p className="text-xs text-error">
                                Masukkan jumlah nomor telepon yang benar!
                              </p>
                            ))}
                        </div>
                      ) : attribute.name.includes('Email') ? (
                        <div className="flex flex-col justify-between">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            onChange={(e) =>
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              )
                            }
                          />
                          {formData.find(
                            (i) => i.name === attribute.componentId
                          )?.value !== '' &&
                            !validateEmail(
                              formData.find(
                                (i) => i.name === attribute.componentId
                              )?.value ?? ''
                            ) && (
                              <p className="text-xs text-error">
                                Masukkan alamat email yang benar!
                              </p>
                            )}
                        </div>
                      ) : attribute.fieldType === 'DATE_PICKER' ? (
                        <section className="flex flex-col">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            type="date"
                            value={
                              dateValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value
                            }
                            onChange={(e) => {
                              updateDateValue(
                                attribute.componentId,
                                e.target.value
                              );
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              );
                            }}
                          />
                          {(() => {
                            const validationResult = dateValidation(
                              JSON.parse(attribute.config).date_validation,
                              dateValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value ?? ''
                            );
                            if (
                              formData.find(
                                (item) => item.name === attribute.componentId
                              )?.value &&
                              validationResult !== true
                            ) {
                              return (
                                <p className="text-xs text-error">
                                  {validationResult}
                                </p>
                              );
                            }
                            return null;
                          })()}
                        </section>
                      ) : attribute.fieldType === 'RANGE_DATE_PICKER' ? (
                        <section className="flex flex-col">
                          <div className="flex xs:flex-col sm:flex-row w-full gap-2">
                            <div className="flex flex-row gap-2 items-center w-full">
                              <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                                From
                              </p>
                              <input
                                className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                                placeholder={
                                  JSON.parse(attribute.config).placeholder
                                }
                                name={attribute.name}
                                type="date"
                                value={
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateFrom
                                }
                                onChange={(e) => {
                                  updateRangeDateValue(
                                    attribute.componentId,
                                    e.target.value,
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateTo ?? ''
                                  );
                                }}
                              />
                            </div>
                            <div className="flex flex-row gap-2 items-center w-full">
                              <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                                To
                              </p>
                              <input
                                className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                                placeholder={
                                  JSON.parse(attribute.config).placeholder
                                }
                                name={attribute.name}
                                type="date"
                                value={
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateTo
                                }
                                onChange={(e) => {
                                  updateRangeDateValue(
                                    attribute.componentId,
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateFrom ?? '',
                                    e.target.value
                                  );
                                }}
                              />
                            </div>
                          </div>
                          {rangeDateValue.find(
                            (item) => item.name === attribute.componentId
                          )?.dateFrom &&
                            rangeDateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.dateTo &&
                            (rangeDateValue?.find(
                              (item) => item.name === attribute.componentId
                            )?.dateFrom ?? '') >
                              (rangeDateValue?.find(
                                (item) => item.name === attribute.componentId
                              )?.dateTo ?? '') && (
                              <p className="text-xs text-error">
                                Tanggal awal tidak boleh lebih dari tanggal
                                akhir!
                              </p>
                            )}
                        </section>
                      ) : attribute.fieldType === 'TEXT_CURRENCY' ? (
                        <div className="flex flex-col">
                          <section className="flex flex-row gap-2 items-center">
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="text"
                              value={
                                currencyValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.value
                              }
                              onChange={(e) => {
                                handleInputChange(
                                  e,
                                  attribute.componentId,
                                  JSON.parse(attribute.config).currency,
                                  JSON.parse(attribute.config).max_decimal
                                );
                              }}
                            />
                          </section>
                          {parseInt(
                            currencyValue
                              .find(
                                (item) => item.name === attribute.componentId
                              )
                              ?.value.replace(/[^0-9]/g, '') ?? '0'
                          ) <
                            parseInt(
                              JSON.parse(attribute.config).min_value
                            ) && (
                            <p className="text-xs text-error">
                              Minimal input adalah{' '}
                              {JSON.parse(attribute.config).min_value}!
                            </p>
                          )}
                        </div>
                      ) : (
                        <input
                          className={`w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem] ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                          placeholder={
                            JSON.parse(attribute.config)?.placeholder ?? ''
                          }
                          name={attribute.name}
                          type="text"
                          value={attribute.value ?? ''}
                          onChange={(e) => {
                            const regex = /[^a-zA-Z ]/g;
                            if (isText(attribute.name)) {
                              if (!e.target.value.match(regex)) {
                                attribute.value = e.target.value;
                              }
                            } else {
                              attribute.value = e.target.value;
                            }
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            );
                            forceUpdate();
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            {rightSide?.map((attribute: Attribute, idx) => {
              if (attribute.name.includes('produk')) {
                return null;
              }
              return (
                <div
                  key={attribute.id}
                  className={`pt-1 ${idx === 0 || attribute.fieldType === 'LABEL' ? 'col-span-2' : ''} ${longTextArea ? (attribute.fieldType === 'TEXT_AREA' ? 'col-span-2' : '') : ''} ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                >
                  {attribute.fieldType === 'LABEL' ? (
                    <p className="leading-[23.68px]">{attribute.name}</p>
                  ) : (
                    <div>
                      <p className="font-bold">
                        {attribute.name}{' '}
                        <span
                          className={`text-reddist ${!isRequired(attribute.componentId) ? 'hidden' : ''}`}
                        >
                          *
                        </span>
                      </p>
                      {attribute.fieldType === 'RADIO_BUTTON' ? (
                        <div className="flex flex-row gap-9">
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
                                    attribute.componentId,
                                    e.target.value
                                  )
                                }
                              />
                            ))}
                        </div>
                      ) : attribute.fieldType === 'DROPDOWN' ? (
                        <select
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light text-other-grey rounded-[14px] focus:outline-none focus:border-blue-500"
                        >
                          <option value={''}>Pilih</option>
                          {attribute.value?.split(';').map((option, idx) => (
                            <option
                              key={idx}
                              value={option}
                              selected={
                                option ===
                                formData?.find(
                                  (item) => item.name === attribute.componentId
                                )?.value
                              }
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : attribute.fieldType === 'TEXT_AREA' ? (
                        <div className="flex flex-col justify-end items-end gap-2 text-[0.875rem]">
                          <textarea
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            rows={4}
                            maxLength={
                              JSON.parse(attribute.config).max_length === '0'
                                ? 500
                                : JSON.parse(attribute.config).max_length
                            }
                            onChange={(e) =>
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              )
                            }
                          />
                          {formData?.find(
                            (item) => item.name === attribute.componentId
                          )?.value.length +
                            '/' +
                            (JSON.parse(attribute.config).max_length === '0'
                              ? 500
                              : JSON.parse(attribute.config).max_length)}
                        </div>
                      ) : attribute.fieldType === 'PHONE_NUMBER' ? (
                        <div className="flex grow shrink-0">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder="Masukan nomor telepon"
                            name={attribute.name}
                            maxLength={JSON.parse(attribute.config).max_length}
                            type="text"
                            onChange={(e) => {
                              if (
                                isNumber(e.target.value) ||
                                e.target.value === ''
                              ) {
                                updateFormDataByName(
                                  attribute.componentId,
                                  e.target.value
                                );
                              }
                              if (
                                e.target.value.length <
                                JSON.parse(attribute.config).min_length
                              ) {
                                updatePhoneNumberValidation(
                                  attribute.componentId,
                                  false
                                );
                              } else {
                                updatePhoneNumberValidation(
                                  attribute.componentId,
                                  true
                                );
                              }
                            }}
                            onInput={handleInput}
                            pattern="[0-9]*"
                          />
                          {validPhoneNumber.find(
                            (item) => item.name === attribute.componentId
                          )?.value === false && (
                            <p className="text-xs text-error">
                              Masukkan jumlah nomor telepon yang benar!
                            </p>
                          )}
                        </div>
                      ) : attribute.name.includes('Telepon') ? (
                        <div className="flex grow shrink-0">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder="Masukan nomor telepon"
                            name={attribute.name}
                            maxLength={JSON.parse(attribute.config).max_length}
                            type="text"
                            onChange={(e) => {
                              if (
                                isNumber(e.target.value) ||
                                e.target.value === ''
                              ) {
                                updateFormDataByName(
                                  attribute.componentId,
                                  e.target.value
                                );
                              }
                            }}
                            onInput={handleInput}
                            pattern="[0-9]*"
                          />
                          {!attribute.value ||
                            (JSON.parse(attribute.config).min_length >
                              attribute.value && (
                              <p className="text-xs text-error">
                                Masukkan jumlah nomor telepon yang benar!
                              </p>
                            ))}
                        </div>
                      ) : attribute.name.includes('Email') ? (
                        <div className="flex flex-col justify-between">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            onChange={(e) =>
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              )
                            }
                          />
                          {formData.find(
                            (i) => i.name === attribute.componentId
                          )?.value !== '' &&
                            !validateEmail(
                              formData.find(
                                (i) => i.name === attribute.componentId
                              )?.value ?? ''
                            ) && (
                              <p className="text-xs text-error">
                                Masukkan alamat email yang benar!
                              </p>
                            )}
                        </div>
                      ) : attribute.fieldType === 'DATE_PICKER' ? (
                        <section className="flex flex-col">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            type="date"
                            value={
                              dateValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value
                            }
                            onChange={(e) => {
                              updateDateValue(
                                attribute.componentId,
                                e.target.value
                              );
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              );
                            }}
                          />
                          {(() => {
                            const validationResult = dateValidation(
                              JSON.parse(attribute.config).date_validation,
                              dateValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value ?? ''
                            );
                            if (
                              formData.find(
                                (item) => item.name === attribute.componentId
                              )?.value &&
                              validationResult !== true
                            ) {
                              return (
                                <p className="text-xs text-error">
                                  {validationResult}
                                </p>
                              );
                            }
                            return null;
                          })()}
                        </section>
                      ) : attribute.fieldType === 'RANGE_DATE_PICKER' ? (
                        <section className="flex flex-col">
                          <div className="flex xs:flex-col sm:flex-row w-full gap-2">
                            <div className="flex flex-row gap-2 items-center w-full">
                              <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                                From
                              </p>
                              <input
                                className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                                placeholder={
                                  JSON.parse(attribute.config).placeholder
                                }
                                name={attribute.name}
                                type="date"
                                value={
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateFrom
                                }
                                onChange={(e) => {
                                  updateRangeDateValue(
                                    attribute.componentId,
                                    e.target.value,
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateTo ?? ''
                                  );
                                }}
                              />
                            </div>
                            <div className="flex flex-row gap-2 items-center w-full">
                              <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                                To
                              </p>
                              <input
                                className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                                placeholder={
                                  JSON.parse(attribute.config).placeholder
                                }
                                name={attribute.name}
                                type="date"
                                value={
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateTo
                                }
                                onChange={(e) => {
                                  updateRangeDateValue(
                                    attribute.componentId,
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateFrom ?? '',
                                    e.target.value
                                  );
                                }}
                              />
                            </div>
                          </div>
                          {rangeDateValue.find(
                            (item) => item.name === attribute.componentId
                          )?.dateFrom &&
                            rangeDateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.dateTo &&
                            (rangeDateValue?.find(
                              (item) => item.name === attribute.componentId
                            )?.dateFrom ?? '') >
                              (rangeDateValue?.find(
                                (item) => item.name === attribute.componentId
                              )?.dateTo ?? '') && (
                              <p className="text-xs text-error">
                                Tanggal awal tidak boleh lebih dari tanggal
                                akhir!
                              </p>
                            )}
                        </section>
                      ) : attribute.fieldType === 'TEXT_CURRENCY' ? (
                        <div className="flex flex-col">
                          <section className="flex flex-row gap-2 items-center">
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="text"
                              value={
                                currencyValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.value
                              }
                              onChange={(e) => {
                                handleInputChange(
                                  e,
                                  attribute.componentId,
                                  JSON.parse(attribute.config).currency,
                                  JSON.parse(attribute.config).max_decimal
                                );
                              }}
                            />
                          </section>
                          {parseInt(
                            currencyValue
                              .find(
                                (item) => item.name === attribute.componentId
                              )
                              ?.value.replace(/[^0-9]/g, '') ?? '0'
                          ) <
                            parseInt(
                              JSON.parse(attribute.config).min_value
                            ) && (
                            <p className="text-xs text-error">
                              Minimal input adalah{' '}
                              {JSON.parse(attribute.config).min_value}!
                            </p>
                          )}
                        </div>
                      ) : (
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={
                            JSON.parse(attribute.config)?.placeholder ?? ''
                          }
                          name={attribute.name}
                          type="text"
                          value={attribute.value ?? ''}
                          onChange={(e) => {
                            const regex = /[^a-zA-Z ]/g;
                            if (
                              attribute.name === 'Nama' ||
                              attribute.name === 'Domisili' ||
                              attribute.name === 'Kota'
                            ) {
                              if (!e.target.value.match(regex)) {
                                attribute.value = e.target.value;
                              }
                            } else {
                              attribute.value = e.target.value;
                            }
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            );
                            forceUpdate();
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : type === 'Form Saran' ? (
          <div className="grid grid-cols-1 xs:gap-[1.5rem] sm:gap-[2.25rem]">
            {attributeList?.map((attribute: Attribute) => (
              <div
                key={attribute.id}
                className={`pt-1 ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
              >
                {attribute.fieldType === 'LABEL' ? (
                  <p>{attribute.name}</p>
                ) : (
                  <div>
                    <p className="font-bold mb-2 leading-[21.79px]">
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
                                  attribute.componentId,
                                  e.target.value
                                )
                              }
                            />
                          ))}
                      </div>
                    ) : attribute.fieldType === 'DROPDOWN' ? (
                      <select
                        onChange={(e) =>
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          )
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
                      <div className="flex flex-col justify-end items-end gap-2 text-[0.875rem]">
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
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                        />
                        {formData?.find(
                          (item) => item.name === attribute.componentId
                        )?.value.length +
                          '/' +
                          (JSON.parse(attribute.config).max_length === '0'
                            ? 500
                            : JSON.parse(attribute.config).max_length)}
                      </div>
                    ) : attribute.fieldType === 'PHONE_NUMBER' ? (
                      <div className="flex grow shrink-0">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          maxLength={JSON.parse(attribute.config).max_length}
                          type="text"
                          onChange={(e) => {
                            if (
                              isNumber(e.target.value) ||
                              e.target.value === ''
                            ) {
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              );
                            }
                            if (
                              e.target.value.length <
                              JSON.parse(attribute.config).min_length
                            ) {
                              updatePhoneNumberValidation(
                                attribute.componentId,
                                false
                              );
                            } else {
                              updatePhoneNumberValidation(
                                attribute.componentId,
                                true
                              );
                            }
                          }}
                          onInput={handleInput}
                          pattern="[0-9]*"
                        />
                        {validPhoneNumber.find(
                          (item) => item.name === attribute.componentId
                        )?.value === false && (
                          <p className="text-xs text-error">
                            Masukkan jumlah nomor telepon yang benar!
                          </p>
                        )}
                      </div>
                    ) : attribute.name.includes('Telepon') ? (
                      <div className="flex grow shrink-0">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          type="text"
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                          onInput={handleInput}
                          pattern="[0-9]*"
                        />
                      </div>
                    ) : attribute.name.includes('Email') ? (
                      <div className="flex flex-col justify-between">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={JSON.parse(attribute.config).placeholder}
                          name={attribute.name}
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                        />
                        {formData.find((i) => i.name === attribute.componentId)
                          ?.value !== '' &&
                          !validateEmail(
                            formData.find(
                              (i) => i.name === attribute.componentId
                            )?.value ?? ''
                          ) && (
                            <p className="text-xs text-error">
                              Masukkan alamat email yang benar!
                            </p>
                          )}
                      </div>
                    ) : attribute.fieldType === 'DATE_PICKER' ? (
                      <section className="flex flex-col">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={JSON.parse(attribute.config).placeholder}
                          name={attribute.name}
                          type="date"
                          value={
                            dateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.value
                          }
                          onChange={(e) => {
                            updateDateValue(
                              attribute.componentId,
                              e.target.value
                            );
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            );
                          }}
                        />
                        {(() => {
                          const validationResult = dateValidation(
                            JSON.parse(attribute.config).date_validation,
                            dateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.value ?? ''
                          );
                          if (
                            formData.find(
                              (item) => item.name === attribute.componentId
                            )?.value &&
                            validationResult !== true
                          ) {
                            return (
                              <p className="text-xs text-error">
                                {validationResult}
                              </p>
                            );
                          }
                          return null;
                        })()}
                      </section>
                    ) : attribute.fieldType === 'RANGE_DATE_PICKER' ? (
                      <section className="flex flex-col">
                        <div className="flex xs:flex-col sm:flex-row w-full gap-2">
                          <div className="flex flex-row gap-2 items-center w-full">
                            <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                              From
                            </p>
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="date"
                              value={
                                rangeDateValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.dateFrom
                              }
                              onChange={(e) => {
                                updateRangeDateValue(
                                  attribute.componentId,
                                  e.target.value,
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateTo ?? ''
                                );
                              }}
                            />
                          </div>
                          <div className="flex flex-row gap-2 items-center w-full">
                            <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                              To
                            </p>
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="date"
                              value={
                                rangeDateValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.dateTo
                              }
                              onChange={(e) => {
                                updateRangeDateValue(
                                  attribute.componentId,
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateFrom ?? '',
                                  e.target.value
                                );
                              }}
                            />
                          </div>
                        </div>
                        {rangeDateValue.find(
                          (item) => item.name === attribute.componentId
                        )?.dateFrom &&
                          rangeDateValue.find(
                            (item) => item.name === attribute.componentId
                          )?.dateTo &&
                          (rangeDateValue?.find(
                            (item) => item.name === attribute.componentId
                          )?.dateFrom ?? '') >
                            (rangeDateValue?.find(
                              (item) => item.name === attribute.componentId
                            )?.dateTo ?? '') && (
                            <p className="text-xs text-error">
                              Tanggal awal tidak boleh lebih dari tanggal akhir!
                            </p>
                          )}
                      </section>
                    ) : attribute.fieldType === 'TEXT_CURRENCY' ? (
                      <div className="flex flex-col">
                        <section className="flex flex-row gap-2 items-center">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            type="text"
                            value={
                              currencyValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value
                            }
                            onChange={(e) => {
                              handleInputChange(
                                e,
                                attribute.componentId,
                                JSON.parse(attribute.config).currency,
                                JSON.parse(attribute.config).max_decimal
                              );
                            }}
                          />
                        </section>
                        {parseInt(
                          currencyValue
                            .find((item) => item.name === attribute.componentId)
                            ?.value.replace(/[^0-9]/g, '') ?? '0'
                        ) <
                          parseInt(JSON.parse(attribute.config).min_value) && (
                          <p className="text-xs text-error">
                            Minimal input adalah{' '}
                            {JSON.parse(attribute.config).min_value}!
                          </p>
                        )}
                      </div>
                    ) : (
                      <input
                        className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        placeholder={JSON.parse(attribute.config).placeholder}
                        name={attribute.name}
                        value={attribute.value ?? ''}
                        onChange={(e) => {
                          const regex = /[^a-zA-Z ]/g;
                          if (attribute.name === 'Nama Anda') {
                            if (!e.target.value.match(regex)) {
                              attribute.value = e.target.value;
                            }
                          } else {
                            attribute.value = e.target.value;
                          }
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          );
                          forceUpdate();
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid xs:grid-cols-1 ${type === 'Karir' ? 'gap-[0.25rem] sm:gap-[1rem]' : 'sm:grid-cols-2 gap-[2rem]'} p-4`}
          >
            <div
              className={`flex flex-col xs:gap-[1.5rem] sm:gap-[2.25rem] font-opensans ${type === 'Karir' && 'sm:gap-[1rem]'}`}
            >
              {leftSide?.map((attribute: Attribute) => (
                <div
                  key={attribute.id}
                  className={`pt-1 ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                >
                  {attribute.name.includes('produk') ? null : (
                    <p className="font-bold">
                      {attribute.name}{' '}
                      <span
                        className={`text-reddist ${!isRequired(attribute.componentId) ? 'hidden' : ''}`}
                      >
                        *
                      </span>
                    </p>
                  )}
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
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                        />
                      ))
                  ) : attribute.fieldType === 'DROPDOWN' ? (
                    attribute.name.includes('produk') ? null : (
                      <select
                        onChange={(e) =>
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          )
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
                    )
                  ) : attribute.name.includes('Email') ? (
                    <div className="flex flex-col justify-between">
                      <input
                        className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                        placeholder={JSON.parse(attribute.config).placeholder}
                        name={attribute.name}
                        onChange={(e) =>
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          )
                        }
                      />
                      {formData.find((i) => i.name === attribute.componentId)
                        ?.value !== '' &&
                        !validateEmail(
                          formData.find((i) => i.name === attribute.componentId)
                            ?.value ?? ''
                        ) && (
                          <p className="text-xs text-error">
                            Masukkan alamat email yang benar!
                          </p>
                        )}
                    </div>
                  ) : attribute.fieldType === 'DOCUMENT' ? (
                    <DocumentForm
                      filename={filename}
                      attribute={attribute}
                      handleUploadChange={(e: any) =>
                        handleUploadChange(attribute.componentId, e)
                      }
                    />
                  ) : (
                    <input
                      className={`w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem] ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                      placeholder={JSON.parse(attribute.config).placeholder}
                      name={attribute.name}
                      value={attribute.value ?? ''}
                      onChange={(e) => {
                        const regexText = /[^a-zA-Z ]/g;
                        const regexNumber = /\D/g;
                        const regexAlphaNumeric = /[^a-zA-Z0-9]/g;

                        const updateForm = () => {
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          );
                          forceUpdate();
                        };

                        // Text
                        if (isText(attribute.name)) {
                          if (!e.target.value.match(regexText)) {
                            attribute.value = e.target.value;
                            updateForm();
                          }
                        }
                        // Numeric
                        else if (isNumeric(attribute.name)) {
                          if (!e.target.value.match(regexNumber)) {
                            attribute.value = e.target.value;
                            updateForm();
                          }
                        }
                        // Alphanumeric
                        else if (isAlphaNumeric(attribute.name)) {
                          if (!e.target.value.match(regexAlphaNumeric)) {
                            attribute.value = e.target.value;
                            updateForm();
                          }
                        } else {
                          attribute.value = e.target.value;
                          updateForm();
                        }
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              className={`flex flex-col xs:gap-[1.5rem] sm:gap-[2.25rem] ${type === 'Karir' && 'sm:gap-[1rem]'}`}
            >
              {rightSide?.map((attribute: Attribute) => {
                return (
                  <div
                    key={attribute.id}
                    className={`pt-1 ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                  >
                    <p className={`font-bold`}>
                      {attribute.name}{' '}
                      <span
                        className={`text-reddist ${!isRequired(attribute.componentId) ? 'hidden' : ''}`}
                      >
                        *
                      </span>
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
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              )
                            }
                          />
                        </div>
                      ))
                    ) : attribute.fieldType === 'DROPDOWN' ? (
                      <select
                        onChange={(e) =>
                          updateFormDataByName(
                            attribute.componentId,
                            e.target.value
                          )
                        }
                        className={`w-full px-[1rem] py-[0.625rem] border ${customFormClassname ?? 'border-purple_dark text-purple_dark'} rounded-xl focus:outline-none focus:border-blue-500`}
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
                                )?.value || option === selectedProduct
                            }
                          >
                            {option}
                          </option>
                        ))}
                        {dataRekomendasi?.map((product: any, index: any) => (
                          <option
                            selected={
                              product.namaProduk ===
                                dataRekomendasi?.find(
                                  (item: any) => item.name === attribute.name
                                )?.value ||
                              product.namaProduk === selectedProduct
                            }
                            key={index}
                            value={product.namaProduk}
                          >
                            {product.namaProduk}
                          </option>
                        ))}
                      </select>
                    ) : attribute.fieldType === 'PHONE_NUMBER' ? (
                      <div className="flex flex-col grow shrink-0">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          maxLength={JSON.parse(attribute.config).max_length}
                          type="text"
                          onChange={(e) => {
                            if (
                              isNumber(e.target.value) ||
                              e.target.value === ''
                            ) {
                              updateFormDataByName(
                                attribute.componentId,
                                e.target.value
                              );
                            }
                            if (
                              e.target.value.length <
                              JSON.parse(attribute.config).min_length
                            ) {
                              updatePhoneNumberValidation(
                                attribute.componentId,
                                false
                              );
                            } else {
                              updatePhoneNumberValidation(
                                attribute.componentId,
                                true
                              );
                            }
                          }}
                          onInput={handleInput}
                          pattern="[0-9]*"
                        />
                        {validPhoneNumber.find(
                          (item) => item.name === attribute.componentId
                        )?.value === false && (
                          <p className="text-xs text-error">
                            Masukkan jumlah nomor telepon yang benar!
                          </p>
                        )}
                      </div>
                    ) : attribute.name.includes('Telepon') ? (
                      <div className="flex grow shrink-0">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder="Masukan nomor telepon"
                          name={attribute.name}
                          type="text"
                          onChange={(e) =>
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            )
                          }
                          onInput={handleInput}
                          pattern="[0-9]*"
                        />
                      </div>
                    ) : attribute.fieldType === 'DOCUMENT' ? (
                      <DocumentForm
                        filename={filename}
                        attribute={attribute}
                        handleUploadChange={(e: any) =>
                          handleUploadChange(attribute.componentId, e)
                        }
                      />
                    ) : attribute.fieldType === 'DATE_PICKER' ? (
                      <section className="flex flex-col">
                        <input
                          className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                          placeholder={JSON.parse(attribute.config).placeholder}
                          name={attribute.name}
                          type="date"
                          value={
                            dateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.value
                          }
                          onChange={(e) => {
                            updateDateValue(
                              attribute.componentId,
                              e.target.value
                            );
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            );
                          }}
                        />
                        {(() => {
                          const validationResult = dateValidation(
                            JSON.parse(attribute.config).date_validation,
                            dateValue.find(
                              (item) => item.name === attribute.componentId
                            )?.value ?? ''
                          );
                          if (
                            formData.find(
                              (item) => item.name === attribute.componentId
                            )?.value &&
                            validationResult !== true
                          ) {
                            return (
                              <p className="text-xs text-error">
                                {validationResult}
                              </p>
                            );
                          }
                          return null;
                        })()}
                      </section>
                    ) : attribute.fieldType === 'RANGE_DATE_PICKER' ? (
                      <section className="flex flex-col">
                        <div className="flex xs:flex-col sm:flex-row w-full gap-2">
                          <div className="flex flex-row gap-2 items-center w-full">
                            <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                              From
                            </p>
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="date"
                              value={
                                rangeDateValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.dateFrom
                              }
                              onChange={(e) => {
                                updateRangeDateValue(
                                  attribute.componentId,
                                  e.target.value,
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateTo ?? ''
                                );

                                updateFormDataByName(
                                  attribute.componentId,
                                  `${
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateFrom
                                  } - ${
                                    rangeDateValue.find(
                                      (item) =>
                                        item.name === attribute.componentId
                                    )?.dateTo
                                  }`
                                );
                              }}
                            />
                          </div>
                          <div className="flex flex-row gap-2 items-center w-full">
                            <p className="text-sm font-bold font-opensans xs:w-[15%] sm:w-auto">
                              To
                            </p>
                            <input
                              className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                              placeholder={
                                JSON.parse(attribute.config).placeholder
                              }
                              name={attribute.name}
                              type="date"
                              value={
                                rangeDateValue.find(
                                  (item) => item.name === attribute.componentId
                                )?.dateTo
                              }
                              onChange={(e) => {
                                updateRangeDateValue(
                                  attribute.componentId,
                                  rangeDateValue.find(
                                    (item) =>
                                      item.name === attribute.componentId
                                  )?.dateFrom ?? '',
                                  e.target.value
                                );
                              }}
                            />
                          </div>
                        </div>
                        {rangeDateValue.find(
                          (item) => item.name === attribute.componentId
                        )?.dateFrom &&
                          rangeDateValue.find(
                            (item) => item.name === attribute.componentId
                          )?.dateTo &&
                          (rangeDateValue?.find(
                            (item) => item.name === attribute.componentId
                          )?.dateFrom ?? '') >
                            (rangeDateValue?.find(
                              (item) => item.name === attribute.componentId
                            )?.dateTo ?? '') && (
                            <p className="text-xs text-error">
                              Tanggal awal tidak boleh lebih dari tanggal akhir!
                            </p>
                          )}
                      </section>
                    ) : attribute.fieldType === 'TEXT_CURRENCY' ? (
                      <div className="flex flex-col">
                        <section className="flex flex-row gap-2 items-center">
                          <input
                            className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
                            placeholder={
                              JSON.parse(attribute.config).placeholder
                            }
                            name={attribute.name}
                            type="text"
                            value={
                              currencyValue.find(
                                (item) => item.name === attribute.componentId
                              )?.value
                            }
                            onChange={(e) => {
                              handleInputChange(
                                e,
                                attribute.componentId,
                                JSON.parse(attribute.config).currency,
                                JSON.parse(attribute.config).max_decimal
                              );
                            }}
                          />
                        </section>
                        {parseInt(
                          currencyValue
                            .find((item) => item.name === attribute.componentId)
                            ?.value.replace(/[^0-9]/g, '') ?? '0'
                        ) <
                          parseInt(JSON.parse(attribute.config).min_value) && (
                          <p className="text-xs text-error">
                            Minimal input adalah{' '}
                            {JSON.parse(attribute.config).min_value}!
                          </p>
                        )}
                      </div>
                    ) : (
                      <input
                        className={`w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem] ${JSON.parse(attribute.config)?.hidden === 'true' ? 'hidden' : ''}`}
                        placeholder={JSON.parse(attribute.config).placeholder}
                        name={attribute.name}
                        value={attribute.value ?? ''}
                        onChange={(e) => {
                          const regexText = /[^a-zA-Z ]/g;
                          const regexNumber = /\D/g;
                          const regexAlphaNumeric = /[^a-zA-Z0-9]/g;

                          const updateForm = () => {
                            updateFormDataByName(
                              attribute.componentId,
                              e.target.value
                            );
                            forceUpdate();
                          };

                          // Text
                          if (isText(attribute.name)) {
                            if (!e.target.value.match(regexText)) {
                              attribute.value = e.target.value;
                              updateForm();
                            }
                          }
                          // Numeric
                          else if (isNumeric(attribute.name)) {
                            if (!e.target.value.match(regexNumber)) {
                              attribute.value = e.target.value;
                              updateForm();
                            }
                          }
                          // Alphanumeric
                          else if (isAlphaNumeric(attribute.name)) {
                            if (!e.target.value.match(regexAlphaNumeric)) {
                              attribute.value = e.target.value;
                              updateForm();
                            }
                          } else {
                            attribute.value = e.target.value;
                            updateForm();
                          }
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return !dataForm ? (
    <>
      <div
        className={`${customFormClassname} flex flex-col self-stretch bg-white p-[2.25rem] xs:gap-[1.5rem] sm:gap-[2.25rem] border border-gray_light border-b-8 rounded-[0.75rem] rounded-b-[0.5rem]`}
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
            <div className="flex grow shrink-0">
              <input
                className="w-full px-[1rem] py-[0.625rem] border border-gray_light rounded-[0.875rem] text-[0.875rem]"
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
