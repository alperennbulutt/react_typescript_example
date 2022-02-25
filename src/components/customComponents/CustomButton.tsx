import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

interface ICustomAddButton {
  data: string;
}
export default function CustomAddButton(props: any) {
  console.log('aaaaaa', props.data);
  return (
    <div style={{ position: 'absolute', right: '35px', paddingTop: '10px' }}>
      <Button
        style={{ alignItems: 'end', display: 'flex' }}
        variant="outlined"
        startIcon={<Add />}
      >
        Ekle
      </Button>
    </div>
  );
}
