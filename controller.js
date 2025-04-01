const Link = require('./module.js');

const getLink = () => {
    return new Promise((resolve, reject) => {
        Link.find()
        .then((response) => {
            resolve(response);
        })
        .catch ((error) => {
            reject(error);
        });
    })
};

const setLink = (req) => {
    return new Promise((resolve, reject) => {
        Link.updateOne({_id: "67ebfa7d04cdc343ece9b484"}, {$set: {link: req.link}})
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            });
    });
};

const deleteLink = (req) => {
    return new Promise((resolve, reject) => {
        Link.deleteMany()
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            });
    })
}

exports.getLink = getLink;
exports.setLink = setLink;
exports.deleteLink = deleteLink;