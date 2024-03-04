import React, { useState } from 'react';
import InitialAbout from '../InitialAbout/InitialAbout';
import StoryContent from '../StoryContent/StoryContent';
import MeetTeam from '../MeetTeam/MeetTeam';
import SelectTeam from '../SelectTeam/SelectTeam';

function AboutPage({
  mainStateChanger,
}) {
  const [state, setState] = useState('story');
  const [member, setMember] = useState(null);

  const stateChanger = (member) => {
    setState('meetteam');
    setMember(member);
  };

  return (
    <div className="flex justify-center w-full h-full">
      {/* {state === 'initial' && (
        <InitialAbout
          stateChanger={setState}
        />
      )} */}
      {state === 'story' && (
        <StoryContent
          stateChanger={setState}
        />
      )}
      {state === 'selectteam' && (
        <SelectTeam
          stateChanger={stateChanger}
        />
      )}
      {state === 'meetteam' && (
        <MeetTeam
          member={member}
          stateChanger={setMember}
        />
      )}
      <div className="absolute flex justify-center bottom-0 -z-20 w-screen opacity-50 animate-fadein50">
        <img src="./grassbackground.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage;
