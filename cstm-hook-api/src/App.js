import './App.css';
import {CatFact} from './CatFact'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
function App() {
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus: false
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <CatFact/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
