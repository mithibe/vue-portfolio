import {defineStore} from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [
            {id:1, title:"Project 1", description:"Description of project1", link:"http://example.com"},
            {id:2, title:"Project 2", description:"Description of project2", link:"http://example.com"},
            // Add more projects as needed
        ],
    }),
    getters: {
        projectCount: (state) => state.projects.length,
    },
});