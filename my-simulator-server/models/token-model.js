const enCoding = require('../utils/token')
var split = '=!='
var liveTime = 60 * 60 * 1000

function token(isNew, token, _id, id, name, roleNum) {
    if (isNew) {
        this._id = _id;
        this.id = id;
        this.name = name;
        this.roleNum = roleNum;
        this.date = Date.now() + liveTime;
        this.arrDe = [this._id, this.id, this.name, this.roleNum, this.date]
        this.token = enCoding.getEncrypto(this.arrDe.join(split));
        console.log(this.token);
    }
    else {
        this.token = enCoding.getDecrypto(token).split(split);
        console.log(this.token);
        this._id = this.token[0];
        this.id = this.token[1];
        this.name = this.token[2];
        this.roleNum = this.token[3];
        this.date = this.token[4];
    }

    this.isExpired = () => {
        console.log(this.date);
        //return ! this.date || Date.now() > this.date;
        return Date.now() > this.date;
    }

}

module.exports = token;