// material
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

// components
import Page from '../components/Page';
import { RootState } from '../redux/rootReducer';

// ----------------------------------------------------------------------

export default function PageTwo() {
  // redux'tan gelen veri
  // const { value } = useSelector((state: RootState) => state.pageTwo);

  const { apiData } = useSelector((state: RootState) => state.pageTwo);

  const localValue = localStorage.getItem('pageTwoValue');

  return (
    <Page title="Vasiyetim">
      <Container maxWidth="xl">
        <Typography gutterBottom>{localValue}</Typography>
      </Container>
    </Page>
  );
}
