const skills = [
  { title: "Systèmes & réseaux", items: ["Linux (Ubuntu)", "SSH", "Nginx", "Réseaux IP"] },
  { title: "Automatisation", items: ["Ansible", "Semaphore UI", "Rôles & handlers", "Idempotence"] },
  { title: "CI/CD & Cloud", items: ["Git & GitHub", "GitHub Actions", "Render", "Docker"] },
  { title: "Développement web", items: ["Next.js", "React", "Node.js", "PM2"] },
];

const projects = [
  {
    name: "Déploiement avec Ansible et Semaphore UI",
    text: "Playbook Ansible structuré en rôles (common, nodejs, app, nginx) qui déploie ce portfolio sur un serveur Ubuntu, avec exécution industrialisée dans Semaphore UI.",
    tags: ["Ansible", "Semaphore", "Nginx", "PM2"],
  },
  {
    name: "PaaS auto-hébergé avec Coolify et Forgejo",
    text: "Mise en place d'une plateforme de déploiement personnelle avec forge Git locale et redéploiement automatique par webhook.",
    tags: ["Coolify", "Forgejo", "Docker"],
  },
  {
    name: "CI/CD avec GitHub Actions et Render",
    text: "Pipeline d'intégration continue vérifiant les pull requests, puis déploiement continu avec prévisualisations.",
    tags: ["GitHub Actions", "Render", "CI/CD"],
  },
];

const timeline = [
  { year: "2026 – 2027", title: "Master DevOps & Cloud (M2)", text: "Automatisation d'infrastructures, déploiement CI/CD, sécurité du cloud." },
  { year: "Aujourd'hui", title: "Auto-formation continue", text: "Laboratoires pratiques : Ansible, conteneurs, Kubernetes, Terraform." },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <span className="brand">Meryem El Heni</span>
        <nav>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <p className="eyebrow">Bonjour, je suis</p>
          <h1>Meryem El Heni</h1>
          <p className="subtitle">
            Étudiante en Master DevOps &amp; Cloud, passionnée par
            l&apos;automatisation et le déploiement d&apos;applications.
          </p>
          <div className="actions">
            <a className="btn primary" href="#projets">Voir mes projets</a>
            <a className="btn" href="mailto:elhenimeryem12@gmail.com">Me contacter</a>
          </div>
        </section>

        <section id="apropos">
          <h2>À propos</h2>
          <p>
            Je me forme au DevOps et au cloud : je conçois des déploiements
            reproductibles, automatisés et fiables. Ce portfolio est lui-même
            déployé automatiquement avec Ansible, derrière Nginx, et géré par
            PM2 sur un serveur Ubuntu.
          </p>
        </section>

        <section id="competences">
          <h2>Compétences</h2>
          <div className="grid">
            {skills.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projets">
          <h2>Projets</h2>
          <div className="stack">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parcours">
          <h2>Parcours</h2>
          <div className="timeline">
            {timeline.map((t) => (
              <div className="step" key={t.title}>
                <span className="year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Un projet, une question, une opportunité ? Écrivez-moi.
          </p>
          <p>
            <a className="btn primary" href="mailto:elhenimeryem12@gmail.com">
              elhenimeryem12@gmail.com
            </a>
            <a className="btn" href="https://github.com/meryemelheni">
              GitHub
            </a>
          </p>
        </section>
      </main>

      <footer className="footer">
        © 2026 Meryem El Heni · Déployé avec Ansible &amp; Semaphore UI
      </footer>
    </>
  );
}
