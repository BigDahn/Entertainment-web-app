import { useEntertainment } from "../../context/Entertainment";
import Tvseries from "./Tvseries";
function SeriesList() {
  const { series } = useEntertainment();

  return (
    <>
      <div className="grid gap-3">
        {series.length > 0 && (
          <h3 className="font-Outfit font-light text-[20px] md:text-[32px] text-white">
            Tv Series
          </h3>
        )}
        <Tvseries />
      </div>
    </>
  );
}

export default SeriesList;
