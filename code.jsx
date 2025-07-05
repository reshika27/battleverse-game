// frontend/src/components/BattleGrid.js
import { useWeb3 } from "../contexts/Web3Context";

export default function BattleGrid() {
  const { account } = useWeb3();
  
  return (
    <div className="grid grid-cols-5 gap-1">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="cell bg-gray-800 hover:bg-blue-900">
          {account && <button onClick={() => moveUnit(i)}>Move</button>}
        </div>
      ))}
    </div>
  );
}
