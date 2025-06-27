import React from 'react';
import styles from './AddProjectCard.module.css';

interface AddProjectCardProps {
  onClick: () => void;
}

const AddProjectCard: React.FC<AddProjectCardProps> = ({ onClick }) => {
  return (
    <div className={styles.containerCard} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.plusIcon}>+</div>
        <span className={styles.text}>Add Project</span>
      </div>
    </div>
  );
};

export default AddProjectCard;
