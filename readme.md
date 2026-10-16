## Todo list

Application web en JavaScript qui permet d'ajouter des tâches à une liste (et de les supprimer, ainsi que de les barrer)

## Fonctionnement

Le fichier todo.js :

1. Récupère dans la page les éléments input, button et ul avec document.querySelector
2. Vérifie le clic sur le bouton et la touche Entrée avec addEventListener et les deux appellent la fonction task.
3. La fonction task vérifie avec trim que le texte n'est pas vide, appelle create pour fabriquer la tâche, l'ajoute à la liste avec appendChild, puis vide le champ.
4. La fonction create crée un nouvel élément li avec document.createElement et y place le texte. Un clic sur la tâche la barre ou enlève la barre avec classList.toggle, et un bouton Supprimer la retire de la liste avec remove.

## Technologies utilisées

- HTML5
- CSS
- JavaScript

Auteur : Théo Sabban
