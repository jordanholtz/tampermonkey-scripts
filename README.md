# tampermonkey-scripts

## Feed de webЯcade

El feed principal de webЯcade está en:

- https://tinyurl.com/2uhcjse3 (enlace a `Jordan.json`)

## Formato de los ROMs (PSX)

Los juegos de PlayStation (tipo `psx`) usan el formato **`.chd`** (Compressed Hunks of Data), que es el formato de imagen de disco comprimido usado por MAME/RetroArch para CDs y discos duros.

Ejemplo de entrada en el JSON:

```json
{
  "type": "psx",
  "title": "Gran Turismo 2 - Arcade Mode",
  "props": {
    "discs": [
      "https://gam.onl/user/psx/roms/Gran Turismo 2 (USA) (Arcade Mode) (Rev 1).chd",
      "https://gam.onl/user/psx/roms/Gran Turismo 2 (USA) (Simulation Mode) (Rev 2).chd"
    ]
  }
}
```

## BIOS de PSX

Los archivos de BIOS están en la carpeta `PSX/` y se configuran en `props.psx_bios` de `Jordan.json`:

- `PSX/SCPH1001.BIN`
- `PSX/scph5500.bin`
- `PSX/scph5501.bin`
- `PSX/scph5502.bin`
