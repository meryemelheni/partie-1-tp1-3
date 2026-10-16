export default function Home() {
  return (
    <main className="container">
      <h1>Meryem</h1>
      <p className="subtitle">Étudiante en Master DevOps &amp; Cloud</p>

      <section>
        <h2>À propos</h2>
        <p>
          Bienvenue sur mon portfolio, déployé automatiquement avec Ansible
          et Semaphore UI.
        </p>
      </section>

      <section>
        <h2>Compétences</h2>
        <ul>
          <li>Linux &amp; réseaux</li>
          <li>Ansible, Docker, Git</li>
          <li>CI/CD (GitHub Actions)</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>meryem@example.com</p>
      </section>
    </main>
  );
}
