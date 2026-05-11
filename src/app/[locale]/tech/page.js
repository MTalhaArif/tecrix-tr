import {useTranslations} from 'next-intl';

export default function TechPage() {
  const t = useTranslations('Pages');

  return (
    <div className="container" style={{paddingTop: '160px', paddingBottom: '100px', minHeight: '60vh'}}>
      <h1 className="hero-title" style={{fontSize: '3rem'}}>{t('techTitle')}</h1>
      <p className="hero-desc" style={{textAlign: 'left', margin: 0}}>{t('techContent')}</p>
    </div>
  );
}
