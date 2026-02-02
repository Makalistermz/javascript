let amigo = {nome: 'marcos',
    sexo: 'M', 
    peso: 87.4, 
    idade: 42, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}} 

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)