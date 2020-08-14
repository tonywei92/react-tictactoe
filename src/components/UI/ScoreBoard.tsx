/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'twin.macro';

interface Score {
  label: string;
  score: number;
}

interface Props {
  scores?: Score[];
}

const ScoreBoard: React.FC<Props> = (props) => {
  const { scores = [] } = props;
  return (
    <div css={tw`flex mb-4 md:mb-8 bg-white shadow border rounded`}>
      {scores.map((score) => (
        <div
          key={score.label}
          tw="px-2 border-r w-24 flex p-2 flex-col items-center"
        >
          <div tw="text-indigo-700 text-xl md:text-4xl font-bold">
            {score.score}
          </div>
          <div tw="text-gray-600 font-bold text-xs">{score.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
