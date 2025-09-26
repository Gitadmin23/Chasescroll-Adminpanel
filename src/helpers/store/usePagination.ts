import { create } from 'zustand'; 
 

type PaginationState = {   
    page: number;
    pageSize: number;
    totalpage: number
}

type Action = {  
    updatePage: (data: PaginationState['page']) => void  
    updatePageSize: (data: PaginationState['pageSize']) => void  
    updateTotalPage: (data: PaginationState['totalpage']) => void  
}

export const usePagintion = create<PaginationState & Action>((set) => ({  
    page: 1,
    pageSize: 10,
    totalpage: 0,
    updatePage: (data: any) => set(() => ({ page: data })), 
    updatePageSize: (data: any) => set(() => ({ pageSize: data })), 
    updateTotalPage: (data: any) => set(() => ({ totalpage: data })), 
}));