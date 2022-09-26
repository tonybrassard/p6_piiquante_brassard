## Objectifs du projet :
Développer une Application Web nommée **"Piiquante"**, dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et 'liker' ou 'disliker' les sauces proposées par les autres utilisateurs.
Le but est de créer le back-end (API) de l'application, le front-end étant déjà codé et fourni.

## Pour tester l'application :
1. Configuration des **dossiers (et fichiers)** :
    - Cloner l'e' [Application Web 'Piiquante'](https://github.com/tonybrassard/p6_piiquante_brassard.git)
    - Renommer le fichier .env.example de configuration en ".env" à la racine du dossier 'back-end'. 
    - A l'intérieur de ce dossier, modifier ces 2 variables d'environnement "secrètes":
        - MONGO_URI = 'lien_vers_la_base_de_données_MongoDB'
        - JWT = 'clé_secrète_pour_crypter_les_tokens'
2. Configuration du **front-end** :
    - Lancer le front-end de l'application :
        - Dans un (premier) terminal, accéder au dossier 'frontend' (--> 'cd frontend') 
        - Puis, installer les dépendances (--> 'npm install')
        - Enfin, lancer le front-end (--> 'npm run start')
3. Configuration du **back-end** :
    - Lancer le back-end de l'application :
        - Dans un (deuxième) terminal, accéder au dossier 'backend' (--> 'cd backend')
        - Puis, installer les dépendances (--> 'npm install')
        - Enfin, lancer 'node server' (Info : Pour une relance automatique du server : installer 'nodemon' (--> 'npm install -g nodemon'))
4. Accès à l'**Application Web 'Piiquante'** (dans un navigateur Web) :
    - Le front-end est accessible à l'adresse http://localhost:4200 .
