import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';

function App(props: { offersAmount: number }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Main offersAmount={props.offersAmount} />}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
        <Route
          path={'/login'}
          element={<Login />}
        />
        <Route
          path={'/offer/:id'}
          element={<Property />}
        />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
