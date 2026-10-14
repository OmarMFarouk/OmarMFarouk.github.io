
import { PERSONAL_INFO } from '../data';

export const Favicon: React.FC = () => {
  return (
    <link rel="icon" type="image/x-icon" href={PERSONAL_INFO.favicon} />
  );
};