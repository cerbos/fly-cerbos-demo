export const Users = [
  {
    id: "1",
    name: "Admin",
    email: "admin@cerbos.dev",
    password: "cerbos",
    roles: ["ADMIN"],
  },
  {
    id: "2",
    name: "Rohit",
    email: "rohit@cerbos.dev",
    password: "cerbos",
    roles: ["USER"],
  },
  {
    id: "3",
    name: "Alex",
    email: "alex@cerbos.dev",
    password: "cerbos",
    roles: ["USER"],
  },
];

export const Courses = [
  {
    id: "1",
    title: "Linux Foundations",
    price: 49,
    status: "PUBLISHED",
    authorId: "2",
    author: "Rohit",
  },
  {
    id: "2",
    title: "Docker 101",
    price: 79,
    status: "UNPUBLISHED",
    authorId: "2",
    author: "Rohit",
  },
  {
    id: "3",
    title: "JS Foundations",
    price: 29,
    status: "PUBLISHED",
    authorId: "3",
    author: "Alex",
  },
  {
    id: "4",
    title: "React 16",
    price: 49,
    status: "DEPRECATED",
    authorId: "3",
    author: "Alex",
  },
];
