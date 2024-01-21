import { FC, useId, useState } from 'react';
import { Button, ButtonGroup, IconButton, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IPopup {
  edit: () => void;
  deleteLine: () => void;
}
export const PopoverPopup: FC<IPopup> = ({ edit, deleteLine }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const id = useId();
  return (
    <>
      <IconButton
        aria-label="more"
        id={`long-button-${id}`}
        aria-controls={open ? `long-menu-${id}` : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`long-menu-${id}`}
        MenuListProps={{
          'aria-labelledby': `long-button-${id}`,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <ButtonGroup>
          <>
            <Button component="button" onClick={edit} type="button">
              Edit
            </Button>
            <Button color="warning" type="button" onClick={deleteLine}>
              Delete
            </Button>
          </>
        </ButtonGroup>
      </Menu>
    </>
    // <PopupState variant="popover" popupId="demo-popup-popover">
    //   {(popupState) => (
    //     <>
    //       <StyledIconButton
    //         size="large"
    //         aria-label="display more actions"
    //         edge="end"
    //         {...bindTrigger(popupState)}
    //       >
    //         <MoreIcon />
    //       </StyledIconButton>
    //       {/* <Popover
    //       {...bindPopover(popupState)}
    //       anchorOrigin={{
    //         vertical: 'bottom',
    //         horizontal: 'center',
    //       }}
    //       transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'center',
    //       }}
    //     >
    //       <ButtonGroup>
    //         <>
    //           <Button component="button" onClick={edit} type="button">
    //             Edit
    //           </Button>
    //           <Button color="warning" type="button" onClick={deleteLine}>
    //             Delete
    //           </Button>
    //         </>
    //       </ButtonGroup>
    //     </Popover> */}
    //     </>
    //   )}
    // </PopupState>
  );
};

export default PopoverPopup;
