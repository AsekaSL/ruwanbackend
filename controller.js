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
        const link = new Link({link: req.link});
        link.save()
        .then((response) => {
            resolve(response);
        })
        .catch ((error) => {
            reject(error);
        });
        
        
    });
};

const deleteLink = (req) => {
    return new Promise((resolve, reject) => {
        Link.find()
        .then((response) => {
            
            Link.deleteOne({_id: response[0].id})
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            });
        })
        .catch ((error) => {
            reject(error);
        });
        
    })
}

exports.getLink = getLink;
exports.setLink = setLink;
exports.deleteLink = deleteLink;