import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div>
      {t('layout')}
      {children}
    </div>
  );
};

export default MainLayout;
