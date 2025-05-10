const BASE_URL = 'https://api.example.com'; // 替换为实际的API基础URL

function request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${BASE_URL}${url}`,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/json',
            },
            success: (res) => {
                if (res.statusCode === 200) {
                    resolve(res.data);
                } else {
                    reject(new Error(`请求失败，状态码：${res.statusCode}`));
                }
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function get(url, data = {}) {
    return request(url, 'GET', data);
}

function post(url, data = {}) {
    return request(url, 'POST', data);
}

module.exports = {
    get,
    post
};