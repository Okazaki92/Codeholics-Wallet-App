const formatDate = (dateString) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "pl-PL",
    options
  );

  return formattedDate.replace(/\//g, ".");
};

export default formatDate;
