import { request } from 'umi';

export async function saveName(name: API.Album,options?: { [key: string]: any }) {
    return request<API.Album>('/api/name', { 
        method: 'POST',
        data: name,
        ...(options || {})
    });
}

export async function getAllAlbums(options?: { [key: string]: any }) {
    return request<API.Result>('/api/name', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        ...(options || {})
    });
}

export async function deleteAlbum(albId: number, options?: { [key: string]: any }) {
    return request<API.Album>('/api/name/id' + albId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        ...(options || {})
    });
}
    