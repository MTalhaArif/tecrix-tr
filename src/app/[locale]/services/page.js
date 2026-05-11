import {useTranslations} from 'next-intl';
import { Layout, Cpu, Code, Rocket, Users, Video } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('Pages.ServicesPage');
  const tServices = useTranslations('Services');

  const services = [
    { id: 'projectScope', icon: Layout },
    { id: 'aiDev', icon: Cpu },
    { id: 'mvp', icon: Rocket },
    { id: 'customSoftware', icon: Code },
    { id: 'uxui', icon: Layout },
    { id: 'dedicatedTeams', icon: Users },
    { id: 'instructional', icon: Video },
    { id: 'animation', icon: Video }
  ];

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
          <div className="grid">
            <div className="card" style={{ gridColumn: '1 / -1' }}>
              <h2 style={{ marginBottom: '20px' }}>{t('howWeWork')}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{t('howWeWorkDesc')}</p>
            </div>
            
            <div className="card">
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>{t('topTalent')}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t('topTalentDesc')}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>{t('provenTrack')}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t('provenTrackDesc')}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>{t('businessMindset')}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t('businessMindsetDesc')}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>{t('userCentric')}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{t('userCentricDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Services</h2>
          <div className="grid">
            {services.map((service, i) => (
              <div key={i} className="card service-card">
                <div className="icon-wrapper">
                  <service.icon size={24} color="var(--primary-color)" />
                </div>
                <h3>{tServices(service.id)}</h3>
                <p>{tServices(`${service.id}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
