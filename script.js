function calcularPagamento() {
    const nome = document.getElementById('nome').value;
    const salarioBase = Number(document.getElementById('salarioBase').value);
    const vendas = Number(document.getElementById('vendas').value);
    const percentualComissao = Number(document.getElementById('comissao').value);
 
    const valorComissao = (percentualComissao / 100) * vendas;
    const salarioBruto = salarioBase + valorComissao;
    const descontoINSS = salarioBruto * 0.08;
    const salarioLiquido = salarioBruto - descontoINSS;
 
    document.getElementById('resultado').innerHTML = `
      <p><strong>Funcionário:</strong> ${nome}</p>
      <p>Salário Base: R$ ${salarioBase.toFixed(2)}</p>
      <p>Comissão: R$ ${valorComissao.toFixed(2)}</p>
      <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
      <p>Desconto INSS (8%): R$ ${descontoINSS.toFixed(2)}</p>
      <p><strong>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</strong></p>
    `;
  }
 