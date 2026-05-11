import {useTranslations} from 'next-intl';
import ClientLogos from '@/components/ClientLogos';
import { Users, Target, Rocket, Heart } from 'lucide-react';

export default function AboutUsPage() {
  const t = useTranslations('Pages.About');

  const stats = [
    { label: 'Founded', value: '2020' },
    { label: 'Projects', value: '80+' },
    { label: 'Team Members', value: '15+' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>
        </div>
      </section>

      <ClientLogos />

      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{t('hello')}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{t('helloDesc')}</p>
            </div>
            <div className="card">
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{t('whyUs')}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{t('whyUsDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>{t('meetFounders')}</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('meetFoundersDesc')}
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {['Muhammad Arif', 'Muhammad Talha Arif', 'Dr. Junaid Qadir', 'Ilhan'].map((founder, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <Users size={48} color="var(--primary-color)" style={{ margin: '0 auto 20px' }} />
                <h3>{founder}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{i === 1 ? 'CEO' : 'Co-Founder'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>{t('meetTeam')}</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 50px' }}>
            {t('meetTeamDesc')}
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            {['Shazeb Malik', 'Muhammad Anas', 'Kajol Sahani', 'Muhammad Kamran', 'Attia Jabar', 'Muhammad Muneeb'].map((member, i) => (
              <div key={i} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ margin: 0 }}>{member}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
