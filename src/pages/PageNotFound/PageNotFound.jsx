import notfound from "../../assets/images/error-page-not-found.jpg";
const PageNotFound = ({ path = "/" }) => {

  return (
    <div>
      <img src={notfound} alt="notfound" />
    </div>
  );
};
export default PageNotFound;
