===========================================================
                DRAKOBETS — PROYECTO NOSQL + RAG
===========================================================

Drakobets es un proyecto académico que combina:

- MongoDB Atlas (NoSQL)
- Node.js (Servidor RAG)
- Python (Embeddings)
- Vector Search (Atlas Search)
- RAG textual (activo)
- RAG multimodal e híbrido (en desarrollo)

El objetivo del proyecto es integrar técnicas modernas de
Recuperación Aumentada por Generación (RAG) con un sistema
real de apuestas, competencias y transacciones.

===========================================================
1. ESTRUCTURA DEL PROYECTO
===========================================================

drakobets/
│
├── src/
│   ├── server.js                  # Servidor Express con RAG API
│   ├── app.js                     # Seeders + índices
│   │
│   ├── config/
│   │   ├── env.js
│   │   └── db.js
│   │
│   ├── data/
│   │   ├── seed/                  # Seeders
│   │   └── index.js
│   │
│   ├── indexes/                   # Índices MongoDB
│   │
│   ├── rag/
│   │   ├── text/
│   │   │   ├── chunker.js
│   │   │   ├── ingester.js
│   │   │   ├── embedder.py
│   │   │   ├── manual_ingester.js
│   │   │   ├── rag_text.js
│   │   │   └── search.js
│   │   │
│   │   ├── image/                 # (CLIP multimodal)
│   │   ├── hybrid/
│   │   └── llm/groq.js
│   │
│   ├── routes/
│   │   └── rag.routes.js
│   │
│   └── controllers/
│       └── rag.controller.js
│
├── requirements.txt
├── package.json
├── .env.example
├── .gitignore
└── README.txt

===========================================================
2. REQUISITOS
===========================================================

- Node.js v18+
- Python 3.10+
- MongoDB Atlas configurado
- Cuenta Groq (para API LLM)
- Git

===========================================================
3. INSTALACIÓN DEL PROYECTO
===========================================================

1. Clonar el repositorio:

   git clone https://github.com/edissonRamirez/drakobets_beta.git
   cd drakobets_beta

2. Instalar dependencias Node:

   npm install

3. Crear archivo .env:

   Copiar .env.example → .env
   Editar con:

   - MONGO_URI
   - DB_NAME
   - GROQ_API_KEY
   - VECTOR_TEXT_INDEX
   - PORT

===========================================================
4. CONFIGURACIÓN PYTHON (EMBEDDINGS)
===========================================================

1. Crear venv:

   python -m venv venv

2. Activar venv:

   Windows:
   venv\Scripts\activate

3. Instalar requirements:

   pip install -r requirements.txt

===========================================================
5. EJECUTAR SEEDERS + ÍNDICES
===========================================================

Ejecutar:

   npm run reset

Esto realiza:

- Limpieza de colecciones
- Ejecución de seeders
- Creación de índices especializados

===========================================================
6. INGESTAR MANUAL PARA RAG TEXTUAL
===========================================================

El archivo se encuentra en:

src/rag/text/context/drakobets_manual.txt

Para ingestar chunks + embeddings:

   node src/rag/text/manual_ingester.js

Esto crea documentos en la colección:

   vector_chunks_text

===========================================================
7. CREAR ÍNDICE VECTORIAL EN MONGODB ATLAS
===========================================================

En Atlas:

1. Database / Collections
2. vector_chunks_text
3. Search Indexes
4. Create Index → JSON Editor

Pegar:

{
  "fields": [
    {
      "type": "vector",
      "path": "embedding",
      "numDimensions": 384,
      "similarity": "cosine"
    },
    {
      "type": "filter",
      "path": "metadata"
    }
  ]
}

El nombre debe coincidir con:

   VECTOR_TEXT_INDEX=text_vectors_index

===========================================================
8. EJECUTAR EL SERVIDOR RAG
===========================================================

   node src/server.js

Debe mostrar:

   Servidor RAG corriendo en http://localhost:3000

===========================================================
9. ENDPOINTS DISPONIBLES (POSTMAN)
===========================================================

1. RAG TEXTUAL

POST http://localhost:3000/rag/text

Body:
{
  "question": "¿Qué es una competencia?"
}

2. RAG MULTIMODAL (cuando esté activo)

POST http://localhost:3000/rag/image

3. RAG HÍBRIDO (texto + imagen)

POST http://localhost:3000/rag/hybrid

===========================================================
10. PROBAR RAG COMPLETO POR CONSOLA
===========================================================

   node test_rag_full.js

===========================================================
11. INSTRUCCIONES PARA EQUIPO / COMPAÑEROS
===========================================================

Cada integrante debe:

1. Clonar el repo:

   git clone https://github.com/edissonRamirez/drakobets_beta.git

2. Crear .env:

   cp .env.example .env
   Editar valores personales

3. Instalar Node:

   npm install

4. Crear venv:

   python -m venv venv
   venv\Scripts\activate

5. Instalar Python deps:

   pip install -r requirements.txt

6. Inicializar base de datos:

   npm run reset

7. Ingestar manual:

   node src/rag/text/manual_ingester.js

8. Ejecutar servidor:

   node src/server.js

9. Probar desde Postman:

   POST http://localhost:3000/rag/text

===========================================================
12. SEGURIDAD
===========================================================

- .env está ignorado por Git
- No se sube venv/
- No se sube node_modules/
- No se suben claves a GitHub
- No se suben archivos grandes

===========================================================
13. ESTADO ACTUAL DEL PROYECTO
===========================================================

- Seeders completos ✔
- Índices optimizados ✔
- RAG textual funcional ✔
- Servidor Express operativo ✔
- Manual contextual ingerido ✔
- Limpieza de claves y archivos grandes ✔
- RAG multimodal (pendiente)
- RAG híbrido (pendiente)

===========================================================
Fin del archivo.
===========================================================
