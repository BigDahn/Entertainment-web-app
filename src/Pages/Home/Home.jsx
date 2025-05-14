import { useEntertainment } from "../../context/Entertainment";

function Home() {
  const { data, trending } = useEntertainment();

  console.log(trending);
  return (
    <div className="max-h-[295px] overflow-hidden grid gap-3">
      <h2 className="font-Outfit text-white text-[32px]">Trending</h2>
      <div className="grid grid-cols-3  gap-5 overflow-hidden ">
        {trending.map((s, i) => {
          const { title, year, rating, category, thumbnail } = s;
          const { trending } = thumbnail;
          console.log(trending);
          return (
            <div key={i}>
              <img
                src={trending.large}
                className="w-[470px] h-[230px] rounded-lg"
              />
              <h4>{year}</h4>
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
