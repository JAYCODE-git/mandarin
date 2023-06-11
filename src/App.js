import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { RecoilRoot } from 'recoil';
import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient()

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false)

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])

  return (
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Router />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default App;
