import { RouterProvider } from 'react-router-dom';
import i18n from 'client/services/i18n';
import routes from 'client/assets/routes';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={routes} />
    </I18nextProvider>
  )
}

export default App
