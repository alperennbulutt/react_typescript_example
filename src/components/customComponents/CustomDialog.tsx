import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveData } from '../../redux/slices/pageTwoSlice';

import { PATH_DASHBOARD } from '../../routes/paths';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

interface ICustomizedDialogs {
  data: string;
}

export default function CustomizedDialogs(props: ICustomizedDialogs) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const showDataOnDialog = () => {
    setOpen(false);
    console.log('veri gelecek miş ', props.data);
    dispatch(saveData(props.data === undefined ? '' : props.data));
    localStorage.setItem('pageTwoValue', props.data);

    // route and send props
    history.push({
      pathname: PATH_DASHBOARD.general.pageTwo,
      state: {
        keyDeneme: props.data === undefined ? '' : props.data
      }
    });

    // history.push(PATH_DASHBOARD.general.pageTwo);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Vasiyet'i Kaydet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Typography gutterBottom>{props.data}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={showDataOnDialog}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
