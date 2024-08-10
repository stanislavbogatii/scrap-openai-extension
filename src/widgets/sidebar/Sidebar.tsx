import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { IconButton } from '@mui/material';
import { useUnit } from 'effector-react';


import * as S from './styled';


export function Sidebar() {
  // const [profileIds, selectedProfileId, handleAddProfile] = useUnit([
  //   $profileIds,
  //   $selectedRequestProfile,
  //   profileAdded,
  // ]);


  return (
    <S.Wrapper>
      <S.ProfilesWrapper>
        {/* {profileIds.map((profileId: any, index: any) => (
          <SetRequestProfile
            key={profileId.toString()}
            index={index}
            isSelected={profileId === false}
            profile={profileId}
          />
        ))} */}
      </S.ProfilesWrapper>
      <S.IconButtonWrapper>
        <IconButton onClick={() => {}}>
          <ControlPointIcon />
        </IconButton>

        <IconButton onClick={() => {}}>
          //icon
        </IconButton>
      </S.IconButtonWrapper>
    </S.Wrapper>
  );
}
