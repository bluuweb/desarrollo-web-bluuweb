const posts = [
    {
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body:
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body:
            "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body:
            "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
];

// const findPostById = (id) => {
//     const post = posts.find((item) => item.id === id);

//     // devolver la promesa
//     return new Promise((resolve, reject) => {
//         //resolve
//         if (post) {
//             resolve(post);
//         } else {
//             reject("No encontrado por id: " + id);
//         }
//     });
// };

// const findPostById = (id) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const post = posts.find((item) => item.id === id);
//             post ? resolve(post) : reject("No encontrado por id: " + id);
//         }, 2000);
//     });

// const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

const findPostById = async (id) => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id
        );
        const post = await res.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostById(50);
