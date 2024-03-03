import React, { useState } from 'react';
import InitialAbout from '../InitialAbout/InitialAbout';
import StoryContent from '../StoryContent/StoryContent';
import MeetTeam from '../MeetTeam/MeetTeam';

function AboutPage({
  mainStateChanger,
}) {
  const [state, setState] = useState('initial');

  return (
    <div className="flex justify-center w-full h-full">
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
      <div className="absolute flex justify-center bottom-0 -z-20 w-screen opacity-50">
        <img src="./grassbackground.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
