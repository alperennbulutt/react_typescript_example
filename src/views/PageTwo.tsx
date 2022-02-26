// material
import { Container, Typography } from '@material-ui/core';
import { useLocation } from 'react-router';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------
interface IPageTwo {
  keyDeneme: string;
}
export default function PageTwo() {
  const location = useLocation<IPageTwo>();

  console.log('stateden gelen deger', location.state.keyDeneme);

  const gelenDeger =
    location.state.keyDeneme === undefined
      ? 'boş geldii'
      : location.state.keyDeneme;

  return (
    <Page title="Page Two | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Page Two
        </Typography>
        <Typography gutterBottom>
          {gelenDeger === undefined ? 'undefined' : gelenDeger}
        </Typography>
      </Container>
    </Page>
  );
}
