import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Axios from 'axios';
import {
  saveApiData,
  saveData,
  getDataFromApi,
  saveDataToApi
} from '../../redux/slices/pageTwoSlice';

import { PATH_DASHBOARD } from '../../routes/paths';
import { dispatch } from '../../redux/store';

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
  const [open, setOpen] = useState(false);
  const [apiData, setApiData] = useState('');
  const [denemeList, setDenemeList] = useState([]);

  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const backendSaveData = async () => {
    setOpen(false);

    dispatch(saveData(props.data === undefined ? '' : props.data));
    localStorage.setItem('pageTwoValue', props.data);

    // vasiyeti veritabanına kayıt eder
    await saveDataToApi(
      props.data === undefined ? 'içerik girilmedi' : props.data
    );
    // route and send props
    history.push({
      pathname: PATH_DASHBOARD.general.pageTwo,
      state: {
        keyDeneme: props.data === undefined ? '' : props.data
      }
    });

    // history.push(PATH_DASHBOARD.general.pageTwo);
  };

  const showDataOnDialog = () => {
    setOpen(false);

    // fetch ile istek atabiliriz
    // fetch('http://localhost:3000/posts')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDenemeList(data);
    //     console.log('data geldii', data);
    //   });

    console.log('veri gelecekmiş ', props.data);
    dispatch(saveData(props.data === undefined ? '' : props.data));
    localStorage.setItem('pageTwoValue', props.data);

    // apiden gelen veriyi global state'e kayıt eden method
    getDataFromApi(4);

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
            Local'e Kaydet
          </Button>

          <Button autoFocus onClick={backendSaveData}>
            Veritabanına Kaydet
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
