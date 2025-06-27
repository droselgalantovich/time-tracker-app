import styles from './CreateProjectModal.module.css';
import flagIcon from '../../assets/ProjectModal/FlagIconSvg.svg';
import bgModal from '../../assets/ProjectModal/BgIconProjectModal.png';
import closeIcon from '../../assets/ProjectModal/Button close X.svg';

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.iconContainer}>
        <img src={flagIcon} alt="Flag" className={styles.flagIcon} />
        <img src={bgModal} alt="Background" className={styles.bgIcon} />
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </button>
    </div>
  );
};

export default ModalHeader;
