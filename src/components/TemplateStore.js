import { create } from "zustand";

const TemplateStore = (set, get) => ({
    selectedTemplate: {
        src: "",
        name: "",
        title: "",
        templateNumber: "",
        categories: [],
        recommended: false
    },
    setSelectedTemplate: (template) => set({ selectedTemplate: template }),
    isOpen: false,
    setIsOpen: (value) => set({ isOpen: value }),
});

const useTemplateStore = create(TemplateStore);

export default useTemplateStore;