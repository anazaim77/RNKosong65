const {default: screens} = require('./screens');
import * as Pages from '../../containers/pages';

const screenProps = [
  {
    name: screens.login,
    component: Pages.LoginPage,
    options: {
      header: () => null,
    },
  },
  {
    name: screens.register,
    component: Pages.RegisterPage,
  },
  {
    name: screens.job_list,
    component: Pages.JobListPage,
  },
  {
    name: screens.detail_job,
    component: Pages.JobDetailPage,
  },
];

export default screenProps;
