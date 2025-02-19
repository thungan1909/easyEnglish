// src/api.js
import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Thêm người dùng
export const addUser = async (name, age) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            age: age,
        });
        return docRef.id;
    } catch (e) {
        console.error("Error adding user: ", e);
        throw e;
    }
};

// Lấy danh sách người dùng
export const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Xóa người dùng
export const deleteUser = async (userId) => {
    await deleteDoc(doc(db, "users", userId));
};
