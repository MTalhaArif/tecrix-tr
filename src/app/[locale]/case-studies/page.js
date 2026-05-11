import {useTranslations} from 'next-intl';

export default function CaseStudiesPage() {
  const t = useTranslations('Pages.CaseStudiesPage');
  
  const studies = t.raw('studies');

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {studies.map((study, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  textTransform: 'uppercase', 
                  fontSize: '0.8rem', 
                  letterSpacing: '1px',
                  color: 'var(--primary-color)',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {study.category}
                </span>
                <h3 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>{study.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{study.desc}</p>
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--card-border)' }}>
                  <a href="#" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
                    {/* Read more button text - can be hardcoded or added to i18n later */}
                    Read Full Case Study &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
