import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function useSignup() {
  //   const navigate = useNavigate();
  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
      //   navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });

  return { signup, isLoading, error };
}
