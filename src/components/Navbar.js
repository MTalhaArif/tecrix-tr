'use client';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';

export default function Navbar({locale}) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="nav-brand">TECRIX AI</Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">{t('home')}</Link>
          <Link href="/services" className="nav-link">{t('services')}</Link>
          <Link href="/about-us" className="nav-link">{t('aboutUs')}</Link>
          <Link href="/case-studies" className="nav-link">{t('caseStudies')}</Link>
          <div className="lang-switch">
            <Link 
              href={pathname} 
              locale="en" 
              className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
            >
              EN
            </Link>
            <Link 
              href={pathname} 
              locale="tr" 
              className={`lang-btn ${locale === 'tr' ? 'active' : ''}`}
            >
              TR
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
