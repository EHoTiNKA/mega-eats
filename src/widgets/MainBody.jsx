import "./styles/MainBody.css";
import Search from "../components/Search";
import ContentColumn from "../components/ContentColumn";
import MainCard from "../components/MainCard";
import PosterMak from "../assets/posterMak.svg";
import Eda1 from "../assets/eda1.svg";
import Eda2 from "../assets/eda2.svg";
import Brok from "../assets/brokol.jpg";

const MainBody = () => {
  return (
    <div className="body">
      <ContentColumn>
        <Search />
        <p className="p1">Рестораны в Москве</p>
        <div className="cardsContent">
          <div className="card">
            <MainCard
              poster={PosterMak}
              name="Макдональдс - Газетный"
              text1="₽ • Бургеры"
              text2="25-35 мин"
            />
          </div>
          <div className="card">
            <MainCard
              poster={Eda1}
              name="DimSum & Co — ЦДМ"
              text1="₽ • Японская • Китайская • Азиатская"
              text2="40 - 50 мин"
            />
          </div>
          <div className="card">
            <MainCard
              poster={Eda2}
              name="Bar BQ Cafe — Манежная"
              text1="₽ • Европейская"
              text2="30 - 40 мин"
            />
          </div>
        </div>
      </ContentColumn>
    </div>
  );
};

export default MainBody;
