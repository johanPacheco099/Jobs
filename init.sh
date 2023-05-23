!#/bin/bash
projectname=jobs
echo '# '$projectname > README.md
mkdir src test config docs build
touch ./src/$projectname.ts
touch ./test/$projectname.test.ts
touch ./config/.env.development
touch ./config/.env.production
touch ./config/.env.test
echo '/node_modules' > .gitignore
echo '/build' >> .gitignore
echo '/test' >> .gitignore
echo '/config' >> .gitignore
echo '' >> .gitignore
# -- init node project
npm init -y
# -- install dependencies
npm i express bcryptjs jsonwebtoken mongoose dotenv cors morgan helmet ejs
# -- install typescript dependencies
npm i typescript ts-jest @types/express @types/bcryptjs @types/jsonwebtoken @types/cors @types/morgan @types/ejs @types/jest ts-node-dev ts-standard -D
# -- init typescript
npx tsc --init

# -- config 
# -- package.json
# {
#     "name": "jobs",
#     "version": "1.0.0",
#     "description": "Authentication API",    
#     "main": "build/jobs.js",
#     "scripts": {
#         "dev": "ts-node-dev src/jobs.js",
#         "build": "tsc",
#         "lint": "ts-standard --fix",
#         "start": "node build/jobs.js"
#     },
#     "eslintConfig": {
#         "parserOptions": {
#             "project": "./tsconfig.json",
#         },
#         "extends": ["./node_modules/ts-standard/eslintrc.json"]
#     }
# }

# -- tsconfig.json
# {
#     "compilerOptions": {
#         "target": "es2022",
#         "module": "commonjs",
#         "rootDir": "./src",
#         "moduleResolution": "node",
#         "baseUrl": "./src",
#         "resolveJsonModule": true,
#         "outDir": "./build",
#         "esModuleInterop": true,
#         "forceConsistentCasingInFileNames": true,
#         "strict": true,
#         "noUnusedLocals": true,
#         "noUnusedParameters": true,
#         "noImplicitReturns": true,
#         "noFallthroughCasesInSwitch": true,
#         "skipLibCheck": true,'
#     },
#     "include": ["src/**/*", "tests/**/*"],
#     "exclude": ["node_modules", "config", "docs", "build"]
# }