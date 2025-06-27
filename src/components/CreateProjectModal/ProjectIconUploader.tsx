import styles from './CreateProjectModal.module.css';

interface ProjectIconUploaderProps {
  iconProject: File | null;
  onFileChange: (file: File | null) => void;
}

const ProjectIconUploader = ({ iconProject, onFileChange }: ProjectIconUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className={styles.inputImage}>
      <label htmlFor="iconProject" className={styles.buttonDownload}>
        {iconProject ? 'Edit icon' : 'Download icon'}
      </label>
      <input id="iconProject" type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ProjectIconUploader;
