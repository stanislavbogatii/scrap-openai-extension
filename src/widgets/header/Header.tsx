import { Add, DeleteOutline, FileDownload, FileUpload, MoreVert } from '@mui/icons-material';
import { IconButton, MenuItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import * as S from './styled';

export function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddProfile = () => {
    // profileAdded();
    handleClose();
  };

  const handleOpenImportModal = () => {
    // importModalOpened();
    handleClose();
  };

  const handleRemoveProfile = () => {
    // selectedProfileRemoved();
    handleClose();
  };

  const handleExportModalOpened = () => {
    // exportModalOpened();
    handleClose();
  };

//   const bgColor = useMemo(
//     () => profileColorList[selectedProfileIndex % profileColorList.length],
//     [selectedProfileIndex],
//   );

  return (
    <>
      <S.Wrapper bgColor='gray'>
        {/* <ProfileNameField key={selectedProfileIndex} /> */}
        <S.Actions>
          {/* <CopyActiveRequestHeaders /> */}
          {/* <PauseAllRequestHeaders /> */}
          <IconButton sx={{ color: grey[100] }} size='small' onClick={handleOpen}>
            <MoreVert />
          </IconButton>
        </S.Actions>
      </S.Wrapper>
      <S.StyledMenu anchorEl={anchorEl} open={isMenuOpen} onClose={handleClose}>
        <MenuItem key={'add'} onClick={handleAddProfile}>
          <Typography variant='body2'>Add profile</Typography>
          <Add />
        </MenuItem>
        <MenuItem key={'import'} onClick={handleOpenImportModal}>
          <Typography variant='body2'>Import profile</Typography>
          <FileDownload />
        </MenuItem>
        <MenuItem key={'export'} onClick={handleExportModalOpened}>
          <Typography variant='body2'>Export/share profile</Typography>
          <FileUpload />
        </MenuItem>
        <MenuItem key={'remove'} onClick={handleRemoveProfile}>
          <Typography variant='body2'>Delete profile</Typography>
          <DeleteOutline />
        </MenuItem>
      </S.StyledMenu>
    </>
  );
}
