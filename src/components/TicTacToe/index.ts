import TicTacToeView from './TicTacToeView';
import useTicTacToe from './useTicTacToe';

type TicTacToeViewType = typeof TicTacToeView;

interface InternalTicTacToe extends TicTacToeViewType {
  useTicTacToe: typeof useTicTacToe;
}

const TicTacToe: InternalTicTacToe = TicTacToeView as InternalTicTacToe;
TicTacToe.useTicTacToe = useTicTacToe;

export default TicTacToe;
