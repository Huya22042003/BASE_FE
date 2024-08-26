import './App.css';
import './assets/style/root.css';
import './assets/style/responsive.css';
import './assets/style/main.css';
import './assets/style/dl_config.css';
import './assets/style/dl_global.css';
import 'animate.css';
import RouterRender from "./router/Router";

function App() {
  return (
    <div className="App">
      <RouterRender></RouterRender>
    </div>
  );
}

export default App;
