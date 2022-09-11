# LabenuSystem:

<h1 align="center">
<img width=450 src="https://content.pstmn.io/77615daa-597b-4b47-9a40-1ba48ca7e854/aW1hZ2UtcmVtb3ZlYmctcHJldmlldy5wbmc=">
</h1>

# [API LINK ](https://documenter.getpostman.com/view/22767800/VVJ3zb4P#78e8bc21-eb8f-4969-8b43-3b10bd75988d)

## ✨ Sobre
Essa API foi desenvolvida para representar a dinâmica básica de
qualquer escola . Aqui será encontrado três entidades
fundamentais para o bom funcionamento de uma escola:
estudantes, corpo docente e turmas. As funcionalidades básicas
encontradas nessa API são: criar estudante, criar docente,
criar turma, adicionar estudante na turma e adicionar docente
na turma e também é possível mudar o aluno e professore de turma.
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
