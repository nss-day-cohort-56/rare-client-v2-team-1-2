export const getAllSubscriptions = () => {
    return fetch("http://localhost:8000/subscriptions", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    }).then(res => res.json())
  }
export const createSubscription = (authorId) => {
    return fetch("http://localhost:8000/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify({author:authorId})
    })
  }

export const updateSubscription = (authorId) => {
    return fetch(`http://localhost:8000/subscriptions/${authorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(authorId)
    })
  }