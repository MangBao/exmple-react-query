import { instance } from "./instance";

export const fetchAllUsers = (params) => {
  return instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const fetchAllPosts = async (params) => {
  return await instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const fetchAllComments = (params) => {
  return instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const fetchAllPhotos = (params) => {
  return instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const fetchAllTodos = (params) => {
  return instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const fetchAllAlbums = (params) => {
  return instance
    .get(`http://localhost:3000/${params}`)
    .then((res) => res.data);
};

export const addPost = (data) => {
  return instance
    .post(`http://localhost:3000/posts`, data)
    .then((res) => console.log(res.data.id));
};

export const fetchPost = async (id) => {
  return await instance
    .get(`http://localhost:3000/posts/${id}`)
    .then((res) => {
      // console.log(res.data)
      return res.data;
    });
};

export const updatePost = (data) => {
  return instance
    .patch(`http://localhost:3000/posts/${data.id}`, data)
    .then((res) => console.log(res));
};

export const removePost = (postId) => {
  return instance
    .delete(`http://localhost:3000/posts/${postId}`)
    .then(() => console.log('Deleted post ' + postId));
};
