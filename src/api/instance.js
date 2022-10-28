import axios from 'axios'

export const instance = axios.create()

// instance.interceptors.response.use(
//     (response) =>
//         new Promise((resolve) => {
//             if (response.headers['content-type'] === 'text/html; charset=utf-8') {
//                 window.location.href = "/login_page"
//             }
//             resolve(response);
//         }),
//     (error) => {
//         if (!error.response) {
//             return new Promise((resolve, reject) => {
//                 reject(error)
//             });
//         }
//         const { status } = error.response
//         if (status === 401) {
//             window.location.href = "/login_page"
//         }
//         else {
//             return new Promise((resolve, reject) => {
//                 reject(error)
//             });
//         }
//     }
// );
