import Layout from '../Components/Layout'
import Card from '../Components/Card'
import { AppIotProvider } from '../AppIotContext';

const App = () => {
  return (
    <AppIotProvider>
      <Layout>
        <Card />
      </Layout>
    </AppIotProvider>
  );
};

export default App;
