import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export const DashbordPage = () => {
  useLogOutRedirect();
  //разлогиневаемся если конец сессии (кастомный хук)
  return <div>Dashbord Page</div>;
};
// export default DashbordPage;
