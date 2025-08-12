let nome = "Wanessa"
let idade = 16
let cidade = "Apuiares"
let anoAtual = 2025 
let profissao = "perita criminal"

let anodeNacimento = anoAtual - idade

let salario = 2356
let bonus = 330

let totalnoMes = salario + bonus
let totalnoAno = totalnoMes * 12 
let dobrado = totalnoMes * 12 * 2 

alert(`=========== Relatorio do Usuário ===========
    Nome: ${nome}
    Idade: ${idade}
    Cidade: ${cidade}
    Profissão: ${profissao}
    Ano de Nascimento: ${anodeNacimento}
    
    Salario-base: ${salario}
    bonus: ${bonus}
    Total no Mes: ${totalnoMes}
    Total ano: ${totalnoAno}
    Total anual (salario dobrado): ${dobrado}

============================================`)