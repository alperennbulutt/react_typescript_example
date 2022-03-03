// material
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

// components
import Page from '../components/Page';
import { RootState } from '../redux/store';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { value } = useSelector((state: RootState) => state.pageTwo);

  return (
    <Page title="Page Two | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Page Two
        </Typography>
        <Typography gutterBottom>{value}</Typography>
      </Container>
    </Page>
  );
}
