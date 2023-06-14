import axios from "axios";

const axiosIns = axios.create({
    baseURL : "https://dummyjson.com"
})

const UserApi = {
    getAll : async () =>  {
        return axiosIns.request({
            method: 'GET',
            url:`/users`
        })
    },
    getSingle: async (id) => {
        return axiosIns.request({
            method: 'GET', 
            url:`/users/${id}`
        })
    },
    create: async (user) => {
        return axiosIns.request({
            method:'POSt',
            url:`/users/add`,
            data : user
        })
    },
    update: async (user,id) => {
        return axiosIns.request({
            method: "PATCH",
            url: `/users/${id}`,
            data:  user
        })
    },
}
export  default UserApi