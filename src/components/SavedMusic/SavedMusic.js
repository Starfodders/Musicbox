import "./SavedMusic.scss";

const SavedMusic = () => {
  return (
    <div className="saved">
      <div className="saved__container">
        <div className="saved__block">
          <div className="saved__block--left">
            <p>Song Name</p>
            <p>Created at (timestamp)</p>
            <p>Created by (name)</p>
          </div>
          <div className="saved__block--right">
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedMusic;
