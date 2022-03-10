var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
var dockOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Shantaraam' }
};
var dockTwo = {
    uid: 3,
    resourceType: ResourceType.FILM,
    data: { title: 'gone with the wind' }
};
console.log(dockOne, dockTwo);
