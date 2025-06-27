import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  id: string;
  name: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  iconProject?: string; // base64 строка
  createdAt: string;
}

interface ProjectsState {
  projects: Project[];
  lastSelectedProjectId: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  lastSelectedProjectId: localStorage.getItem('lastSelectedProjectId') || null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<any>) => {
      let iconProjectBase64 = '';
      if (action.payload.iconProject && typeof action.payload.iconProject !== 'string') {
        iconProjectBase64 = action.payload.iconProject;
      } else if (typeof action.payload.iconProject === 'string') {
        iconProjectBase64 = action.payload.iconProject;
      }
      const newProject: Project = {
        id: Date.now().toString(),
        name: action.payload.projectName,
        company: action.payload.company,
        startDate: action.payload.startDate,
        endDate: action.payload.isCurrent ? 'Present' : action.payload.endDate,
        isCurrent: action.payload.isCurrent,
        iconProject: iconProjectBase64,
        createdAt: new Date().toISOString(),
      };
      state.projects.push(newProject);
    },
    setLastSelectedProject: (state, action: PayloadAction<string>) => {
      state.lastSelectedProjectId = action.payload;
      localStorage.setItem('lastSelectedProjectId', action.payload);
    },
  },
});

export const { addProject, setLastSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
