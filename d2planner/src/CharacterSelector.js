import './CharacterSelector.css';

const characters = [
  'amazon',
  'assassin',
  'barbarian',
  'druid',
  'necromancer',
  'paladin',
  'sorceress',
];

const CharacterSelector = (props) => {
  if (props.landingPage) {
    return (
      <div className='selector-wrapper'>
        <p>
          Select your class to use your preferred Diablo 2: Resurrected skill planner.
          At the bottom right of the skill planner you choose is an optional link to save your build to bookmarks or share online.
        </p>
        <div className='characterSelectorContainer'>
          {characters.map((character) => {
            const buttonClass = (character === props.character)
              ? 'selectedCharacterButton'
              : 'characterButton';

            return (
              <button
                className={buttonClass}
                key={character}
                onClick={() => props.setCharacter(character)}
              >
                {character}
              </button>
            )
          })}
        </div>
      </div>
    );
  }

  return (
    <div className='characterSelectorContainer'>
      {characters.map((character) => {
        const buttonClass = (character === props.character)
          ? 'selectedCharacterButton'
          : 'characterButton';

        return (
          <button
            className={buttonClass}
            key={character}
            onClick={() => props.setCharacter(character)}
          >
            {character}
          </button>
        )
      })}
    </div>
  );
};

export default CharacterSelector;
