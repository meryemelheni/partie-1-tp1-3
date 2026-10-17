# TP1 — Portfolio Next.js déployé avec Ansible et Semaphore UI

Master DevOps & Cloud — Meryem El Heni

Ce dépôt contient à la fois le **code du portfolio** (Next.js, à la racine) et le **projet Ansible** qui le déploie.

```
.
├── app/                 ← pages du portfolio (Next.js)
├── package.json
├── package-lock.json
├── portfolio-deploy/    ← playbook Ansible (rôles common, nodejs, app, nginx)
├── captures/            ← captures d'écran (livrables)
├── RAPPORT.md           ← rapport d'une page
└── README.md
```

## Utilisation

```bash
cd portfolio-deploy
# Adapter inventory/hosts.ini et group_vars/all.yml (IP du serveur, dépôt)
ansible all -m ping
ansible-playbook site.yml --syntax-check
ansible-playbook site.yml
ansible-playbook site.yml      # 2e passage : changed=0
```

Le déploiement peut aussi être lancé depuis **Semaphore UI** (template « Deploy Portfolio », playbook `portfolio-deploy/site.yml`).
