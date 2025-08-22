import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

interface Props {
  title: string;
  game: string;
  date: string;
  prize: number;
  image: string;
  isPublic: boolean;
  svgUrl?: string;
}

const TournamentCard = ({
  title,
  game,
  date,
  prize,
  image,
  isPublic,
  svgUrl,
}: Props) => (
  <div className="relative mb-4">
    <div className="absolute left-4 bottom-0 -mb-[5%] z-30 ">
      <div className="relative cursor-pointer">
        <Image
          src="/images/btn.svg"
          alt="btn"
          width={170}
          height={30}
          className="object-contain"
        />
        <div className="absolute text-sm whitespace-nowrap font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Join Tournament
        </div>
      </div>
    </div>
    <div className="bg-[#151E2A] clip-tournament backdrop-blur-[80px] text-white  overflow-hidden shadow-md p-2 relative">
      <div className="w-full h-35 overflow-hidden relative">
        {" "}
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="object-fill w-full h-full z-10 shrink-0"
        />
        <div className="text-xs px-2 py-1 bg-[#444444] flex items-center mt-2 justify-center rounded absolute right-2 bottom-2 border border-white">
          Public
        </div>
        <div className="text-xs px-2 py-1 bg-[#444444] flex items-center justify-center gap-2 rounded absolute left-2 top-2 border border-white">
          <FaRegClock /> <span className="mt-1">12:00</span>{" "}
        </div>
      </div>
      <div className="px-4 py-2 space-y-2 ">
        <div className="text-sm text-[#90A7CB] flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <div>
              <CiCalendarDate size={20} />
            </div>
            <div className="mt-1">30 Jun</div>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <CiCalendarDate size={20} />
            </div>
            <div className="mt-1">500</div>
          </div>
          <div className="mt-1">CS GO</div>
        </div>
        <h2 className="text-lg lg:text-xl xl:text-2xl font-grifter font-bold">
          {title}
        </h2>
        <p className="text-sm text-[#90A7CB]">
          Lorem ipsum dolor sit amet cons ectetur. Aliquet cursus mi fermentum
          neque varius morbi dictum in eu.
        </p>
        <div className="flex justify-end mt-4">
          <button className="text-base text-gray-400 font-grifter underline font-bold hover:text-white cursor-pointer">
            More Info
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TournamentCard;
