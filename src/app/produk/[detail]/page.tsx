'use client';
import React, { Suspense, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { IDataContent } from '../page';
import GiveHeartSymbol from '@/assets/symbols/giveheart-symbol.svg';
import HeartChatSymbol from '@/assets/symbols/heartchat-symbol.svg';
import InfoRedSymbol from '@/assets/symbols/info-red-symbol.svg';
import ShieldSymbol from '@/assets/symbols/shield-symbol.svg';

import CardCategoryA from '@/components/molecules/specifics/agi/Cards/CategoryA';
import CategorySideBySideSixCards from '@/components/molecules/specifics/agi/CategorySideBySideSixCards';
import GridContainer from '@/components/molecules/specifics/agi/Containers/Grid';
import SimpleContainer from '@/components/molecules/specifics/agi/Containers/Simple';
import CustomForm from '@/components/molecules/specifics/agi/CustomForm/Index';
import DescriptionCategoryA from '@/components/molecules/specifics/agi/Descriptions/CategoryA';
import FooterCards from '@/components/molecules/specifics/agi/FooterCards';
import FooterInformation from '@/components/molecules/specifics/agi/FooterInformation';
import Hero from '@/components/molecules/specifics/agi/Hero';
import InfoError from '@/components/molecules/specifics/agi/Info/Error';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SuccessModal } from '@/components/molecules/specifics/agi/Modal';
import VideoInformation from '@/components/molecules/specifics/agi/Produk/ContentComponent/VideoInformation';
import { handleGetContentDetail, handleGetContentPage } from '@/services/content-page.api';
import { handleSendEmail } from '@/services/form.api';
import {
  contentDetailTransformer,
  contentStringTransformer,
  handleTransformedContent,
  pageTransformer,
  singleImageTransformer
} from '@/utils/responseTransformer';

const ProdukIndividuDetail = ({ params }: { params: { detail: string } }) => {
  const router = useRouter();
  const [dataRekomendasi, setDataRekomendasi] = useState<IDataContent[]>();
  const [data, setData] = useState<any>({
    titleImage: '',
    footerImage: '',
    footerText: '',
    footerBtnLabel: '',
    footerBtnUrl: '',
    cta41: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta42: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta43: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    },
    cta44: {
      icon: '',
      title: '',
      subtitle: '',
      url: ''
    }
  });
  const [dataDetail, setDataDetail] = useState<any>();
  const [bannerImg, setBannerImg] = useState<any>();

  const [dataForm, setDataForm] = useState<any>();
  const [formId, setFormId] = useState<any>();
  const [formPic, setFormPic] = useState<any>();
  const [formValue, setFormValue] = useState([{ name: '', value: '' }]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [bannerImageFit, setBannerImageFit] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleGetContentPage('Hal-Produk-Detail-AGI');
        setData(data);

        const { content } = pageTransformer(data);
        const titleImage = singleImageTransformer(content['title-image']);
        const footerImage = singleImageTransformer(content['cta1-image']);
        const footerText = contentStringTransformer(content['cta1-teks']);
        const footerBtnLabel = contentStringTransformer(
          content['cta1-label-button']
        );
        const footerBtnUrl = contentStringTransformer(
          content['cta1-link-button']
        );
        const judulForm = contentStringTransformer(content['judul-form']);
        const judulSection = contentStringTransformer(content['judul-section']);
        const kotak1 = {
          judul: contentStringTransformer(content['judul-kotak-1']),
          icon1: singleImageTransformer(content['icon-1-kotak-1']).imageUrl,
          subjudul1: contentStringTransformer(content['subjudul-1-kotak-1']),
          icon2: singleImageTransformer(content['icon-2-kotak-1']).imageUrl,
          subjudul2: contentStringTransformer(content['subjudul-2-kotak-1']),
          icon3: singleImageTransformer(content['icon-3-kotak-1']).imageUrl,
          subjudul3: contentStringTransformer(content['subjudul-3-kotak-1'])
        };
        setBannerImageFit(
          content['banner-image']?.config
            ? JSON.parse(content['banner-image']?.config)?.image_fit
            : ''
        );
        const kotak2 = {
          judul: contentStringTransformer(content['judul-kotak-2'])
        };

        const kotak3 = {
          icon: singleImageTransformer(content['icon-kotak-3']).imageUrl,
          judul: contentStringTransformer(content['judul-kotak-3']),
          btnLabel: contentStringTransformer(content['label-button-kotak-3'])
        };
        const kotak4 = {
          judul: contentStringTransformer(content['judul-kotak-4']),
          btnLabel: contentStringTransformer(content['label-button-kotak-4'])
        };

        const kotak5 = {
          judul: contentStringTransformer(content['judul-kotak-5']),
          icon: singleImageTransformer(content['icon-button-kotak-5']).imageUrl,
          btnLabel: contentStringTransformer(content['label-button-kotak-5']),
          url: contentStringTransformer(content['url-button-kotak-5']),
          footnote: contentStringTransformer(content['footnote-kotak-5'])
        };

        const kotak6 = {
          judul: contentStringTransformer(content['judul-kotak-6']),
          icon: singleImageTransformer(content['icon-kotak-6']).imageUrl
        };

        const cta41 = {
          icon: singleImageTransformer(content['cta4-1-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-1-nama']),
          subtitle: contentStringTransformer(content['cta4-1-label-link']),
          url: contentStringTransformer(content['cta4-1-link'])
        };
        const cta42 = {
          icon: singleImageTransformer(content['cta4-2-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-2-nama']),
          subtitle: contentStringTransformer(content['cta4-2-label-link']),
          url: contentStringTransformer(content['cta4-2-link'])
        };
        const cta43 = {
          icon: singleImageTransformer(content['cta4-3-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-3-nama']),
          subtitle: contentStringTransformer(content['cta4-3-label-link']),
          url: contentStringTransformer(content['cta4-3-link'])
        };
        const cta44 = {
          icon: singleImageTransformer(content['cta4-4-icon']).imageUrl,
          title: contentStringTransformer(content['cta4-4-nama']),
          subtitle: contentStringTransformer(content['cta4-4-label-link']),
          url: contentStringTransformer(content['cta4-4-link'])
        };

        setData({
          titleImage,
          footerImage,
          footerText,
          footerBtnLabel,
          footerBtnUrl,
          judulForm,
          judulSection,
          cta41,
          cta42,
          cta43,
          cta44,
          kotak1,
          kotak2,
          kotak3,
          kotak4,
          kotak5,
          kotak6
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    async function fetchDetailData() {
      const jsonData = await handleGetContentDetail(params.detail);

      const { content } = contentDetailTransformer(jsonData);

      const namaProduk = jsonData.data.title;
      const tags = contentStringTransformer(content['tags']);
      const deskripsiSingkatProduk = contentStringTransformer(
        content['deskripsi-singkat-produk']
      );
      const taglineProduk = contentStringTransformer(content['tagline-produk']);
      const deskripsiLengkapProduk = contentStringTransformer(
        content['deskripsi-lengkap-produk']
      );
      const videoProduk = contentStringTransformer(content['video-produk']);
      const captionVideoProduk = contentStringTransformer(
        content['caption-video-produk']
      );
      const deskripsiKeunggulanProduk = contentStringTransformer(
        content['deskripsi-keunggulan-produk']
      );
      const deskripsiManfaatProduk = contentStringTransformer(
        content['deskripsi-manfaat-produk']
      );
      const deskripsiFiturProduk = contentStringTransformer(
        content['deskripsi-fitur-produk']
      );
      const deskripsiInformasiPenting = contentStringTransformer(
        content['deskripsi-informasi-penting']
      );
      const deskripsiRiplay = contentStringTransformer(
        content['deskripsi-riplay']
      );
      const deskripsiBrosur = contentStringTransformer(
        content['deskripsi-brosur']
      );
      const deskripsiJalurPemasaran = contentStringTransformer(
        content['deskripsi-jalur-pemasaran']
      );
      const jenisProduk = contentStringTransformer(content['jenis-produk']);
      const channel = contentStringTransformer(content['channel']);
      const produkImage = singleImageTransformer(content['produk-image']);
      const kategoriProdukIcon = singleImageTransformer(
        content['kategori-produk-icon']
      );
      const fileRiplay = singleImageTransformer(content['file-riplay']);
      const fileBrosur = singleImageTransformer(content['file-brosur']);
      const formProduk = contentStringTransformer(content['form-produk']);
      const kotak1 = {
        deskripsi1: contentStringTransformer(content['deskripsi-1-kotak-1']),
        deskripsi2: contentStringTransformer(content['deskripsi-2-kotak-1']),
        deskripsi3: contentStringTransformer(content['deskripsi-3-kotak-1'])
      };
      const kotak2 = {
        deskripsi: contentStringTransformer(content['deskripsi-kotak-2'])
      };
      const kotak3 = {
        icon: singleImageTransformer(content['icon-kotak-3']).imageUrl,
        judul: contentStringTransformer(content['judul-kotak-3']),
        btnLabel: contentStringTransformer(content['label-button-kotak-3']),
        url: contentStringTransformer(content['url-button-kotak-3'])
      };
      const kotak4 = {
        deskripsi: contentStringTransformer(content['deskripsi-kotak-4']),
        url: singleImageTransformer(content['file-kotak-4']).imageUrl
      };
      const kotak6 = {
        deskripsi: contentStringTransformer(content['deskripsi-kotak-6'])
      };

      const detailData = {
        namaProduk,
        tags: tags.split(','),
        deskripsiSingkatProduk,
        taglineProduk,
        deskripsiLengkapProduk,
        videoProduk,
        captionVideoProduk,
        deskripsiKeunggulanProduk,
        deskripsiManfaatProduk,
        deskripsiFiturProduk,
        deskripsiInformasiPenting,
        deskripsiRiplay,
        deskripsiBrosur,
        deskripsiJalurPemasaran,
        jenisProduk,
        channel,
        produkImage,
        kategoriProdukIcon,
        fileRiplay,
        fileBrosur,
        categoryTitle: jsonData.data.categories
        .map((item: any) => item.categoryName)
        .join(', '),
        formId: jsonData.data?.formId || formProduk || '6979',
        kotak1,
        kotak2,
        kotak3,
        kotak4,
        kotak6
      };

      setBannerImg(singleImageTransformer(content['produk-image']));
      setDataDetail(detailData);
    }

    const fetchDataList = async () => {
      try {
        const contentResponse = await fetch(`/api/produk/content`);
        const data = await contentResponse.json();
        const newDataContent = data.data.contentDataList.map((item: any) => {
          return {
            ...handleTransformedContent(item.contentData, item.title),
            categoryName: item.categoryName,
            createdAt: item.createdAt,
            id: item.id,
            shortDesc: item.shortDesc,
            title: item.title
          };
        });

        const dataContentValues = newDataContent.map(
          ({
            content,
            categoryName,
            id,
            createdAt,
            shortDesc,
            title
          }: {
            content: any;
            categoryName: string;
            id: number;
            createdAt: string;
            shortDesc: string;
            title: string;
          }) => {
            const namaProduk = title;
            const tags = contentStringTransformer(content['tags']);
            const deskripsiSingkatProduk = shortDesc;
            const deskripsiLengkapProduk = contentStringTransformer(
              content['deskripsi-lengkap-produk']
            );
            const jenisProduk = contentStringTransformer(
              content['jenis-produk']
            );
            const channel = contentStringTransformer(content['channel']);
            const produkImage = singleImageTransformer(content['produk-image']);
            const kategoriProdukIcon = singleImageTransformer(
              content['kategori-produk-icon']
            );

            return {
              categoryName,
              namaProduk,
              tags,
              deskripsiSingkatProduk,
              deskripsiLengkapProduk,
              jenisProduk,
              channel,
              produkImage,
              kategoriProdukIcon,
              id,
              createdAt
            };
          }
        );

        const sortedData = dataContentValues.sort(
          (a: { createdAt: string }, b: { createdAt: string }) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateB - dateA;
          }
        );

        setDataRekomendasi(sortedData);
        return dataContentValues;
      } catch (error: any) {
        throw new Error(error.message);
      }
    };

    fetchData().then();
    fetchDetailData()
      .then()
      .catch(() => []);
    fetchDataList()
      .then()
      .catch(() => []);
  }, []);

  useEffect(() => {
    setFormValue([{ name: '', value: '' }]);
    if (dataDetail?.formId) {
      const fetchDataForm = async () => {
        try {
          const contentResponse = await fetch(
            `/api/form?id=${dataDetail.formId}`
          );
          const dataFormJson = await contentResponse.json();
          setDataForm(dataFormJson.data.attributeList);
          setFormId(dataFormJson.data.id);
          setFormPic(dataFormJson.data.pic);
        } catch (error: any) {
          throw new Error('Error fetching form data: ', error.message);
        }
      };

      fetchDataForm().then();
    }
  }, [dataDetail]);

  let titleImage, footerImage, footerText, footerBtnLabel, footerBtnUrl;

  if (data && data.footerImage) {
    titleImage = data.titleImage.imageUrl;
    footerImage = data.footerImage.imageUrl;
    footerText = data.footerText;
    footerBtnLabel = data.footerBtnLabel;
    footerBtnUrl = data.footerBtnUrl;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const receiveData = (
    data: any,
    isValid: boolean | ((prevState: boolean) => boolean)
  ) => {
    setFormIsValid(isValid);
    setFormValue(data);
  };

  const onSubmitData = async () => {
    const updatedData = formValue.map((item) => {
      if (item.name.includes('produk')) {
        return { ...item, value: dataDetail?.namaProduk };
      }
      return item;
    });

    const queryParams = {
      id: formId,
      pic: formPic,
      placeholderValue: updatedData
    };

    const data = await handleSendEmail(queryParams);
    if (data.status === 'OK') {
      setShowSuccess(true);
    }

    if (data.status !== 'OK') {
      console.error('Error:', data.errors.message);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col">
      <Hero
        title={dataDetail?.categoryTitle || 'Product Title'}
        breadcrumbsData={[
          { title: 'Beranda', href: '/' },
          {
            title: 'Produk',
            href: `/produk/?tab=${dataDetail?.categoryTitle}`
          },
          {
            title: dataDetail?.categoryTitle || 'Product Title',
            href: '#'
          }
        ]}
        bottomImage={bannerImg?.imageUrl}
        imageUrl={titleImage}
        bottomImageFit={bannerImageFit}
      />
      <Suspense>
        <SimpleContainer>
          {!dataDetail || dataDetail?.length === 0 ? (
            <></>
          ) : (
            <>
              <DescriptionCategoryA
                categorySymbol={dataDetail?.kategoriProdukIcon.imageUrl || ''}
                categoryTitle={dataDetail?.categoryTitle || ''}
                productTitle={dataDetail?.namaProduk || ''}
                tags={dataDetail?.tags || []}
                tagLineProduk={dataDetail?.taglineProduk}
                deskripsiLengkapProduk={dataDetail?.deskripsiLengkapProduk}
              />
              {dataDetail.videoProduk !== '' && (
                <VideoInformation
                  url={dataDetail.videoProduk}
                  type={dataDetail.captionVideoProduk}
                />
              )}
              <CategorySideBySideSixCards
                title={data?.kotak1?.judul}
                leftSide={[
                  {
                    symbol: data?.kotak1?.icon1 ?? ShieldSymbol,
                    title: data?.kotak1?.subjudul1 ?? '',
                    description: dataDetail?.kotak1?.deskripsi1
                  },
                  {
                    symbol: data?.kotak1?.icon2 ?? HeartChatSymbol,
                    title: data?.kotak1?.subjudul2 ?? '',
                    description: dataDetail?.kotak1?.deskripsi2
                  },
                  {
                    symbol: data?.kotak1?.icon3 ?? GiveHeartSymbol,
                    title: data?.kotak1?.subjudul3 ?? '',
                    description: dataDetail?.kotak1?.deskripsi3
                  }
                ]}
                rightSide={[
                  {
                    title: data?.kotak2?.judul ?? '',
                    description: dataDetail?.kotak2?.deskripsi ?? ''
                  },
                  {
                    title: dataDetail?.kotak3?.judul ?? '',
                    description: dataDetail?.kotak3?.deskripsi ?? '',
                    hasDownloadButton: false,
                    btnLabel: dataDetail?.kotak3?.btnLabel,
                    urlDownload: dataDetail?.kotak3?.url,
                    icon: dataDetail?.kotak3?.icon
                  },
                  {
                    title: data?.kotak4?.judul ?? '',
                    description: dataDetail?.kotak4?.deskripsi,
                    hasDownloadButton: true,
                    btnLabel: data?.kotak4?.btnLabel,
                    urlDownload: dataDetail?.kotak4?.url
                  }
                ]}
                extraBox={{
                  title: data?.kotak5?.judul ?? '',
                  icon: data?.kotak5?.icon ?? '',
                  buttonTitle: data?.kotak5?.btnLabel ?? '',
                  url: data?.kotak5?.url,
                  footnote: data?.kotak5?.footnote ?? ''
                }}
              />
              {dataDetail?.kotak6 && (
                <InfoError
                  symbol={data?.kotak6?.icon ?? InfoRedSymbol}
                  title={data?.kotak6?.judul ?? ''}
                  description={dataDetail?.kotak6?.deskripsi ?? ''}
                />
              )}
            </>
          )}
        </SimpleContainer>
      </Suspense>
      <SimpleContainer bgColor="purple_superlight" gap="gap-0">
        {dataForm && (
          <CustomForm
            title={data?.judulForm}
            customFormClassname="border-none p-[0px] rounded-[12px]"
            onChange={handleChange}
            dataForm={dataForm}
            resultData={receiveData}
          />
        )}
        <div className="flex flex-col bg-white p-[36px] rounded-b-[8px] border-b-purple_dark border-b-8">
          <div className="accent-purple_dark flex flex-row items-center gap-[12px]">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
            <label className="cursor-pointer" htmlFor="setuju">
              Saya setuju memberikan data pribadi Saya kepada Avrist Life
              Insurance dan telah membaca{' '}
              <span
                className="text-purple_dark font-bold"
                onClick={() => window.open('/keamanan-online', '_blank')}
              >
                Keamanan Online
              </span>{' '}
              Avrist Life Insurance. Selanjutnya, Saya bersedia untuk dihubungi
              oleh Avrist Life Insurance melalui media komunikasi pribadi Saya
              sesuai hari dan jam operasional yang berlaku di Avrist Life
              Insurance.
            </label>
          </div>
          <div className="mt-[24px] md:mt-[36px] flex flex-col md:flex-row md:justify-end md:items-center">
            <button
              type="submit"
              disabled={formIsValid ? (isChecked ? false : true) : true}
              onClick={() => onSubmitData()}
              className={`${formIsValid ? (isChecked ? 'bg-purple_dark' : 'bg-dark-grey') : 'bg-dark-grey'} text-white h-[44px] md:h-[64px] w-full md:w-[132px] rounded-lg mt-[12px] md:mt-0`}
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </SimpleContainer>
      <GridContainer
        gridCols={1}
        gridColsSm={3}
        px="32px"
        pxSm="136px"
        py="5rem"
        pySm="5rem"
        textTitle={data?.judulSection ?? 'Rekomendasi Produk Lainnya'}
      >
        {dataRekomendasi &&
          dataRekomendasi.length !== 0 &&
          dataRekomendasi
            .slice(0, 3)
            .map((item, index) => (
              <CardCategoryA
                key={index}
                symbol={item.kategoriProdukIcon.imageUrl}
                title={item.categoryName || ''}
                summary={item.namaProduk}
                description={item.deskripsiSingkatProduk}
                tags={item.tags.split(',')}
                href={`/produk/${item.id}`}
                imageProduk={item.produkImage.imageUrl}
              />
            ))}
      </GridContainer>
      <FooterInformation
        title={
          <p
            className="sm:text-[3.5rem] xs:text-[2.25rem] text-center sm:text-left line-clamp-3"
            dangerouslySetInnerHTML={{ __html: footerText ?? '' }}
          />
        }
        buttonTitle={footerBtnLabel}
        image={footerImage}
        href={footerBtnUrl}
      />
      <FooterCards
        cards={[
          {
            title: data.cta41.title,
            icon: data.cta41.icon,
            subtitle: data.cta41.subtitle,
            href: data.cta41.url
          },
          {
            title: data.cta42.title,
            icon: data.cta42.icon,
            subtitle: data.cta42.subtitle,
            href: data.cta42.url
          },
          {
            title: data.cta43.title,
            icon: data.cta43.icon,
            subtitle: data.cta43.subtitle,
            href: data.cta43.url
          },
          {
            title: data.cta44.title,
            icon: data.cta44.icon,
            subtitle: data.cta44.subtitle,
            href: data.cta44.url
          }
        ]}
      />
      <div className="absolute">
        <SuccessModal
          show={showSuccess}
          onClose={() => {
            setShowSuccess(false);
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
};

export default ProdukIndividuDetail;
