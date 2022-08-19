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

  export const getAllInactiveUsers = () => {
    return fetch("http://localhost:8000/users/inactive", {
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

export const updateUser = (id, userInfo) => {
  return fetch(`http://localhost:8000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Token ${localStorage.getItem('auth_token')}`
    },
    body: JSON.stringify(userInfo)
  })
}

export const updateUserActiveStatus = (userId) => {
  return fetch(`http://localhost:8000/users/${userId}/active_status`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
  })
}