import styles from './EmptyProjects.module.css';
import bgImage from '../../assets/Time/bgTime.png';
import searchIcon from '../../assets/Time/FeaturedIcon.png';
import { useState } from 'react';

interface EmptyProjectsProps {
  onCreateClick: () => void;
}

const EmptyProjects = ({ onCreateClick }: EmptyProjectsProps) => {
  const [emptyProjects, setEmptyProjects] = useState(true);

  return (
    <>
      {emptyProjects && (
        <div className={styles.emptyProjects}>
          <div>
            <img src={bgImage} alt="bgImage" />
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <h2>No projects found</h2>
          <button onClick={onCreateClick}>+ Create a new project</button>
        </div>
      )}
    </>
  );
};

export default EmptyProjects;
