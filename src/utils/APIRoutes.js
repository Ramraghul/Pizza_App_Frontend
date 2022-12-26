
export const host = "https://pizza-app-backend-drab.vercel.app";

export const getPizzaData = `${host}/api/pizzas/getAllPizzas`;
export const addNewPizza = `${host}/api/pizzas/addpizza`;
export const getPizzaId = `${host}/api/pizzas/getpizzabyid`;
export const updatesPizza = `${host}/api/pizzas/updatedpizza`;
export const deletedPizza = `${host}/api/pizzas/deletepizza`;

export const registerRoute = `${host}/api/users/register`;
export const loginRoute = `${host}/api/users/login`;
export const getUsersAll = `${host}/api/users/getallusers`;
export const deleteTheUser = `${host}/api/users/deleteuser`;
export const adminRoute = `${host}/api/users/admin`;

export const orderRoute = `${host}/api/orders/placeorder`;
export const getuserOrderRoute = `${host}/api/orders/getuserorder`;
export const allUserOrder = `${host}/api/orders/alluserorder`;
export const deliveredOrder = `${host}/api/orders/deliverorder`;

