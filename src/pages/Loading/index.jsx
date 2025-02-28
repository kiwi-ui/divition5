import style from "./style.module.css"
const Loading = () => {
  return (
    <div className={`${style.loaderContainer}`}>
      <div className={`${style.pulsingCircle}`}>

      </div>
    </div>
  );
};

export default Loading;