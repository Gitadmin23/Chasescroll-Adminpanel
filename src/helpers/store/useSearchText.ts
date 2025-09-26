import { create } from 'zustand';  
 
type State = {   
    search: string  
    selected: string  
}

type Action = {  
    setSearchText: (data: State['search']) => void   
    setSelected: (data: State['selected']) => void   
}

export const useSearchStore = create<State & Action>((set) => ({ 
    search: "",  
    selected: "",  
    setSearchText: (data: any) => set(() => ({ search: data })),
    setSelected: (data: any) => set(() => ({ selected: data })),  
}));