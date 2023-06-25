import { Loading } from 'notiflix/build/notiflix-loading-aio';

const loaderWrapper = async promise => {
  Loading.circle({
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,1)',
    svgColor: '#F87719',
    clickToClose: false,
  });

  const res = await promise;
  Loading.remove();
  return res;
};

export default loaderWrapper;
