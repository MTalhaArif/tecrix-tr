import { Utensils, ShoppingBag, Heart, ShieldCheck, Activity, Coffee } from 'lucide-react';

export default function ClientLogos() {
  const clients = [
    { name: 'Trendyol', icon: ShoppingBag, color: '#f27a1a' },
    { name: 'Food Panda', icon: Utensils, color: '#d70f64' },
    { name: 'Fave', icon: Heart, color: '#ff3b30' },
    { name: 'Apiax', icon: ShieldCheck, color: '#3b82f6' },
    { name: 'FreshAir', icon: Activity, color: '#10b981' },
    { name: 'Codebasics', icon: Coffee, color: '#8b5cf6' }
  ];

  return (
    <div className="client-marquee-wrapper section">
      <div className="container">
        <h3 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-muted)', fontWeight: 500 }}>
          Industry leaders entrust their business visions to us
        </h3>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          {/* Double the list for infinite scrolling effect */}
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="client-logo">
              <client.icon size={32} color={client.color} />
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
