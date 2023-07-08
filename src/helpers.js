
export function formatarValor(valor) {
  const valorNumerico = Number(valor);
  if (!isNaN(valorNumerico)) {
    return valorNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
}
