export const AmountSaperator = (amount) => {
    // Convert amount to string and split into integer and fractional parts
    const [integerPart, fractionalPart] = amount.toString().split('.');
  
    // Add separator to integer part
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Concatenate integer part with fractional part (if any)
    const formattedAmount = fractionalPart ? `${formattedIntegerPart}.${fractionalPart}` : formattedIntegerPart;
  
    return formattedAmount;
  };

  export const getStartDate = (endDate) => {
    // Copy the endDate to avoid modifying the original object
    const startDate = new Date(endDate);
    // Subtract one year from the startDate
    startDate.setFullYear(endDate.getFullYear() - 1);
    return startDate;
}

// export const updateYearToCurrent = (dateString) => {
//   // Create a Date object from the input string
//   const date = new Date(dateString);

//   // Extract the month and day from the date
//   const month = date.getMonth() + 1; // getMonth() is zero-based, so we add 1
//   const day = date.getDate();

//   // Get the current year
//   const currentYear = new Date().getFullYear();

//   // Format the new date string with the current year, same month, and day
//   const updatedDateString = `${currentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

//   return updatedDateString;
// }

export const updateYearToCurrent = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth() is zero-based, so we add 1
  const day = date.getDate();
  const currentYear = new Date().getFullYear();
  return `${currentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}