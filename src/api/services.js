import { instance } from "./instance";

export const fetchAllUsers = (params) => {
  return instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const fetchAllPosts = async (params) => {
  return await instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const fetchAllComments = (params) => {
  return instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const fetchAllPhotos = (params) => {
  return instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const fetchAllTodos = (params) => {
  return instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const fetchAllAlbums = (params) => {
  return instance
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .then((res) => res.data);
};

export const addPost = (data) => {
  return instance
    .post(`https://jsonplaceholder.typicode.com/posts`, data)
    .then((res) => console.log(res.data.id));
};

export const fetchPost = async (id) => {
  return await instance
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      // console.log(res.data)
      return res.data;
    });
};

export const updatePost = (data) => {
  return instance
    .patch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
    .then((res) => console.log(res));
};

export const removePost = (postId) => {
  return instance
    .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(() => console.log('Deleted post ' + postId));
};
