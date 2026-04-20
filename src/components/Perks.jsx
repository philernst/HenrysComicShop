const perks = [
  { icon: '📧', title: 'Emailed Every Week', desc: 'A new comic lands in your inbox every week — no waiting, no shipping!' },
  { icon: '🎨', title: 'Hand-Drawn Art', desc: 'Every single comic is drawn by me — Henry — just for you!' },
  { icon: '⭐', title: 'Exclusive Stories', desc: "Subscribers-only adventures you can't get anywhere else!" },
];

export default function Perks() {
  return (
    <section id="perks">
      <h2 className="section-title">What You Get</h2>
      <div className="perks-grid">
        {perks.map((perk) => (
          <div key={perk.title} className="perk-card">
            <span className="perk-icon">{perk.icon}</span>
            <h3>{perk.title}</h3>
            <p>{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
