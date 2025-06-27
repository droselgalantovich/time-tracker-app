import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import calendarIcon from '../../assets/ProjectModal/CalendarIcon.svg';
import styles from './CreateProjectModal.module.css';

interface ProjectDateRangePickerProps {
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onCurrentToggle: (isCurrent: boolean) => void;
}

const ProjectDateRangePicker = ({
  startDate,
  endDate,
  isCurrent,
  onStartDateChange,
  onEndDateChange,
  onCurrentToggle,
}: ProjectDateRangePickerProps) => {
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);
  const startDateRef = useRef<DatePicker>(null);
  const endDateRef = useRef<DatePicker>(null);

  return (
    <>
      <div className={styles.inputGroup}>
        <label htmlFor="startDate">Start date</label>
        <div className={styles.dateInputContainer}>
          <DatePicker
            ref={startDateRef}
            selected={startDate ? new Date(startDate) : null}
            onChange={(date: Date | null) => {
              onStartDateChange(date ? date.toISOString().slice(0, 10) : '');
              setIsStartDateOpen(false);
            }}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select start date"
            id="startDate"
            className={styles.datePickerInput}
            autoComplete="off"
            open={isStartDateOpen}
            onClickOutside={() => setIsStartDateOpen(false)}
            shouldCloseOnSelect={true}
            onInputClick={() => {}}
          />
          <img
            src={calendarIcon}
            alt="Calendar"
            className={styles.calendarIcon}
            onClick={() => setIsStartDateOpen(true)}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="endDate">End date</label>
        <div className={styles.dateInputContainer}>
          <DatePicker
            ref={endDateRef}
            selected={endDate ? new Date(endDate) : null}
            onChange={(date: Date | null) => {
              onEndDateChange(date ? date.toISOString().slice(0, 10) : '');
              setIsEndDateOpen(false);
            }}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select end date"
            id="endDate"
            className={styles.datePickerInput}
            disabled={isCurrent}
            autoComplete="off"
            open={isEndDateOpen && !isCurrent}
            onClickOutside={() => setIsEndDateOpen(false)}
            shouldCloseOnSelect={true}
            onInputClick={() => {}}
          />
          <img
            src={calendarIcon}
            alt="Calendar"
            className={styles.calendarIcon}
            onClick={() => !isCurrent && setIsEndDateOpen(true)}
            style={{
              opacity: isCurrent ? 0.5 : 1,
              cursor: isCurrent ? 'not-allowed' : 'pointer',
            }}
          />
        </div>
      </div>

      <div className={styles.inputPresentTime}>
        <p>Present time</p>
        <label>
          <input type="checkbox" checked={isCurrent} onChange={() => onCurrentToggle(!isCurrent)} />
        </label>
      </div>
    </>
  );
};

export default ProjectDateRangePicker;
