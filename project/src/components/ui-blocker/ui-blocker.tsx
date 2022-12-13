import { useAppSelector } from '../../hooks/useAppSelector';
import { getAppDataProcessingStatus } from '../../store/slices/app-data/selectors';
import { getUserProcessingStatus } from '../../store/slices/user-process/selectors';
import './ui-blocker.css';

function UiBlocker(): JSX.Element {
  const isAppDataProcessing = useAppSelector(getAppDataProcessingStatus);
  const isUserProcessing = useAppSelector(getUserProcessingStatus);

  return (
    <div className={ `ui-blocker${ (isAppDataProcessing || isUserProcessing) ? ' ui-blocker--on' : '' }` }></div>
  );
}

export default UiBlocker;
