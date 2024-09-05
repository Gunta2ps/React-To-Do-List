import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const createStore = (set) => ({
    arrObj:[
        {id:1, title:'JS'},
    ],
    addObj: (newValue) => set((item) =>({arrObj: [...item.arrObj,{id: Date.now(), title : newValue}],
    })),
    removeObj: (id) =>set((item) => ({
        arrObj : item.arrObj.filter(el => el.id !== id),
    })),
    updateObj: (newValue,id) => set((item) => ({arrObj: item.arrObj.map(el =>{
        if(el.id === id){
            return {...el,title:newValue}
        }else{
            return{...el}
        }

    })}))
});

const usePersist = {
  name: "data-store",
  getStorage: () => localStorage,
};

const useStore = create(persist(createStore, usePersist));

export default useStore;
