 
 let sobreMim = { 
    nome: "Samyr", 
    idade: 16, 
    altura: 1.74 
} 
console.log(sobreMim); 

sobreMim.corDosOlhos = "Castanhos médios"; 
console.log(sobreMim); 

delete sobreMim.altura; 
console.log(sobreMim); 

console.log(sobreMim); 


let cadastro = [{ 
    nome: "Samira", 
    idade: 13, 
    telefone: 40028922, 
    amigos: ["Duda", "João", "Luck", "Ricardo"] 
}, { 
    nome: "Duda", 
    idade: 15, 
    telefone: 40028922, 
    amigos: ["João", "Samyr", "Gabriel", "Samira"] 
}, { 
    nome: "Ricardo", 
    idade: 18, 
    telefone: 40028922, 
    amigos: ["Gustavo", "Junior", "Samyr", "Alice"] 
}, { 
    nome: "Junior", 
    idade: 18, 
    telefone: 40028922, 
    amigos: ["Alice", "Gustavo", "Samyr", "Ricardo"] 
}, { 
    nome: "Jutai", 
    idade: 16, 
    telefone: 40028922, 
    amigos: ["Pedro", "Ricardo", "Ellen", "Alice", "Dany"] 
}] 
console.log(cadastro); 

for (let contador = 0; contador < cadastro.length; contador++) { 
    console.log(cadastro[contador].amigos[contador]); 
}