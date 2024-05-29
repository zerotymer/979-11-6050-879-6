import ColorBox from "./conponents/ColorBox";
import SelectColors from "./conponents/SelectColors";
import { ColorProvider } from "./contexts/color";


const App = () => {
  return (
    <ColorProvider>
      <div>
          <SelectColors />
          <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;