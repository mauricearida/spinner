import "./App.css";

function App() {
  return (
    <>
      <div id="mainLoader">
        <img src="assets/assets/loader.png" alt="loader" />
        <br />
        <span>0</span>
      </div>

      <div id="mainHolder">
        <div id="notSupportHolder">
          <div className="notSupport">
            YOUR BROWSER ISN'T SUPPORTED.
            <br />
            PLEASE UPDATE YOUR BROWSER IN ORDER TO RUN THE GAME
          </div>
        </div>

        <div id="rotateHolder">
          <div className="mobileRotate">
            <div className="rotateDesc">
              <div className="rotateImg">
                <img src="assets/assets/rotate.png" alt="rotate" />
              </div>
              Rotate your device <br />
              to landscape
            </div>
          </div>
        </div>

        <div id="canvasHolder">
          <canvas id="gameCanvas" width="768" height="1024"></canvas>
        </div>
      </div>
    </>
  );
}

export default App;
