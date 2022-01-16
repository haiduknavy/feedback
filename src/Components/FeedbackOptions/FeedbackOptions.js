import { Btn, FeedbackList, FeedbacItem } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, clickGood }) {
  return (
    <FeedbackList>
      {options.map((item) => (
        <FeedbacItem key={item}>
          <Btn type="button" onClick={() => clickGood(item)}>
            {item}
          </Btn>
        </FeedbacItem>
      ))}
    </FeedbackList>
  );
}
