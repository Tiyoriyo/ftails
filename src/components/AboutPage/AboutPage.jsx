import React, { useState } from 'react';
import InitialAbout from '../InitialAbout/InitialAbout';
import StoryContent from '../StoryContent/StoryContent';
import MeetTeam from '../MeetTeam/MeetTeam';

function AboutPage({
  mainStateChanger,
}) {
  const [state, setState] = useState('initial');

  return (
    <div className="flex justify-center w-full items-center">
      {state === 'initial' && (
        <InitialAbout
          stateChanger={setState}
        />
      )}
      {state === 'story' && (
        <StoryContent
          stateChanger={setState}
        />
      )}
      {state === 'meetteam' && (
        <MeetTeam
          mainStateChanger={mainStateChanger}
        />
      )}
    </div>
  );
}

export default AboutPage;
