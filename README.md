# LaurieBezacier_6_24082022 : Application Web 'Piiquante' (clonage du front-end : site + intégration du back-end : API)
OpenClassrooms : Formation 'Développement Web' - [Projet 6 : Création d'une API sécurisée](https://openclassrooms.com/fr/paths/185/projects/676/assignment)

## Objectifs du projet :
Développer une Application Web nommée **"Piiquante"**, dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et 'liker' ou 'disliker' les sauces proposées par les autres utilisateurs.
Le but est de créer le back-end (API) de l'application, le front-end étant déjà codé et fourni.

## Compétences évaluées :
- Stocker des données de manière sécurisée
- Implémenter un modèle logique de données conformément à la réglementation
- Mettre en œuvre des opérations CRUD de manière sécurisée

## Outils utilisés pour l'intégration du back-end :
- Serveur : **Node.js** (+ nodemon)
- Framework : **Express**
- Base de données : **MongoDB**
    - Hébergement : MongoDB Atlas
    - Opérations réalisées relatives à la BdD : mongoose
- Protocole respecté : **API REST**
- Gestionnaire de fichiers (exemple : images) : **Multer**

## Mesures de sécurité mises en place :
- Hashage du mot de passe utilisateur : **bcrypt**
- Manipulation sécurisée de la BdD : **mongoose**
- Vérification du caractère unique de l'email utilisateur, dans la BdD : **mongoose-unique-validator**
- Utilisation de variables d'environnement pour les données sensibles ('path' vers MongoDB et clé secrète) : **dotenv**
- Authentification de l'utilisateur par token : **jsonwebtoken**
- Protection des headers HTTP retournés par l'application 'Express' : **helmet**
- Enregistrement des données (log) de chaque requête effectuée dans un fichier "assess.log" : **morgan**
- Prévention des attaques (comme la 'force brute') : **express-rate-limit**

## Pour tester l'application :
1. Configuration des **dossiers (et fichiers)** :
    - Cloner l'e' [Application Web 'Piiquante'](https://github.com/LauryF/LaurieBezacier_6_24082022.git)
    - Ajouter un fichier de configuration nommé ".env" à la racine du dossier 'back-end'. 
    - A l'intérieur de ce dossier, 'copier / coller' ces 2 variables d'environnement "secrètes":
        - pathMongoDB = 'lien_vers_la_base_de_données_MongoDB'
        - tokenKey = 'clé_secrète_pour_crypter_les_tokens'
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

> **Important** : Pour des tests spécifiques (avec par exemple 'Postman'), le back-end répond à l'adresse : http://localhost:3000 (**Attention** : Authentification requise pour toutes les routes '/api/sauces/').