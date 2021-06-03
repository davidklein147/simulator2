const enCoding = require('../utils/token')
var split = '=!='
var liveTime = 60 * 1000

function token(isNew, token, _id, id, name, roleNum) {
    if (isNew) {
        this._id = _id;
        this.id = id;
        this.name = name;
        this.roleNum = roleNum;
        this.date = Date.now() + liveTime;
        this.arrDe = [this._id, this._id, this.name, this.roleNum, this.date]
        this.token = enCoding.getEncrypto(this.arrDe.join(split));
    }
    else {
        this.token = enCoding.getDecrypto(token).split(liveTime);
        this._id = token[0];
        this.id = token[1];
        this.name = token[2];
        this.roleNum = token[3];
        this.date = token[4];
    }

    this.isExpired = ()=>{
     return Date.now() > this.Date;
    }
    
}

module.exports = token;