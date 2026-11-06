# Stop · Sorteo de letras

- `Stop.apk` — la app lista para instalar en Android.
- `www/index.html` — la app (HTML). Cualquier cambio se hace aquí.
- `stop.html` — la versión publicada como artefacto en claude.ai (se genera a partir de `www/index.html`).
- `android/` — proyecto Android generado por Capacitor.
- `resources/icon-1024.png` — icono en alta resolución (sirve también para iPhone y tiendas).

## Volver a generar la APK después de cambiar `www/`

```bash
npm run apk
```

La nueva APK queda en `android/app/build/outputs/apk/debug/app-debug.apk`.

Requisitos ya instalados en este PC: Node, Java 21 y Android SDK en
`%LOCALAPPDATA%\Android\Sdk`.

## Instalar en el móvil

Pasa `Stop.apk` al teléfono (cable, Drive, WhatsApp…), ábrelo y permite
"Instalar apps de origen desconocido" cuando lo pida.

