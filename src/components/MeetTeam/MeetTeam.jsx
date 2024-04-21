import React, { useState } from 'react';
import Switch from '../Switch/Switch';
import TeamMember from '../TeamMember/TeamMember';

function MeetTeam() {
  const [state, setState] = useState('Paulina');

  return (
    <div className="relative flex flex-col flex-auto gap-10 items-center mt-16 w-[100%] font-sulphur animate-fadein">
      <Switch
        state={state}
        stateController={setState}
        header1="Paulina"
        header2="Meghan"
      />

      <TeamMember memberName={state} />

    </div>
  );
}

export default MeetTeam;
