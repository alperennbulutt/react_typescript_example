import { useState } from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import EditedText from './EditedText';

interface ICustomAddButton {
  data?: string;
}
export default function CustomAddButton(props: ICustomAddButton) {
  console.log('aaaaaa', props.data);
  const [data, setData] = useState('');

  const buttonOnClick = () => {
    const newData = props.data;
    if (newData === undefined) {
      console.log('Veri boş geldi');
      setData('boşşş');
    } else {
      setData(newData);
      <EditedText data={newData} />;
    }

    console.log(props.data);
  };
  return (
    <div style={{ position: 'absolute', right: '35px', paddingTop: '10px' }}>
      <Button
        style={{ alignItems: 'end', display: 'flex' }}
        variant="outlined"
        startIcon={<Add />}
        onClick={buttonOnClick}
      >
        Ekle
      </Button>
    </div>
  );
}
