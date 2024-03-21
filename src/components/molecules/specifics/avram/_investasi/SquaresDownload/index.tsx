import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon";

const SquaresDownload = () => {
  return (
    <div className="w-full flex flex-col self-stretch items-center justify-center md:px-20">
      <div className="grid md:grid-cols-4 xs:grid-cols-1 bg-white p-5 rounded-lg gap-2">
        <div className="p-6 bg-purple_verylight/[.04] border border-gray-200 rounded-lg shadow gap-4">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Dokumen Info Produk
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 text-xs">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="w-full flex items-center justify-center mt-10">
            <Button title="Unduh Dokumen" customButtonClass="bg-white" />
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-2">
          <Icon
            width={32}
            height={32}
            name="downloadIcon"
            color="purple_verylight"
          />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Fun Fact Sheet
          </h5>
          <p className="mb-3 font-normal text-xs text-gray-500">
            477.92 KB
          </p>
          <p className="mb-3 font-normal text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
          >
            Download
            <Icon
              width={16}
              height={16}
              name="chevronRight"
              color="purple_dark"
            />
          </a>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-2">
          <Icon
            width={32}
            height={32}
            name="downloadIcon"
            color="purple_verylight"
          />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Prospectus
          </h5>
          <p className="mb-3 font-normal text-xs text-gray-500">
            299.23 KB
          </p>
          <p className="mb-3 font-normal text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
          >
            Download
            <Icon
              width={16}
              height={16}
              name="chevronRight"
              color="purple_dark"
            />
          </a>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-2">
          <Icon
            width={32}
            height={32}
            name="downloadIcon"
            color="purple_verylight"
          />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Info Produk
          </h5>
          <p className="mb-3 font-normal text-xs text-gray-500">
            432.12 KB
          </p>
          <p className="mb-3 font-normal text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-purple_dark text-xs font-bold gap-2"
          >
            Download
            <Icon
              width={16}
              height={16}
              name="chevronRight"
              color="purple_dark"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SquaresDownload;
