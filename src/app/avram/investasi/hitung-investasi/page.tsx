import Disclaimer from "@/components/molecules/specifics/avram/_investasi/Disclaimer";
import Kalkulator from "@/components/molecules/specifics/avram/_investasi/Kalkulator";

const HitungInvestasi = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-purple_dark/[.03]">
      {/* KALKULATOR */}
      <Kalkulator />

      {/* DISCLAIMER */}
      <Disclaimer />
    </div>
  )
}

export default HitungInvestasi;
