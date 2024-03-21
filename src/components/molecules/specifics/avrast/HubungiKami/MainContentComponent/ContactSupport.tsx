import { DividerPurple } from './Divider';

const phone =
  'https://s3-alpha-sig.figma.com/img/e53e/a990/149fd9a2e6258131a030aa607f4a7fd3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ai1p4FYU-S7jTiUSvtCNRIC35f7y58AvUUMOlC2D7rvV3oOoP~ynd5o4ohPZp7aoYSdCud09Xkh6gDlm6i4ouyMmH2mSUrjxbNe5KgKvo2n-wCMOVlUCrwpsQGK6CkFcrAYtTVpi1K9-CS0jnDmyRYL7nnKJYDUnucmzicJVEhiW4YiBqWHsh3DUex0xE9yAxM~DoioTBtdm2se6Xmi-637zyGf2neEvvgrg9iirZNvn8tF0Jjm1B8RhlGqbReYS-jI4Djq99s9IvDgTZO247DivCzQS2lY7KqicfKH~4zJ0dy00htOrqPzi1GTcMAi-ggIPggc9LN2ivN0YnK32Jw__';
const cs =
  'https://s3-alpha-sig.figma.com/img/f4e0/acce/b2f53690113f06fbade89ce61c73b026?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K-OzqLL0R503Fb~8LBOUCM4dJXX7sQIRzDZPBA3u2GbIQjpiIBjdQlcnbjDyadKl0TabaoTjjxRlSyxXIxovqx3cmlbaCZWbifIUejtGta-nbTSDQNeWtkQuIefUl5~tv7T17eFWCtMBw02eNwkGVjcG4DtVBc~fM0VHD~UmEn9auqEmoC5FD1zhL4KXDEKsYx3Fi5Vn1HBdh~-s8ZCBGpxSxnicZxFZoyMz1zhbRxqbl4gCDRnWw~~JMhB7QqJ2DN6A7exW7n7yENkZE88hoMsiT8HyLNzPfZIzrQ4yO~FBnBBF~afSMRvSBAXl~V8kSR~NdG9Lq5YP~-9pa3wPFg__';
const email =
  'https://s3-alpha-sig.figma.com/img/739a/d716/53e25d6c64f62837b9102463edb6809e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Id-3PUhEU9tQX4HA~t6bFfnk42f8YIN8cu8JC2skLfQjW9Ej1eAeIohS5UEf4i9bUHl3hwG3YYb23pmIPv9yNpNcwKEpERiGPmEvT1CfYPtSKq9YGArx-0ecncjB20SfDIl0tkSixMuY03eXAbEbCwqSEt9vjLBhCkzNqe1weZ7UYo~ls-RIyZZ-NS88MwM5RmW49341XqbpGueuHkbF5eEi0uKzPqc2lu7fI5YFssuK4wNH31t1B~2Mmu2c-ZZJEOhzsGZ7zfFm6n4WZvU4ZOUB2rnNbDAxeDaXLtlTEfLr3tLCugBHY3wUSUDIHplKVOKfqVspqO~qvdENtNgBAw__';
const clock =
  'https://s3-alpha-sig.figma.com/img/8c4c/dc90/8bdcd59b63cd6804c3b292031bce0935?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPZjPCwz5etLfwVfQ8PopebcdDYW~8pmwF43df9lE759aXwFKAivqAyCYc8c7w~c7XeOQ3dIwdb8wW4zAkeB6jl7fuDvk88u9Csqqx-L6wCwhLN6MJEGeeWn9Lm6CXEvaIcrR6WZXO5wfgm9jJ6dKzmW0nPBCJx34nHK4uUjsZIv~6mBoJ5y3iWdWuFem~k0hZvTYPviPIY1QEP9FEXfkZgjdphkZx0LsHuBYPJE4mT~d9Hs9h8lrQsub6r1nVoHoSrklbJvFbsTQgDOfMx~CaGTWnVD2IPyY1nMsveGSO0~gPk-H2zZLSC6cs6P93Oeicno~4fYCfYu5Nx2G~fkag__';

export const ContactSupport = () => {
  return (
    <div className="mt-[80px] mx-[136px] grid grid-cols-5 gap-6">
      <div className="h-[323px] col-span-2 border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="p-[36px]">
          <img src={phone} alt="phone" width={100} height={100} />
          <p className="font-karla font-extrabold text-[48px] leading-[50px] mt-[24px]">
            Hubungi Kami
          </p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px]">
          <img src={cs} alt="cs" width={100} height={100} />
          <p className="mt-[24px]">Layanan Nasabah</p>
          <p className="text-purple_dark">021 5789 8188</p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px]">
          <img src={email} alt="email" width={100} height={100} />
          <p className="mt-[24px]">Email</p>
          <p className="text-purple_dark">customer@avrist.com</p>
        </div>
        <DividerPurple />
      </div>
      <div className="h-[323px]  border bg-white rounded-2xl border-gray_light overflow-hidden flex flex-col justify-between">
        <div className="h-full font-opensans font-bold text-[20px] flex flex-col items-center mt-[36px] text-center">
          <img src={clock} alt="clock" width={100} height={100} />
          <p className="mt-[24px]">Waktu Operasional</p>
          <p className="text-purple_dark">Senin - Jumat, 08.00 - 17.00 WIB</p>
        </div>
        <DividerPurple />
      </div>
    </div>
  );
};
