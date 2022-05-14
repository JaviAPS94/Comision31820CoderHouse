const normalizr = require('normalizr');
const normalize = normalizr.normalize;
const denormalize = normalizr.denormalize;

const schema = normalizr.schema;

const blogpost = {
    id: "1",
    title: "My awesome blog post",
    description: "My awesome blog post description",
    content: "Hello world",
    author: {
        id: "1",
        name: "Pablo"
    },
    comments: [
        {
            id: "1",
            author: "Bob",
            content: "Nice post"
        },
        {
            id: "2",
            author: "James",
            content: "Nice post too"
        },
    ]
};

// Definir un esquema de usuarios (autores y comentarios)
const authorSchema = new schema.Entity('authors');

// Definir esquema de comentarios
const commentSchema = new schema.Entity('comments');

// Definir un esquema de artículos
const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
});

const util = require('util');

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true));
}

console.log('------OBJETO NORMALIZADO----');
const normalizedData = normalize(blogpost, postSchema);
print(normalizedData);

console.log('------OBJETO DESNORMALIZADO----');
const denormalizedData = denormalize(normalizedData.result, postSchema, normalizedData.entities);
print(denormalizedData);
