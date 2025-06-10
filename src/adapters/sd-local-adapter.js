import fetch from 'node-fetch';

export class LocalSDAdapter {
  constructor(baseUrl = 'http://127.0.0.1:7860/') {
    this.baseUrl = baseUrl;
  }

  async generateImage(prompt, negativePrompt = '', options = {}) {
    const payload = {
      prompt: prompt,
      negative_prompt: negativePrompt,
      width: options.width || 768,
      height: options.height || 768,
      steps: options.steps || 25,
      cfg_scale: options.cfg_scale || 7,
      sampler_name: options.sampler || "DPM++ 2M Karras",
      seed: options.seed || -1,
      batch_size: 1,
      n_iter: 1
    };

    try {
      const response = await fetch(`${this.baseUrl}/sdapi/v1/txt2img`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      return result.images[0]; // Base64 image
    } catch (error) {
      console.error('Error generando imagen:', error);
      throw error;
    }
  }
}