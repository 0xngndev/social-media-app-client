import { useRouter } from "next/router";

function useRedirect(folder, id) {
  const router = useRouter();

  const handleRouting = (folder, id) => {
    router.push(`/${folder}/${id}`);
  };

  return handleRouting;
}

export default useRedirect;
