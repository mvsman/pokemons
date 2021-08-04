import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CardBack = ({ items }) => {
  const statsArr = items.stats.map((stat) => ({
    name: stat.stat.name,
    base: stat.base_stat,
  }));

  const swapStats = (pos1, pos2, statsArr) => {
    const temp = statsArr[pos1];
    statsArr[pos1] = statsArr[pos2];
    statsArr[pos2] = temp;
    return statsArr;
  };
  const swappedArr = swapStats(0, 4, statsArr);

  return (
    <>
      <div className="cardback__info">
        <div>Height: {items.height / 10}m</div>
        <div>Weight: {items.weight / 10}kg</div>
      </div>
      <div className="cardback__radar">
        <RadarChart width={200} height={150} cx="50%" cy="50%" outerRadius="80%" data={swappedArr}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="base" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
        </RadarChart>
      </div>
    </>
  );
};

export default CardBack;
