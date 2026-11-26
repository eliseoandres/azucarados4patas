# Azucarados 4 Patas · sitio web

Sitio estático con Jekyll para **azucarados4patas.com.ar**, alojado gratis en GitHub Pages.
El blog ("Dejando huella") se edita desde Pages CMS, sin tocar código.

## Estructura

```
_config.yml          Configuración del sitio (título, URL, Instagram, SEO)
index.html           Portada con las 6 secciones
blog/index.html      Listado del blog con filtro por tema
_posts/              Artículos (un .md por artículo, nombre AAAA-MM-DD-titulo.md)
_layouts/ _includes/ Plantillas
_data/temas.yml      Temas del blog
assets/              CSS, JS e imágenes (assets/img/blog = fotos de los artículos)
.pages.yml           Configuración de Pages CMS
CNAME                Dominio propio
robots.txt, sitemap.xml, favicon.*, site.webmanifest
```

## 1. Subir al repositorio

1. Creá un repositorio en GitHub (por ejemplo `azucarados4patas`) y subí **todo el contenido de esta carpeta**, incluidos los archivos que empiezan con punto (`.pages.yml`, `.gitignore`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. En **Settings → Pages → Custom domain** escribí `azucarados4patas.com.ar` (el archivo `CNAME` ya lo trae).
4. Cuando el certificado esté listo, tildá **Enforce HTTPS**.

## 2. Dominio: NIC.ar + Cloudflare

1. En Cloudflare agregá el sitio `azucarados4patas.com.ar` (plan Free). Cloudflare te da dos servidores de nombres.
2. En NIC.ar, en la sección de delegaciones del dominio, reemplazá los servidores de nombres por los dos de Cloudflare.
3. En Cloudflare, **DNS → Records**, creá estos registros, todos con la nube en gris (**DNS only**) hasta que GitHub emita el certificado:

| Tipo  | Nombre | Contenido |
|-------|--------|-----------|
| A     | `@`    | 185.199.108.153 |
| A     | `@`    | 185.199.109.153 |
| A     | `@`    | 185.199.110.153 |
| A     | `@`    | 185.199.111.153 |
| AAAA  | `@`    | 2606:50c0:8000::153 |
| AAAA  | `@`    | 2606:50c0:8001::153 |
| AAAA  | `@`    | 2606:50c0:8002::153 |
| AAAA  | `@`    | 2606:50c0:8003::153 |
| CNAME | `www`  | `TU-USUARIO.github.io` |

4. Con HTTPS activo en GitHub podés pasar la nube a naranja (proxy) y en Cloudflare **SSL/TLS** poner el modo **Full**.

Conviene contrastar las IP con la documentación oficial de GitHub Pages ("Managing a custom domain for your GitHub Pages site"), por si cambiaron.

## 3. Publicar artículos con Pages CMS

1. Entrá a <https://pagescms.org> con la cuenta de GitHub y dale acceso al repositorio.
2. Elegí **Artículos del blog → Nuevo**. Completá título, fecha, tema, resumen y contenido.
3. Al guardar, Pages CMS hace el commit y GitHub Pages republica el sitio en un par de minutos.

Los campos y los temas disponibles se definen en `.pages.yml`. Si agregás un tema nuevo, sumalo también en `_data/temas.yml`.

## 4. Verlo en tu computadora (opcional)

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

## Pendientes a validar con la organización

- Colores y logo oficiales (los colores actuales vienen del brief; el favicon usa el azul real del logo).
- Cifras, fechas y número de animales asistidos: por ahora **no se publica ninguna**.
- Descripción exacta del proceso para pedir ayuda y recibir insumos (sección "Cómo funciona la red").
- Revisión veterinaria del artículo de ejemplo antes de difundirlo.
- Sumar fotos reales (con autorización) en `assets/img/`.
