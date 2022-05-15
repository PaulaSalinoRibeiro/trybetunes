export const createUser = (infoUser) => (
  localStorage.setItem('user', JSON.stringify(infoUser))
)

export const getUser = () => JSON.parse(localStorage.getItem('user'))