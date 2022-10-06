// CAPTURA E ATIVIDADE DO BOTÃO PRINCIPAL
var btRegistrar = document.querySelector("button#btRegistrar")
btRegistrar.addEventListener("click", registrarConta)

// DECLARAÇÃO DAS VARIÁVEIS FORA DO ESCOPO DA FUNÇÃO
var numContas = 0
var valorTotal = 0
var resultado = ""

function registrarConta() {

  // CAPTURA DOS ELEMENTOS A SEREM USADOS
  var inDescricao = document.getElementById("inDescricao")
  var inValorConta = document.getElementById("inValor")

  var outContas = document.querySelector("pre#outContas")
  var outTotal = document.querySelector("pre#outTotal")

  // ATRIBUINDO VALORES E TRANSFORMANDO TEXTO E NÚMERO
  var descricao = inDescricao.value
  descricao = descricao.toUpperCase()

  var valor = inValorConta.value
  valor = Number(valor)

  // VALIDAÇÃO DE DADOS - DESCRIÇÃO
  if (descricao == "") {
    alert("Informe os dados corretamente...")
    inDescricao.focus()
    return
  }

  // VALIDAÇÃO DE DADOS - VALOR
  if (valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente...")
    inValorConta.focus()
    return
  }

  // INCREMENTO DE INDICATIVO DE REGISTROS
  numContas++

  // TOTALIZANDO REGISTROS
  valorTotal = valorTotal + valor

  // ATRIBUINDO LISTA DE CONTAS DO MÊS
  resultado = resultado + descricao + " - R$ " + valor.toFixed(2) + "\n"

  // SAÍDA DAS CONTAS COM UM SEPARADOR
  outContas.textContent = resultado + "--------------------------------"

  // SAÍDA PARA O TOTALIZADOR DAS CONTAS ADICIONADAS
  outTotal.textContent = numContas + " Contas Totais R$: " + valorTotal.toFixed(2)

  // LIMPEZA DOS CAMPOS E FOCO APÓS PROCESSAMENTO DA ROTINA INTEIRA
  inDescricao.value = ""
  inValorConta.value = ""
  inDescricao.focus()
}