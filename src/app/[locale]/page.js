import {useTranslations} from 'next-intl';
import { Bot, Lightbulb, Zap, Code, Layout, Users, GraduationCap, Film, Mail } from 'lucide-react';
import ClientLogos from '@/components/ClientLogos';

export default function Home() {
  const tHero = useTranslations('Hero');
  const tServices = useTranslations('Services');
  const tAbout = useTranslations('About');
  const tTestimonial = useTranslations('Testimonial');
  const tCaseStudies = useTranslations('CaseStudies');
  const tTeam = useTranslations('Team');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="hero-subtitle">We are Tecrix</span>
          <h1 className="hero-title">{tHero('title')} <br /> {tHero('subtitle')}</h1>
          <p className="hero-desc">{tHero('description')}</p>
          <button className="btn">{tHero('bookCall')}</button>
        </div>
      </section>

      <ClientLogos />

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="grid">
            <div className="card">
              <div className="card-icon"><Lightbulb size={24} /></div>
              <h3 className="card-title">{tServices('projectScope')}</h3>
              <p className="card-desc">{tServices('projectScopeDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Bot size={24} /></div>
              <h3 className="card-title">{tServices('aiDev')}</h3>
              <p className="card-desc">{tServices('aiDevDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Zap size={24} /></div>
              <h3 className="card-title">{tServices('mvp')}</h3>
              <p className="card-desc">{tServices('mvpDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Code size={24} /></div>
              <h3 className="card-title">{tServices('customSoftware')}</h3>
              <p className="card-desc">{tServices('customSoftwareDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Layout size={24} /></div>
              <h3 className="card-title">{tServices('uxui')}</h3>
              <p className="card-desc">{tServices('uxuiDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Users size={24} /></div>
              <h3 className="card-title">{tServices('dedicatedTeams')}</h3>
              <p className="card-desc">{tServices('dedicatedTeamsDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><GraduationCap size={24} /></div>
              <h3 className="card-title">{tServices('instructional')}</h3>
              <p className="card-desc">{tServices('instructionalDesc')}</p>
            </div>
            <div className="card">
              <div className="card-icon"><Film size={24} /></div>
              <h3 className="card-title">{tServices('animation')}</h3>
              <p className="card-desc">{tServices('animationDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{background: 'var(--card-bg)'}}>
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2 className="section-title">About Us</h2>
          <p className="hero-desc" style={{marginBottom: '20px'}}>{tAbout('description')}</p>
          <strong style={{color: 'var(--accent-color)'}}>{tAbout('ceo')}</strong>
          
          <div style={{marginTop: '60px', padding: '40px', borderTop: '1px solid var(--card-border)'}}>
            <p style={{fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1rem'}}>"{tTestimonial('text')}"</p>
            <strong>{tTestimonial('author')}</strong>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section">
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px'}}>
            <h2 className="section-title" style={{marginBottom: 0}}>Case Studies</h2>
            <button className="btn">{tCaseStudies('seeAll')}</button>
          </div>
          <div className="grid">
            <div className="card">
              <span className="team-role">SOCIAL COMMUNITY</span>
              <h3 className="card-title" style={{marginTop: '10px'}}>{tCaseStudies('faveTitle')}</h3>
              <p className="card-desc" style={{marginBottom: '20px'}}>{tCaseStudies('faveDesc')}</p>
              <a href="#" style={{color: 'var(--accent-color)', fontWeight: '600'}}>{tCaseStudies('seeCaseStudy')} →</a>
            </div>
            <div className="card">
              <span className="team-role">E-COMMERCE PLATFORM</span>
              <h3 className="card-title" style={{marginTop: '10px'}}>{tCaseStudies('darazTitle')}</h3>
              <p className="card-desc" style={{marginBottom: '20px'}}>{tCaseStudies('darazDesc')}</p>
              <a href="#" style={{color: 'var(--accent-color)', fontWeight: '600'}}>{tCaseStudies('seeCaseStudy')} →</a>
            </div>
            <div className="card">
              <span className="team-role">DELIVERY HERO</span>
              <h3 className="card-title" style={{marginTop: '10px'}}>{tCaseStudies('foodpandaTitle')}</h3>
              <p className="card-desc" style={{marginBottom: '20px'}}>{tCaseStudies('foodpandaDesc')}</p>
              <a href="#" style={{color: 'var(--accent-color)', fontWeight: '600'}}>{tCaseStudies('seeCaseStudy')} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{background: 'var(--card-bg)'}}>
        <div className="container">
          <div className="team-grid">
            <div className="team-card">
              <h3 className="card-title">{tTeam('needTeam')}</h3>
              <p className="team-desc">{tTeam('needTeamDesc')}</p>
              <div className="team-avatar">
                <Users size={40} />
              </div>
              <h4 className="team-name">{tTeam('needTeamName')}</h4>
              <a href="mailto:info@tecrix.io" className="btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%'}}>
                <Mail size={18} /> {tTeam('emailTeam')}
              </a>
            </div>
            <div className="team-card">
              <h3 className="card-title">{tTeam('buildingMvp')}</h3>
              <p className="team-desc">{tTeam('buildingMvpDesc')}</p>
              <div className="team-avatar">
                <Zap size={40} />
              </div>
              <h4 className="team-name">{tTeam('buildingMvpName')}</h4>
              <a href="mailto:info@tecrix.io" className="btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%'}}>
                <Mail size={18} /> {tTeam('emailTeam')}
              </a>
            </div>
            <div className="team-card">
              <h3 className="card-title">{tTeam('talkTech')}</h3>
              <p className="team-desc">{tTeam('talkTechDesc')}</p>
              <div className="team-avatar">
                <Code size={40} />
              </div>
              <h4 className="team-name">{tTeam('talkTechName')}</h4>
              <a href="mailto:info@tecrix.io" className="btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%'}}>
                <Mail size={18} /> {tTeam('emailTeam')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
