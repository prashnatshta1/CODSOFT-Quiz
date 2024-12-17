import Login from "../../components/Form/Login";
import { handleLogin } from "../../auth/firebase";
import { useNavigate, useActionData, useNavigation } from "react-router-dom";
import useQuestionStore from "../../store/zustand";
import { useEffect } from "react";
import Animation from "../../components/Animation/Animation";

function LoginPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { authUser } = useQuestionStore();

  useEffect(() => {
    if (data?.type === "SUCCESS") {
      authUser({ email: data.email, id: data.id });
      navigate("/");
    }
  }, [data]);

  return (
    <Animation>
      {data?.type === "ERROR" && (
        <p className="text-rose-700 text-xs font-bold mb-3">
          {" "}
          Error : {data.message.split("(")[1].replace(")", "")}
        </p>
      )}
      <Login loading={navigation.state === "submitting"} />
    </Animation>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();

  try {
    const user = await handleLogin(email, password);

    return {
      type: "SUCCESS",
      email: user.email,
      id: user.uid,
    };
  } catch (error) {
    return {
      type: "ERROR",
      message: error.message,
    };
  }
}

export default LoginPage;
