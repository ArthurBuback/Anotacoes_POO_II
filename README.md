# Anotacoes_POO_II

## Selecionando a pasta no PC da UVV
cd ..
(Voltar até "C:" e entrar com "cd " até a pasta "DevC"

## Criando a pasta e entrando nela
mkdir trabalhoPOO
cd trabalhoPOO
code .

## Criação das configurações necessárias
npm init -y
npm install typescript ts-node @types/node --save-dev

npx tsc --init

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

## Criação das tabelas
Preencher com as informações das tabelas, exemplo:

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}

## Extensões
- Prisma
- SQL Viewer
- vscode-icons
