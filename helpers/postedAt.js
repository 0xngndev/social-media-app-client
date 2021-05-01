import { formatDistanceToNow, toDate } from "date-fns";

const postedAt = (dateOfCreation) => {
  const formattedDate = toDate(parseInt(dateOfCreation));
  let postedAtDate = formatDistanceToNow(new Date(formattedDate), {});

  return postedAtDate;
};

export default postedAt;
