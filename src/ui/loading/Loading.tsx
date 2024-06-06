import { useTranslation } from 'react-i18next';

/**
 * Loading component for suspense in layout
 * @returns {Object} component
 */
const Loading = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('loading')} . . .</div>
    </>
  );
};

export default Loading;
