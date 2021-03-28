import {basePath, apiVersion} from './config';

export function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/sign-up`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        } 
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            if(result.user) {
                return {
                    ok: true,
                    msg: 'User created successfully'
                };
            }
            return {
                ok: false,
                msg: result.msg
            };
        })
        .catch(err => {
            return {
                ok: false,
                msg: err
            };
        })
        
}

export function signInApi(data) {
    const url = `${basePath}/${apiVersion}/sign-in`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        } 
    };

    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return {
            ok: false,
            msg: err
        };
    })
}

export function getUsersApi(token) {
    const url = `${basePath}/${apiVersion}/users`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    }
    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err.msg;
    })
}

export function getUsersActiveApi(token, status) {
    const url = `${basePath}/${apiVersion}/users-active?active=${status}`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    }
    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err.msg;
    })
}

export function uploadAvatarApi(token, avatar, userId) {
    const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`
    const formData = new FormData();
    formData.append('avatar', avatar, avatar.name);

    const params = {
        method: 'PUT',
        body: formData,
        headers: {
            Authorization: token
        }
    }

    return fetch(url, params)
        .then(response => {
            return response.json();
        }
        )
        .then(result => {
            return result;
        }) 
        .catch(err => {
            return err.msg;
        })
}

export function getAvatarApi(avatarName) {
    const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;
    return fetch(url).then(response => {
        return response.url;
    }).catch(err => {
        return err.msg;
    })
}

export function updateUserApi(token, user, userId) {
    const url = `${basePath}/${apiVersion}/update-user/${userId}`;
    const params = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(user)
    }

    return fetch(url, params).
        then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.msg;
        });
}

export function activateUserApi(token, status, userId) {
    const url = `${basePath}/${apiVersion}/activate-user/${userId}`;
    const params = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({active: status})
    } 

    return fetch(url, params).
        then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.msg;
        })
}

export function deleteUserApi(token, userId) {
    const url = `${basePath}/${apiVersion}/delete-user/${userId}`;
    const params = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }

    return fetch(url, params).
    then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err.msg;
    });
}

export function createUserApi(token, data) {
    const url = `${basePath}/${apiVersion}/create-user`;
    const params = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(data) 
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            if(result.user) {
                return {
                    msg: 'User created successfully'
                };
            }
            return {
                msg: result.msg
            };
        })
        .catch(err => {
            return {
                msg: err
            };
        })  
}