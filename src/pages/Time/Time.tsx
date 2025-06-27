import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyProjects from '../../components/EmptyProjects/EmptyProjects';
import CreateProjectModal from '../../components/CreateProjectModal/CreateProjectModal';
import { addProject, setLastSelectedProject } from '../../store/projectsSlice';
import styles from './Time.module.css';
import type { RootState } from '../../store/store';
import type { ProjectFormData } from '../../components/CreateProjectModal/CreateProjectModal';

const Time = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const lastSelectedProjectId = useSelector(
    (state: RootState) => state.projects.lastSelectedProjectId
  );
  const currentProject = projectId ? projects.find((p) => p.id === projectId) : null;

  // Если нет projectId, но есть проекты и последний выбранный проект, перенаправляем
  useEffect(() => {
    if (!projectId && projects.length > 0 && lastSelectedProjectId) {
      const lastProject = projects.find((p) => p.id === lastSelectedProjectId);
      if (lastProject) {
        navigate(`/projects/${lastSelectedProjectId}/time`, { replace: true });
      }
    }
  }, [projectId, projects, lastSelectedProjectId, navigate]);

  // Сохраняем текущий проект как последний выбранный
  useEffect(() => {
    if (projectId && currentProject) {
      dispatch(setLastSelectedProject(projectId));
    }
  }, [projectId, currentProject, dispatch]);

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
        setIsModalOpen(false);
        // Перенаправляем на страницу Projects после создания проекта
        navigate('/projects');
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
      setIsModalOpen(false);
      // Перенаправляем на страницу Projects после создания проекта
      navigate('/projects');
    }
  };
  return (
    <div className={styles.container}>
      {projects.length === 0 ? (
        <div className={styles.emptyContainer}>
          <EmptyProjects onCreateClick={() => setIsModalOpen(true)} />
          {isModalOpen && (
            <CreateProjectModal
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleCreateProject}
            />
          )}
        </div>
      ) : projectId && currentProject ? (
        <div>
          {/* Интерфейс Time для конкретного проекта */}
          <h2>Time Tracking - {currentProject.name}</h2>
          <p>Здесь будет интерфейс отслеживания времени для проекта "{currentProject.name}"</p>
          {/* TODO: Добавить календарь, список задач, кнопку добавления задач */}
        </div>
      ) : projectId && !currentProject ? (
        <div>
          {/* Проект не найден */}
          <h2>Проект не найден</h2>
          <p>Проект с указанным ID не существует</p>
          <button onClick={() => navigate('/projects')}>Перейти к проектам</button>
        </div>
      ) : (
        <div>
          {/* Состояние когда есть проекты, но не выбран конкретный */}
          <h2>Time Tracking</h2>
          <p>Выберите проект из списка проектов для отслеживания времени</p>
          <button onClick={() => navigate('/projects')}>Перейти к проектам</button>
        </div>
      )}
    </div>
  );
};

export default Time;
