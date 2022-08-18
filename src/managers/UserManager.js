export const getAllUsers = () => {
    return fetch("http://localhost:8000/users", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }

  export const getAllActiveUsers = () => {
    return fetch("http://localhost:8000/users/active", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }

export const getDetailedUser = (userId) => {
  return fetch(`http://localhost:8000/users/${userId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
}