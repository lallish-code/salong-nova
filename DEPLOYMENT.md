# Driftsättningsguide för Salong Nova

Här är stegen för att göra din hemsida permanent live på **Railway.app** eller **Render.com**.

## 1. Förberedelser (Konto)
Om du inte redan har ett konto, skapa ett på:
- [Railway.app](https://railway.app/) (Rekommenderas för Fullstack + Databas)
- [Render.com](https://render.com/)

## 2. Driftsättning på Railway (Rekommenderas)
1. Logga in på Railway och klicka på **"New Project"**.
2. Välj **"Deploy from GitHub repo"** och välj ditt repo `salong-nova`.
3. Railway kommer automatiskt att upptäcka din `Dockerfile` och börja bygga.
4. Gå till fliken **"Variables"** i ditt projekt och lägg till följande miljövariabler:
   - `NODE_ENV`: `production`
   - `PORT`: `3000`
   - `DATABASE_URL`: (Se steg 3 nedan för hur du får denna)
   - `JWT_SECRET`: (Hitta på en lång hemlig sträng)
   - `VITE_APP_ID`: (Din GitHub App ID om du använder OAuth)

## 3. Sätt upp en MySQL-databas
Du kan skapa en MySQL-databas direkt i Railway:
1. Klicka på **"Add Service"** -> **"Database"** -> **"MySQL"**.
2. Railway skapar en databas åt dig.
3. Gå till MySQL-tjänstens flik **"Variables"** och kopiera `MYSQL_URL`.
4. Gå tillbaka till din `salong-nova`-tjänst och klistra in den som `DATABASE_URL`.

## 4. Kör databasmigrationer
När databasen är ansluten behöver du köra migrationerna för att skapa tabellerna:
- I Railway kan du lägga till ett "Deploy Command" eller köra det manuellt via deras CLI: `pnpm db:push`.

## 5. Klar!
När bygget är klart kommer Railway att ge dig en publik URL (t.ex. `salong-nova-production.up.railway.app`). Din hemsida är nu permanent live!
