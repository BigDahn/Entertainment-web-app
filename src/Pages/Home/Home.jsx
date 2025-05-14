import { useEntertainment } from "../../context/Entertainment";

function Home() {
  const { data, trending } = useEntertainment();

  const Recommended = data.filter((s) => !s.isTrending);

  console.log(Recommended);
  return (
    <main className="grid gap-2">
      <div className="max-h-[295px] overflow-hidden grid gap-3">
        <h2 className="font-Outfit text-white text-[32px]">Trending</h2>
        <div className="grid grid-cols-[450px_450px_500px]  gap-5 overflow-hidden ">
          {trending.map((s, i) => {
            const { title, year, rating, category, thumbnail, isBookmarked } =
              s;
            const { trending } = thumbnail;
            console.log(trending);
            return (
              <div key={i} className="font-Outfit text-white ">
                <div className="relative">
                  <img
                    src={trending.large}
                    className="w-[470px] h-[230px] rounded-lg "
                  />
                </div>

                <div className="relative bottom-16 flex flex-col justify-center items-start px-6 overflow-hidden max-h-[295px] ">
                  <div className="flex gap-1 items-start">
                    {" "}
                    <h4 className="text-[15px]">{year} &#46; </h4>
                    <h4 className="flex items-center gap-1 text-[15px] font-medium">
                      {category === "Movie" ? (
                        <img
                          src="/assets/icon-category-movie.svg"
                          className="w-[12px] h-[12px]"
                        />
                      ) : (
                        <img
                          src="/assets/icon-category-tv.svg"
                          className="w-[12px] h-[12px]"
                        />
                      )}
                      {category} &#46;
                    </h4>
                    <h4 className="text-[15px]">{rating}</h4>
                  </div>
                  <h2 className="text-[24px]">{title}</h2>
                </div>
                <div className="flex flex-col items-end  px-3  justify-end relative top-[-17rem]">
                  <button className="h-8 w-8 bg-black opacity-35 rounded-full flex items-center justify-center     cursor-pointer ">
                    {isBookmarked ? (
                      <img src="/assets/icon-bookmark-full.svg" />
                    ) : (
                      <img src="/assets/icon-bookmark-empty.svg" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <h3 className="font-Outfit font-light text-white text-[32px]">
          Recommended for you
        </h3>
        <div className="grid grid-cols-4 gap-7 py-4">
          {Recommended.map((s, i) => {
            const { title, year, rating, category, thumbnail } = s;
            const { regular } = thumbnail;
            console.log(regular);
            return (
              <div key={i} className="flex flex-col gap-1">
                <img
                  src={regular.large}
                  className="w-[280px] h-[174px] rounded-md"
                />
                <div className="flex flex-col justify-center items-start  overflow-hidden max-h-[295px] font-Outfit font-light text-white ">
                  <div className="flex gap-1 items-start">
                    {" "}
                    <h4 className="text-[15px]">{year} &#46; </h4>
                    <h4 className="flex items-center gap-1 text-[15px] font-medium">
                      {category === "Movie" ? (
                        <img
                          src="/assets/icon-category-movie.svg"
                          className="w-[12px] h-[12px]"
                        />
                      ) : (
                        <img
                          src="/assets/icon-category-tv.svg"
                          className="w-[12px] h-[12px]"
                        />
                      )}
                      {category} &#46;
                    </h4>
                    <h4 className="text-[15px]">{rating}</h4>
                  </div>
                  <h2 className="text-[18px]">{title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
