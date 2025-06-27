import { useState } from 'react';
import styles from './CreateProjectModal.module.css';
import ModalHeader from './ModalHeader';
import ProjectDateRangePicker from './ProjectDateRangePicker';
import ProjectIconUploader from './ProjectIconUploader';
import 'react-datepicker/dist/react-datepicker.css';

export interface ProjectFormData {
  projectName: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  iconProject?: File | null;
}

interface CreateProjectModalProps {
  onClose: () => void;
  onConfirm: (data: ProjectFormData) => void;
}

const CreateProjectModal = ({ onClose, onConfirm }: CreateProjectModalProps) => {
  const [projectName, setProjectName] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [iconProject, setIconProject] = useState<File | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const formatDateToMonthYear = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (projectName.trim()) {
      onConfirm({
        projectName: projectName.trim(),
        company,
        startDate: formatDateToMonthYear(startDate),
        endDate: isCurrent ? 'Present' : formatDateToMonthYear(endDate),
        isCurrent,
        iconProject,
      });
      onClose();
    }
  };
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ModalHeader onClose={onClose} />

        <div className={styles.titleForm}>
          <h2>Create a new project</h2>
          <p>Please enter a name for this project.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="projectName">Project name</label>
            <input
              id="projectName"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. Website design"
              autoFocus
              autoComplete="off"
            />
          </div>

          {showDescription && (
            <>
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  autoComplete="off"
                />
              </div>

              <ProjectDateRangePicker
                startDate={startDate}
                endDate={endDate}
                isCurrent={isCurrent}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onCurrentToggle={setIsCurrent}
              />

              <ProjectIconUploader iconProject={iconProject} onFileChange={setIconProject} />
            </>
          )}

          <div className={styles.toggleDescription}>
            <button
              type="button"
              onClick={() => setShowDescription((v) => !v)}
              className={styles.descriptionBtn}
            >
              Description
            </button>
          </div>

          <div className={styles.buttons}>
            <button type="submit" className={styles.confirmButton} disabled={!projectName.trim()}>
              Confirm
            </button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
