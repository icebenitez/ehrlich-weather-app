import { useRouteError, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={() => handleBackButton()}>Back</Button>
    </div>
  );
}
