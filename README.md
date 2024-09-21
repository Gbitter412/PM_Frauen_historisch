# Puzzlespiel zu bedeutenden historischen Frauen
Unser Projekt ist ein Puzzle-Spiel, bei dem Sie die Möglichkeit haben, auf spielerische Weise mehr über bedeutende historische Frauenfiguren zu lernen. Das Ziel ist es, ein 4x4 Puzzle korrekt zusammenzusetzen. Nach dem erfolgreichen Lösen des Puzzles wird ein informativer Text freigeschaltet, der das Leben und Wirken der jeweiligen historischen Persönlichkeit kurz beschreibt. So erhalten Sie auf unterhaltsame Weise spannende Einblicke in die Geschichte herausragender Frauen.



## Git Workflow

Für ein neues Feature soll ein neuer Branch angelegt werden.

```
git checkout -b <feature_branch_name>
```

Nach dem Arbeiten auf dem Branch Änderungen committen.

```
git commit -m "<commit_message>"
```

Damit der Branch nicht nur auf dem lokalen Repository verfügbar ist, muss dieser aufs Remote-Repository gepusht werden:

```
git push -u origin <feature_branch_name>
```

Um sich auf den finalen Pull-Request vorzubereiten müssen alle Updates des **remote dev-Branches** auf den **lokalen Feature-Branch** gepullt werden.

```
git pull origin dev
```

Nun kann eine **Pull-Request**, um den Feature-Branch auf den dev-Branch zu ziehen, erstellt werden. Andere Teammitglieder schauen sich diese Pull-Request (**Review**) an und geben dazu Feedback. Ist das **Einverständnis** des Teams da, kann die Pull-Request durchgeführt werden.

Nun sollte der lokale dev-Branch geupdatet werden. Man wechsle auf den Main Branch und pullt.

```
git checkout dev
git pull
```
