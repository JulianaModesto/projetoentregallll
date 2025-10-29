export function salvarDados(chave, novoDado) {
  const existentes = JSON.parse(localStorage.getItem(chave)) || [];
  existentes.push(novoDado);
  localStorage.setItem(chave, JSON.stringify(existentes));
}

export function lerDados(chave) {
  return JSON.parse(localStorage.getItem(chave)) || [];
}