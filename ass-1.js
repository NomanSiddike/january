function calculateMoney(itemsToSell) {
    // Check if the input is a valid positive integer
    if (typeof itemsToSell !== 'number' || itemsToSell < 0) {
        return "Invalid Number";
    }

    // Constants
    const ticketPrice = 120;
    const daroanExpense = 500;
    const staffLunchExpense= 50;
    const numberOfStaff = 8;

    // Calculate total income and expenses
    const totalIncome = itemsToSell * ticketPrice;
    const totalExpenses = daroanExpense + (numberOfStaff * staffLunchExpense);

    // Calculate remaining amount
    const remainingAmount = totalIncome - totalExpenses;

    return remainingAmount;
}

// Examples
console.log(calculateMoney(10));
