import {useTranslations} from 'next-intl';

export default function PricingPage() {
  const t = useTranslations('Pages.Pricing');
  
  // Since we have an array of objects in our messages, we need to access them by mapping
  // However, next-intl doesn't naturally support mapping arrays of objects easily without raw().
  // Using raw() to get the array:
  const examples = t.raw('examples');

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {examples.map((item, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: 0, color: 'var(--primary-color)' }}>{item.title}</h3>
                  <span style={{ 
                    background: 'rgba(238, 104, 159, 0.1)', 
                    color: 'var(--primary-color)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>{item.duration}</span>
                </div>
                <h2 style={{ margin: 0, fontSize: '2.5rem' }}>{item.price}</h2>
                <p style={{ color: 'var(--text-muted)', margin: 0, flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="grid">
            <div className="card">
              <h2 style={{ marginBottom: '20px' }}>{t('howWeGet')}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{t('howWeGetDesc')}</p>
            </div>
            <div className="card">
              <h2 style={{ marginBottom: '20px' }}>{t('seedProject')}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{t('seedProjectDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
