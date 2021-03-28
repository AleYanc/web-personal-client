import {basePath, apiVersion} from './config';

export function uploadProjectsApi(data) {
    const url = `${basePath}/${apiVersion}/upload-project`;
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
        if(result.project) {
            return {
                ok: true,
                msg: 'Project created successfully'
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

export function getProjectsApi() {
    const url = `${basePath}/${apiVersion}/get-projects`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
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

export function updateProjectsApi(project, projectId) {
    const url = `${basePath}/${apiVersion}/update-project/${projectId}`;
    const params = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
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

export function deleteProjectApi(projectId) {
    const url = `${basePath}/${apiVersion}/delete-project/${projectId}`;
    const params = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
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
