import { formatDistanceToNow, toDate } from "date-fns";

const postedAt = (dateOfCreation) => {
  const formattedDate = toDate(parseInt(dateOfCreation));
  let postedAtDate = formatDistanceToNow(new Date(formattedDate), {
    includeSeconds: true,
  });

  return postedAtDate;
};

export default postedAt;
