const crypto = require('crypto');
const promise = require('promise');

exports.sendError = (res, error, status = 401) => {
    res.status(status).json({ success: false, error });
};

exports.createRandomBytes = () =>
    new promise((resolve, reject) => {
        crypto.randomBytes(30, (error, buff) => {
            if (error) reject(error);

            const token = buff.toString('hex');
            resolve(token);
        });
    });