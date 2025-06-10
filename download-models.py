import requests
import os
from pathlib import Path

def download_file(url, filename):
    """Descargar archivo con barra de progreso"""
    print(f"Descargando {filename}...")
    
    response = requests.get(url, stream=True)
    total_size = int(response.headers.get('content-length', 0))
    
    with open(filename, 'wb') as file:
        downloaded_size = 0
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                file.write(chunk)
                downloaded_size += len(chunk)
                if total_size > 0:
                    percent = (downloaded_size / total_size) * 100
                    print(f"\rProgreso: {percent:.1f}%", end="", flush=True)
    
    print(f"\n✅ {filename} descargado exitosamente!")

# Crear directorios
os.makedirs("models", exist_ok=True)
os.makedirs("sd-models", exist_ok=True)

# URLs de modelos
models = [
    {
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors",
        "filename": "models/sd_xl_base_1.0.safetensors"
    },
    {
        "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors", 
        "filename": "models/sd_xl_refiner_1.0.safetensors"
    }
]

# Descargar modelos
for model in models:
    if not os.path.exists(model["filename"]):
        download_file(model["url"], model["filename"])
    else:
        print(f"⏭️ {model['filename']} ya existe, saltando...")

print("\n🎉 ¡Todos los modelos descargados!")