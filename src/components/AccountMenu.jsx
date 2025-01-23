
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Divider from '@mui/material/Divider';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from 'react'


 const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(3),
    minWidth: 180,
    color: 'white',
    backgroundColor: 'rgb(17,19,21)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 30,
        color:'#B3B3B3',
        marginRight: theme.spacing(1.5),
      },
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onMouseEnter={handleEnter}
        endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        sx={{backgroundColor: 'transparent'}}
      >
        <PortraitOutlinedIcon /> 
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
          onMouseLeave: handleClose, // Aquí se cierra el menú al salir
        }}
        anchorEl={anchorEl}
        open={open}
    
       
      >
            <MenuItem>
            <PortraitOutlinedIcon /> perfil 1
            </MenuItem>
            <MenuItem>
            <PortraitOutlinedIcon /> perfil 1
            </MenuItem>
            <MenuItem>
            <PortraitOutlinedIcon />   perfil 1
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            <EditOutlinedIcon />
            Administrar pergiles
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            <PortraitOutlinedIcon />
            transferir perfil
            </MenuItem>
        
            <MenuItem onClick={handleClose} disableRipple>
            <PermIdentityOutlinedIcon />
            cuenta
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
            <HelpOutlineOutlinedIcon />
            Centro de ayuda
            </MenuItem>
            <Divider sx={{ my: 0.5, backgroundColor:'#4F4D4C', height: 1 }}/>
            <MenuItem sx={{display: 'flex', justifyContent: 'center', }} >
            Cerrar sesión en Netflix
            </MenuItem>
      </StyledMenu>
    </div>
  );
}
