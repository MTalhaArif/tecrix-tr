import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-col-title">{t('talkToUs')}</h3>
            <p className="footer-text">{t('respondTime')}</p>
            <p className="footer-text">{t('talkToExperts')}</p>
            <button className="btn" style={{marginTop: '20px'}}>{t('scheduleCall')}</button>
          </div>
          <div>
            <h3 className="footer-col-title">{t('quickLinks')}</h3>
            <ul className="footer-links">
              <li><Link href="/services">{t('services')}</Link></li>
              <li><Link href="/contact">{t('contact')}</Link></li>
              <li><Link href="/privacy">{t('privacy')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-col-title">{t('contact')}</h3>
            <p className="footer-text">{t('address')}</p>
            <p className="footer-text">{t('email')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          {t('rights')}
        </div>
      </div>
    </footer>
  );
}
