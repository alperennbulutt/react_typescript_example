// material
import { Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import TextArea from '../components/customComponents/TextArea';

// ----------------------------------------------------------------------

export default function PageOne() {
  return (
    <Page title="Page One | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph color="green">
          Page One
        </Typography>
        <TextArea
          placeholder="Lütfen Vasiyetinizi Yazınız"
          width="100%"
          maxRows={7}
          minRows={2}
        />
        <Typography gutterBottom>deneme</Typography>
        <Typography>
          Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla ut
          metus varius laoreet. Curabitur ullamcorper ultricies nisi. Ut non
          enim eleifend felis pretium feugiat. Donec mi odio, faucibus at,
          scelerisque quis, convallis in, nisi. Fusce vel dui. Quisque libero
          metus, condimentum nec, tempor a, commodo mollis, magna. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras dapibus.
        </Typography>
      </Container>
    </Page>
  );
}
