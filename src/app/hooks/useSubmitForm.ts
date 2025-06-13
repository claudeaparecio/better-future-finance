import { useState } from "react";
import axios from "../api/axios-instance";
import { ClientDetails } from "../types/user";

export const useSubmitForm = (url: string, onSuccess: (data: ClientDetails) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (formData: ClientDetails) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, formData);
      if (onSuccess) onSuccess(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
