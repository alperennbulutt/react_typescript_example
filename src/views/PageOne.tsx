// material
import { Container, Typography } from '@material-ui/core';
// components
import { useState } from 'react';
import Page from '../components/Page';
import TextArea from '../components/customComponents/TextArea';
import CustomAddButton from '../components/customComponents/CustomButton';
import EditedText from '../components/customComponents/EditedText';

// ----------------------------------------------------------------------

export default function PageOne() {
  const [data, setData] = useState('');

  const handleChange = (e: any) => {
    console.log(e.target.value);
    const newData = e.target.value;
    setData(newData);
    console.log('newData', newData);
    console.log('data', data);
  };

  return (
    <Page title="Page One | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph color="green">
          Page One
        </Typography>
        <TextArea
          placeholder="Lütfen Vasiyetinizi Yazınız"
          width="100%"
          maxRows={15}
          minRows={10}
          onChange={handleChange}
        />
        <CustomAddButton data={data} />
        <EditedText />
      </Container>
    </Page>
  );
}
