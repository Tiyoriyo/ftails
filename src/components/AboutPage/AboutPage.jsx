import React, { useState } from 'react';
import InitialAbout from '../InitialAbout/InitialAbout';
import StoryContent from '../StoryContent/StoryContent';
import MeetTeam from '../MeetTeam/MeetTeam';

function AboutPage() {
  const [state, setState] = useState('initial');

  return (
    <div className="flex justify-center w-full">
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
        <MeetTeam />
      )}
    </div>
  );
}

export default AboutPage;
