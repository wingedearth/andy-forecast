import { APP_VERSION, IS_DEPLOYED, NODE_ENV } from '@/constants/config';
import packageJson from '../../../package.json';

const VersionController = (req, res) => {
  const host = IS_DEPLOYED ? 'deployed' : 'local';
  const name = packageJson?.name;
  const version = APP_VERSION;
  const environment = NODE_ENV;

  res.json({
    environment,
    host,
    name,
    version
  });
};

export default VersionController;
