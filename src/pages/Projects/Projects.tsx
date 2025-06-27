import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyProjects from '../../components/EmptyProjects/EmptyProjects';
import CreateProjectModal from '../../components/CreateProjectModal/CreateProjectModal';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AddProjectCard from '../../components/AddProjectCard/AddProjectCard';
import { addProject } from '../../store/projectsSlice';
import styles from './Projects.module.css';
import type { RootState } from '../../store/store';
import type { Project } from '../../store/projectsSlice';
import type { ProjectFormData } from '../../components/CreateProjectModal/CreateProjectModal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);

  const handleCreateProject = (data: ProjectFormData) => {
    if (data.iconProject && data.iconProject instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(
          addProject({
            ...data,
            name: data.projectName,
            iconProject: reader.result as string,
          })
        );
      };
      reader.readAsDataURL(data.iconProject);
    } else {
      dispatch(
        addProject({
          ...data,
          name: data.projectName,
          iconProject: '',
        })
      );
    }
  };

  return (
    <div className={styles.container}>
      {projects.length === 0 ? (
        <div className={styles.emptyContainer}>
          <EmptyProjects onCreateClick={() => setIsModalOpen(true)} />
        </div>
      ) : (
        <div className={styles.projectsGrid}>
          {' '}
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              company={project.company}
              startDate={project.startDate}
              endDate={project.endDate}
              iconProject={project.iconProject}
            />
          ))}
          <AddProjectCard onClick={() => setIsModalOpen(true)} />
        </div>
      )}
      {isModalOpen && (
        <CreateProjectModal onClose={() => setIsModalOpen(false)} onConfirm={handleCreateProject} />
      )}
    </div>
  );
};

export default Projects;
