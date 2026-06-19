const CharacterModel = () => {
  return (
    <div className="character-container">
      <div className="character-model character-portrait-model">
        <div className="character-rim"></div>
        <div className="character-portrait-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/mahin-avatar.jpg`}
            alt="Mahin Ahsan"
            className="character-portrait"
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterModel;
