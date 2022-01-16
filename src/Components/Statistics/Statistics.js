import { StatisticsList } from "./Statistics.styled";

export default function Statistics({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
}) {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total: {total} </li>
      <li>
        Positive feedback:
        {total > 0 && positivePercentage}%
      </li>
    </StatisticsList>
  );
}
