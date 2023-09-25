# Anotacoes_POO_II

## Selecionando a pasta no PC da UVV
cd ..
(Voltar até "C:" e entrar com "cd " até a pasta "DevC"

## Criando a pasta e entrando nela
mkdir nome_da_pasta
cd nome_da_pasta
code .

## Criação das configurações necessárias
npm init -y
npm install typescript ts-node @types/node --save-dev

npx tsc --init

npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

## Criação das tabelas:
Preencher com as informações das tabelas, exemplo (Olhar dentro do README.md pra entender certinho):
IMPORTANTE: Sob nenhuma hipóteses apagar ou modificar as 2 "tabelas" que vem predefinidas (client e db).

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

## Após preencher as tabelas, fazer o migrate:
npx prisma migrate dev --name init

## Criar arquivo de informações:
IMPORTANTE: O "touch nome_do_arquivo.ts" não funciona, então pode-se criar o arquivo manualmente mesmo ou fazer da maneira que a Malu ensinou.

nome_do_arquivo.ts


# Coisas importantes:
## Configurar o tsconfig.json
(Anotar o que alterar (Baseado na antiga atividade))

## Baixar extensões
- Prisma
- SQL Viewer
- vscode-icons
