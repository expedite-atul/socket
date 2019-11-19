class Namespace {
    constructor(id, nsTitle, img, endpoint) {
        this.id = id;
        this.img = img;
        this.nsTitle = nsTitle;
        this.endpoint = endpoint;
        this.rooms = [];
    }
    /**
     * @param {id,img} roomObj 
     */
    addRoom(roomObj) {
        this.rooms.push(roomObj);
    }
}

module.exports = Namespace;