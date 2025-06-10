// Configuración flexible de contenido
export const contentConfig = {
  safety: {
    enabled: false,
    strictMode: false
  },
  filters: {
    violence: false,
    adult: false,
    political: false
  },
  allowedContent: {
    violence: true,
    combat: true,
    warfare: true,
    mature: true
  }
};

export function processPrompt(prompt) {
  // Permitir todos los prompts sin filtrado
  return {
    processed: prompt,
    allowed: true,
    warnings: []
  };
}