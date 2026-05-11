import {useTranslations} from 'next-intl';
import { Code2, Database, Smartphone, Brain } from 'lucide-react';

export default function TechPage() {
  const t = useTranslations('Pages.Tech');

  const stacks = [
    { id: 'fullStack', icon: Code2 },
    { id: 'ai', icon: Brain },
    { id: 'dataIntensive', icon: Database },
    { id: 'mobile', icon: Smartphone }
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
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>{t('toolkit')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto 0' }}>{t('toolkitDesc')}</p>
          </div>

          <div className="grid">
            {stacks.map((stack, i) => (
              <div key={i} className="card" style={{ padding: '40px 30px' }}>
                <stack.icon size={48} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '15px' }}>{t(stack.id)}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{t(`${stack.id}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Logos representation */}
      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Technologies We Use</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {['React', 'Next.js', 'Angular', 'Vue', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'LlamaIndex', 'LangChain', 'Flutter'].map(tech => (
              <span key={tech} style={{
                padding: '10px 20px',
                background: 'var(--bg-color)',
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                fontWeight: '500'
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
