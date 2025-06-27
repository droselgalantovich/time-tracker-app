import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLastSelectedProject } from '../../store/projectsSlice';
import styles from './ProjectCard.module.css';

function getRandomColor() {
  const colors = [
    '#3b82f6',
    '#f59e42',
    '#10b981',
    '#f43f5e',
    '#6366f1',
    '#fbbf24',
    '#14b8a6',
    '#a21caf',
    '#e11d48',
    '#0ea5e9',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

interface ProjectCardProps {
  id: string;
  name: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  iconProject?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  company,
  startDate,
  endDate,
  iconProject,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoBg = iconProject ? undefined : getRandomColor();

  const handleViewProject = () => {
    dispatch(setLastSelectedProject(id));
    navigate(`/projects/${id}/time`);
  };
  return (
    <div className={styles.containerCard}>
      <div className={styles.headerCard}>
        <div className={styles.logoProject} style={{ backgroundColor: logoBg }}>
          {iconProject && (
            <img
              src={iconProject}
              alt="icon"
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
              }}
            />
          )}
        </div>
        <div>
          <h3>{name}</h3>
          {company && <p>{company}</p>}
        </div>
      </div>
      <div className={styles.dataDevelop}>
        {(startDate || endDate) && (
          <p>
            {startDate}
            {endDate ? ` — ${endDate}` : ''}
          </p>
        )}
      </div>{' '}
      <div className={styles.buttonCard}>
        <button onClick={handleViewProject}>View project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
