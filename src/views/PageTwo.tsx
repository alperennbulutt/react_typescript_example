// material
import { Container, Typography } from '@material-ui/core';

// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageTwo() {
  // redux'tan gelen veri
  // const { value } = useSelector((state: RootState) => state.pageTwo);

  const localValue = localStorage.getItem('pageTwoValue');

  return (
    <Page title="Page Two | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Page Two
        </Typography>
        <Typography gutterBottom>{localValue}</Typography>
      </Container>
    </Page>
  );
}
