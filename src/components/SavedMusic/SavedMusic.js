import "./SavedMusic.scss"
import bgSaved from "../../assets/images/backgroundSavedBars.svg"

const SavedMusic = () => {
  return (
    <div className="saved">
      <div className="saved">
        <img
          src={bgSaved}
          alt="background-bars"
          className="saved__background--image"
        />
      </div>
    </div>
  );
};

export default SavedMusic;
