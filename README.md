# LabenuSystem:

<h1 align="center">
<img width=450 src="https://content.pstmn.io/77615daa-597b-4b47-9a40-1ba48ca7e854/aW1hZ2UtcmVtb3ZlYmctcHJldmlldy5wbmc=">
</h1>

# [API LINK ](https://documenter.getpostman.com/view/22767800/VVJ3zb4P#78e8bc21-eb8f-4969-8b43-3b10bd75988d)

## ✨ Sobre
Essa API foi desenvolvida para representar a dinâmica básica de
qualquer escola. Aqui será encontrado três entidades
fundamentais para o bom funcionamento de uma escola:
estudantes, corpo docente e turmas. As funcionalidades básicas
encontradas nessa API são: criar estudante, criar docente,
criar turma, adicionar estudante na turma e adicionar docente
na turma e também é possível mudar o aluno, professor e turma.
ﾠ
## 🚩 As funcionalidades básicas são:
- → Criar turma
- → Buscar turmas ativas
- → Mudar turma de módulo
- → Criar estudante
- → Buscar estudantes através do nome
- → Mudar estudante de turma
- → Criar docente
- → Buscar todas as pessoas docentes
- → Mudar docente de turma

## 🎒 Turma
Toda turma é composta pelas seguintes características:

- id: identificador único gerado pela própria aplicação
- nome: nome da turma
- docentes: lista de ids ou nomes de docentes dessa turmaexistir na tabela de docentesiniciar vazia
- estudantes: lista de ids ou nomes de estudantes dessa turmaexistir na tabela de estudantes iniciar vaziamodulo: 
- módulo atual da turma pode assumir um valor entre 1 a 6 nas turmas ativas, ou 0, indicando que as aulas dessa turma ainda não começaraminiciar como 0

## 👨‍🎓 Estudante
Representa estudantes da nossa instituição. Possuir uma, e somente uma turma. Estudantes com cadastro novo começam sem alocação em nenhuma turma.

* Possuir:

- id: identificador único gerado pela própria aplicação
- nome: nome da pessoa
- email: email da pessoa
- data_nasc: data de nascimento no formato DD/MM/AAAA (exemplo: 21/03/1999)
- turma_id: id ou nome da turma da pessoa existir na tabela de turmas

## 👨‍🏫 Docente
Representa docentes da nossa instituição. Cada docente deve possuir uma, e somente uma turma por vez. Docentes com cadastro novo começam sem alocação em nenhuma turma.

* Possuir:

- id: identificador único gerado pela própria aplicação
- nome: nome da pessoa
- email: email da pessoa
- data_nasc: data de nascimento no formato DD/MM/AAAA exemplo: "21/03/1999"
- turma_id: id ou nome da turma que essa pessoa é responsável existir na tabela de turmas

## 🚀 Tecnologias/Tools
- Nodejs
- Express/Cors
- MySQL - banco relacional
- Typescript
- Heroku;
- Postman
- NPM

## 💻 Desenvolvedores 


<div align="center">  

| [<img src="https://user-images.githubusercontent.com/60453269/184236315-92017e73-39ae-4e8e-8a4b-3e7033bc4eb4.jpg" width=150><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | [<img src="https://avatars.githubusercontent.com/u/104532161?v=4" width=150><br><sub> Marcia de Paula Mello </sub>](https://www.linkedin.com/in/m%C3%A1rcia-de-paula-mello-6347a61bb/) | [<img src="https://avatars.githubusercontent.com/u/104574298?v=4" width=150><br><sub> Leonardo Almeida  </sub>](https://www.linkedin.com/in/leonardo-almeida-viana/) | 
|---|---|---|

</div>

